function getData(d) {
	return ASQ(function(done){
		setTimeout(function(){ done(d); },1000);
	});
}

// iterate over a generator in the middle of your async flow control
// sequence, and wire its I/O directly into the message stream

ASQ()
.then(function(done){
	// wait for just a moment
	setTimeout(done,100);
})
.runner(function*(){
	var x = 1 + yield getData(10);
	var y = 1 + yield getData(30);
	var answer = yield getData(
		"Meaning of life: " + (x + y)
	);
	yield answer;
})
.val(function(msg){
	console.log(msg);
	// Meaning of life: 42
});