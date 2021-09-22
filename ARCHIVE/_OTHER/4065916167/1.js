/*
not terribly difficult to predict which statements print what.
*/

function foo() {
  var a, b, c, d;

  if (true) {
    if (true) {
      a = 1;
      if (true) {
        b = 2;
        c = 3;
        if (true) {
          d = 4;
          console.log("d: " + d);
        }
        console.log("c: " + c);
      }
      console.log("b: " + b);
    }
    console.log("a: " + a);
  }
}

// will print:
// d: 4
// c: 3
// b: 2
// a: 1
