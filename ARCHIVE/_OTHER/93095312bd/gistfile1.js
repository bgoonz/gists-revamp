// With asynquence, if an error occurs in an `or` callback, and you have
// no other `or(..)` callbacks registered that could be notified, it's
// just thrown as a normal uncaught global error.

ASQ()
.then(function(){
	done("foobar");
})
.or(function(msg){
	console.log(msg); // foobar
	a.b; // ReferenceError: `a` is undefined
});