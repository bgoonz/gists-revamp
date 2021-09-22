(function () {
  var x = (y = 1);
})();
alert(x); // undefined
alert(y); // 1 -- oops, auto-global!
