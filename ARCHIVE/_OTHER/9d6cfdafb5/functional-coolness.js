function makeFn(v) {
  return function () {
    return v;
  };
}
function add(x, y) {
  return x + y;
}
function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

function compose3(fn1, fn2, fn3) {
  return function () {
    return fn1(fn2, fn3);
  };
}

var addFunctions = compose3.bind(null, add2);

function addn(fns) {
  return fns.reduce(addFunctions)();
}

addn([1, 2, 3, 4, 5].map(makeFn));

// function addn(fns) {
// 	var list = fns.slice(0);
// 	while (list.length > 2) {

// 		(function(){
// 			var listCopy = list.slice(0);

// 			list = [
// 				function() {
// 					return add2( listCopy[0], listCopy[1] );
// 				}
// 			].concat(list.slice(2));
// 		})();
// 	}

// 	return add2( list[0], list[1] );
// }

// function addn(fns) {
// 	if (fns.length == 2) return add2(fns[0],fns[1]);

// 	return addn(
// 		[
// 			function() {
// 				return add2(fns[0],fns[1]);
// 			}
// 		]
// 		.concat(fns.slice(2))
// 	);
// }
