function A() {}
var a = new A();

function B() {
  function F() {}
  F.prototype = a;
  return new F();
}
var b = new B(); // `b` now inherits from `a` (*not* `A`)

console.log(b.constructor == A); // true; but a little weird, because we used `B` to construct `b`
console.log(b.__proto__ == a); // true
