function curryProps(fn, arity = 1) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      if (!nextArg || typeof nextArg != "object") {
        nextArg = { value: nextArg };
      }

      var [key] = Object.keys(nextArg);
      var args = Object.assign({}, prevArgs, { [key]: nextArg[key] });

      if (Object.keys(args).length >= arity) {
        return fn(args);
      } else {
        return nextCurried(args);
      }
    };
  })({});
}

function partialProps(fn, presetArgsObj) {
  return function partiallyApplied(laterArgsObj) {
    return fn(Object.assign({}, presetArgsObj, laterArgsObj));
  };
}

function spreadArgProps(
  fn,
  propOrder = fn
    .toString()
    .replace(
      /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/,
      "$1$2$3"
    )
    .split(/\s*,\s*/)
    .map((v) => v.replace(/[=\s].*$/, ""))
) {
  return function spreadFn(argsObj) {
    return fn(...propOrder.map((k) => argsObj[k]));
  };
}
