// fake a default iterator for the generator,
// which is just calling itself
(function* () {}.__proto__[Symbol.iterator] = function () {
  return this.apply(this, arguments);
});

// but, this works

function* foo() {
  yield 1;
  yield 1;
  yield 3;
  yield 5;
  yield 8;
  yield 13;
  yield 21;
}

// now this works great!
for (var x of foo) {
  console.log(x);
}
// 1 1 3 5 8 13 21
