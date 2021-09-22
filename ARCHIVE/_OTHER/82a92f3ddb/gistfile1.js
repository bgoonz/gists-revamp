function* foo() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

var it = foo();
it.next().value; // 1
it.next().value; // 2

it.return(8); // { done: true, value: 8 }

it.next(); // { done: true, value: undefined }
