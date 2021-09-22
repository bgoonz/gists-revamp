var ASQ = require("asynquence-contrib");


ASQ()
.runner(
	ASQ.csp.go(function*(ch){
		listen(ch);

		yield ASQ.csp.put(ch,"val 1");
		yield ASQ.csp.put(ch,new Error("oops 2"));
	})
)
.val(function(){
	console.log("all done:", arguments);
})
.or(function(err){
	console.log(err.stack || err);
});

function listen(ch) {
	ASQ.csp.takemAsync(ch)
	.val(function(msg){
		console.log(msg);
	})
	.seq(function(){
		return ASQ.csp.takemAsync(ch)
		.val(function(){
			// never gets here
		});
	})
	.or(function(err){
		console.log(err.toString());
	});
}

// val 1
// all done: {}
// Error: oops 2
