Foo = { baz: 2 /*, .. */ };

// link Bar to Foo
Bar = Object.create(Foo);
Bar.bam = 3;

// link Foo back to Bar
Foo.__proto__ = Bar;
// or, in ES6: `Object.setPrototypeOf( Foo, Bar )`

// throws error here.
// in chrome: "cyclic __proto__ value"
// in ff: [[SetPrototypeOf]] failed on ({baz:2})

Bar.baz; // 2
Foo.bam; // 3
