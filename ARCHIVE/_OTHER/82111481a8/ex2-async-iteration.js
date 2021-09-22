function step(num) {
  return num * 2;
}

function iterate(msg) {
  // call `next(..)` on the iterable sequence
  // to advance it one iteration
  var ret = isq.next(msg);
  if (!ret.done) {
    return ret.value;
  } else {
    // break the iteration loop
    throw "Iteration complete.";
  }
}

// set up an iterable sequence
var isq = ASQ.iterable()
  .then(step)
  .then(step)
  .then(step)
  .then(function () {
    throw "Should not get here!";
  })
  .or(function (msg) {
    console.log(msg); // Too big!
  });

// set up an async loop sequence controller
loop = ASQ().or(function (msg) {
  console.log(msg); // Iteration complete.
  console.log(seed); // 24
});

// asynchronously iterate the sequence
(function next(msg) {
  if (msg > 15) {
    // throw an error into the iterable
    // sequence
    sq.throw("Too big!");
  }

  // store seed so we can check it at the end
  seed = msg;

  loop
    // wait before proceeding with the iteration
    .then(function (done) {
      setTimeout(done, 50);
    })
    .val(
      // inject `msg` into the sequence's
      // message stream
      msg,
      // process the current iteration
      iterate,
      // start up the next loop iteration
      next
    );
})(3); // start out msg/step as `3`
