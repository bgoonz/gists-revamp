function foo() {
  console.log(0 in arguments);
  console.log(1 in arguments);
  console.log(2 in arguments);
}

foo.apply(null,[,,42]);
// true
// true
// true

foo(...[,,42]);
// ??
// ??
// ??