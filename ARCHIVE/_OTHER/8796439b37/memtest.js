// simulates reading in 3.1mm JSON objects from file, each with format:
// { Name: "..", Latitude: 323.23423, Longitude: 2342.32234, Population: 443 }
// ...by creating them randomly

console.log("generating...");

// exposed via `--expose-gc` node flag
// http://simonmcmanus.wordpress.com/2013/01/03/forcing-garbage-collection-with-node-js-and-v8/
global.gc();

var recs = [],
  obj;

for (var i = 0; i < 3100000; i++) {
  obj = {
    Name: Math.random().toString(36).substring(20),
    Latitude: Math.random() * 50,
    Longitude: Math.random() * 50,
  };

  // only add this every once in awhile
  // (but predictably, not randomly)
  if (i % 3976 === 0) obj.Population = Math.round(Math.random() * 1e9);

  recs.push(obj);

  // print out an intermittent status
  // (to see memory pauses if any)
  if (recs.length % 10000 === 0) console.log(recs.length);
}

console.log("done.");

// exposed via `--expose-gc` node flag
// http://simonmcmanus.wordpress.com/2013/01/03/forcing-garbage-collection-with-node-js-and-v8/
global.gc();

// hold onto the program for long enough to
// inspect the process memory
setTimeout(function () {
  console.log("bye");
}, 1000 * 60 * 5);
