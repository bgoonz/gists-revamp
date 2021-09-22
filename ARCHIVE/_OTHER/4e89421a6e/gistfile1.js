if (!Object.delegate) {
	Object.delegate = function $delegate$(delgObj,obj) {
		if (!obj) obj = {};
		if (Object.setPrototypeOf) return Object.setPrototypeOf(obj,delgObj);
		return Object.assign(Object.create(delgObj),obj);
	}
}