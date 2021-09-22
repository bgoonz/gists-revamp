// core JS extensions for SSJS

(function(imports){
	var global = this,
		FS, 
		imports_names = [],
		imports_funcs = []
	;
	
	for (var i in imports) {
		if (imports.hasOwnProperty(i))	{
			imports_names[imports_names.length] = i;
			imports_funcs[imports_funcs.length] = imports[i];
		}
	}

	global.require = function(module) {
		var source;
		// read source from file

		if (!FS) {
			source = imports.FSREAD("modules/fs.js");
			FS = Function.apply(Function,imports_names.concat([source])).apply(Function,imports_funcs);
		}
		
		if (module !== "fs") {
			source = FS.read("modules/"+module+".js");
			return Function.apply(Function,imports_names.concat([source])).apply(Function,imports_funcs);
		}
		return FS;
	};
	
	global.promise = function() {
	};

	var SYSTEM = global.require("system");
		
})