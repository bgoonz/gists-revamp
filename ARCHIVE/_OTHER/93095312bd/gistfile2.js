// ... but if you DO have another `or` callback registered, then the
// error gets added to the error stream so the subsequent `or(..)`
// callbacks will be notified.

ASQ()
.then(function(){
	done("foobar");
})
.or(function(err){
	console.log(err); // foobar
	a.b; // ReferenceError: a is undefined
})
.or(function(err1, err2){
	console.log("First error: " + err1); // First error: foobar 
	console.log("Second error: " + err2); // ReferenceError: a is undefined
});