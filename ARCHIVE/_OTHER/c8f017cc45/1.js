// Standard:

function fn(x) {
  return function (y) {
    return function (z) {
      return (x * y) / z;
    };
  };
}

// pros: function `fn()` is a regular function declaration, hoists
// cons: quite verbose, requires intermediate functions (often anonymous),
//   can't do "loose currying" where you pass in more than one arg in a single
//   call (like `fn(1,2)(3)`), JS engine probably can't inline/optimize away
//   these intermediate functions as a result
