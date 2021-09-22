for (let [a, b] of zipIterators([1, 3, 5], [2, 4, 6])) {
  console.log(a, b);
}
// 1 2
// 3 4
// 5 6

for (let [a, b, c] of zipIterators([1], [2, 3], [4, 5, 6])) {
  console.log(a, b, c);
}
// 1 2 4
// 3 5 undefined
// 6 undefined undefined
