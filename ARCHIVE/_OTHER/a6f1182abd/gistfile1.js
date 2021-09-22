function foo() {
  return Promise.resolve({ a: 42 });
}

function bar(p) {
  p.then(function (v) {
    delete v.a; // mutating the "immutable" :/
  });
}

function baz(p) {
  p.then(function (v) {
    console.log(v.a); // is it still there?
  });
}

var p1 = foo();
var p2 = foo();

baz(p1); // 42
bar(p1);

bar(p2);
baz(p2); // undefined
