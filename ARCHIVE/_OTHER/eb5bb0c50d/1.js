// most common approach, using extend(..)

var defaults = {
  url: "http://some.base.url/api",
  method: "post",
  headers: [
    "Content-Type: text/plain"
  ]
};

console.log(defaults);

// ************************

var settings = {
  url: "http://some.other.url/",
  data: 42,
  callback: function(resp) { /* .. */ }
};

// underscore extend(..)
ajax( _.extend({},defaults,settings) );

// or: ajax( Object.assign({},defaults,settings) );
