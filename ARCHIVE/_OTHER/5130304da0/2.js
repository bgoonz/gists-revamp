// how to use

var count = 0;
var id = requestEachAnimationFrame(function () {
  if (++count >= 100) {
    cancelEachAnimationFrame(id);
    console.log("100 animation frames processed");
  }
});
