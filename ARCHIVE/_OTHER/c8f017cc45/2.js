// Preferred:

var fn = (x) => (y) => (z) => (x * y) / z;

// pros: much shorter and thus a bit more visually attractive
// cons: doesn't hoist, all functions are anonymous (lexically)...
//   even `fn()` -- it has the inferred name `fn`, but it's still
//   lexically anonymous so it can't reliably self-reference itself, etc,
//   some think having to essentially back-track or read right-to-left to
//   parse arrow functions (parameters vs expression bodies) is less
//   readable, same problems with "loose currying" and JS engine optimizations
//   from previous snippet
