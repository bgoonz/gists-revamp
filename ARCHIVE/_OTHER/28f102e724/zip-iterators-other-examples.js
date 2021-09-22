var ObjectIterable = {};

Object.defineProperty(ObjectIterable, "keys", {
  *value() {
    yield* Object.keys(this);
  },
  enumerable: false,
  writable: true,
  configurable: true,
});

Object.defineProperty(ObjectIterable, "values", {
  *value() {
    var keys = Object.keys(this);
    for (let i = 0; i < keys.length; i++) {
      yield this[keys[i]];
    }
  },
  enumerable: false,
  writable: true,
  configurable: true,
});

Object.defineProperty(ObjectIterable, "entries", {
  *value() {
    yield* zipIterators(this.keys(), this.values());
  },
  enumerable: false,
  writable: true,
  configurable: true,
});

// **************************************

var o = Object.assign(Object.create(ObjectIterable), {
  a: 2,
  b: 3,
  c: 4,
});

for (let k of o.keys()) {
  console.log(k);
}
// a b c

for (let v of o.values()) {
  console.log(v);
}
// 2 3 4

for (let [k, v] of o.entries()) {
  console.log(k, v);
}
// a 2
// b 3
// c 4
