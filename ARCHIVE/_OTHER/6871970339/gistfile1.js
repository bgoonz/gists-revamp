var a = [
  {
    // Look, ma, no `this`
    foo: function foo() {
      setTimeout(foo, 100);
      console.log("foo");
    },
  },
];

var b = [
  {
    // shorthand method syntax is nice, but introduces `this` issues
    // because of lack of lexical name binding
    foo() {
      setTimeout(this.foo, 100); // ** uglier this.foo
      console.log("foo");
    },
  },
];
