// instead, IMO better using destructuring and defaults

var defaults = ajaxOptions(); // with no arguments, returns the defaults as an object if necessary

console.log(defaults);

// ************************

var settings = {
  url: "http://some.other.url/",
  data: 42,
  callback: function (resp) {
    /* .. */
  },
};

ajax(ajaxOptions(settings)); // with an argument, mixes in the settings w/ the defaults

// ************************

function ajaxOptions({
  url = "http://some.base.url/api",
  method = "post",
  data,
  callback,
  headers: [headers0 = "Content-Type: text/plain", ...otherHeaders] = [],
} = {}) {
  return {
    url,
    method,
    data,
    callback,
    headers: [headers0, ...otherHeaders],
  };
}
