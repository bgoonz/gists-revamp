// We could even combine, where initial messages
// to gen(..) call are just curried to actual
// generator invocation.


function* gen(msg1, msg2) {
	console.log( msg1 ); // "foo", curried from the gen(..) call
	console.log( msg2 ); // 3
	
	var x = yield (msg2 * 3);
	console.log( x ); // 10
	
	var y = 2 * (yield (x * 4));
	console.log( y ); // 100
	
	return x * y; // 1000
}

var it = gen( "foo" ); // curry "foo" as `msg1` argument

// now send `3` as `msg2` argument
it.next(  3 ); // {done:false, value:9}

it.next( 10 ); // {done: false, value:40}
it.next( 50 ); // {done: true, value:1000}
