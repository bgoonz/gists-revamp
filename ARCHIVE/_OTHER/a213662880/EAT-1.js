// EAT: Eager Async Thunk, aka "promise"

function gimmeFutureVal(x) {
  var fs = [],
    v;

  doSomethingAsync(x, function res(r) {
    if (fs.length > 0) {
      v = r;
      while (fs.length > 0) {
        fs.shift()(v);
      }
    } else v = r;
  });

  return function thunk(cb) {
    if (v) cb(v);
    else fs.push(cb);
  };
}
