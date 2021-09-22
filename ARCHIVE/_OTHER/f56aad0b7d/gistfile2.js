// ES6 `class` "Reuse"
class Foo {
  reuseMe1() { return 10; }
}

class Bar extends Foo {
  reuseMe2() { return 100; }
}

var x1 = new Bar(), x2 = new Bar(), x3 = new Bar();

x1.reuseMe1() + x2.reuseMe1() + x3.reuseMe1();  // 30
x1.reuseMe2() + x2.reuseMe2() + x3.reuseMe2();  // 300