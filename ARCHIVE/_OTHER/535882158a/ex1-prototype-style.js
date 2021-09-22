function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function() {
	return "I am " + this.me;
};

function Bar(who) {
	Foo.call(this,who);
}

Bar.prototype = Object.create(Foo.prototype);
//Bar.prototype.constructor = Bar;    // uncomment this line to "fix" the delegated `constructor`

Bar.prototype.speak = function() {
	alert("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak(); // alerts: "Hello, I am b1."
b2.speak(); // alerts: "Hello, I am b2."

// some reflection
b1 instanceof Bar; // true
b2 instanceof Bar; // true
b1 instanceof Foo; // true
b2 instanceof Foo; // true
Bar.prototype instanceof Foo; // true
Object.getPrototypeOf(b1) === Bar.prototype; // true
Object.getPrototypeOf(b2) === Bar.prototype; // true
Object.getPrototypeOf(Bar.prototype) === Foo.prototype; // true