var Foo = {
	Foo: function(who) {
		this.me = who;
		return this;
	},
	identify: function() {
		return "I am " + this.me;
	}
};

var Bar = Object.create(Foo);

Bar.Bar = function(who) {
	// "constructors" (aka "initializers") are now in the `[[Prototype]]` chain,
	// so `this.Foo(..)` works easily w/o any problems of relative-polymorphism
	// or .call(this,..) awkwardness of the implicit "mixin" pattern
	this.Foo("Bar:" + who);
	return this;
};

Bar.speak = function() {
	alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar).Bar("b1");
var b2 = Object.create(Bar).Bar("b2");

b1.speak(); // alerts: "Hello, I am Bar:b1."
b2.speak(); // alerts: "Hello, I am Bar:b2."

// some type introspection
Bar.isPrototypeOf(b1); // true
Bar.isPrototypeOf(b2); // true
Foo.isPrototypeOf(b1); // true
Foo.isPrototypeOf(b2); // true
Foo.isPrototypeOf(Bar); // true
Object.getPrototypeOf(b1) === Bar; // true
Object.getPrototypeOf(b2) === Bar; // true
Object.getPrototypeOf(Bar) === Foo; // true