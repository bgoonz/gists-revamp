var ASQ = require("asynquence-contrib");


ASQ()
.runner(
	ASQ.csp.go(function*(ch){
		// make two extra channels
		var ch2 = ASQ.csp.chan(3); // use buffering
		var ch3 = ASQ.csp.chan(3); // use buffering

		// use the default channel `ch` to pass
		// the extra channels themselves along :)
		yield ASQ.csp.put(ch,ch2);
		yield ASQ.csp.put(ch,ch3);

		// done with the default channel now
		ch.close();

		for (var i=0; i<10; i++) {
			yield ASQ.csp.put(ch2,i);
			yield ASQ.csp.put(ch3,i*2);
		}

		ch2.close();
		ch3.close();
	}),
	ASQ.csp.go(function*(ch){
		// receive the extra channel
		var ch2 = yield ASQ.csp.take(ch);
		var v;

		while ((v = yield ASQ.csp.take(ch2)) !== ASQ.csp.CLOSED) {
			console.log("ch2:",v);
		}
	}),
	ASQ.csp.go(function*(ch){
		// receive the extra channel
		var ch3 = yield ASQ.csp.take(ch);
		var v;

		while ((v = yield ASQ.csp.take(ch3)) !== ASQ.csp.CLOSED) {
			console.log("ch3:",v);
		}
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
// ch3: 0
// ch3: 2
// ch3: 4
// ch3: 6
// ch2: 5
// ch2: 6
// ch2: 7
// ch2: 8
// ch3: 8
// ch3: 10
// ch3: 12
// ch3: 14
// ch3: 16
// ch3: 18
// ch2: 9
// all done: {}
