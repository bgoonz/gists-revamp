// templates.js
var tmpl_1 = (me,i) => `Hello ${me}, i: ${i}`;
var tmpl_2 = ..


// app.js
var me = "Yehuda";
for (let i=0; i<5; i++) {
	console.log(
		tmpl_1(me,i)	// yuck, repeating `me` and `i` three separate times
				// also, yuck that `tmpl_1` is opaquely a function
	);
}
// Hello Yehuda, i: 0
// Hello Yehuda, i: 1
// Hello Yehuda, i: 2
// Hello Yehuda, i: 3
// Hello Yehuda, i: 4