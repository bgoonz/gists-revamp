// This is a theoretical exploration of something that could
// be added to JS. It borrows from JS events which have both a
// `target` and `currentTarget` element, which distinguish between
// the direct target of an event and the delegated parent handling
// the event, respectively.

// The idea is to distinguish between `this` and `currentThis`,
// respectively, as...
//
// `this`: the initial containing object for a call that initiates a
// traversal of the [[Prototype]] chain (just as it currently does)
//
// `currentThis`: the actual link in the [[Prototype]] chain where the
// traversal resolution is completed.

// Notice below that with `bar1` for example, `this` will point to
// `bar1` even when using the delegated `identify()` function found
// on `Foo`, but `currentThis` will point to `Foo`, since that's
// where `identify()` was found in the chain.

// So... what if:

var Foo = Object.create(null);
Foo.me = "Foo";
Foo.identify = function () {
  // whenever Foo#identify() is called, `currentThis` will
  // always be `Foo`, but `this` will continue to follow the
  // established rules for determining a `this` binding.
  console.log("Me: " + this.me + "; Current: " + currentThis.me);
};

var Bar = Object.create(Foo);
Bar.me = "Bar";
Bar.another = function () {
  console.log("Current: " + currentThis.me);
};

var bar1 = Object.create(Bar);
bar1.me = "bar1";
var bar2 = Object.create(Bar);
bar2.me = "bar2";

Foo.identify(); // "Me: Foo; Current: Foo"
Bar.identify(); // "Me: Bar; Current: Foo"
Bar.another(); // "Current: Bar"
bar1.identify(); // "Me: bar1; Current: Foo"
bar2.identify(); // "Me: bar2; Current: Foo"
bar1.another(); // "Current: Bar"
bar2.another(); // "Current: Bar"
