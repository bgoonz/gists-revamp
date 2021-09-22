Array.prototype.toString = function () {
  return (function formatValue(x) {
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
              r.push("'" + k + "':" + formatValue(x[k]));
            }
            return r;
          }, [])
          .join(",") +
        "}"
      );
    }
    return String(x);
  })(this);
};
