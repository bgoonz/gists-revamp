function *foo() {
	var x = 42;
	yield alerts("Hello World: " + x);
	console.log("alert finished");
}

run(foo);