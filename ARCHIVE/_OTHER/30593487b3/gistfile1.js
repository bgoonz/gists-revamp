var Require = function () {
  function NativeRequire(module) {
    var source;
    // read source from file

    if (!FS) {
      source = imports.FSREAD("modules/fs.js");
      FS = Function.apply(Function, imports_names.concat([source])).apply(
        Function,
        imports_funcs
      );
    }

    if (module !== "fs") {
      source = FS.read("modules/" + module + ".js");
      return Function.apply(Function, imports_names.concat([source])).apply(
        Function,
        imports_funcs
      );
    }
    return FS;
  }

  function SubClass() {}
  NativeRequire.prototype = SubClass.prototype;
  NativeRequire.prototype.constructor = Require;

  return NativeRequire;
};

var myrequire = new Require();

require("something"); // works

console.log(myrequire.constructor === Require);
