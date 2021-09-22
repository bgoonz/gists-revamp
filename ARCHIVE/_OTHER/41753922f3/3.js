// "class Foo"
var Foo = Object.create(null);
Foo.bar = "bar";
Foo.out = function () {
  console.log(this.bar);
};

// "class Baz"
var Baz = Object.create(Foo);
Baz.baz = "baz";
Baz.yes = function () {
  this.out();
  console.log(this.baz);
};

// instead of `var b = new Baz()`
var b = Object.create(Baz);
b.yes(); // "bar" "baz"
