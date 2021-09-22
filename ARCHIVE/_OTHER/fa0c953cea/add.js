function add() {
  var sum = 0;

  function add() {
    for (var i = 0; i < arguments.length; i++) {
      sum += Number(arguments[i]);
    }
    return add;
  }
  add.valueOf = function valueOf() {
    return sum;
  };
  return add.apply(null, arguments);
}

// ...

add() + 0; // 0
add(1) + 0; // 1
add(1, 2) + 0; // 3
add(1)(2) + 0; // 3
add(1, 2)(3) + 0; // 6
add()()(1, 2)()(3) + 0; // 6
add(1, 2)(3)(4, 5)(6) + 0; // 21
