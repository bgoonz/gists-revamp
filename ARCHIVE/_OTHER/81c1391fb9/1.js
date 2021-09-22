class Foo {
  one() {
    return this.x;
  }
}

class Bar extends Foo {
  two() {
    return this.y;
  }
}

var o = new Bar();
o.x = 1;
o.y = 2;

o.one() + o.two(); // 3
