// In ES6, we have param destructuring to help

function foo( [x,y,z] ) {
    console.log(x,y,z);
}

function bar(fn) {
    fn( [1,2,3] );
}

bar( foo ); // 1 2 3