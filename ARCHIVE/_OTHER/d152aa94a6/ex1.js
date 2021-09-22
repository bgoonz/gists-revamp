var WHAT_IS_THIS_PATTERN = (function(){
  var buffer;
  
  SOMETHING_ASYNC(function(v){
    if (buffer === undefined) buffer = v;
    else buffer(v);
  });
  
  return function(cb) {
    if (buffer === undefined) buffer = cb;
    else cb(buffer);
  };
})();


// later:
WHAT_IS_THIS_PATTERN(function(val){
  // ..
});