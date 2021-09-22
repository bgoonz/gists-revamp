var Foo = {
  one() {
    return this.x;
  },
};

var Bar = {
  __proto__: Foo,
  two() {
    return this.y;
  },
};

var o = Object.create(Bar);
o.x = 1;
o.y = 2;

o.one() + o.two(); // 3
