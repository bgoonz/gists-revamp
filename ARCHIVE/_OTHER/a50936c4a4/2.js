// *********************
// The "standard FP" way
// *********************

var f = FPO.std.map(uppercase);
f(words);
// ["NOW","IS","THE","TIME"]

f(moreWords);
// ["THE","QUICK","BROWN","FOX"]

var p = FPO.std.flip(FPO.std.map)(words); // <---- this flipping sucks
p(lowercase);
// ["now","is","the","time"]

p(uppercase);
// ["NOW","IS","THE","TIME"]
