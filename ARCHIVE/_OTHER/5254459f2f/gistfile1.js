// a sort-of-polyfill for `currentThis` as proposed in: https://gist.github.com/getify/5253319
function lookupFn(oThis,fn) {
	var ptr = oThis, i, keys;
	while (ptr) {
		keys = Object.keys(ptr);
		for (i=0; i<keys.length; i++) {
			if (ptr[keys[i]] === fn) {
				return ptr;
			}
		}
		ptr = Object.getPrototypeOf(ptr);
	}
	return oThis;
}



var Foo = Object.create(null);
Foo.me = "Foo";
Foo.identify = function() {
	var currentThis = lookupFn(this,arguments.callee);
	// whenever Foo#identify() is called, `currentThis` will
	// always be `Foo`, but `this` will continue to follow the
	// established rules for determining a `this` binding.
	console.log("Me: " + this.me + "; Current: " + currentThis.me);
};
 
var Bar = Object.create(Foo);
Bar.me = "Bar";
Bar.another = function() {
	var currentThis = lookupFn(this,arguments.callee);
	console.log("Current: " + currentThis.me);
}
 
var bar1 = Object.create(Bar);
bar1.me = "bar1";
var bar2 = Object.create(Bar);
bar2.me = "bar2";
 
Foo.identify(); // "Me: Foo; Current: Foo"
Bar.identify(); // "Me: Bar; Current: Foo"
Bar.another(); // "Current: Bar"
bar1.identify(); // "Me: bar1; Current: Foo"
bar2.identify(); // "Me: bar2; Current: Foo"
bar1.another(); // "Current: Bar"
bar2.another(); // "Current: Bar"