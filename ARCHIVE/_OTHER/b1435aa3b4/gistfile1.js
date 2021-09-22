function spread(fn) {
  return function(args){
    fn.apply(null,args);
  };
}

// ******************

function foo(x,y) {
  console.log(x,y);
}

spread(foo)([10,20]); // 10 20

// Trying to find the Functional equivalent to `spread(..)`
// Something like:

Function.apply.bind(foo)([10,20]); // undefined undefined

// see, that doesn't quite work. help?