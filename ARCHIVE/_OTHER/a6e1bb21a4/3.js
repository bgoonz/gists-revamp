// ... with some ES6 sugar

function run(it) {
  return Promise.resolve()
    .then( function handleNext(value){
      var next = it.next( value );

      return (function handleResult(next){
        return next.done ? next.value :
          Promise.resolve( next.value )
            .then(
              handleNext,
              err =>
                Promise.resolve(
                  it.throw( err )
                )
                .then( handleResult )
            );
        }
      })( next );
    } );
}