function x() {
  x = {};
  return function () {};
}
typeof new x() < typeof x;
