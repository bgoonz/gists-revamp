function makeThunk(fn) {
	var args = [].slice.call(arguments,1), vals, cb;

	args.push(function callback(){
		if (cb) {
			cb.apply(null,arguments);
		}
		else {
			vals = [].slice.call(arguments);
		}
	});
	
	fn.apply(null,args);
	args = null;

	return function th(callback) {
		if (vals) {
			callback.apply(null,vals);
		}
		else {
			cb = callback;
		}
	}
}
