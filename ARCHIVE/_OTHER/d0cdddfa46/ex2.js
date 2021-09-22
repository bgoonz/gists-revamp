var Foo = {
  hello() {
    console.log(this.x + this.y + this.z);
  },
};

function OD(prot, obj) {
  return Object.assign(Object.create(prot), obj);
}

var instances = [];

for (var i = 0; i < 500; i++) {
  instances.push(OD(Foo, { x: i, y: i * 2, z: i * 3 }));
}

instances[37].hello(); // 222
