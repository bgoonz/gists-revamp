// This bug has already been reported to clarify the ES6 spec:
// https://bugs.ecmascript.org/show_bug.cgi?id=2837
//
// I think it still needs to be reported to FF.
// 
// Documenting here for completeness and for relationship to
// the other bugs here.

function immed(s) { x++; s(); }
function incX(){ x++; }

var x = 0;
var thenable = { then: immed };
var results = [];

Promise.resolve(thenable).then(incX);
results.push(x);

// check what happens after all "next cycle" steps
// have had a chance to complete
setTimeout(function(){
	results.push(x);
	console.log(results);
},100);

// FF: [1,2] --> incorrect i believe
// Ch: [0,2] --> correct i believe
