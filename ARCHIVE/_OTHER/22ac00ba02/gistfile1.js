function foo(){}
foo.prototype = 2;
Object.defineProperty(foo,"prototype",{writable:false});
Object.getOwnPropertyDescriptor(foo,"prototype"); // Object {value: 2, writable: false, enumerable: false, configurable: false}
foo.prototype; // 2



function bar(){}
Object.defineProperty(bar,"prototype",{value:2,writable:false});
Object.getOwnPropertyDescriptor(bar,"prototype"); // Object {value: 2, writable: false, enumerable: false, configurable: false}
bar.prototype; // bar {}

// what!?!?!     ^^^^^^^