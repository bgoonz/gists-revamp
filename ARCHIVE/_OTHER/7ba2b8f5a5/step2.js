function add1(v) { return v + 1; }
function isOdd(v) { return v % 2 == 1; }
function sum(total,v) { return total + v; }

function listReduction(list,v) {
	list.push(v);
	return list;
}

function mapReducer(mapperFn) {
	return function(reductionFn){
		return function(list,v){
			return reductionFn( list, mapperFn(v) );
		};
	};
}

function filterReducer(predicateFn) {
	return function(reductionFn){
		return function(list,v){
			if (predicateFn(v)) return reductionFn( list, v );
			return list;
		};
	};
}

var list = [2,5,8,11,14,17,20];

list
.reduce( mapReducer(add1)(listReduction), [] )
.reduce( filterReducer(isOdd)(listReduction), [] )
.reduce( sum );
// 48