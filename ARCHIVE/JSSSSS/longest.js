const longest = (arr) => arr.reduce((len, v) => Math.max(v.length, len), 0);
