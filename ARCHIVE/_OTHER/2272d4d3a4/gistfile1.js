// with real promises:

var p = new Promise(function (resolve, reject) {
  resolve(42);
});

// later

p.then(function (v) {
  console.log(v);
}); // 42

// later

p.then(function (v) {
  console.log(v);
}); // 42

// later

// .. always 42
