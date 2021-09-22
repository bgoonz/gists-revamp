// current solution adapted from: https://gist.github.com/getify/e5ed084f122d73ac375b#gistcomment-1621271
//
// Problem:
//
// given a stream of "hexadecimal digits" from PI, as in 0.243F6A8885A308D31319...,
// convert the stream digit-by-digit to base-10 decimal digits, as in:
// 0.1415926535897932384...
//
// Complications:
// because of floating point precision, the below current solution
// fails to work accurately after 23 digits, and flat out fails with NaN
// at 308+ digits.
//
// Need to do this in a way that doesn't require arbitrarily increasing
// floating point precision... using perhaps "integer math" instead of
// "floating point" math?
//
// Also, for memory reasons, we can't keep the entire list of previous digits,
// as that grows arbitrarily large. Need to spit out digit-by-digit.
//
// NOTE: because of overflow, it's known that you'll have to convert all
// digits in order, so that each digit's overflow carries to the next. IOW,
// you can't skip by converting positions 2, 8, and then 13; you'll have
// to convert positions 0-12 before converting position 13.

var overflow = 0;

function hexDigitToDec(hexDigit, position) {
  var dec =
    (parseInt(hexDigit, 16) / Math.pow(16, position)) * Math.pow(10, position);
  dec = dec + overflow;
  var whole = Math.floor(dec);
  overflow = (dec % 1) * 10;
  return whole;
}

hexDigitToDec("2", 0); // 1
hexDigitToDec("4", 1); // 4
hexDigitToDec("3", 2); // 1
hexDigitToDec("F", 3); // 5
hexDigitToDec("6", 4); // 9
hexDigitToDec("A", 5); // 2
hexDigitToDec("8", 6); // 6
hexDigitToDec("8", 7); // 5
hexDigitToDec("8", 8); // 3
// ... digits 9 - 30 of PI
hexDigitToDec("4", 31); // 0
hexDigitToDec("A", 32); // 1, but should be 2
hexDigitToDec("4", 33); // 3, but should be 8
// ... digits 26 - 306 of PI
hexDigitToDec("4", 307); // 8, but should be 0
hexDigitToDec("A", 308); // NaN, but should be 6
hexDigitToDec("4", 309); // NaN, but should be 6
// ...
