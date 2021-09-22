function collectLikes(arr) {
	var i, j, type;
	arr = Array.prototype.slice.call(arr);

	for (i=0; i<arr.length; i++) {
		type = typeof arr[i];

		for (j=i+1; j<arr.length; j++) {
			if (typeof arr[j] !== type) {
				break;
			}
		}
		if (j > i + 1) {			// <---- ADDED THIS IF
			arr.splice(
				/*start=*/i,
				/*howMany=*/j-i,
				/*replace=*/arr.slice(i,j)
			);
		}					// <----
	}
	return arr;
}