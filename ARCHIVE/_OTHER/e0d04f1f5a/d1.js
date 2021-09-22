var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (ch) {
      while (yield ASQ.csp.put(ch, 1)) {
        yield ASQ.csp.take(ASQ.csp.timeout(250));
      }
    }),
    ASQ.csp.go(function* (ch) {
      while (yield ASQ.csp.put(ch, 2)) {
        yield ASQ.csp.take(ASQ.csp.timeout(300));
      }
    }),
    ASQ.csp.go(function* (ch) {
      while (yield ASQ.csp.put(ch, 3)) {
        yield ASQ.csp.take(ASQ.csp.timeout(900));
      }
    }),
    ASQ.csp.go(function* (ch) {
      for (var i = 0; i < 10; i++) {
        console.log(yield ASQ.csp.take(ch));
      }
      ch.close();
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

// 1
// 2
// 3
// 1
// 2
// 1
// 2
// 1
// 3
// 2
// all done: {}
