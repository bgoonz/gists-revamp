console.log("A");

var p1 = Promise.resolve("B");

setTimeout(function () {
  console.log("D");
}, 0);

p1.then(function (msg) {
  console.log(msg);
  return Promise.resolve("C");
}).then(function (msg) {
  console.log(msg);
});

// A
// B
// C
// D
