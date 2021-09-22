// Here's just the standard ES6 `for-of` iteration, which
// could only just get out all numbers, not every nth number
// in the sequence. :(

for (var v of myNumbers) {
  console.log(v);
}
// prints out all 100 numbers 0..99
