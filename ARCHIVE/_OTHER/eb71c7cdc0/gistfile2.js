function foo() {
  return Promise.resolve().then(function(){
    mayThrow();
    return "foo";
  });
}