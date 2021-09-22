function foo() {
  return new Promise(function (resolve) {
    mayThrow();
    resolve("foo");
  });
}
