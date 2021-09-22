class Foo {
  constructor(x) {
    this.x = x;
    this.hello = () => {
      console.log(this.x);
    };
  }
}

var a = new Foo(12);
a.hello();    // 12

var b = new Foo(20);
b.hello();    // 20