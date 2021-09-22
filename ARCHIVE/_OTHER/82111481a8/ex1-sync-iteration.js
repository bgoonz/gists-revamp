function step(num) {
  return num * 2;
}

// set up an iterable sequence
var isq = ASQ.iterable().then(step).then(step).then(step);

// synchronously iterate the sequence
for (
  var seed = 3, ret;
  // call `next(..)` on the iterable sequence
  // to advance it one iteration
  (ret = isq.next(seed)) && !ret.done;

) {
  seed = ret.value;
  console.log(seed);
}
// 6
// 12
// 24
