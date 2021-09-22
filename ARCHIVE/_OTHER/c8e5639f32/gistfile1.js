function* foo() {
  var x = 2 instanceof (yield);
  console.log(x);
}

function Foo() {}
Object.defineProperty(Foo, Symbol.hasInstance, {
  value: function (inst) {
    return inst.bar == "foo";
  },
});

Number.prototype.bar = "foo";

var it = foo();

it.next();

Number.prototype.bar = "bar";

it.next(Foo);
