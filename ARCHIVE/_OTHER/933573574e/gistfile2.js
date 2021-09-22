// this doesn't work, but it could work, right?

function* foo() {
  yield 1;
  yield 1;
  yield 3;
  yield 5;
  yield 8;
  yield 13;
  yield 21;
}

// note: generator could have a default @@iterator which
// just invokes the generator itself, right?
//
// as it stands, without calling `foo()`, this is an error!
for (var x of foo) {
  console.log(x);
}
