// note: `run(..)` runner as provided by any of various libs, including
// co, Q, asynquence, etc.

run(function *main() {
	var res1 = yield ajax("http://some.url.1");
	res1 = res1.toUpperCase();

	var res2 = yield ajax("http://some.url.2?v=" + res1);
	res2 += ";" + res1;

	var results = yield query(
		"select * from db where v = '" + data.res2 + "'"
	);
	
	console.log(results);
});
