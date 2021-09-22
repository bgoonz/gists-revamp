// normal Ajax util
function xhrGet(url, success, err) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      xhr.onreadystatechange = null;
      if (xhr.status === 200) {
        success(xhr.responseText);
      } else {
        err(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function stepOne(done) {
  xhrGet("http://my.url", done, done.fail);
}

function stepTwo(done, val) {
  var seq = $AS();

  // `gate()` equivalent to:
  //    seq
  //    .then( function( done, resp ){
  //       var g = new Gate(); // pseudo-code!
  //       g
  //       .and(function( done ){
  //          xhrGet( "http://my.url2?val=" + val, done, done.fail );
  //       })
  //       .and(function( done ){
  //          xhrGet( "http://my.url3?val=" + val, done, done.fail );
  //       })
  //       .then( done )
  //       .or( done.fail );
  //    } )
  seq.gate(
    function (done) {
      xhrGet("http://my.url2?val=" + val, done, done.fail);
    },
    function (done) {
      xhrGet("http://my.url3?val=" + val, done, done.fail);
    }
  );

  // `val()` equivalent to:
  //    seq
  //    .then( function( done ){
  //       var args = Array.prototype.slice.call( arguments, 1 );
  //       done(
  //          function( vals ){
  //             return vals.filter( function( v ){ return !!v; } );
  //          }.apply( fn, args)
  //       );
  //    } )
  seq.val(function (vals) {
    // filter out empty values from the array
    return vals.filter(function (v) {
      return !!v;
    });
  });

  // `pipe()` equivalent to:
  //    seq
  //    .then( function( seqDone ){
  //       var args = Array.prototype.slice.call( arguments, 1 );
  //       done.apply( done, args );
  //       seqDone();
  //    } )
  //    .or( done.fail )
  seq.pipe(done);
}

function stepThree(vals) {
  var seq = $AS(),
    done = seq.then();

  xhrGet("http://my.url4/?vals=" + vals.join(","), done, done.fail);

  return seq;
}

$AS()
  .then(stepOne)
  .then(stepTwo)
  // `seq()` equivalent to:
  //    .then( function( done ){
  //       var args = Array.prototype.slice.call( arguments, 1 );
  //       stepTwo.apply( stepTwo, args )
  //       .pipe( done );
  //    } )
  .seq(stepThree)
  .val(console.log.bind(console))
  .or(function (err) {
    console.error(err);
  });
