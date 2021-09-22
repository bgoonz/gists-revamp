// by using block-scoping with `let` (ES6), we make `filter()`
// exist only for when it's needed, and no longer.
//
// not only does this reduce memory footprint (theoretically),
// but it also reduces namespace collision.
//
// unfortunately, as noted, this will only work in ES6, but...
// see the next snippet.


function doSomething() {
	var items = [], i, ret = 0;
	
	for (i=0; i<100; i++) {
		items.push(Math.random());
	}
	
	{
		let filter = function filter(v) {
			return (v < 0.5);
		};
		for (i=0; i<items.length; i++) {
			if (!filter(items[i])) items[i] = 1;
		}
	}
	
	for (i=0; i<items.length; i++) {
		ret += items[i];
	}
	
	return ret;
}