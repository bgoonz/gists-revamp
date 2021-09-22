// Here's showing the syntax could take a variable for the `next(..)`
// argument, instead of a fixed number, so we can do a stepped-iteration.

var step = 1;
for (var v of myNumbers:step) {
	console.log(v);
	step++; // increase the next step-value each time
}
// prints out 0, 2, 5, 9, 14, 20, ...
// 
// step of `1` yields `0`
// step of `2` yields `2`
// step of `3` yields `5`
// step of `4` yields `9`
// step of `5` yields `14`
// step of `6` yields `20`
// ...