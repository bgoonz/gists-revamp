// But now, this is hawt!

var copySession = compose(Object.fromEntries, Object.entries);

var s1 = { x: 1, y: 2 };
var s2 = copySession(s1);

s1.z = 3;
s2.w = 4;

s1; // { x: 1, y: 2, z: 3 }
s2; // { x: 1, y: 2, w: 4 }
