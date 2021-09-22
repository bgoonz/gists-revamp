// OLOO Prototype-only "Reuse"
var Foo = {
  reuseMe1() {
    return 10;
  },
};

var Bar = {
  __proto__: Foo,
  reuseMe2() {
    return 100;
  },
};

var x1 = Object.create(Bar),
  x2 = Object.create(Bar),
  x3 = Object.create(Bar);

x1.reuseMe1() + x2.reuseMe1() + x3.reuseMe1(); // 30
x1.reuseMe2() + x2.reuseMe2() + x3.reuseMe2(); // 300
