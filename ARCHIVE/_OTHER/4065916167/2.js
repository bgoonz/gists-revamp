/*
a little harder to trace visually to know what will happen. admit it: it takes some extra 
visual and mental processing to track which scope each variable is in, and whether the 
`console.log()` in each block will succeed or fail.
*/

function foo() {
  if (true) {
    if (true) {
      let a = 1;
      if (true) {
        let b = 2,
          c = 3;
        if (true) {
          let d = 4;
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
// b: undefined
// a: undefined
