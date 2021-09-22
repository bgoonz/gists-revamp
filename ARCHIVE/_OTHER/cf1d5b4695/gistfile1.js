var p1 = Promise.resolve(2);

// According to: http://promisesaplus.com/#point-43
// It would seem `p2` needs to be fulfilled as value
// `3`, unless I'm missing something?
var p2 = p1.then(3);

// So if `p2` was fulfilled as `3`, we should be able
// to extract that value right away, right?
p2.then(function(msg){
  console.log(msg);
});
// prints nothing in Chrome as well as ES6Fiddle
