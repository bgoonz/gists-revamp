var data = [
   { a: 4, b: 12, c: "elderberry" },
   { a: 2, b: 10, c: "cherry", d: 4 },
   { a: 4, b: 12, c: "durian" },
   { a: 2, b: 10, c: "cherry", },
   { a: 3, b: 12, c: "durian" },
   { a: 1, b: 10, c: "apple", },
   { a: 1, b: 11, c: "apple", },
   { a: 1, b: 11, c: "banana", },
   { a: 2, b: 10, c: "banana", },
];

[...data].sort( multiFieldSorter(["+a"]) );
// 0: {a: 1, b: 10, c: "apple"}
// 1: {a: 1, b: 11, c: "apple"}
// 2: {a: 1, b: 11, c: "banana"}
// 3: {a: 2, b: 10, c: "cherry", d: 4}
// 4: {a: 2, b: 10, c: "cherry"}
// 5: {a: 2, b: 10, c: "banana"}
// 6: {a: 3, b: 12, c: "durian"}
// 7: {a: 4, b: 12, c: "elderberry"}
// 8: {a: 4, b: 12, c: "durian"}

[...data].sort( multiFieldSorter(["-a"]) );
// 0: {a: 4, b: 12, c: "elderberry"}
// 1: {a: 4, b: 12, c: "durian"}
// 2: {a: 3, b: 12, c: "durian"}
// 3: {a: 2, b: 10, c: "cherry", d: 4}
// 4: {a: 2, b: 10, c: "cherry"}
// 5: {a: 2, b: 10, c: "banana"}
// 6: {a: 1, b: 10, c: "apple"}
// 7: {a: 1, b: 11, c: "apple"}
// 8: {a: 1, b: 11, c: "banana"}

[...data].sort( multiFieldSorter(["+a","-b"]) );
// 0: {a: 1, b: 11, c: "apple"}
// 1: {a: 1, b: 11, c: "banana"}
// 2: {a: 1, b: 10, c: "apple"}
// 3: {a: 2, b: 10, c: "cherry", d: 4}
// 4: {a: 2, b: 10, c: "cherry"}
// 5: {a: 2, b: 10, c: "banana"}
// 6: {a: 3, b: 12, c: "durian"}
// 7: {a: 4, b: 12, c: "elderberry"}
// 8: {a: 4, b: 12, c: "durian"}

[...data].sort(multiFieldSorter(["+b","+a","-c"]));
// 0: {a: 1, b: 10, c: "apple"}
// 1: {a: 2, b: 10, c: "cherry", d: 4}
// 2: {a: 2, b: 10, c: "cherry"}
// 3: {a: 2, b: 10, c: "banana"}
// 4: {a: 1, b: 11, c: "banana"}
// 5: {a: 1, b: 11, c: "apple"}
// 6: {a: 3, b: 12, c: "durian"}
// 7: {a: 4, b: 12, c: "elderberry"}
// 8: {a: 4, b: 12, c: "durian"}