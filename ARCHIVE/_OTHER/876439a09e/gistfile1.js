var function_sandbox = (function (global) {
  function SubFunc(func) {
    func.__proto__ = funcPlugin;
    return func;
  }

  var funcPlugin,
    __Function = global.Function;

  // make prototype values conform to ECMA spec and inherit from regular natives
  (SubFunc.prototype = new __Function("")).__proto__ = __Function.prototype;

  // assign constructor property
  (funcPlugin = SubFunc.prototype).constructor = SubFunc;

  return SubFunc;
})(this);
