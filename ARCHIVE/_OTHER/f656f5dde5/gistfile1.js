function foo() {
  return Function.bind(null, "return bar;");
}

var bar = 1;

(function () {
  var bar = 2;
  console.log(foo()()()); // 1 -- but wanted 2 :(
})();
