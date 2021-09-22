// because of the "async precedent" of promises,
// expect: a,b,c
// get: a,c,b


console.log("a");

var p = new Promise(function(resolve,reject){
	console.log("c");
});

console.log("b");