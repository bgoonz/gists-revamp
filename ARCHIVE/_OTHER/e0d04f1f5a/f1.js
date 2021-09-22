var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (table) {
      table.go(player, ["ping"]);
      table.go(player, ["pong"]);

      yield ASQ.csp.put(table, { hits: 0 });
      yield ASQ.csp.take(ASQ.csp.timeout(1000));
      table.close();
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

function* player(table, name) {
  while (true) {
    var ball = yield ASQ.csp.take(table);
    if (ball === ASQ.csp.CLOSED) {
      console.log(name + ": table's gone");
      return;
    }
    ball.hits += 1;
    console.log(name + " " + ball.hits);
    yield ASQ.csp.take(ASQ.csp.timeout(100));
    yield ASQ.csp.put(table, ball);
  }
}

// ping 1
// pong 2
// ping 3
// pong 4
// ping 5
// pong 6
// ping 7
// pong 8
// ping 9
// pong 10
// ping: table's gone
// pong: table's gone
// all done: {}
