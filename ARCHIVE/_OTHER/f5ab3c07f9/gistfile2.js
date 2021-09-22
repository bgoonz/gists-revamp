run(function*(){
	var foo = yield require("foo");
	var bar = yield require("bar");
	
	foo.bam( bar.baz() );
});