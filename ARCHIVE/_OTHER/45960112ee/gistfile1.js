function foo() {
   console.log(this.bar);
}

function doSomething(fn, overrideThis) {
   if (overrideThis) fn.call(overrideThis);
   else fn();
}

var bar = "bar1";
var obj1 = { bar: "bar2" };
var obj2 = { bar: "bar3" };

foo(); // "bar1"
foo.call(obj1); // "bar2";

var foo2 = foo.bind(obj1); // creates a whole new function... can be "ouch" for memory if done a lot
foo2 === foo; // false -- whole new function!
foo2(); // "bar2"
foo2.call(obj2); // "bar2" (not "bar3", `this` can't be overridden here)

doSomething( foo.bind(obj2) ); // "bar3"
doSomething( foo.bind(obj2), obj1 ); // "bar3" (`this` still can't be overriden)


// ATTENTION: new syntax proposal.
var foo3 = foo#obj1; // not a new function, just a special decorated reference to the same function
foo3 === foo; // true... same function!

foo3(); // "bar2" (defaulted `this` to `obj1`)
foo3.call(obj2); // "bar3" (`this` overridable, unlike Function.prototype.bind)

doSomething( foo#obj2 ); // "bar3"
doSomething( foo#obj2, obj1 ); // "bar2" (because `this` is still overridable)