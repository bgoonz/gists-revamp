function Foo(x, y, z) {
  return {
    hello() {
      console.log(this.x + this.y + this.z);
    },
    x,
    y,
    z,
  };
}

var instances = [];

for (var i = 0; i < 500; i++) {
  instances.push(Foo(i, i * 2, i * 3));
}

instances[37].hello(); // 222
