var method = (function defineMethod() {
  var instances = new WeakMap();

  return function method(obj, methodName, fn) {
    Object.defineProperty(obj, methodName, {
      get() {
        if (!instances.has(this)) {
          instances.set(this, {});
        }
        var methods = instances.get(this);
        if (!(methodName in methods)) {
          methods[methodName] = fn.bind(this);
        }
        return methods[methodName];
      },
    });
  };
})();

function bindMethods(obj) {
  for (let ownProp of Object.getOwnPropertyNames(obj)) {
    if (typeof obj[ownProp] == "function") {
      method(obj, ownProp, obj[ownProp]);
    }
  }
}
