// If I understand JS grammar and the parsing of it correctly,
// `if .. else if ..` is a case of using else without { }, as
// it's treated almost the same as `if .. else { if .. }`.
//
// Those two have *slightly* different parse trees, but the
// nesting is clear that `if` statements only have one
// consequent and one alternate, so `else if ..` has to be treated
// as `else { if ..`.
//
// Bottom line? If you use `else if`, you're basically committing
// the "sin" of curly-brace-less `if`, the same "sin" everyone
// complained about with the iOS/OSX #gotofail.

// So.. this code:
if (foo) {
  // ..
} else if (bar) {
  // ..
} else if (bam) {
  // ..
} else {
  // ..
}

// ..is actually treated as:

if (foo) {
  // ..
} else {
  if (bar) {
    // ..
  } else {
    if (bam) {
      // ..
    } else {
      // ..
    }
  }
}
