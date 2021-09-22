if (!JSON.pretty) {
	JSON.pretty = function jsonpretty(o,f,indent) {
		f = (f !== undefined) ? f : null;
		indent = (indent !== undefined) ? indent : "\t";
		return JSON.stringify(o,f,indent);
	};
}