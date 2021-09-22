 // Locking the looped values inside a IIFE (closure).
for (var i = 1; i <= 3; i++) {
  (function (index) {
      setTimeout(function () {
          console.log(index);     // prints 1 2 3
      }, 1000);
  })(i);
}
