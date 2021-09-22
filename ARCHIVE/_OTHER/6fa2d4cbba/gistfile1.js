// Which bugs account for the crazy inconsistencies here? What's "correct" expected behavior?

// first, let's muck with the built-ins!
Array.prototype.push(1, 2, 3);

// now, make a clean array (supposedly)
var a = ["foo"];

// -------------------------------

a.length;
// Chrome: 1
// FF:     1
// IE11:   1

a;
// Chrome: ["foo"]
// FF:     Array ["foo"]
// IE11:   ["foo",2,3]   <-- WTF!?

console.log(a);
// Chrome: ["foo",2,3]   <-- WTF!?
// FF:     Array ["foo"]
// IE11:   "foo"

a.toString();
// Chrome: "foo"
// FF:     "foo"
// IE11:   "foo"

Object.keys(a);
// Chrome: ["0"]
// FF:     ["0"]
// IE11:   ["0",2,3]    <-- WTF!?

Object.getOwnPropertyNames(a);
// Chrome: ["0","length"]
// FF:     ["0","length"]
// IE11:   ["0","length",3]    <-- WTF!?

for (var i in a) {
  console.log(i);
}
// Chrome: 0,1,2
// FF:     0,1,2
// IE11:   0,1,2
