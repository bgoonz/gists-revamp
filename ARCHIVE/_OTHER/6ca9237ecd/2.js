function Foo(x) {
  return {
    hello() {
      console.log(x);
    },
  };
}

var a = Foo(12);
a.hello(); // 12

var b = Foo(20);
b.hello(); // 20
