function deepMerge(target,source) {
	if (Array.isArray(source)) {
		for (var i=0; i<source.length; i++) {
			mergeSlot(i,target,source);
		}
	}
	else if (source && typeof source == "object") {
		var keys = Object.getOwnPropertyNames(source);
		for (var i=0; i<keys.length; i++) {
			mergeSlot(keys[i],target,source);
		}
	}
}

function mergeSlot(key,target,source) {
	if (target && typeof target == "object") {
		if (typeof source[key] == "object") {
			if (!(key in target)) {
				target[key] = Array.isArray(source[key]) ? [] : {};
			}

			deepMerge(target[key],source[key]);
		}
		else if (!(key in target)) {
			target[key] = source[key];
		}
	}
}
