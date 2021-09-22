var eventers = DualEventers();
var e1 = eventers[0];
var e2 = eventers[1];

e1.addEventListener("message",function(evt) {
   console.log("on e1:", evt.data);
});

e2.addEventListener("message",function(evt) {
   console.log("on e2:", evt.data);
});

e1.postMessage("posting to e1");
e2.postMessage("posting to e2");

// on e2: posting to e1
// on e1: posting to e2