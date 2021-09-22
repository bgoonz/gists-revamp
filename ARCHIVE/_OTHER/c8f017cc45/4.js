// curried functions could still be expressions, even anonymous or arrows:

foo( function fn(x)(y)(z){ return x * y / z; } );
foo( function(x)(y)(z){ return x * y / z; } );
foo( (x)(y)(z) => x * y / z );

// and still be concise methods/class methods/etc:

var o = {
  fn(x)(y)(z) { return x * y / z; }
};

// and still support multiple parameters at each level if you want:

function fn(x,y)(z) { return x * y / z; }