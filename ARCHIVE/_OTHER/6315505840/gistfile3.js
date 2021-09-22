// same result as previous snippet, but using the `let-er` project
// so you can use `let ( .. ) { .. }` style statements and
// `let-er` will transpile your code to either ES3 compatible
// syntax (so you can use it now, today!), or you can target
// ES6-only if you want. :)
//
// https://github.com/getify/let-er


function doSomething() {
	var items = [], i, ret = 0;
	
	for (i=0; i<100; i++) {
		items.push(Math.random());
	}
	
	let (filter = function filter(v) {
		return (v < 0.5);
	}) {
		for (i=0; i<items.length; i++) {
			if (!filter(items[i])) items[i] = 1;
		}
	}
	
	for (i=0; i<items.length; i++) {
		ret += items[i];
	}
	
	return ret;
}