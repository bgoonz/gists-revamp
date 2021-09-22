var { insert, keys } = (function define() {
  var keyStore = new WeakMap();
  return { insert, keys };

  function insert(obj, { before = "", property, value }) {
    registerKeys(obj); // this is optional for safety/flexibility...
    obj[property] = value;

    if (!keyStore.has(obj)) {
      keyStore.set(obj, []);
    }
    var keyOrder = keyStore.get(obj);
    var beforeIdx = keyOrder.findIndex((k) => k === before);
    if (beforeIdx >= 0) {
      keyOrder.splice(beforeIdx, 0, property);
    } else {
      keyOrder.push(property);
    }
  }

  function keys(obj) {
    registerKeys(obj); // this is optional for safety/flexibility...
    return [...(keyStore.get(obj) || [])];
  }

  // this is optional for safety/flexibility...
  function registerKeys(obj) {
    var objKeys = Object.keys(obj);
    var knownKeys = keyStore.get(obj) || [];
    keyStore.set(obj, knownKeys);

    if (objKeys.length > 0) {
      if (knownKeys.length > 0) {
        // have any keys been removed from the object?
        for (let [idx, key] of knownKeys.entries()) {
          if (!objKeys.includes(key)) {
            knownKeys.splice(idx, 1);
          }
        }

        // are there any newly-discovered keys in the object?
        for (let [idx, key] of objKeys.entries()) {
          if (!knownKeys.includes(key)) {
            knownKeys.push(key);
          }
        }
      } else {
        knownKeys.push(...objKeys);
      }
    }
  }
})();
