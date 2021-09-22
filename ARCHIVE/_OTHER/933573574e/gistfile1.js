// this works

function* foo() {
  yield 1;
  yield 1;
  yield 3;
  yield 5;
  yield 8;
  yield 13;
  yield 21;
}

// note: i called `foo()` to get the iterator
for (var x of foo()) {
  console.log(x);
}
// 1 1 3 5 8 13 21
