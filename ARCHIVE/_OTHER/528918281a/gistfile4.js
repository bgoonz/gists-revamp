// making objects linked via Object.create()
// this is the same as file 1 above, but uses a `init()`
// note: no hard-coding of the "inheritance" structure here

var Foo = Object.create(null);
Foo.init = function(who) {
	this.me = who;
};
Foo.identify = function() {
	console.log("Me: " + this.me);
};
 
var Bar = Object.create(Foo);
Bar.init("Bar");
 
var bar1 = Object.create(Bar);
bar1.init("bar1");
var bar2 = Object.create(Bar);
bar2.init("bar2");
 
bar1.identify(); // "Me: bar1"
bar2.identify(); // "Me: bar2"
 
Object.getPrototypeOf(Bar) === Foo;
Object.getPrototypeOf(bar1) === Bar;
Object.getPrototypeOf(bar2) === Bar;