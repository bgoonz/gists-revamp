function A() {}
var a = new A();

var b = Object.create(a); // `b` now inherits from `a` (*not* `A`)

console.log(b.constructor == A); // true; a little clearer now why, since there is no `B`
console.log(b.__proto__ == a); // true
