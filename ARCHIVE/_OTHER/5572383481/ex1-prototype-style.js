function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function() {
	return "I am " + this.me;
};

function Bar(who) {
	Foo.call(this,"Bar:" + who);
}

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar;    // "fixes" the delegated `constructor` reference

Bar.prototype.speak = function() {
	alert("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak(); // alerts: "Hello, I am Bar:b1."
b2.speak(); // alerts: "Hello, I am Bar:b2."

// some type introspection
b1 instanceof Bar; // true
b2 instanceof Bar; // true
b1 instanceof Foo; // true
b2 instanceof Foo; // true
Bar.prototype instanceof Foo; // true
Bar.prototype.isPrototypeOf(b1); // true
Bar.prototype.isPrototypeOf(b2); // true
Foo.prototype.isPrototypeOf(b1); // true
Foo.prototype.isPrototypeOf(b2); // true
Foo.prototype.isPrototypeOf(Bar.prototype); // true
Object.getPrototypeOf(b1) === Bar.prototype; // true
Object.getPrototypeOf(b2) === Bar.prototype; // true
Object.getPrototypeOf(Bar.prototype) === Foo.prototype; // true
