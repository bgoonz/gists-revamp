// making objects linked via Object.create()

var Foo = Object.create(null);
Foo.me = "Foo";
Foo.identify = function () {
  console.log("Me: " + this.me);
};

var Bar = Object.create(Foo);
Bar.me = "Bar";

var bar1 = Object.create(Bar);
bar1.me = "bar1";
var bar2 = Object.create(Bar);
bar2.me = "bar2";

Foo.identify(); // "Me: Foo"
Bar.identify(); // "Me: Bar"
bar1.identify(); // "Me: bar1"
bar2.identify(); // "Me: bar2"

Object.getPrototypeOf(Bar) === Foo;
Object.getPrototypeOf(bar1) === Bar;
Object.getPrototypeOf(bar2) === Bar;
