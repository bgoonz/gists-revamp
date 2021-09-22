function timeoutify(fn, delay) {
  var intv = setTimeout(function () {
    intv = null;
    fn(new Error("Timeout!"));
  }, delay);
  return function () {
    // timeout hasn't happened yet?
    if (intv) {
      clearTimeout(intv);
      fn.apply(this, arguments);
    }
  };
}
