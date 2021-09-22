var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (ch) {
      listen(ch);
      while (yield ASQ.csp.put(ch, Math.random())) {}
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

function listen(ch) {
  setTimeout(ch.close, 5000);

  (function iter() {
    ASQ.csp
      .takeAsync(ch)
      .val(function (v) {
        if (v !== ASQ.csp.CLOSED) {
          console.log(v);
          setTimeout(iter, 500);
        } else {
          console.log("can't get anymore");
        }
      })
      .or(function (err) {
        console.log(err);
      });
  })();
}

// 0.2430584009271115
// 0.5205253872554749
// 0.5858484928030521
// 0.30812705494463444
// 0.4534017143305391
// 0.057873843470588326
// 0.4264718643389642
// 0.8639854174107313
// 0.6830783057957888
// 0.06948345596902072
// all done: {}
// can't get anymore
