function somethingThatReturnsAPromise(x,y,z) { .. }

function myCallback(err,v) {
  if (err) {
    console.error(err);
  }
  else {
    console.log(v);
  }
}

// **************

somethingThatReturnsAPromise(1,2,3)
  .then( ...thenify(myCallback) );

somethingThatReturnsAPromise(4,5,6)
  .then( thenify(myCallback)[0] )
  .catch( thenify(myCallback)[1] );
                
var [tf,cf] = thenify(myCallback);
somethingThatReturnsAPromise(7,8,9)
  .then(tf)
  .catch(cf);