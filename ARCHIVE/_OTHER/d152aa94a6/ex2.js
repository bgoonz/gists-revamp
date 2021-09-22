var buffer;

function handle(v) {
  buffer = v;
}

SOMETHING_ASYNC(function(v){
  handle(v);
});

SOMETHING_ELSE_ASYNC(function(cb){
  if (buffer === undefined) handle = cb;
  else cb(buffer);
});