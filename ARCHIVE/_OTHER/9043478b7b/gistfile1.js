// Modified based on: https://gist.github.com/getify/9043478/#comment-1210362 from @ZIJ
if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this;
		// capture any curried parameters
		var curried = [].slice.call( arguments, 1 );
		var bound = function() {
			return fn.apply(
				(!this || this === (window || global)) ? obj : this,
				curried.concat.apply( curried, arguments )
			);
		};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}

function foo() {
   console.log("name: " + this.name);
}

var obj = { name: "obj" },
    obj2 = { name: "obj2" },
    obj3 = { name: "obj3" };

var fooOBJ = foo.softBind(obj);

fooOBJ(); // name: obj

obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2   <---- look!!!

fooOBJ.call(obj3); // name: obj3   <---- look!

setTimeout(obj2.foo,10); // name: obj   <---- falls back to soft-binding
