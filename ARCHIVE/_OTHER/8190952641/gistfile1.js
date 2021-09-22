var a = Array( 3 );
a; // []
a.length; // 3
a.map( function( v, idx ){ return idx; } ); // [ ] <-- WTF?

var b = Array.apply( null, Array(3) );
b; // [undefined,undefined,undefined]
b.length; // 3
b.map( function( v, idx ){ return idx; } ); // [0,1,2] <-- :)

/*
Here, Array(3) means two different kinds of
things depending on where it's used.

When used by itself, it's rougly the same as
`{length:3}`, or, more appropriately, it's an
empty array with a `length` property that
"lies" to you and claims `3`.

When used as the second parameter to `apply()`,
which expects an array, it essentially acts to
coerce it to a **non-empty** array filled with
`undefined` values.
*/

// Moreover:

var c = Array.apply( null, { length: 3 } );
c; // [undefined,undefined,undefined]
c.length; // 3
c.map( function( v, idx ){ return idx; } ); // [0,1,2]

// **************************************

/*
One way to explain this behavior is that
apply() treats the second parameter as an
array regardless of if it is or not, and thus
accessing each numeric index on it, sorta
like this (faked obviously):
*/

Function.prototype.apply = function( thisObj, arrLikeObj ) {
	if (arrLikeObj.length === 0) {
		return this( );
	}
	// ...
	else if (arrLikeObj.length === 3) {
		return this( arrLikeObj[0], arrLikeObj[1], arrLikeObj[2] );
	}
	// ...
};

var d = Array.apply( null, { length: 3 } );
// which ends up the same as:
var d = Array( undefined, undefined, undefined );
// which obviously results in:
//    [undefined,undefined,undefined]
d.map( function( v, idx ){ return idx; } ); // [0,1,2]


/*
You can easily see there that when `arrLikeObj[2]`
is accessed, it returns `undefined`, and thus ends
up as an argument passed to the `Array(..)` function
*/

// **************************************

/*
If JS had just made `Array(3)` as `[undefined,undefined,undefined]`,
all the observable side-effects would be more sensible:
*/

var e = [ undefined, undefined, undefined] ; // pretending from Array(3)
e; // [undefined,undefined,undefined]
e.length; // 3

Array.apply( null, e ); // [undefined,undefined,undefined]
e.map( function( v, idx ){ return idx; } ); // [0,1,2]
