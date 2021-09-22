// is this how most people see CLEANLY doing the task of
// firing off multiple "parallel" tasks at a single step
// in a generator, using parallel promises (aka, `all()`)?
//
// or is there another pattern for "parallel" generator steps?

spawn(function*(){
	var [x,y] = yield Promise.all(getValue(10),getValue(12));
	var z = yield getValue(20);
	console.log("Meaning of life: " + (x+y+z)); // Meaning of life: 42
});

function getValue(v) {
	return new Promise(function(resolve,reject){
		setTimeout(function(){ resolve(v); },100); // faking async with timer
	});
}
