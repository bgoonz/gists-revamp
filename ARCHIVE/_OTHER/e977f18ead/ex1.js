if (!Promise.then) {
  Promise.then = function then(fn) {
    // note: not using `Promise.resolve(..)` so exception becomes rejection
    return new Promise(function executor(resolve){
      resolve( fn() );
    });
  };
}