var Foo = {
  method1: function () {},
  method2: function () {},
};

var a1 = Object.create(Foo);
var a2 = Object.create(Foo);

a1 === a2; // false
Object.getPrototypeOf(a1) === Object.getPrototypeOf(a2); // true
a1.method1 === a2.method1; // true
a1.method2 === a2.method2; // true

a1.method1();
a2.method1();

a1.method2();
a2.method2();
