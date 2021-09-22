Object.defineProperty(Number.prototype, Symbol.iterator, {
  *value({ start = 0, step = 1 } = {}) {
    var inc = this > 0 ? step : -step;
    for (let i = start; Math.abs(i) <= Math.abs(this); i += inc) {
      yield i;
    }
  },
  enumerable: false,
  writable: true,
  configurable: true,
});

[...8]; // [0,1,2,3,4,5,6,7,8]
[...(5)[Symbol.iterator]({ start: 3 })]; // [3,4,5]
[...(10)[Symbol.iterator]({ start: 2, step: 4 })]; // [2,6,10]

[...-3]; // [0,-1,-2,-3]
[...(-3)[Symbol.iterator]({ start: 3, step: 2 })]; // [3,1,-1,-3]
