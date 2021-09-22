// Hey, what gives here? This is weird and unexpected.
// Why is the promise factory called synchronously, when
// all the other steps resolve async? For consistency,
// one would expect them all to be async.

var p = new Promise(function(resolve,reject){
   console.log("what");
   resolve();
});

p.then(function(){
   console.log("here?");
});

console.log("happened");

// got: what, happened, here?
// expected: happened, what, here?