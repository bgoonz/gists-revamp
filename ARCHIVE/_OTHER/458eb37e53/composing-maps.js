function add1(v) {
  return v + 1;
}
function mul2(v) {
  return v * 2;
}
function div3(v) {
  return v / 3;
}

var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// list
// .map(add1)
// .map(mul2)
// .map(div3);

function compose(fn1, fn2) {
  return function (...args) {
    return fn2(fn1(...args));
  };
}

var all3 = [add1, mul2, div3].reduce(compose);

list.map(all3);
