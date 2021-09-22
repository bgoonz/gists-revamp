var ASQ = require("asynquence-contrib");


ASQ()
.runner(
	ASQ.csp.go(function*(ch){
		var ch2 = ASQ.csp.chan();

		yield ASQ.csp.put(ch,ch2);

		for (var i=0; i<5; i++) {
			yield ASQ.csp.put(ch2,i);
		}

		ch2.close();
	}),
	ASQ.csp.go(function*(ch){
		var ch3 = ASQ.csp.chan();

		yield ASQ.csp.put(ch,ch3);

		for (var i=0; i<5; i++) {
			yield ASQ.csp.put(ch3,i*2);
		}

		ch3.close();
	}),
	ASQ.csp.go(function*(ch){
		var ch4 = ASQ.csp.chan(), v;

		yield ASQ.csp.put(ch,ch4);

		while ((v = yield ASQ.csp.take(ch4)) !== ASQ.csp.CLOSED) {
			console.log("ch4:",v);
		}

		console.log("ch4 closed")
	}),
	ASQ.csp.go(function*(ch){
		var ch2 = yield ASQ.csp.take(ch);
		var ch3 = yield ASQ.csp.take(ch);
		var ch4 = yield ASQ.csp.take(ch);

		ch.close();

		var r, ch4val = 10;

		while (true) {
			r = yield ASQ.csp.alts([
				/*take*/ch2,
				/*take*/ch3,
				/*put*/ [ch4,ch4val]
			]);

			if (r.value === ASQ.csp.CLOSED) {
				if (r.channel === ch2) {
					console.log("ch2 closed");
				}
				else if (r.channel === ch3) {
					console.log("ch3 closed");
				}
			}
			else {
				if (r.channel === ch2) {
					console.log("ch2:",r.value);
				}
				else if (r.channel === ch3) {
					console.log("ch3:",r.value);
				}
				else if (r.channel === ch4) {
					if (r.value === true) {
						ch4val += 10;
					}
				}
			}

			if (ch2.closed && ch3.closed) break;
		}

		ch4.close();
	})
)
.val(function(){
	console.log("all done:", arguments);
})
.or(function(err){
	console.log(err.stack || err);
});

// ch2: 0
// ch2: 1
// ch2: 2
// ch2: 3
// ch2: 4
// ch2 closed
// ch3: 0
// ch3: 2
// ch3: 4
// ch3: 6
// ch3: 8
// ch3 closed
// ch4 closed
// all done: {}
