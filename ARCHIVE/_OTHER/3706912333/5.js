// Here's the same template code from above generation, but without the
// debugging guards.

(function (G) {
  function __sort_fn__(a, b) {
    return a - b;
  }
  var partial = G.definePartial,
    clone = G.cloneObj,
    extend = G.extend,
    esc = G.strEscapes,
    unerr = new Error("Unknown error"),
    RLH = G.RangeLiteralHash,
    cID = "3.html";
  partial(function ($, $$) {
    $ = $ || {};
    $$ = clone($$) || {};
    var i,
      ret = "",
      ret2,
      _;
    ret += "\n    <h1>Settings</h1>\n    ";
    ret2 = (function () {
      function __iter__($, $$, value, key, index) {
        var i,
          ret = "",
          ret2,
          _;
        if (value == null) return ret;
        $$ = clone($$);
        _ = {
          value: value,
          key: key,
          index: index,
          even: index % 2 === 0,
          odd: index % 2 === 1,
          first: index === 0,
          last: index === len - 1,
        };
        $$.name = _.key;
        $$.options = {};
        var _set = ["low", "high"];
        for (i = 0; i < 2; i++) {
          $$.options[_set[i]] = _.value === _set[i] ? "checked" : "";
        }
        ret += "\n        <h2>";
        ret += $$.name;
        ret += "</h2>\n        ";
        ret2 = (function () {
          function __iter__($, $$, value, key, index) {
            var i,
              ret = "",
              ret2,
              _;
            if (value == null) return ret;
            $$ = clone($$);
            _ = {
              value: value,
              key: key,
              index: index,
              even: index % 2 === 0,
              odd: index % 2 === 1,
              first: index === 0,
              last: index === len - 1,
            };
            ret += '\n            <input type="radio" name="';
            ret += $$.name;
            ret += '" value="';
            ret += _.key;
            ret += '" ';
            ret += _.value;
            ret += "> ";
            ret += _.key;
            ret += "\n        ";
            return ret;
          }
          var i,
            j = 0,
            len,
            ret = "",
            it,
            tmp;
          it = $$.options;
          if (it == null) {
            return "";
          }
          if (Object.prototype.toString.call(it) === "[object Array]") {
            len = it.length;
            for (i = 0; i < len; i++) {
              ret2 = __iter__($, $$, it[i], "" + i, i);
              ret += ret2;
            }
          } else if (typeof it === "object") {
            tmp = Object.keys(it);
            len = tmp.length;
            if (it instanceof RLH) {
              tmp.sort(__sort_fn__);
              for (i = 0; i < len; i++) {
                ret2 = __iter__($, $$, it[tmp[i]], tmp[i], i);
                ret += ret2;
              }
            } else {
              for (i in it) {
                if (it.hasOwnProperty(i)) {
                  ret2 = __iter__($, $$, it[i], i, j++);
                  ret += ret2;
                }
              }
            }
          } else {
            return unerr;
          }
          return ret;
        })();
        ret += ret2;
        ret += "\n    ";
        return ret;
      }
      var i,
        j = 0,
        len,
        ret = "",
        it,
        tmp;
      it = $.settings;
      if (it == null) {
        return "";
      }
      if (Object.prototype.toString.call(it) === "[object Array]") {
        len = it.length;
        for (i = 0; i < len; i++) {
          ret2 = __iter__($, $$, it[i], "" + i, i);
          ret += ret2;
        }
      } else if (typeof it === "object") {
        tmp = Object.keys(it);
        len = tmp.length;
        if (it instanceof RLH) {
          tmp.sort(__sort_fn__);
          for (i = 0; i < len; i++) {
            ret2 = __iter__($, $$, it[tmp[i]], tmp[i], i);
            ret += ret2;
          }
        } else {
          for (i in it) {
            if (it.hasOwnProperty(i)) {
              ret2 = __iter__($, $$, it[i], i, j++);
              ret += ret2;
            }
          }
        }
      } else {
        return unerr;
      }
      return ret;
    })();
    ret += ret2;
    ret += "\n";
    return ret;
  }, "3.html#settings");
})(this.grips || grips);
