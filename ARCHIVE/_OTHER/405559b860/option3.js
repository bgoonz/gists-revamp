// templates.js
var tmpl_1 = "Hello ${me}, i: ${i}"; // look ma, no `s
var tmpl_2 = ..


// app.js
var me = "Brendan";
for (let i=0; i<5; i++) {
	console.log(
		new TemplateLiteral(tmpl_1)	// a bit nicer/cleaner, IMO
	);
}
// Hello Brendan, i: 0
// Hello Brendan, i: 1
// Hello Brendan, i: 2
// Hello Brendan, i: 3
// Hello Brendan, i: 4