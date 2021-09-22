function foo() {
  "use strict";
  var a = 2;
  var a = 3;
}

foo(); // no error thrown in FF or Chrome
