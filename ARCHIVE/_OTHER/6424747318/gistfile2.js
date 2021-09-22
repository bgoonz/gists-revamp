var a = function () {
  var a =
    arguments[0] !== void 0
      ? arguments[0]
      : function (a) {
          return a;
        };
  return a;
};

var a = {
  a: function () {
    var a =
      arguments[0] !== void 0
        ? arguments[0]
        : function (a) {
            return a;
          };
    a;
  },
};
