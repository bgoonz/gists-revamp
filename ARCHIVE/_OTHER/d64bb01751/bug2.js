// This bug may be related to the first one, because race() may
// use resolve() internally.

function immed(s) { x++; s(); }
function incX(){ x++; }

var x = 0;
var thenables = [
	{ then: immed },
	{ then: immed },
	{ then: immed },
	{ then: immed },
	{ then: immed }
];
var results = [];

Promise.race(thenables).then(incX);
results.push(x);

// check what happens after all "next cycle" steps
// have had a chance to complete
setTimeout(function(){
	results.push(x);
	console.log(results);
},100);

// FF: [5,6] --> incorrect i believe
// Ch: [0,6] --> correct i believe
