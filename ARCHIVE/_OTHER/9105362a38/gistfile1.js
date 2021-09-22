// This example shows a simple data structure object that holds
// a sequence of numbers from 0 to 99. It defines its own iterator
// which lets you dump all those values out using a `for-of` loop.
//
// Note: the iterator accepts a value to `next(..)` which represents
// a step value, if you wanted to get only every nth value from
// the sequence.
//
// Unfortunately, ES6's for-of doesn't have a syntax for passing in
// a value to that default per-iteration `next(..)` call that occurs. :(


var myNumbers = (function(){
	var d = [];
	for (var i=0; i<100; i++) {
		d.push(i);
	}
	
	var publicAPI = {}; // no need for an API, can only be iterated on!

	Object.defineProperty(publicAPI,Symbol.iterator,{
		configurable: false,
		enumerable: false,
		writable: false,
		value: function() {
			var idx = -1;
			var data = d.slice(); // make a temp copy of internal data so we can iterate on it!
			return {
				// step would let you get only every nth number
				next: function(step) {
					idx += (+step || 1);
					var v = data[idx];
					return { done: (idx >= data.length), value: v };
				}
			};
		}
	});
	
	return publicAPI;
})();