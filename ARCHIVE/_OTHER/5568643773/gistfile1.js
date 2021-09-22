function Parent() {}
Parent.prototype.something = 42;

var p = new Parent();
p.hasOwnProperty("something"); // false

p.something--; // apparently the same as `p.something = p.something - 1`
p.hasOwnProperty("something"); // true!!
