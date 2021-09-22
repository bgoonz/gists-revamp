function add1(v) { return v + 1; }
function isOdd(v) { return v % 2 == 1; }
function sum(total,v) { return total + v; }

var list = [2,5,8,11,14,17,20];

list
.map( add1 )
.filter( isOdd )
.reduce( sum );
// 48