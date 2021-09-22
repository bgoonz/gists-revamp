if (!(Symbol.iterator in Object.prototype)) {
	Object.defineProperty(Object.prototype,Symbol.iterator,{
		enumerable: false,
		writable: false,
		configurable: true,
		value: function() {
			var o = this;
			var idx = -1;
			var ks = Object.keys(o);
			return {
				next: function() {
					var v = o[ks[++idx]];
					return { done:(idx === ks.length), value: v };
				}
			};
		}
	});
}