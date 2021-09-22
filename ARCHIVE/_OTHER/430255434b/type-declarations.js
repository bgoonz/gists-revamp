/*
 * Forked Zakas' attempt at a `type()` "class" maker/extender utility.
 * This variation just makes and links objects, without the unnecessity
 * of using constructor functions. You can however specify `init()`
 * functions to use upon creation of the object. NOTE: because there are
 * no more constructor functions, comparisons with `instanceof` and
 * `constructor` no longer apply.
 */

function make(delegateTo, declaration) {
  function mixin(receiver, supplier) {
    if (Object.getOwnPropertyDescriptor) {
      Object.keys(supplier).forEach(function (property) {
        var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
        Object.defineProperty(receiver, property, descriptor);
      });
    } else {
      for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) {
          receiver[property] = supplier[property];
        }
      }
    }
    return receiver;
  }

  // if `delegateTo` not specified, default: `Object.prototype`
  if (!delegateTo) {
    delegateTo = Object.prototype;
  }

  // make sure the `delegateTo` is an object
  delegateTo =
    typeof delegateTo == "function" ? delegateTo.prototype : delegateTo;

  // link the new object to the `delegateTo` object
  var obj = Object.create(delegateTo);

  // define the new object according to the declaration (if any)
  if (declaration) {
    mixin(obj, declaration || {});
  }

  // if no `init` was declared for this new object, but `delegateTo.init()` exists,
  // hook up to it automatically
  if (
    !obj.hasOwnProperty("init") &&
    delegateTo &&
    delegateTo.hasOwnProperty("init")
  ) {
    obj.init = function () {
      return delegateTo.init.apply(this, arguments);
    };
  }

  return obj;
}

//---------------------------------------------------------------------------
// Usage
//---------------------------------------------------------------------------

var Rectangle = {
  init: function (length, width) {
    this.length = length;
    this.width = width;
  },
  getArea: function () {
    return this.length * this.width;
  },
};

// inherit from rectangle
var Square = make(Rectangle, {
  init: function (size) {
    Rectangle.init.call(this, size, size);
  },
});

// also inherit from rectangle
var Triangle = make(Rectangle, {
  getArea: function () {
    return 0.5 * this.length * this.width;
  },
});

var rect = Object.create(Rectangle);
rect.init.call(rect, 3, 10);
console.log(Rectangle.isPrototypeOf(rect)); // true
console.log(rect.getArea()); // 30

var square = Object.create(Square);
square.init.call(square, 10);
console.log(Square.isPrototypeOf(square)); // true
console.log(Rectangle.isPrototypeOf(square)); // true
console.log(square.getArea()); // 100

var triangle = Object.create(Triangle);
triangle.init.call(triangle, 3, 10);
console.log(Triangle.isPrototypeOf(triangle)); // true
console.log(Rectangle.isPrototypeOf(triangle)); // true
console.log(Square.isPrototypeOf(triangle)); // false
console.log(triangle.getArea()); // 15
