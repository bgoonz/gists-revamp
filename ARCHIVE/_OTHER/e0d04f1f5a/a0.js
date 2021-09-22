var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (ch) {
      yield ASQ.csp.put(ch, 1);
      yield ASQ.csp.take(ASQ.csp.timeout(1000));
      console.log("a", yield ASQ.csp.take(ch));
    }),
    ASQ.csp.go(function* (ch) {
      yield ASQ.csp.take(ASQ.csp.timeout(500));
      console.log("b", yield ASQ.csp.take(ch));
      yield ASQ.csp.put(ch, 2);
    }),
    ASQ.csp.go(function* (ch) {
      yield ASQ.csp.take(ASQ.csp.timeout(100));
      console.log("c", yield ASQ.csp.take(ch));
      yield ASQ.csp.put(ch, 3);
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

// c 1
// b 3
// a 2
// all done: {}
