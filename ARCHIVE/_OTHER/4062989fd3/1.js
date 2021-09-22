// var: poor stylistic form, but no leakage
function foo() {
   bar = 3;
   if (true) {
      var bar = 5;
   }
}

// let: will leak an auto-global
function foo() {
   bar = 3;
   if (true) {
      let bar = 5;
   }
}