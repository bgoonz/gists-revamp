var ASQ = require("asynquence-contrib");

ASQ("Hello world") // <-- prime the goroutines' default channel with initial message(s)
  .runner(
    ASQ.csp.go(function* (ch) {
      yield ASQ.csp.put(ch, 5);
      ch.close();
    }),
    ASQ.csp.go(function* (ch) {
      yield ASQ.csp.take(ASQ.csp.timeout(1000));
      console.log(yield ASQ.csp.take(ch));

      yield ASQ.csp.take(ASQ.csp.timeout(1000));
      console.log(yield ASQ.csp.take(ch));
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

// Hello world
// 5
// all done: {}
