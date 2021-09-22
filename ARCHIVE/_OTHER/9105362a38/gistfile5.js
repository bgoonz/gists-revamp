// Here's I show how, without the `for-of` syntax I propose,
// you have to do the stepped-iteration manually. :(

for (
  var step = 1, it = myNumbers[Symbol.iterator](), ret;
  // call `next(..)` on the number sequence's iterator
  !(ret && ret.done) && (ret = it.next(step));

) {
  console.log(ret.value);
  step++;
}
// prints out 0, 2, 5, 9, 14, 20, ...
//
// step of `1` yields `0`
// step of `2` yields `2`
// step of `3` yields `5`
// step of `4` yields `9`
// step of `5` yields `14`
// step of `6` yields `20`
// ...
