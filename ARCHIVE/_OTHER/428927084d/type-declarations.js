/*
 * Forked Zakas' attempt at a `type()` "class" maker/extender utility.
 * Mainly, this approach automatically calls a type's super-type (if any)
 * `constructor` upon construction of the type, if you didn't specify
 * a `constructor` for the type itself.
 */

function type(prototype, declaration) {
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

  // if `prototype` not specified, default: `Object.prototype`
  if (declaration == null) {
    declaration = prototype;
    prototype = Object.prototype;
  }

  // make sure the prototype is an object
  prototype = typeof prototype == "function" ? prototype.prototype : prototype;

  // create a new prototype chain link to represent declaration
  var new_prototype = Object.create(prototype);
  mixin(new_prototype, declaration);

  // build the constructor for this new "type"
  var construct = function () {
    // build the new instance, that "inherits" from the prototype chain
    var obj = Object.create(new_prototype, {
      // pretend this instance was created by this constructor function
      constructor: {
        configurable: true,
        enumerable: true,
        value: construct,
        writable: true,
      },
    });

    // if a `constructor` was defined for this type, call it
    // if not, call the super `constructor` (if any) automatically
    (declaration.hasOwnProperty("constructor")
      ? declaration.constructor
      : function () {
          (prototype.hasOwnProperty("constructor")
            ? prototype.constructor
            : function () {}
          ).apply(this, arguments);
        }
    ).apply(obj, arguments);

    return obj;
  };

  // pretend this constructor is actually used to build instances
  // that "inherit" from the specified prototype chain
  construct.prototype = new_prototype;

  return construct;
}

//---------------------------------------------------------------------------
// Usage
//---------------------------------------------------------------------------

var Rectangle = type({
  constructor: function (length, width) {
    this.length = length;
    this.width = width;
  },
  getArea: function () {
    return this.length * this.width;
  },
});

// inherit from rectangle
var Square = type(Rectangle, {
  constructor: function (size) {
    Rectangle.prototype.constructor.call(this, size, size);
  },
});

// also inherits from rectangle
var Triangle = type(Rectangle, {
  // show off automatically calling super constructor here!
  getArea: function () {
    return 0.5 * this.length * this.width;
  },
});

var rect = new Rectangle(3, 10);
console.log(rect instanceof Rectangle); // true
console.log(rect.constructor === Rectangle); // true
console.log(rect.getArea()); // 30

var square = new Square(10);
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
console.log(square.constructor === Square); // true
console.log(square.constructor === Rectangle); // false
console.log(square.getArea()); // 100

var triangle = new Triangle(3, 10); // magically calls Rectangle's constructor here!
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Rectangle); // true
console.log(triangle instanceof Square); // false
console.log(triangle.constructor === Triangle); // true
console.log(triangle.constructor === Rectangle); // false
console.log(triangle.getArea()); // 15
