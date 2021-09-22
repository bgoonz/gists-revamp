function printIf(msg, predicate) {
  if (predicate(msg)) {
    console.log(msg);
  }
}

function isShortEnough(str) {
  return str.length <= 5;
}

function not(predicate) {
  return function negated(...args) {
    return !predicate(...args);
  };
}

var isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(msg1, isLongEnough);
printIf(msg2, isLongEnough); // Hello World
