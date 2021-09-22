var buffer, fn;
  
SOMETHING_ASYNC(arg,function(val){
  if (fn) fn(val);
  else buffer = val;
});
  
SOMETHING_ELSE_ASYNC(function(cb){
  if (buffer === undefined) fn = cb;
  else cb(buffer);
});