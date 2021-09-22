setInterval(function () {
  console.log("A");
}, 500);

setTimeout(function () {
  setInterval(function () {
    console.log("B");
  }, 500);
}, 250);

// generally expect:
// A
// B
// A
// B
// A
// ..
