var ASQ = require("asynquence-contrib");


ASQ()
.runner(
	ASQ.csp.go(function*(ch){
		listen(ch);
		while (yield ASQ.csp.put(ch,Math.random())) {}
	})
)
.val(function(){
	console.log("all done:", arguments);
})
.or(function(err){
	console.log(err.stack || err);
});

function listen(ch) {
	setTimeout(ch.close,5000);

	var rsq = ASQ.react(function(proceed,stop){

		(function iter(){
			ASQ.csp.takeAsync(ch)
			.val(function(v){
				if (v !== ASQ.csp.CLOSED) {
					setTimeout(iter,500);
				}
				proceed(v);
			});
		})();

		stop(function(){
			console.log("can't get anymore");
		});
 	})
	.val(function(v){
		if (v !== ASQ.csp.CLOSED) {
			console.log(v);
		}
		else {
			rsq.stop();
		}
	})
	.or(function(err){
		console.log(err);
	});
}

// 0.20062327338382602
// 0.1929178275167942
// 0.2259157495573163
// 0.0409365005325526
// 0.8685692832805216
// 0.2227405107114464
// 0.23395077511668205
// 0.9894116870127618
// 0.5614675949327648
// 0.8783516574185342
// all done: {}
// can't get anymore
