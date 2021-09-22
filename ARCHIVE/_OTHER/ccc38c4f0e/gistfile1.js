var ns = {
	foo: function foo(id,cb) {
		var x = document.getElementById(id);
		if (!x) {
			return setTimeout(foo,100,id,cb);
		}
		
		x.addEventListener("click",cb,false);
	},
	bar: function bar(evt) {
		if (evt.target.id == "blah") {
			evt.target.removeEventListener("click",bar,false);)
		}
	}
};

ns.foo("blah",ns.bar);