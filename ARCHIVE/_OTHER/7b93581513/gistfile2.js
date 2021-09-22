// Request all URLs at once in "parallel"
var p1 = prAjax("url1");
var p2 = prAjax("url2");
var p3 = prAjax("url3");

// Render as each one finishes,
// but only once previous rendering
// is done.
p1.then(output)
  .then(function () {
    return p2;
  })
  .then(output)
  .then(function () {
    return p3;
  })
  .then(output)
  .then(function () {
    output("Complete!");
  });
