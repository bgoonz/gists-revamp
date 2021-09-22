function bar(
  x,
  y = function () {
    console.log("d:", x);
    x = 1;
  }
) {
  var x;
  console.log("c:", x);
  x = 2;
  y();
  console.log("e:", x);
}

bar(3);
