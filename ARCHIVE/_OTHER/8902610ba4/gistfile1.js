// I wish that generators allowed you to call next(..)
// at the first step with a value, and that value was
// the first (named) argument to the generator itself.
//
// see `next(3)` below setting `msg` to `3`.
//
// It would mirror how `return` is overloaded to do the final
// `yield`: by letting an argument be the initial "yield target"
// of an iterator-sent message.


function* gen(msg) {
	console.log( msg ); // 3
	
	var x = yield (msg * 3);
	console.log( x ); // 10
	
	var y = 2 * (yield (x * 4));
	console.log( y ); // 100
	
	return x * y; // 1000
}

var it = gen();

// send `3` as `msg` argument
it.next(  3 ); // {done:false, value:9}

it.next( 10 ); // {done: false, value:40}
it.next( 50 ); // {done: true, value:1000}
