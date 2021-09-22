// the first parameter of each of these `f()` functions is unused:
//   xx, yy, zz, ww, rr, kk, aa, ss, dd, gg
// so "unused parameter" errors should be reported for all of them

var f;

f = (xx) => 3;
f = (yy = 3) => {
  var yy;
};
f = (zz = 3) => {
  var zz = 3;
};
f = (ww = 3) => {
  var ww;
  ww = 3;
};
f = (rr) => {
  var rr = 3;
};
f = (kk, mm = (kk) => kk) => mm;
f = (
  aa,
  bb = (kk = 3) => {
    kk = 3;
  }
) => bb;
f = (
  ss,
  tt = () => {
    var ss;
  }
) => tt;
f = (
  dd,
  ee = () => {
    var dd = 3;
  }
) => ee;
f = (
  gg,
  hh = () => {
    var gg;
    gg = 3;
  }
) => hh;
