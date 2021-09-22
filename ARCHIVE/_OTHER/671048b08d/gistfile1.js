function count_str_occurrences(str,arr) {
	var arr_str = arr.join(","),
		regex = new RegExp("(?:^|,)"+str+"(?:,|$)","g"),
		tmp;
	if (tmp = arr_str.match(regex)) {
		return tmp.length;
	}
	return 0;
}

count_str_occurrences("ab",["a", "ab", "a", "ac", "ca", "ba", "ab", "ad", "ab", "a", "ab"]); // 4