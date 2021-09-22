ASQ()
.runner(function*(){
	// Request all URLs at once in "parallel"
	var p1 = prAjax("url1");
	var p2 = prAjax("url2");
	var p3 = prAjax("url3");

	// Render as each one finishes,
	// but only once previous rendering
	// is done.
	output( yield p1 );
	output( yield p2 );
	output( yield p3 );
	
	output("Complete!");
});
