// This (caching) bug appears only in Chrome IIUC. FF's output is also
// wrong, but it appears it's wrong because of the same bug as the previous
// three cases are showing.
// 
// The spec says a Promise must not change its value once resolved, so a
// natural, though not required, assumption is that you can cache that
// value and not need to call `then(..)` on the promise again. Chrome
// appears to indeed be caching these results, which is fine.
//
// However, Chrome is also caching the results of thenables, which is
// NOT allowed by the spec, which is what's demonstrated here in this
// bug.


function immed(s) { x++; s(); }
function incX(){ x++; }

var x = 0;
var thenable = { then: immed };
var results = [];

for (var i=0; i<3; i++) {
  Promise.resolve(thenable).then(incX);
  results.push(x);
}

setTimeout(function(){
	results.push(x);
	console.log(results);
},100);

// FF: [1,2,3,6] --> incorrect i believe
// Ch: [0,0,0,4] --> incorrect i believe
// should be: [0,0,0,6]