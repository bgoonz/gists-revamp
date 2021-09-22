var hex_source = ["2", "4", "3", "F", "6", "A", "8", "8", "8", "5", "A", "3", "0", "8", "D", "3", "1", "3", "1", "9"],
	decimal_digits = [], holding = [];
	
function pumpNextHex(source) {
	var digit = parseInt(source.shift(),16), new_digits;
	holding.push(digit);
	
	// carry-over upward
	for (var idx=holding.length-1; idx>0; idx--) {
		if (holding[idx] > 9) {
			holding[idx-1]++;
			holding[idx] = 9; 
		}
		else break;
	}
	
	// roll off "finished" decimal digits up to `idx-1`
	if (idx > 0) {
		new_digits = holding.slice(0,idx);
		holding = holding.slice(idx);
		decimal_digits = decimal_digits.concat(new_digits);
		return new_digits.length;
	}
	return 0;
}



// "2" -->
pumpNextHex(hex_source);	// 0 -- good!
decimal_digits;			// [] -- good!

// "4" -->
pumpNextHex(hex_source);	// 1 -- good!
decimal_digits;			// [2] -- no! should be [1] as in 14159...

// "3" -->
pumpNextHex(hex_source);	// 1 -- good!
decimal_digits;			// [2,4] -- no! should be [1,4]

// "F" -->
pumpNextHex(hex_source);	// 0 -- good!
decimal_digits;			// [2,4] -- should still be [1,4]

// "6" -->
pumpNextHex(hex_source);	// 2 -- good!
decimal_digits;			// [2,4,4,9] -- no! should be [1,4,1,5]
