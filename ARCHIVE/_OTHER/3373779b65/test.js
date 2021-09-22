var a = {
  b: 12,
  c: true,
  d: "foobar",
  e: {
    f: function () {
      alert("blah");
    }, // functions get ignored
    g: new Date(), // dates get their own `toJSON()` serialization called
    h: [true, 1.3, "haha"],
  },
  k: {},
  l: /foobar/g, // regexes get turned into an empty {}
};
a.i = a; // circular ref!!
a.e.i = a; // circular ref!!
a.e.j = a.e; // circular ref!!
a.e.h.push(a.e); // circular ref!! since it's in array, will be replaced with `null`
a.k.m = a.e; // **NOT** a circular ref, just a dupe ref, so leave it alone!!

// Look Ma! No circular refs!
JSON.stringify(a); // {"b":12,"c":true,"d":"foobar","e":{"g":"2012-08-17T12:11:05.647Z","h":[true,1.3,"haha",null]},"k":{"m":{"g":"2012-08-17T12:11:05.647Z","h":[true,1.3,"haha",null]}},"l":{}}
