// Here's an exploration of a rough possible syntax extension to `for-of`
// that would let you pass in a value to each iteration's `next(..)`,
// which would let you get out every nth number of the number sequence.
//
// The `:3` syntax would specify a value that should be passed in to every
// `next(..)` call of the iterator.

for (var v of myNumbers:3) {
	console.log(v);
}
// prints out every 3rd number: 2, 5, 8, ...