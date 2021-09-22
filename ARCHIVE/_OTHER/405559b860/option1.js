// templates.js
var tmpl_1 = "`Hello ${me}, i: ${i}`"; // don't forget those `s
var tmpl_2 = ..


// app.js
var me = "Kyle";
for (let i=0; i<5; i++) {
	console.log(
		eval(tmpl_1)	// yuck, eval
	);
}
// Hello Kyle, i: 0
// Hello Kyle, i: 1
// Hello Kyle, i: 2
// Hello Kyle, i: 3
// Hello Kyle, i: 4