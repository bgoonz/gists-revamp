function add(x, y) {
  return x + y;
}

// partial application (sorta)
function addTo2(y) {
  return add(2, y);
}

add(2, 40); // 42
addTo2(40); // 42
