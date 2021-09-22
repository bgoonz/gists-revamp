function foo(...args) {
  console.log(0 in args);
  console.log(1 in args);
  console.log(2 in args);
}

foo.apply(null, [, , 42]);
// true
// true
// true

foo(...[, , 42]);
// ??
// ??
// ??
