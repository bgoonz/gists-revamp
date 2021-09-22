// standard FP utilities

function apply(fn) {
   return function appliedFn(args){
      return fn( ...args );
   };
}

function binary(fn) {
   return function onlyTwo(arg1,arg2) {
      return fn(arg1,arg2);
   };
}

function flip(fn) {
   return function flipped(arg1,arg2,...rest) {
      return fn(arg2,arg1,...rest);
   };
}

function reduce(reducer) {
   return function withInitial(initialVal){
      return function overArr(arr){
         return arr.reduce(reducer,initialVal);
      };
   };
}

function setProp(name,val,obj) {
   var o = Object.assign( {}, obj );
   o[name] = val;
   return o;
}

function uncurry(fn) {
   return function uncurried(...args){
      var ret = fn;

      for (let i = 0; i < args.length; i++) {
         ret = ret( args[i] );
      }

      return ret;
   };
}

function partial(fn) {
   return function collectArgs(...presetArgs) {
      return function partiallyApplied(...laterArgs){
         return fn( ...presetArgs, ...laterArgs );
      };
   };
}

function compose(...fns) {
    return fns.reduceRight( function reducer(fn1,fn2){
        return function composed(...args){
            return fn2( fn1( ...args ) );
        };
    } );
}