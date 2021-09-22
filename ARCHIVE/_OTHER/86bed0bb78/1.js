class Foo {
  constructor(x) {
    this.foo = x;
  }
  hello() {
    console.log(this.foo);
  }
}

class Bar extends Foo {
  constructor(x) {
    super(x);
    this.bar = x * 100;
  }
  world() {
    console.log(this.bar);
  }
}

bindMethods(Foo.prototype);
bindMethods(Bar.prototype);

var x = new Foo(3);
x.hello(); // 3
setTimeout(x.hello, 50); // 3

var y = new Bar(4);
y.hello(); // 4
y.world(); // 400
setTimeout(y.hello, 50); // 4
setTimeout(y.world, 50); // 400
