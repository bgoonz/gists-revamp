function formatValue(x) {
  var ret;

  if (typeof x == "string") {
    return "'" + x.replace(/\n/g, "\\n") + "'";
  }
  if (typeof x == "number" && x === 0 && 1 / x === -Infinity) {
    return "-0";
  }
  if (Array.isArray(x)) {
    return "[" + x.map(formatValue).join(",") + "]";
  }
  if (x !== null && typeof x == "object") {
    return (
      "{" +
      Object.keys(x)
        .reduce(function (r, k) {
          if (k != "toString" && k != "valueOf") {
            r.push(k + ":" + formatValue(x[k]));
          }
          return r;
        }, [])
        .join(",") +
      "}"
    );
  }
  return String(x);
}

var objsymbolkey = {};
objsymbolkey[Symbol("")] = null;

var vals = [
  [0, "0"],
  [0.0, ".0"],
  [-0, "-0"],
  [NaN, "NaN"],
  ["", "''"],
  ["  ", "'  '"],
  ["\n\n", "'\\n\\n'"],
  [null, "null"],
  [undefined, "undefined"],
  [true, "true"],
  [false, "false"],
  [/ /, "/ /"],
  [Infinity, "Infinity"],
  [-Infinity, "-Infinity"],
  ["Infinity", "'Infinity'"],
  ["-Infinity", "'-Infinity'"],
  [function () {}, "function(){}"],
  [Symbol(""), "Symbol('')"],

  [[], "[]"],
  [[0], "[0]"],
  [[0.0], "[.0]"],
  [[-0], "[-0]"],
  [[NaN], "[NaN]"],
  [[""], "['']"],
  [["  "], "['  ']"],
  [["\n\n"], "['\\n\\n']"],
  [[null], "[null]"],
  [[undefined], "[undefined]"],
  [[false], "[false]"],
  [[true], "[true]"],
  [[/ /], "[/ /]"],
  [[,], "[,]"],
  [[[]], "[[]]"],
  [[Infinity], "[Infinity]"],
  [[-Infinity], "[-Infinity]"],
  [["Infinity"], "['Infinity']"],
  [["-Infinity"], "['-Infinity']"],
  [[function () {}], "[function(){}]"],
  [[Symbol("")], "[Symbol('')]"],

  [{}, "{}"],
  [Object.create(null), "Object.create(null)"],
  [{ "": null }, "{'':null}"],
  [{ "": undefined }, "{'':undefined}"],
  [{ "": function () {} }, "{'':function(){}}"],
  [{ "  ": null }, "{'  ':null}"],
  [{ "\n\n": null }, "{'\\n\\n':null}"],
  [objsymbolkey, "{Symbol(''):null}"],

  [
    {
      toString: function () {
        return 0;
      },
    },
    "{ toString: 0 }",
  ],
  [
    {
      toString: function () {
        return 0.0;
      },
    },
    "{ toString: .0 }",
  ],
  [
    {
      toString: function () {
        return -0;
      },
    },
    "{ toString: -0 }",
  ],
  [
    {
      toString: function () {
        return NaN;
      },
    },
    "{ toString: NaN }",
  ],
  [
    {
      toString: function () {
        return "";
      },
    },
    "{ toString: '' }",
  ],
  [
    {
      toString: function () {
        return "  ";
      },
    },
    "{ toString: '  ' }",
  ],
  [
    {
      toString: function () {
        return "\n\n";
      },
    },
    "{ toString: '\\n\\n' }",
  ],
  [
    {
      toString: function () {
        return null;
      },
    },
    "{ toString: null }",
  ],
  [
    {
      toString: function () {
        return undefined;
      },
    },
    "{ toString: undefined }",
  ],
  [
    {
      toString: function () {
        return false;
      },
    },
    "{ toString: false }",
  ],
  [
    {
      toString: function () {
        return true;
      },
    },
    "{ toString: true }",
  ],
  [
    {
      toString: function () {
        return [];
      },
    },
    "{ toString: [] }",
  ],
  [
    {
      toString: function () {
        return {};
      },
    },
    "{ toString: {} }",
  ],
  [
    {
      toString: function () {
        return / /;
      },
    },
    "{ toString: / / }",
  ],
  [
    {
      toString: function () {
        return Infinity;
      },
    },
    "{ toString: Infinity }",
  ],
  [
    {
      toString: function () {
        return -Infinity;
      },
    },
    "{ toString: -Infinity }",
  ],
  [
    {
      toString: function () {
        return "Infinity";
      },
    },
    "{ toString: 'Infinity' }",
  ],
  [
    {
      toString: function () {
        return "-Infinity";
      },
    },
    "{ toString: '-Infinity' }",
  ],
  [
    {
      toString: function () {
        return function () {};
      },
    },
    "{ toString: function(){} }",
  ],
  [
    {
      toString: function () {
        return Symbol("");
      },
    },
    "{ toString: Symbol('') }",
  ],

  [
    {
      toString: function () {
        return 0;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: 0, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return 0.0;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: .0, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return -0;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: -0, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return NaN;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: NaN, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return "";
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: '', valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return "  ";
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: '  ', valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return "\n\n";
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: '\\n\\n', valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return null;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: null, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return undefined;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: undefined, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return false;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: false, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return true;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: true, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return [];
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: [], valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return {};
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: {}, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return / /;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: / /, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return Infinity;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: Infinity, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return -Infinity;
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: -Infinity, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return "Infinity";
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: 'Infinity', valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return "-Infinity";
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: '-Infinity', valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return function () {};
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: function(){}, valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return Symbol("");
      },
      valueOf: function () {
        return {};
      },
    },
    "{ toString: Symbol(''), valueOf: {} }",
  ],
  [
    {
      toString: function () {
        return NaN;
      },
      valueOf: function () {
        return Infinity;
      },
    },
    " { toString: NaN, valueOf: Infinity }",
  ],

  [
    {
      valueOf: function () {
        return 0;
      },
    },
    "{ valueOf: 0 }",
  ],
  [
    {
      valueOf: function () {
        return 0.0;
      },
    },
    "{ valueOf: .0 }",
  ],
  [
    {
      valueOf: function () {
        return -0;
      },
    },
    "{ valueOf: -0 }",
  ],
  [
    {
      valueOf: function () {
        return NaN;
      },
    },
    "{ valueOf: NaN }",
  ],
  [
    {
      valueOf: function () {
        return "";
      },
    },
    "{ valueOf: '' }",
  ],
  [
    {
      valueOf: function () {
        return "  ";
      },
    },
    "{ valueOf: '  ' }",
  ],
  [
    {
      valueOf: function () {
        return "\n\n";
      },
    },
    "{ valueOf: '\\n\\n' }",
  ],
  [
    {
      valueOf: function () {
        return null;
      },
    },
    "{ valueOf: null }",
  ],
  [
    {
      valueOf: function () {
        return undefined;
      },
    },
    "{ valueOf: undefined }",
  ],
  [
    {
      valueOf: function () {
        return false;
      },
    },
    "{ valueOf: false }",
  ],
  [
    {
      valueOf: function () {
        return true;
      },
    },
    "{ valueOf: true }",
  ],
  [
    {
      valueOf: function () {
        return [];
      },
    },
    "{ valueOf: [] }",
  ],
  [
    {
      valueOf: function () {
        return {};
      },
    },
    "{ valueOf: {} }",
  ],
  [
    {
      valueOf: function () {
        return / /;
      },
    },
    "{ valueOf: / / }",
  ],
  [
    {
      valueOf: function () {
        return Infinity;
      },
    },
    "{ valueOf: Infinity }",
  ],
  [
    {
      valueOf: function () {
        return -Infinity;
      },
    },
    "{ valueOf: -Infinity }",
  ],
  [
    {
      valueOf: function () {
        return "Infinity";
      },
    },
    "{ valueOf: 'Infinity' }",
  ],
  [
    {
      valueOf: function () {
        return "-Infinity";
      },
    },
    "{ valueOf: '-Infinity' }",
  ],
  [
    {
      valueOf: function () {
        return function () {};
      },
    },
    "{ valueOf: function(){} }",
  ],
  [
    {
      valueOf: function () {
        return Symbol("");
      },
    },
    "{ valueOf: Symbol('') }",
  ],

  [
    {
      valueOf: function () {
        return 0;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: 0, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return 0.0;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: .0, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return -0;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: -0, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return NaN;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: NaN, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return "";
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: '', toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return "  ";
      },
      toString: function () {
        return "  ";
      },
    },
    "{ valueOf: '  ', toString: '  ' }",
  ],
  [
    {
      valueOf: function () {
        return "\n\n";
      },
      toString: function () {
        return "\n\n";
      },
    },
    "{ valueOf: '\\n\\n', toString: '\\n\\n' }",
  ],
  [
    {
      valueOf: function () {
        return null;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: null, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return undefined;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: undefined, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return false;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: false, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return true;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: true, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return [];
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: [], toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return {};
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: {}, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return / /;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: / /, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return Infinity;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: Infinity, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return -Infinity;
      },
      toString: function () {
        return "";
      },
    },
    "{ valueOf: -Infinity, toString: '' }",
  ],
  [
    {
      valueOf: function () {
        return "Infinity";
      },
      toString: function () {
        return "Infinity";
      },
    },
    "{ valueOf: 'Infinity', toString: 'Infinity' }",
  ],
  [
    {
      valueOf: function () {
        return "-Infinity";
      },
      toString: function () {
        return "-Infinity";
      },
    },
    "{ valueOf: '-Infinity', toString: '-Infinity' }",
  ],
  [
    {
      valueOf: function () {
        return function () {};
      },
      toString: function () {
        return function () {};
      },
    },
    "{ valueOf: function(){}, toString: function(){} }",
  ],
  [
    {
      valueOf: function () {
        return Symbol("");
      },
      toString: function () {
        return Symbol("");
      },
    },
    "{ valueOf: Symbol(''), toString: Symbol('') }",
  ],
];

