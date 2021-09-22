// "class Foo"
function Foo() {
  this.bar = "bar";
}
Foo.prototype.out = function () {
  console.log(this.bar);
};

// "class Baz"
function Baz() {
  this.baz = "baz";
}
Baz.prototype = new Foo();
Baz.prototype.yes = function () {
  this.out();
  console.log(this.baz);
};

var b = new Baz();
b.yes(); // "bar" "baz"
