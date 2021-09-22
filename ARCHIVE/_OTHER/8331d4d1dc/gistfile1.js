ajax("http://some.url.1",function(res1){
	res1 = res1.toUpperCase();

	ajax("http://some.url.2/?v=" + res1,function(res2){
		res2 += ";" + res1;
		
		query(
			"select * from db where v = '" + res2 + "'",
			function(results) {
				console.log(results);
			}
		);
	})
});
