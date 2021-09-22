var Foo = {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I am " + this.me;
	}
};

var Bar = Object.create(Foo);

Bar.speak = function() {
	alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak(); // alerts: "Hello, I am b1."
b2.speak(); // alerts: "Hello, I am b2."

// some reflection
Bar.isPrototypeOf(b1); // true
Bar.isPrototypeOf(b2); // true
Foo.isPrototypeOf(b1); // true
Foo.isPrototypeOf(b2); // true
Foo.isPrototypeOf(Bar); // true
Object.getPrototypeOf(b1) === Bar; // true
Object.getPrototypeOf(b2) === Bar; // true
Object.getPrototypeOf(Bar) === Foo; // true