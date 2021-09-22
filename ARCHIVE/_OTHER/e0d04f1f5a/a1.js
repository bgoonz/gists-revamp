var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (ch) {
      yield ASQ.csp.put(ch, 5);
      ch.close();
    }),
    ASQ.csp.go(function* (ch) {
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

// 5
// all done: {}
