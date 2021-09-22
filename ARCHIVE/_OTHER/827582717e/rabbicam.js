var XboxController = require("xbox-controller");
var xbox = new XboxController();

var Webcam = require("wansview");
var webcam = new Webcam("192.168.1.178", "admin", "123456");

var arrows = ["dup", "ddown", "dleft", "dright"];

arrows.forEach(function (element, index, array) {
  xbox.on(element + ":press", function (key) {
    webcam[element.slice(1)]();
  });

  xbox.on(element + ":release", function (key) {
    webcam.stop();
  });
});

xbox.on("a:press", function (key) {
  webcam.snapshot(new Date().toString() + ".png");
});
