function handleItem(val,cb) {
	setTimeout( function(){
		console.log( val );
		cb();
	}, 100 );
}

ASQ()
.map(
	[1,2,3,4,5]	
	handleItem
);

// map() used in this way *would* return/pass along a
// value-message of an array of 5 undefined values
// since you didn't map the orig items to anything
// when you called `cb()`.
//
// BUT, you can just ignore that resultant array in the
// next step of your sequence, and it functioned
// exactly like a forEach would have. :)