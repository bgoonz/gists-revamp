var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (ch) {
      yield ASQ.csp.put(ch, "val 1");
      yield ASQ.csp.put(ch, new Error("oops 2"));
    }),
    ASQ.csp.go(function* (ch) {
      try {
        var v = yield ASQ.csp.takem(ch);
        console.log(v);

        v = yield ASQ.csp.takem(ch);
      } catch (err) {
        console.log(err.toString());
      }
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

// val 1
// Error: oops 2
// all done: {}
