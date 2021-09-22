// because of declaration hoisting, wherever we put `filter()`, it
// will be declared for a longer lifetime than is necessary.
//
// inline function expression (or arrow function) inside the loop
// isn't the answer, because then you recreate the function over
// and over again.


function filter(v) {
	return (v < 0.5);
}

function doSomething() {
	var items = [], i, ret = 0;
	
	for (i=0; i<100; i++) {
		items.push(Math.random());
	}
	
	for (i=0; i<items.length; i++) {
		if (!filter(items[i])) items[i] = 1;
	}
	
	for (i=0; i<items.length; i++) {
		ret += items[i];
	}
	
	return ret;
}