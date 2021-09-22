// delegation

var obj1 = {
  doSomething: function () {
    console.log("Something: " + this.myId());
  },
};

var obj2 = {
  id: "obj2",
  myId: function () {
    return this.id;
  },
  doAnother: function () {
    this.doSomething();
  },
};

// link for delegation
obj2.__proto__ = obj1;
// NOTE per @ljharb: __proto__ is discouraged in favor of `Object.setPrototypeOf(..)`
//   Object.setPrototypeOf( obj2, obj1 );
// Also, could have created `obj2` with the link, like:
//   var obj2 = Object.create( obj1 );
// Downside is we lose the nicer object-literal syntax. :/

obj2.doAnother(); // Something: obj2
