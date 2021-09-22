var isq = ASQ.iterable();
var numbers = [];

// generate some numbers to iterate on
for (var i = 0; i < 5000; i++) {
  numbers.push(Math.random());
}

// ######################

// set up a "perpetually extending iteration" loop for `numbers`
isq.then(function iteration(idx) {
  // more items to iterate on?
  if (idx < numbers.length - 1) {
    // extend the iterable-sequence to handle the next item
    isq.then(iteration);
  }
  return numbers[idx];
});

// async batch loop
(function batch(idx) {
  for (
    var count = 0, ret;
    // keep going while the iterable-sequence isn't yet "done"
    // and while the batch-count is under 1000
    (ret = isq.next(idx)) && !ret.done && count < 1000;
    count++, idx++
  ) {
    // print out the most recent item from the list
    console.log(ret.value);
  }

  // more to iterate on?
  if (!ret.done) {
    // yield for 500ms, then continue w/ next batch
    setTimeout(function () {
      batch(idx);
    }, 500);
  } else {
    console.log("===== all numbers displayed =====");
  }
})(0);
