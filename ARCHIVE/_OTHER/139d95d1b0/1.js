function reverseStr(str) {
	if (str.length <= 1) return str;
	
	var firstChar = str[0];
	var restStr = str.substr(1);
	
	return (restStr.length > 1 ? reverseStr(restStr) : restStr) +
		firstChar;
}

console.log( reverseStr("") == "" );         // true
console.log( reverseStr("a") == "a" );         // true
console.log( reverseStr("ab") == "ba" );         // true
console.log( reverseStr("abc") == "cba" );         // true
console.log( reverseStr("abcd") == "dcba" );         // true
console.log( reverseStr("abcde") == "edcba" );         // true
console.log( reverseStr("abcdefghijklmnopqrstuvwxyz") == "zyxwvutsrqponmlkjihgfedcba" );         // true