// `Object.make(..)` is a helper/wrapper for `Object.create(..)`. Both create a new
// object, and optionally link that new object's `[[Prototype]]` chain to another object.
// 
// But `Object.make(..)` makes sure the new object always has a `__proto__` property
// (even a null one) and delegation to a `isPrototypeOf(..)` method, both of which are
// missing from the bare object (aka "Dictionary") created by `Object.create(null)`.
//
// `isPrototypeOf()` is put on a extra object that your created object can delegate to,
// if any only if you create an empty object (by not passing a `linkTo`) that otherwise
// wouldn't have access to `isPrototypeOf()`.
//
// `__proto__` is only imparted if you're in a non-`__proto__` engine (IE<=10, etc), OR
// if the object in question doesn't eventually delegate to the `Object.prototype` (and
// thus doesn't have access to the special `Object.prototype.__proto__`), like for instance
// a "Dictionary" created by `Object.create(null)` (whose `[[Prototype]]` is null).
//
// The particular reason for making sure at least a read-only (not settable) `__proto__`
// is always present (or delegatable to) is so that an effective/simple non-ES5 polyfill
// for `Object.getProtoypeOf()` can be made and used.


if (!Object.make) {
	Object.make = function(linkTo) {
		// if no `linkTo` provided, make a substitute delegate ancestor
		// that only has `isPrototypeOf()` in it.
		if (!linkTo) {
			linkTo = Object.create(null);
			linkTo.isPrototypeOf = Object.isPrototypeOf;
		}
		var obj = Object.create(linkTo);
		
		// impart a `__proto__` property, if one doesn't exist (or can't be
		// delegated to) already on the new object
		if (!("__proto__" in obj) || Object.make.__proto_needed__) {
			// can we ES5'ify a non-enumerable property for `__proto__`?
			if (Object.defineProperty) {
				Object.defineProperty(obj,"__proto__",{
					enumerable: false,
					writable: false,
					value: linkTo
				});
			}
			// oh well, just add it directly
			else {
				obj.__proto__ = linkTo;
			}
		}
		
		return obj;
	};
	
	// FT for non __proto__ engines
	Object.make.__proto_needed__ = !("__proto__" in {});
}

// non-ES5 polyfill for `Object.getPrototypeOf(..)`
// NOTE: relies on `__proto__` being present, which `Object.make(..)` above ensures
if (!Object.getPrototypeOf) {
	Object.getPrototypeOf = function(obj) {
		return obj.__proto__ || null;
	};
}



// examples:

var Foo = Object.make();
Foo.me = "Foo";
Foo.identify = function() {
	console.log("Me: " + this.me);
};

var Bar = Object.make(Foo);
Bar.me = "Bar";

var bar1 = Object.make(Bar);
bar1.me = "bar1";
var bar2 = Object.make(Bar);
bar2.me = "bar2";

Foo.identify(); // "Me: Foo"
Bar.identify(); // "Me: Bar"
bar1.identify(); // "Me: bar1"
bar2.identify(); // "Me: bar2"

Foo.isPrototypeOf(Bar); // true
Bar.isPrototypeOf(bar1); // true
Bar.isPrototypeOf(bar2); // true
Foo.isPrototypeOf(bar1); // true
Foo.isPrototypeOf(bar2); // true

Object.getPrototypeOf(Bar) === Foo; // true
Object.getPrototypeOf(bar1) === Bar; // true
Object.getPrototypeOf(bar2) === Bar; // true