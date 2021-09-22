// run xhrcall and the delay in parallel, wait for both to fulfill,
// then alert the xhr response

var a = xhrcall();
var b = delay(10);

a.then(function (P) {
  return b.then(P.value);
}).then(function (P) {
  alert(P.value);
});
