function makePromise(fn) {
  var args = [].slice.call(arguments, 1);

  return new Promise(function setup(resolve) {
    args.push(function callback() {
      args = [].slice.call(arguments);
      // note: promises can only be resolved w/ one value,
      // so pass along multiple args in a single array, if
      // necessary
      resolve.apply(null, args.length > 1 ? [args] : args);
    });

    fn.apply(null, args);
  });
}
