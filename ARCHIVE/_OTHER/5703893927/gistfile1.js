// why doesn't this exist?
if (!Object.values) {
  Object.values = function (obj) {
    var i,
      ret = [];
    for (i in obj) {
      ret.push(obj[i]);
    }
    return ret;
  };
}

var o = {
  foo: "foo value",
  bar: "bar value",
};

Object.keys(o); // ["foo","bar"]
Object.values(o); // ["foo value","bar value"]
