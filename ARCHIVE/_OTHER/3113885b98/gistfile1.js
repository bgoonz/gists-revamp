function abc() {
  var u = 12;
  return function () {
    eval("alert(u);");
  };
}

var blah = abc();
blah();
