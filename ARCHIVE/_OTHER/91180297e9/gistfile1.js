// expected:
//     1, 2, 3, 4, 5
// got:
//     1, 2, 3, 5, 4
// ...
// :(

// by using the setTimeout "hack" that @domenic suggests, now we
// create a race-condition between "4" and "5", and
// confusingly, "5" wins

var p = new Promise(function(resolve,reject){
	resolve();
});

// ****************************************

console.log("1");

p.then(function(){
	var p2 = new Promise(function(resolve,reject){
		// if this code is running sync, then scheduling "4"
		// via setTimeout(,0) fixes the 3-4 inversion.
		// ...
		// but now it introduces a race condition between "4"
		// being scheduled by the timeout, and "5"
		// being scheduled by the resolve().
		// ...
		// "4" is scheduled before "5", ostensibly, but "5" still
		// comes out before "4". :(
		
		setTimeout(function(){
			console.log("4");
		},0);

		resolve();
	});

	console.log("3");
	
	return p2;
})
.then(function(){
	console.log("5");  // "5" comes before "4", obviously </sarcasm>
});

console.log("2");

// "4" is put onto the microtask queue before "5", but
// "5" still happens first :(
