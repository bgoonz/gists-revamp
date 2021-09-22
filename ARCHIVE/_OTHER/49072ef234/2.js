function foo([ x, y, z ] = []) {
    console.log( `foo | x:${x} y:${y} z:${z}` );
}  

function bar({ x, y, z } = {}) {
    console.log( `bar | x:${x} y:${y} z:${z}` );
}


var f1 = gatherArgs( foo );
var f2 = gatherArgProps( bar, ["x","y","z"] );

f1( 1, 2, 3 );
// foo | x:1 y:2 z:3

f2( 1, 2, 3 );
// bar | x:1 y:2 z:3