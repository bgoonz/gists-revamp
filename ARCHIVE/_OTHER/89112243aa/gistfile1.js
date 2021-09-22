// {?( .. ) opens up a conditionally compiled block.
// inside the ( .. ), you do a test, which is evaluated
// to see if the contents of the block should be compiled
// or not. If success, proceeds as a normal { .. } block
// of code. If test fails, entire contents of block
// are ignored and not compiled (no syntax errors)
//
// This would primarily be useful for using ES.next features
// that have breaking syntax. You construct a FT for the feature
// and if the test succeeds, use it, otherwise skip it.
//
// Basically, this is to avoid needing to do stuff like sticking
// ES6 code in a string passed to eval(..)

function foo() {
	var fn;
	
	{?( .. ) // use a feature-test for arrow-functions here
   		fn = () => this.baz * 3;
	}
	if (!fn) {
		fn = function(){ return this.baz * 3; }.bind(this);
	}
	
	someOther(fn);
}

var obj = { baz: 10 };

foo.call(obj);