function foo({ x, y, z } = {}) {
  console.log(`foo | x:${x} y:${y} z:${z}`);
}

function bar(x, y, z) {
  console.log(`bar | x:${x} y:${y} z:${z}`);
}

var f1 = curryProps(foo, 3);
var f2 = partialProps(foo, { y: 2 });

var f3 = curryProps(spreadArgProps(bar), 3);
var f4 = partialProps(spreadArgProps(bar), { y: 2 });

f1({ y: 2 })({ x: 1 })({ z: 3 });
// foo | x:1 y:2 z:3

f2({ z: 3, x: 1 });
// foo | x:1 y:2 z:3

f3({ y: 2 })({ x: 1 })({ z: 3 });
// bar | x:1 y:2 z:3

f4({ z: 3, x: 1 });
// bar | x:1 y:2 z:3
