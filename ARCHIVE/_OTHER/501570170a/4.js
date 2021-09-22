var x = (function () {
  function F() {}
  F.prototype.a = true;
  return new F();
})();
delete x.a && x.a;
