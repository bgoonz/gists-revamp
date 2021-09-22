// var: common stylistic form, no breakage
function foo() {
   if (true) {
      var a = 3;
      var b = a + 2;
   }
   return b;
}

// let: broken, certainly by accident
function foo() {
   if (true) {
      var a = 3;
      let b = a + 2;
   }
   return b;
}

// let: works, probably by accident
function foo() {
   if (true) {
      let a = 3;
      var b = a + 2;
   }
   return b;
}