function A() {}
var a = new A();

function B() {}
B.prototype = a;
var b = new B(); // `b` now inherits from `a` (*not* `A`)
b.constructor = B; // b.constructor defaults to `A`, so we fix it, to make more sense

console.log(b.constructor == B); // true

console.log(b.__proto__ == a); // true
console.log(Object.getPrototypeOf(b) == a); // true

console.log(b.__proto__ == b.constructor.prototype); // true
console.log(Object.getPrototypeOf(b) == b.constructor.prototype); // true

