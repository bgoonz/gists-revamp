var ASQ = require("asynquence-contrib");

ASQ("Hello", "World") // <-- prime the goroutines' default channel with initial message(s)
  .runner(
    ASQ.csp.go(function* (ch) {
      // try to add third message onto the channel
      yield ASQ.csp.put(ch, 42);
      // `42` never gets onto the channel, so is discarded
    }),
    ASQ.csp.go(function* (ch) {
      // take only 1 message off the channel
      var v = yield ASQ.csp.take(ch);
      console.log(v);

      // close the channel (leaving messages untaken)
      ch.close();
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

// Hello
// all done: { '0': 'World' }  <-- untaken messages from the closed channel are passed along as individual `arguments`
