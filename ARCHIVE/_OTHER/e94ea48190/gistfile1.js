//In asynquence-contrib
var emptyItems = [],
    sq = ASQ();

sq.map(emptyItems, function(item, done){
  // do some things to item
  item.values = [];
  done(item);
});

sq.map(function(item, done) {
  ASQ().map(item.values, function(value, valueDone) {
    valueDone(value);
  })
  .pipe(done);  // <-- you need this line
});

sq.val(function(items){
    console.log(items); // an array of `{ values: [..] }` tuples
})
