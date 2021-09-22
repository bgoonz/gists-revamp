// var: common stylistic form, no leakage
function foo() {
  if (true) {
    var bar = 5;
  }
  bar = 3;
}

// let: will leak an auto-global
function foo() {
  if (true) {
    let bar = 5;
  }
  bar = 3;
}
