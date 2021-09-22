function advise(adviceFn, origFn) {
  return function advised(...args) {
    return adviceFn(origFn, ...args);
  };
}

// ****************************

function printIf(msg, predicate) {
  if (predicate(msg)) {
    console.log(msg);
  }
}

function isShortEnough(str) {
  return str.length <= 5;
}

function not(fn, ...args) {
  return !fn(...args);
}

var isLongEnough = advise(not, isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(msg1, isLongEnough);
printIf(msg2, isLongEnough); // Hello World
