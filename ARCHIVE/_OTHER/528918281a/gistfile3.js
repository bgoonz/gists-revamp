// making objects via constructors called with `new`
// mimicking a bit of what YUI does I guess?

function Foo(who) {
	this.me = who;
}
Foo.prototype.identify = function() {
	console.log("Me: " + this.me);
};

function Bar(who) {
	Foo.call(this,who); // a mixin but hard-coded to its parent
}
Bar.superclass = Foo.prototype;
Bar.prototype = Object.create(Foo.prototype);

var bar1 = new Bar("bar1");
var bar2 = new Bar("bar2");
 
bar1.identify(); // "Me: bar1"
bar2.identify(); // "Me: bar2"
 
bar1 instanceof Bar; // true
bar2 instanceof Bar; // true
bar1 instanceof Foo; // true
bar2 instanceof Foo; // true