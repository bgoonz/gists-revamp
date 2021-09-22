function unique(arr) {
  return (function reduce(res) {
    arr.forEach(function (cur) {
      if (res.indexOf(cur) == -1) res = res.concat([cur]);
    });
    return res;
  })([]);
}

unique([1, 5, 4, 3, 1, 6, 3, 4, 8]); // [1,5,4,3,6,8]
