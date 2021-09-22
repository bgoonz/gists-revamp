function amiFP(obj1, obj2) {
  obj2.a = obj1.a;
  obj2.b = obj1.b;
  return obj2.a + obj2.b;
}

var x = { a: 2, b: 3 };
var y = {};

amiFP(x, y); // 5
y.a; // 2
y.b; // 3
