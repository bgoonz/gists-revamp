var y;
foo();
// values: 3 2
// value: 4 10

// *******************************

function foo() {
  for (let i = 0; i < 2; i++) {
    var obj = { x: 2 }; // <-- no bug because of `var` here
    bar(obj);

    setTimeout(function () {
      obj.x = 10;
    }, 100);
  }
}

function bar(obj) {
  setTimeout(function () {
    y.x++;
    console.log(`values: ${y.x} ${obj.x}`);
  }, 1000);

  y = Object.assign({}, obj);
}
