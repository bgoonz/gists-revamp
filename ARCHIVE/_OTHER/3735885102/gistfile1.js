(function __3__(G) {
  var partial = G.definePartial,
    clone = G.cloneObj,
    extend = G.extend,
    cID = "3";
  partial(function __settings__($, _) {
    $ = clone($) || {};
    _ = clone(_) || {};
    var i,
      ret = "",
      ret2,
      $$;
    ret += "\n	<h1>Settings</h1>\n	";
    ret2 = (function __loop__($, _, $$) {
      function __iter__($, _, value, key, index) {
        var i,
          ret = "",
          ret2,
          $$;
        if (value == null) return ret;
        $ = clone($);
        _ = clone(_);
        $$ = {
          value: value,
          key: key,
          index: index,
          even: index % 2 === 0,
          odd: index % 2 === 1,
        };
        _.name = $$.key;
        _.setting = $$.value;
        ret += "\n		<h2>";
        ret += _.name;
        ret += "</h2>\n		";
        ret2 = (function __loop__($, _, $$) {
          function __iter__($, _, value, key, index) {
            var i,
              ret = "",
              ret2,
              $$;
            if (value == null) return ret;
            $ = clone($);
            _ = clone(_);
            $$ = {
              value: value,
              key: key,
              index: index,
              even: index % 2 === 0,
              odd: index % 2 === 1,
            };
            _.checked = {};
            var _set = ["low", "high"];
            for (i = 0; i < 2; i++) {
              _.checked[_set[i]] = _.setting === _set[i] ? "checked" : "";
            }
            ret += '\n			<input type="radio" name="';
            ret += _.name;
            ret += '" value="';
            ret += $$.value;
            ret += '" ';
            ret += _.checked[$$.value];
            ret += "> ";
            ret += $$.value;
            ret += "\n		";
            return ret;
          }
          var i,
            j = 0,
            ret = "";
          var _set = ["low", "high"];
          for (i = 0; i < 2; i++) {
            ret2 = __iter__($, _, _set[i], i);
            ret += ret2;
          }
          return ret;
        })(clone($), clone(_), clone($$));
        ret += ret2;
        ret += "\n	";
        return ret;
      }
      var i,
        j = 0,
        ret = "";
      if (Object.prototype.toString.call($.settings) === "[object Array]") {
        for (i = 0; i < $.settings.length; i++) {
          ret2 = __iter__($, _, $.settings[i], i, i);
          ret += ret2;
        }
      } else if (typeof $.settings === "object") {
        for (i in $.settings) {
          if ($.settings.hasOwnProperty(i)) {
            ret2 = __iter__($, _, $.settings[i], i, j++);
            ret += ret2;
          }
        }
      } else {
        return new Error("Unknown error");
      }
      return ret;
    })(clone($), clone(_), clone($$));
    ret += ret2;
    ret += "\n";
    return ret;
  }, "3#settings");
  partial(function __baz__($, _) {
    $ = clone($) || {};
    _ = clone(_) || {};
    var i,
      ret = "",
      ret2,
      $$;
    ret += "BAZ!";
    return ret;
  }, "3#baz");
})(this.grips);
(function __4__(G) {
  var partial = G.definePartial,
    clone = G.cloneObj,
    extend = G.extend,
    cID = "4";
  extend(cID, "3");
  partial(function __foobar__($, _) {
    $ = clone($) || {};
    _ = clone(_) || {};
    var i,
      ret = "",
      ret2,
      $$;
    _.foobar = {};
    for (i = 0; i <= 3; i++) {
      _.foobar[i] = $.blah === i ? "yes" : "no";
    }
    ret += "\n	";
    ret2 = (function __loop__($, _, $$) {
      function __iter__($, _, value, key, index) {
        var i,
          ret = "",
          ret2,
          $$;
        if (value == null) return ret;
        $ = clone($);
        _ = clone(_);
        $$ = {
          value: value,
          key: key,
          index: index,
          even: index % 2 === 0,
          odd: index % 2 === 1,
        };
        ret += "\n		";
        ret += $$.key;
        ret += ": ";
        ret += $$.value;
        ret += "\n	";
        return ret;
      }
      var i,
        j = 0,
        ret = "";
      if (Object.prototype.toString.call(_.foobar) === "[object Array]") {
        for (i = 0; i < _.foobar.length; i++) {
          ret2 = __iter__($, _, _.foobar[i], i, i);
          ret += ret2;
        }
      } else if (typeof _.foobar === "object") {
        for (i in _.foobar) {
          if (_.foobar.hasOwnProperty(i)) {
            ret2 = __iter__($, _, _.foobar[i], i, j++);
            ret += ret2;
          }
        }
      } else {
        return new Error("Unknown error");
      }
      return ret;
    })(clone($), clone(_), clone($$));
    ret += ret2;
    ret += "\n";
    return ret;
  }, "4#foobar");
  partial(function __baz__($, _) {
    $ = clone($) || {};
    _ = clone(_) || {};
    var i,
      ret = "",
      ret2,
      $$;
    ret += "\n	";
    ret2 = $;
    ret2 = G.render("3#baz", ret2, _);
    ret += ret2;
    ret += "!!!!!!!\n";
    return ret;
  }, "4#baz");
})(this.grips);
(function __5__(G) {
  var partial = G.definePartial,
    clone = G.cloneObj,
    extend = G.extend,
    cID = "5";
  extend(cID, "4");
  partial(function __foobar2__($, _) {
    $ = clone($) || {};
    _ = clone(_) || {};
    var i,
      ret = "",
      ret2,
      $$;
    ret += "\n	Hello World\n	";
    ret2 = $;
    ret2 = G.render("5#baz", ret2, _);
    ret += ret2;
    ret += "\n	";
    ret2 = $;
    ret2 = G.render("5#foobar", ret2, _);
    ret += ret2;
    ret += "\n";
    return ret;
  }, "5#foobar2");
})(this.grips);
