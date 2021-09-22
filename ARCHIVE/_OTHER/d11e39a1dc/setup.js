function makePromise() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 100, 42);
  });
}

function finished(msg) {
  console.log(msg);
}

function emptyObjectProperties(o) {
  Object.getOwnPropertyNames(o).forEach(function (key) {
    if (typeof o[key] != "function") {
      o[key] = void 0;
    }
  });
}

function invokeMethods(o) {
  Object.getOwnPropertyNames(o).forEach(function (key) {
    if (typeof o[key] == "function") {
      try {
        o[key](Math.random());
      } catch (e) {}
    }
  });
}
