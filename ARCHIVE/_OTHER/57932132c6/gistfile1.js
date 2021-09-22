function Foo() {}
function Baz() {}
Foo.prototype.constructor = Baz;
var f = new Foo();
f; // Foo {}
var o = new Object();
o; // Object {}

/*
It would appear that `Foo {}` (as reported by Chrome DevTools) on
line 5 is coming from some internal property of the object, because as
shown, the public `.constructor` property is pointed at `Baz() {}`.

The spec defines a `[[Class]]` internal property, here:

http://www.ecma-international.org/ecma-262/5.1/#sec-8.6.2

It says, in part:

The value of the [[Class]] internal property is defined by this specification
for every kind of built-in object. The value of the [[Class]] internal property
of a host object may be any String value except one of "Arguments", "Array",
"Boolean", "Date", "Error", "Function", "JSON", "Math", "Number", "Object",
"RegExp", and "String". The value of a [[Class]] internal property is used
internally to distinguish different kinds of objects. Note that this
specification does not provide any means for a program to access that value
except through Object.prototype.toString.

But this description seems to only define how `[[Class]]` behaves for built-in
objects, and thus implies that for custom/user-defined objects, `[[Class]]`
would either be unset or have an implementation-independent value.

So I was guessing maybe that Chrome was setting `[[Class]]` to `Foo` and `Object`
on the above `f` and `o` objects, respectively.

However:

http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.2

Says that `[[Class]]` should be used in the default `toString()` serialized
output, and...
*/

f.toString(); // [object Object]
o.toString(); // [object Object]

/*
So, I don't understand if `[[Class]]` really is being used but is sorta
"violating" the spec by not reporting in `toString()`, or if there's some
other `[[Constructor]]` being stored and reported that is a custom extension
by Chrome/V8?
*/
