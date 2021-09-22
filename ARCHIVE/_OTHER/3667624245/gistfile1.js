// NOTE: only escapes a " if it's not already escaped
function escapeDoubleQuotes(str) {
	return str.replace(/\\([\s\S])|(")/g,"\\$1$2"); // thanks @slevithan!
}

escapeDoubleQuotes(`ab`);          // ab  =>  ab           (nothing escaped)
escapeDoubleQuotes(`a"b`);         // a"b  =>  a\"b
escapeDoubleQuotes(`a\\"b`);       // a\"b  =>  a\"b       (nothing escaped)
escapeDoubleQuotes(`a\\\\"b`);     // a\\"b  =>  a\\\"b
escapeDoubleQuotes(`a\\\\\\"b`);   // a\\\"b  =>  a\\\"b   (nothing escaped)

escapeDoubleQuotes(`a"b"c`);       // a"b"c  =>  a\"b\"c
escapeDoubleQuotes(`a""b`);        // a""b  =>  a\"\"b
escapeDoubleQuotes(`""`);          // ""  =>  \"\"

// don't unnecessarily escape:
escapeDoubleQuotes(escapeDoubleQuotes(escapeDoubleQuotes(`a"b`)));  // a"b  =>  a\"b