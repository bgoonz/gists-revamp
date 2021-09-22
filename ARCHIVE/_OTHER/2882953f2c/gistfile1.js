function cloneObj(obj) {
	var clone;
	if (Object.prototype.toString.call(obj) === "[object Array]") {
		clone = [];
		for (var i=0, len=obj.length; i<len; i++) {
			clone[i] = cloneObj(obj[i]);
		}
	}
	else if (obj == null) {
		clone = obj;
	}
	else if (typeof obj === "object") {
		clone = {};
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) clone[i] = cloneObj(obj[i]);
		}
	}
	else {
		clone = obj;
	}
	return clone;
}
