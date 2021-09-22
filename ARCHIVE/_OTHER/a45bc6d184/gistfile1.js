(function(){
	function alerts(msg) {
		return new Promise(function(resolve){
			div.innerHTML = msg;
			div.style.display = "block";
			div.onclick = function(){
				div.style.display = "none";
				resolve();
			};
		});
	}
	
	var div = document.createElement("div");
	document.body.appendChild(div);
})();