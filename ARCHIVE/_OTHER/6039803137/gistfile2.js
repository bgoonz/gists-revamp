// compressed more suitable for inlining
// ~640b before gzip

(function (g, b, d) {
  var c = b.head || b.getElementsByTagName("head"),
    D = "readyState",
    E = "onreadystatechange",
    F = "DOMContentLoaded",
    G = "addEventListener",
    H = setTimeout;
  function f() {
    // $LAB stuff here
  }
  H(function () {
    if ("item" in c) {
      if (!c[0]) {
        H(arguments.callee, 25);
        return;
      }
      c = c[0];
    }
    var a = b.createElement("script"),
      e = false;
    a.onload = a[E] = function () {
      if ((a[D] && a[D] !== "complete" && a[D] !== "loaded") || e) {
        return false;
      }
      a.onload = a[E] = null;
      e = true;
      f();
    };

    a.src = "/path/to/LAB.js";

    c.insertBefore(a, c.firstChild);
  }, 0);
  if (b[D] == null && b[G]) {
    b[D] = "loading";
    b[G](
      F,
      (d = function () {
        b.removeEventListener(F, d, false);
        b[D] = "complete";
      }),
      false
    );
  }
})(this, document);
