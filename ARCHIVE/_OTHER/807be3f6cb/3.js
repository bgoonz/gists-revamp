function ajax(method, url, callback) {
  // ..
}

var pr = makePromise(ajax, "GET", "http://some.url.1/");
var th = makeThunk(ajax, "GET", "http://some.url.2/");

pr.then(function resp([text, statusCode]) {
  console.log(`${statusCode}: ${text}`);
});

th(function resp(text, statusCode) {
  console.log(`${statusCode}: ${text}`);
});
