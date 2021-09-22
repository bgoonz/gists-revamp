// Visualize at:
// http://www.regexplained.co.uk/?pattern=%2F%5E(%3F%3A(%3F%3A0%5BxX%5D%5B0-9a-fA-F%5D%2B)%7C(%3F%3A0%5BoO%5D%5B0-7%5D%2B)%7C(%3F%3A0%5BbB%5D%5B01%5D%2B)%7C(%3F%3A%5Cd%2B%5C.%5Cd*(%3F%3A%5BeE%5D%5B%2B-%5D%3F%5Cd%2B)%3F)%7C(%3F%3A%5C.%5Cd%2B(%3F%3A%5BeE%5D%5B%2B-%5D%3F%5Cd%2B)%3F)%7C(%3F%3A%5Cd%2B(%3F%3A%5BeE%5D%5B%2B-%5D%3F%5Cd%2B)%3F))%24%2F

function isNumberLiteral(txt) {
	var re = /^(?:(?:0[xX][0-9a-fA-F]+)|(?:0[oO][0-7]+)|(?:0[bB][01]+)|(?:\d+\.\d*(?:[eE][+-]?\d+)?)|(?:\.\d+(?:[eE][+-]?\d+)?)|(?:\d+(?:[eE][+-]?\d+)?))$/;
	return re.test(txt);
}

isNumberLiteral("42");		// true
isNumberLiteral("-42");		// false
isNumberLiteral(".42");		// true
isNumberLiteral("0.42");	// true
isNumberLiteral("42.");		// true
isNumberLiteral("42.3");	// true
isNumberLiteral("42.");		// true
isNumberLiteral("42e3");	// true
isNumberLiteral("42.e3");	// true
isNumberLiteral(".42e3");	// true
isNumberLiteral("42e-3");	// true
isNumberLiteral("42.e-3");	// true
isNumberLiteral("0xaa");	// true
isNumberLiteral("042");		// true
