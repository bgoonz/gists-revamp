var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (ch) {
      var v;
      while ((v = yield ASQ.csp.take(ch)) !== ASQ.csp.CLOSED) {
        console.log(v);
        yield ASQ.csp.take(ASQ.csp.timeout(300));
        yield ASQ.csp.put(ch, 2);
      }
    }),
    ASQ.csp.go(function* (ch) {
      var v;
      yield ASQ.csp.put(ch, 1);
      while ((v = yield ASQ.csp.take(ch)) !== ASQ.csp.CLOSED) {
        console.log(v);
        yield ASQ.csp.take(ASQ.csp.timeout(200));
        yield ASQ.csp.put(ch, 3);
      }
    }),
    ASQ.csp.go(function* (ch) {
      yield ASQ.csp.take(ASQ.csp.timeout(5000));
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
// 2
// 3
// 2
// 3
// 2
// 3
// 2
// 3
// 2
// 3
// 2
// 3
// 2
// 3
// 2
// 3
// 2
// all done: {}
