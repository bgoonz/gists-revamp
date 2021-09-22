// how to run the demo
// HINT: click to focus the rendered page view to be able to use the keyboard event in this demo

IO.do(prepareCountdown)
  .chain((nextTask) => nextTask)
  .run()
  .catch(reportError);
