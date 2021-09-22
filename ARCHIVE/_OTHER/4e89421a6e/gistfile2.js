var Foo = {
	hello() { }
};

var Bar = Object.delegate(Foo,{
	world() { }	
});

var baz = Object.delegate(Bar);