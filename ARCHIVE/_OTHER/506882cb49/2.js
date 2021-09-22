// define two IO do-block tasks (`prepareCountdown*()` and `doCountdown*()`)

function* prepareCountdown() {
  var countdownCanceled = false;
  var handler = onEscape(() => {
    countdownCanceled = true;
    wait3sec.abort();
  });

  yield log("preparing the countdown... (hit <esc> to cancel)");

  yield bindEvent(document, "keydown", handler);

  var wait3sec;
  yield IO(() => (wait3sec = wait(3000).run()));

  yield unbindEvent(document, "keydown", handler);

  if (countdownCanceled) {
    throw "countdown canceled.";
  }

  return IO.do(doCountdown(/*startAt=*/ 5));
}

function* doCountdown(startAt) {
  var countdownStopped = false;
  var handler = onEscape(() => {
    countdownStopped = true;
  });

  yield log("starting countdown... (hit <esc> to cancel)");

  yield bindEvent(document, "keydown", handler);

  var tick = getCountdown(startAt);

  while (true) {
    let counter = yield tick();

    if (counter === 0 || countdownStopped) {
      break;
    }

    yield log(counter);
  }

  yield unbindEvent(document, "keydown", handler);

  if (countdownStopped) {
    throw "countdown stopped.";
  } else {
    yield log("countdown complete!");
  }
}
