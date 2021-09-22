var a = "j"; // "j"
var b = "\\j"; // "\j"
var c = "\\\\j"; // "\\j"
var d = "\\\\\\j"; // "\\\j"
var e = "\\\\\\\\j"; // "\\\\j"
var f = "\\\\\\\\\\j"; // "\\\\\j"

var just_j = nonescapedRE("j");
just_j.test(a); // true
just_j.test(b); // false
just_j.test(c); // true
just_j.test(d); // false
just_j.test(e); // true
just_j.test(f); // false

var esc_j = escapedRE("j");
esc_j.test(a); // false
esc_j.test(b); // true
esc_j.test(c); // false
esc_j.test(d); // true
esc_j.test(e); // false
esc_j.test(f); // true
