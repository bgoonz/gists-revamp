var y;
foo();
// values: 3 10
// value: 4 10

// *******************************

function foo() {
  for (let i = 0; i < 2; i++) {
    let obj = { x: 2 }; // <-- bug because of `let` here
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
