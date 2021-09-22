class Foo {
  constructor(x,y,z) {
    Object.assign(this,{ x, y, z });
  }
  
  hello() {
    console.log(this.x + this.y + this.z);
  }
}

var instances = [];

for (var i=0; i<500; i++) {
  instances.push(
    new Foo(i,i*2,i*3)
  );
}

instances[37].hello();  // 222