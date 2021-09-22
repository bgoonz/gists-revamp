var a = [
	{
		// Look, ma, no `this`
		foo: function foo(count) {
			if (count < 10) {
				setTimeout(function bar(){
					if (count % 2 === 0) {
						count++;
						setTimeout(bar,100);
					}
					else {
						foo(count+2);
					}
				},100);
			}
			else {
				console.log("foo: " + count);
			}
		}
	}	
];

var b = [
	{
		// shorthand method syntax is nice, but introduces `this` issues
		// because of lack of lexical name binding
		foo(count) {
			if (count < 10) {
				// `bar` can't be => here because we need a name for it
				// to refer to itself
				setTimeout(function bar(){
					if (count % 2 === 0) {
						count++;
						setTimeout(bar.bind(this),100);	// ** uglier .bind(this)
					}
					else {
						this.foo(count+2);		// ** uglier this.foo
					}
				}.bind(this),100);				// ** uglier .bind(this)
			}
			else {
				console.log("foo: " + count);
			}
		}
	}	
];
