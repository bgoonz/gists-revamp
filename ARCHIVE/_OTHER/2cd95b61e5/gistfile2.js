// assume just normal callback style is needed
function result(data) {
    console.log( a ); // always outputs 1, even if the ajax finishes synchronously
}

var a = 0;
ajax( "..pre-cached-url..", asyncify( result ) );
a++; // always executes before `result(..)` can run