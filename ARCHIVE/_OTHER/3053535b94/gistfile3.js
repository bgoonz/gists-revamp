promise(function(P){
	Load("abc.js",P.fulfill);
})
.then(function(P){
	return promise(function(P2){
		setTimeout(function(){
			P2.fulfill(P.value);
		},2000);
	});
})
.then(function(P){
	return P.value.toUpperCase();
})
.then(function(P){
	return promise(function(P2) {
		setTimeout(function(){
			P2.fulfill(P.value);
		},1000);
	})
	.then(function(P){
		return P.value+"!";
	});
})
.then(function(P){
	// do nothing -- silently pass along P.value
})
.then(function(P){
	console.log(P.value);
}); 
