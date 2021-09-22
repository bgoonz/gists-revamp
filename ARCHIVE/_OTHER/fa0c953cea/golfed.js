// 96 characters, from @sainaen, @rreverser, others:

function add(a,s){return(a=add.bind(0,s=[].join.call(arguments,'+'))).toString=eval.bind(0,s),a}

add() + 0;                  // NaN
add(1) + 0;                 // 1
add(1,2) + 0;               // 3
add(1)(2) + 0;              // 3
add(1,2)(3) + 0;            // 6
add()()(1,2)()(3) + 0;      // 6
add(1,2)(3)(4,5)(6) + 0;    // 21