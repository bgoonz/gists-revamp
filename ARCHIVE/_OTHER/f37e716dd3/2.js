// better way, generators ftw!

var obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let k of Object.keys(this)) {
      yield this[k];
    }
  },
};

for (let v of obj) {
  console.log(v);
}
// 1 2 3
