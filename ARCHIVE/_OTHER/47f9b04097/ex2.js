function* foo(x, y) {
  return x * y;
}

foo(3, 5).next().value; // 15
