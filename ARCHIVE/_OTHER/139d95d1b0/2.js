function reverseStr(str) {
	if (str.length <= 1) return str;
	
	var mid = Math.floor(str.length / 2);
	var firstHalf = str.substr(0,mid);
	var secondHalf = str.substr(mid);
	
	return (secondHalf.length > 1 ? reverseStr(secondHalf) : secondHalf) +
		(firstHalf.length > 1 ? reverseStr(firstHalf) : firstHalf);
}

console.log( reverseStr("") == "" );         // true
console.log( reverseStr("a") == "a" );         // true
console.log( reverseStr("ab") == "ba" );         // true
console.log( reverseStr("abc") == "cba" );         // true
console.log( reverseStr("abcd") == "dcba" );         // true
console.log( reverseStr("abcde") == "edcba" );         // true
console.log( reverseStr("abcdefghijklmnopqrstuvwxyz") == "zyxwvutsrqponmlkjihgfedcba" );         // true