// ugly way

var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    var keys = Object.keys(this);
    var idx = 0;
    return {
      next: () => {
        if (idx < keys.length) return { value: this[keys[idx++]], done: false };
        return { value: undefined, done: true };
      },
    };
  },
};

for (let v of obj) {
  console.log(v);
}
// 1 2 3
