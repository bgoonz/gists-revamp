// thanks to @raganwald
function spread(fn) {
    return Function.apply.bind( fn, null );
}

function foo(x,y,z) {
    console.log(x,y,z);
}

function bar(fn) {
    fn( [1,2,3] );
}

bar( spread( foo ) ); // 1 2 3