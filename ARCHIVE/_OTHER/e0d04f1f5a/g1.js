var ASQ = require("asynquence-contrib");

ASQ()
  .runner(
    ASQ.csp.go(function* (x) {
      var el = document.querySelector("#ui1");
      var ch = listen(el, "mousemove");
      while (true) {
        var e = yield ASQ.csp.take(ch);
        el.innerHTML = (e.layerX || e.clientX) + ", " + (e.layerY || e.clientY);
      }
    })
  )
  .val(function () {
    console.log("all done:", arguments);
  })
  .or(function (err) {
    console.log(err.stack || err);
  });

function listen(el, type) {
  var ch = ASQ.csp.chan();
  el.addEventListener(type, function (e) {
    ASQ.csp.putAsync(ch, e);
  });
  return ch;
}
