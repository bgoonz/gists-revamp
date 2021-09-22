promise(function(P){
	P.fulfill("Hello");
})
.then(function(P){
	return promise(function(P2){
		P2.fulfill(P.value+" World");
	})
	.then(function(P){
		return P.value.toUpperCase();
	});
})
.then(function(P){
	console.log(P.value+"!");
});
