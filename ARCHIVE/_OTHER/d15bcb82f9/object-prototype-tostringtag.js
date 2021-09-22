Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() {
    return JSON.stringify(this);
  },
  set(v) {
    Object.defineProperty(Object.prototype, Symbol.toStringTag, {
      value: v,
      enumerable: false,
      writable: true,
      configurable: true,
    });
  },
  enumerable: false,
  configurable: true,
});

({ a: 2, b: 3 }.toString()); // [object {"a":2,"b":3}]

Object.prototype.toStringTag = "cool";

({ a: 2, b: 3 }.toString()); // [object cool]
