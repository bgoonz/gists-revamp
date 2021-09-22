var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (ch) {
      console.log("A:start");

      yield ASQ.csp.take(ASQ.csp.timeout(100));

      // add another goroutine
      ch.go(function* (ch) {
        console.log("A:sub");
      });

      yield ASQ.csp.take(ASQ.csp.timeout(300));

      console.log("A:end");
    }),
    ASQ.csp.go(function* (ch) {
      console.log("B:start");

      yield ASQ.csp.take(ASQ.csp.timeout(2000));

      // add another goroutine
      ch.go(function* (ch) {
        console.log("B:sub");
      });

      yield ASQ.csp.take(ASQ.csp.timeout(1000));

      console.log("B:end");
    }),
    ASQ.csp.go(function* (ch) {
      console.log("C:start");

      // add another goroutine
      ch.go(function* (ch) {
        console.log("C:sub");
      });

      yield ASQ.csp.take(ASQ.csp.timeout(5000));

      console.log("C:end");
    }),
    ASQ.csp.go(function* (ch) {
      console.log("D:start");

      yield ASQ.csp.take(ASQ.csp.timeout(6000));

      console.log("D:end");
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

// A:start
// B:start
// C:start
// D:start
// C:sub
// A:sub
// A:end
// B:sub
// B:end
// C:end
// D:end
// all done: {}
