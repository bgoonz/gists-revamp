var ASQ = require("asynquence-contrib");


ASQ()
.runner(
	ASQ.csp.go(function*(ch) {
		// change the default buffer size on the default channel
		ch.buffer_size = 13;
		for(var x=0; x<15; x++) {
			yield ASQ.csp.put(ch, x);
			console.log('put ' + x);
		}
	}),
	ASQ.csp.go(function*(ch) {
		while(!ch.closed) {
			yield ASQ.csp.take(ASQ.csp.timeout(200));
			for(var i=0; i<5; i++) {
				console.log(yield ASQ.csp.take(ch));
			}
		}
	}),
	ASQ.csp.go(function*(ch) {
		yield ASQ.csp.take(ASQ.csp.timeout(1000));
		ch.close();
	})
)
.val(function(){
	console.log("all done:", arguments);
})
.or(function(err){
	console.log(err.stack || err);
});

// put 0
// put 1
// put 2
// put 3
// put 4
// put 5
// put 6
// put 7
// put 8
// put 9
// put 10
// put 11
// put 12
// 0
// 1
// 2
// 3
// 4
// put 13
// put 14
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// {}
// {}
// {}
// {}
// {}
// all done: {}
