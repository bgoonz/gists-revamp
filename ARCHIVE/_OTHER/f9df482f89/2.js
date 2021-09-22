replaceAll("Hello World", /l/, "L"); // "HeLLo WorLd"
replaceAll("Hello World", /l/, (x) => x.toUpperCase()); // "HeLLo WorLd"

replaceAll("abcabc", /ab/, "ab"); // "abcabc"
replaceAll("abcabc", /./, "X"); // "XXXXXX"

replaceAll("ababab", /ab/, "AB"); // "ABABAB"
replaceAll("ababab", /ab/y, "AB"); // "ABABAB"
replaceAll("abcabc", /ab/y, "AB"); // "ABcabc
