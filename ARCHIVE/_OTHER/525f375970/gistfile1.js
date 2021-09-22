function add(x, y) {
  return x + y;
}

// partial application
var addTo2 = add.bind(null, 2);

add(2, 40); // 42
addTo2(40); // 42
