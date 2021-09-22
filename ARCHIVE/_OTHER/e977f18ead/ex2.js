function foo() {}
function bar() {}
function baz() {}

// this bites me regularly:
Promise.resolve(foo) // <-- oops, forgot ()
  .then(bar)
  .then(baz);

// so:
Promise.then(foo).then(bar).then(baz);
