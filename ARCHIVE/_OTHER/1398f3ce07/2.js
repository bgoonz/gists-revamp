function thenify(errFirstCB) {
  return [
    function tf(v) {
      errFirstCB.call(this, undefined, v);
    },
    function cf(e) {
      errFirstCB.call(this, e);
    },
  ];
}
