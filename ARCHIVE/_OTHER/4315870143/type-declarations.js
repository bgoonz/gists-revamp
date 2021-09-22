/*
 * Forked Zakas' attempt at a `type()` "class" maker/extender utility.
 * Baseline for performance sans "inheritance", using only object mixins.
 */

function make(copyFrom, declaration) {
	function mixin(receiver, supplier) {
		if (Object.getOwnPropertyDescriptor) {
			Object.keys(supplier).forEach(function(property) {
				var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
				Object.defineProperty(receiver, property, descriptor);
			});
		}
		else {
			for (var property in supplier) {
				if (supplier.hasOwnProperty(property)) {
					receiver[property] = supplier[property]
				}
			}
		}
		return receiver;
	}

	var obj = {};

	// mixin the `copyFrom` object, if any
	if (copyFrom) {
		// make sure the `copyFrom` is an object
		copyFrom = (typeof copyFrom == "function") ? copyFrom.prototype : copyFrom;

		// copy the `copyFrom` object
		mixin(obj,copyFrom);
	}

	// mixin the new `declaration` object, if any
	if (declaration) {
		mixin(obj,declaration);
	}

	return obj;
}

//---------------------------------------------------------------------------
// Usage
//---------------------------------------------------------------------------

var Rectangle = {
	init: function(length, width) {
		this.length = length;
		this.width = width;
	},
	getArea: function() {
		return this.length * this.width;
	}
};

// copy from rectangle
var Square = make(Rectangle,{
	init: function(size) {
		Rectangle.init.call(this, size, size);
	}
});

// also copy from rectangle
var Triangle = make(Rectangle,{
	getArea: function() {
		return 0.5 * this.length * this.width;
	}
});

var rect = make(Rectangle);
rect.init.call(rect,3,10);
console.log(rect.getArea());                    // 30

var square = make(Square);
square.init.call(square,10);
console.log(square.getArea());                  // 100

var triangle = make(Triangle);
triangle.init.call(triangle,3,10);
console.log(triangle.getArea());                // 15

