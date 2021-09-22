// be careful with those implicit .toString() calls in == comparison

typeof "abc" == "string"    // true
typeof String("abc") == "string"    // true
String("abc") == "abc"   // true -- same types get casted to equal each other

String("abc") instanceof String    // false -- hmmm...
(new String("abc")) instanceof String   // true
String("abc") == (new String("abc"))    // true -- wait, wtf?
