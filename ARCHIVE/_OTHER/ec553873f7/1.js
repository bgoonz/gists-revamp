var f = (x, y) => (z) => x + y + z;

// POP QUIZ: how do you use `f(..)` here?

// (x,y) is the parameter inputs to `f(..)`. But what does `f(..)` return?

// To my eyes, on a first left-to-right read, calling `f(..)` returns a `z` value.

// But that's not the case, because `z` isn't a value to return, it's the parameter to another function!

// So calling `f(..)` returns this whole function `z => x + y + z`.

// You can't figure that out from looking only at `z` though. You have to look-ahead to see that
// `z` is `z => ..`, which is another function.

// ANSWER:

f(1, 2)(3); // 6
