class P {
  foo() {
    console.log("P 'foo'");
  }
}

class C extends P {
  foo() {
    super();
  }
}

var c1 = new C();
c1.foo(); // "P 'foo'"

var D = {
  foo: function () {
    console.log("D 'foo'");
  },
};

var E = {
  foo: C.prototype.foo.toMethod(E, "foo"),
};

// Link E to D for delegation
Object.setPrototypeOf(E, D);

E.foo(); // D 'foo'
