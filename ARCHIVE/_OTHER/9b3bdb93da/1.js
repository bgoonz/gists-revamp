var obj = { a: 1, b: 2, c: 3, d: 4 };

insert(obj,{ property: "g", value: 7 });
insert(obj,{ before: "g", property: "e", value: 5 });
insert(obj,{ property: "h", value: 8 });
insert(obj,{ before: "g", property: "f", value: 6 });
obj.i = 9;

console.log(keys(obj));
// [ "a", "b", "c", "d", "e", "f", "g", "h", "i" ]

delete obj.g;
console.log(keys(obj));
// [ "a", "b", "c", "d", "e", "f", "h", "i" ]