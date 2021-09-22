let foo = function(){ return (function*

  foo(x,y){
	return x * y;
  }

).apply(null,arguments).next().value; };

foo(3,5); // 15