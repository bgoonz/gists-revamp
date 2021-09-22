for (var i = 1; i <= 3; i++) {
  setTimeout(
    (function (index) {
      return function () {
        console.log(index);
      }; // Your IIFE needs to return a function
      // that setTimeout can schedule
    })(i),
    1000
  );
}
