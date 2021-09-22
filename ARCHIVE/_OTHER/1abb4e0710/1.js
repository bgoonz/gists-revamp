function foo(x,y = function(){ return x; }) {
  console.log( "a:", x );
  var x = 1;
  console.log( "b:", y() );
}

foo(2);