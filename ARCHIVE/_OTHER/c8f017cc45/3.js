// Proposed:

function fn(x)(y)(z) {
  return x * y / z;
}

// pros: real function declaration, still hoistable, would allow engine to
//   support "loose currying" (like `fn(1,2)(3)`), and engine can more possibly
//   optimize intermediate functions when they're not necessary, intermediate
//   functions (when necessary) could have inferred names, like `fn@2`
//   or `fn:2` or `fn#2`, sort of like bound methods (that have been partially
//   applied), OR the "intermediate" function could actually just be the original
//   `fn` and not a different one, but where JS is collecting its arguments,
//   engine could maintain the `this` binding across all the function calls
//   automatically
// cons: maybe a bit more complex of JS grammar for the parser, little more
//   verbose in needing the (..)s to disambiguate syntax, intermediate functions
//   still would be lexically anonymous