console.log("[ ]",collectLikes([]));
// [ ]
// [ ]

console.log("[ 1 ]",collectLikes([1]));
// [ 1 ]
// [ [ 1 ] ]

console.log("[ 1, 2, 3 ]",collectLikes([1,2,3]));
// [ 1, 2, 3 ]
// [ [ 1, 2, 3 ] ]

console.log("[ 1, 2, '3', '4', '5', 6, true ]",collectLikes([1,2,'3','4','5',6,true]));
// [ 1, 2, '3', '4', '5', 6, true ]
// [ [ 1, 2 ], [ '3', '4', '5' ], 6, true ]

console.log("[ 1, '2', 3, true, false, null ]",collectLikes([1,'2',3,true,false,null]));
// [ 1, '2', 3, true, false, null ]
// [ 1, '2', 3, [ true, false ], null ]