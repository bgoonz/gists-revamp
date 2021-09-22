var a = [{val:1},{val:2},{val:3},{},{val:5},{val:6},{val:7}];

a.filter(function filterer(o){
  return !!o.val;
})
.map(function eacher(o){      // <-- should be a forEach
  o.orig = o.val;
  o.val = Math.max(o.val * 3, 10);
  return o;                   // <-- stupid
  
  // but even dumber (aka, more wasteful):
  // return { orig: o.val, val: Math.max(o.val * 3, 10) };
})
.filter(function filterer(o){
  return o.val % 2 == 0;
})
.map(function mapper(o){
  return o.val;
})
.reduce(function reducer(sum,val){
  return sum + val;
},0);

// 36