function doSomethingDynamic(fn,obj) {
  fn.call(obj);
}

var a = new Foo("hello");   // works
var b = new Bar("hello");   // works

var c = {};
var d = {};
doSomethingDynamic(Foo,c);  // works
doSomethingDynamic(Bar,d);  // error!