```
var a = null;
var b = null;
(a === b); // true
```

Line 3 could be `true` because `a` and `b` both have the same simple value in them (similar to `3 === 3`), OR it could be `true` because both `a` and `b` are references pointing to the exact same null object.

I think the latter is more true (at least makes more sense) than the former, because `typeof null === "object"` and we all know that all objects are pointed to by reference. 

So, treating `null` like you point to it by reference instead of by value is more closely matched to how JS behaves, in that you don't have the exception of why `typeof` reports something bizarre.

If, OTOH, `null` is a simple value, you have to explain the `typeof` inconsistency in one of two ways:

1. `null` actually is an object, but it's stored by value and not by reference, and thus it's the only value in the language of type "object" that we point to by value and not by reference.

2. `null` isn't an object, but the creators of JS couldn't come up with what to report for `typeof`, or there was some other cowpath reason to incorrectly report it.

------------------

`null` might actually be just a value, and not a reference to a special null object, at the implementation level. I don't know. I'm sure some spec wonk can correct me.

But my bigger point is, it **behaves** more like a reference than a simple value. Sure, it's a non-followable reference (can't do `null.foo`), but to me it still acts more like a reference than a value.

Thoughts? Am I crazy?