var coercions = [
  [
    function (x) {
      return String(x);
    },
    "String(x)",
  ],
  [
    function (x) {
      return x + "";
    },
    "x + ''",
  ],
  [
    function (x) {
      return JSON.stringify(x);
    },
    "JSON.stringify(x)",
  ],
  [
    function (x) {
      return x.toString();
    },
    "x.toString()",
  ],
  [
    function (x) {
      return {}.toString.call(x);
    },
    "{}.toString.call(x)",
  ],

  [
    function (x) {
      return Number(x);
    },
    "Number(x), +x",
  ],
  [
    function (x) {
      return x + 0;
    },
    "x + 0",
  ],
  [
    function (x) {
      return x * 1;
    },
    "x * 1",
  ],
  [
    function (x) {
      return x | 0;
    },
    "x | 0",
  ],
  [
    function (x) {
      return ~~x;
    },
    "~~x",
  ],
  [
    function (x) {
      return x >>> 0;
    },
    "x >>> 0",
  ],

  [
    function (x) {
      return Boolean(x);
    },
    "Boolean(x) , !!x",
  ],
];

var table = [];

// construct top row labels
table[0] = [""];
table[0] = table[0].concat(
  coercions.map(function (f) {
    return f[1];
  })
);

table = table.concat(
  vals.map(function (v) {
    return [v[1]].concat(
      coercions.map(function (f, x) {
        try {
          x = f[0](v[0]);
        } catch (e) {
          return "__";
        }
        return formatValue(x);
      })
    );
  })
);

console.table(table);
