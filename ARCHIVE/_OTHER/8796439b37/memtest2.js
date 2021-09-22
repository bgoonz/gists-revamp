console.log("reading...");

var recs = [];
var fs = require("fs");
var path = require("path");

// From:
// https://gist.github.com/creationix/5992451
var jsonMachine = require(path.join(__dirname, "jsonMachine.js"));

var filepath = path.join(__dirname, "myreallybig.json");
var read_stream = fs.createReadStream(filepath);
var i, l, state;

// exposed via `--expose-gc` node flag
// http://simonmcmanus.wordpress.com/2013/01/03/forcing-garbage-collection-with-node-js-and-v8/
global.gc();

state = jsonMachine(function __on_record__(rec) {
  if (rec) {
    recs.push(rec);
    if (recs.length % 10000 === 0) {
      console.log(recs.length);
    }
  }
});

read_stream.on("data", function __data__(chunk) {
  for (i = 0, l = chunk.length; i < l; i++) {
    state = state(chunk[i]);
  }
});
read_stream.on("end", function __end__() {
  read_stream.removeAllListeners("data");
  read_stream.removeAllListeners("end");
  read_stream = null;
  state.apply(null, arguments);
  state = null;

  console.log("done.");

  // exposed via `--expose-gc` node flag
  // http://simonmcmanus.wordpress.com/2013/01/03/forcing-garbage-collection-with-node-js-and-v8/
  global.gc();

  // hold onto the program for long enough to
  // inspect the process memory
  setTimeout(function () {
    console.log("bye");
  }, 1000 * 60 * 5);
});
