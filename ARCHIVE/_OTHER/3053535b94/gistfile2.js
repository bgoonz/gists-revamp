var Load = function(src,cb) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET",src);
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4) {
			cb(xhr.responseText);
		}
	};
	xhr.send();
};