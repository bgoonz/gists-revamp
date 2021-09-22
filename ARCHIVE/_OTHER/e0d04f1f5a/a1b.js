var ASQ = require("asynquence-contrib");


ASQ()
.runner(
	ASQ.csp.go(function*(ch) {
		console.log(yield ASQ.csp.take(ch));
	}),
	ASQ.csp.go(function*(ch) {
		yield ASQ.csp.take(ASQ.csp.timeout(1000));
		yield ASQ.csp.put(ch, 5);
		ch.close();
	})
)
.val(function(){
	console.log("all done:", arguments);
})
.or(function(err){
	console.log(err.stack || err);
});

// 5
// all done: {}
