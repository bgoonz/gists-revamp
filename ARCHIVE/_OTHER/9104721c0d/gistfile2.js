if (!(Symbol.iterator in Object.prototype)) {
	Object.defineProperty(Object.prototype,Symbol.iterator,{
		enumerable: false,
		writable: false,
		configurable: true,
		// thanks to: https://twitter.com/juandopazo/status/436298238464122880
		value: function*() {
			var o = this;
			var ks = Object.keys(o);
			for (var idx = 0, length = ks.length; idx < length; idx++) {
				yield o[ks[idx]];
			}
		}
	});
}