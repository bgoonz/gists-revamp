// with a "thenable observable":

var o = /* make some observable some how */;

o.then(function(v){ console.log(v); });

// later

o.then(function(v){ console.log(v); });

// later

o.then(function(v){ console.log(v); });

// later

// .. must always be the same value no matter how many times "observed"