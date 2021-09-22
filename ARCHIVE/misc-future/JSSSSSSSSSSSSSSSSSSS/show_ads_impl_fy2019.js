(function (sttc) {
  /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
  "use strict";
  var q,
    aa = {},
    t = this || self;

  function ba() {}

  function ca(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }

  function ea(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }

  function fa(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, ha) && a[ha]) || (a[ha] = ++ia)
    );
  }
  var ha = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    ia = 0;

  function ja(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }

  function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }

  function la(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (la = ja)
      : (la = ka);
    return la.apply(null, arguments);
  }

  function ma(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }

  function na() {
    return Date.now();
  }

  function oa(a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }

  function pa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.$h = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Sh = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }

  function qa(a) {
    return a;
  }

  function ra(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ra);
    else {
      const b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  pa(ra, Error);
  ra.prototype.name = "CustomError";
  var sa;

  function ta(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    ra.call(this, c + a[d]);
  }
  pa(ta, ra);
  ta.prototype.name = "AssertionError";

  function ua() {
    return !1;
  }

  function wa() {
    return !0;
  }

  function xa(a) {
    const b = arguments,
      c = b.length;
    return function () {
      for (let d = 0; d < c; d++) if (!b[d].apply(this, arguments)) return !1;
      return !0;
    };
  }

  function ya(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }

  function za(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }

  function Aa(a) {
    let b = a;
    return function () {
      if (b) {
        const c = b;
        b = null;
        c();
      }
    };
  }

  function Ba(a, b) {
    let c = 0;
    return function (d) {
      t.clearTimeout(c);
      const e = arguments;
      c = t.setTimeout(function () {
        a.apply(b, e);
      }, 63);
    };
  }

  function Ca(a, b) {
    function c() {
      e = t.setTimeout(d, 63);
      let h = g;
      g = [];
      a.apply(b, h);
    }

    function d() {
      e = 0;
      f && ((f = !1), c());
    }
    let e = 0,
      f = !1,
      g = [];
    return function (h) {
      g = arguments;
      e ? (f = !0) : c();
    };
  }

  function Da(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }

  function Ea(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }

  function Fa(a, b) {
    const c = a.length,
      d = [];
    let e = 0;
    const f = "string" === typeof a ? a.split("") : a;
    for (let g = 0; g < c; g++)
      if (g in f) {
        const h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }

  function Ga(a, b) {
    const c = a.length,
      d = Array(c),
      e = "string" === typeof a ? a.split("") : a;
    for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }

  function Ha(a, b, c) {
    let d = c;
    Ea(a, function (e, f) {
      d = b.call(void 0, d, e, f, a);
    });
    return d;
  }

  function Ia(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }

  function Ja(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return e;
    return -1;
  }

  function Ka(a, b) {
    return 0 <= Da(a, b);
  }

  function La(a, b) {
    b = Da(a, b);
    let c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }

  function Na(a) {
    return Array.prototype.concat.apply([], arguments);
  }

  function Oa(a) {
    const b = a.length;
    if (0 < b) {
      const c = Array(b);
      for (let d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }

  function Pa(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  }

  function Qa(a) {
    const b = [];
    for (let c = 0; c < arguments.length; c++) {
      const d = arguments[c];
      if (Array.isArray(d))
        for (let e = 0; e < d.length; e += 8192) {
          const f = Qa.apply(null, Pa(d, e, e + 8192));
          for (let g = 0; g < f.length; g++) b.push(f[g]);
        }
      else b.push(d);
    }
    return b;
  }

  function Ra(a, b) {
    b = b || Math.random;
    for (let c = a.length - 1; 0 < c; c--) {
      const d = Math.floor(b() * (c + 1)),
        e = a[c];
      a[c] = a[d];
      a[d] = e;
    }
  }

  function Sa(a, b) {
    const c = {};
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }

  function Ta(a) {
    var b = Ua;
    a: {
      for (const c in b)
        if (b[c] == a) {
          a = !0;
          break a;
        }
      a = !1;
    }
    return a;
  }

  function Va(a) {
    let b = 0;
    for (const c in a) b++;
  }

  function Wa(a, b) {
    return null !== a && b in a;
  }

  function Xa(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  const Ya =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );

  function Za(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < Ya.length; f++)
        (c = Ya[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var $a = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  var ab;

  function bb() {
    if (void 0 === ab) {
      var a = null,
        b = t.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: qa,
            createScript: qa,
            createScriptURL: qa,
          });
        } catch (c) {
          t.console && t.console.error(c.message);
        }
        ab = a;
      } else ab = a;
    }
    return ab;
  }

  function cb(a, b) {
    this.j = (a === db && b) || "";
    this.l = eb;
  }
  cb.prototype.ka = !0;
  cb.prototype.aa = function () {
    return this.j;
  };

  function fb(a) {
    return a instanceof cb && a.constructor === cb && a.l === eb
      ? a.j
      : "type_error:Const";
  }

  function gb(a) {
    return new cb(db, a);
  }
  var eb = {},
    db = {};
  const hb = {};
  class ib {
    constructor(a, b) {
      this.j = b === hb ? a : "";
      this.ka = !0;
    }
    aa() {
      return this.j.toString();
    }
  }
  ib.prototype.toString = function () {
    return this.j.toString();
  };
  var kb = class {
    constructor(a, b) {
      this.j = b === jb ? a : "";
    }
  };
  q = kb.prototype;
  q.ka = !0;
  q.aa = function () {
    return this.j.toString();
  };
  q.Tb = !0;
  q.Aa = function () {
    return 1;
  };

  function lb(a, b) {
    a = mb.exec(nb(a).toString());
    var c = a[3] || "";
    return ob(a[1] + pb("?", a[2] || "", b) + pb("#", c, void 0));
  }
  q.toString = function () {
    return this.j + "";
  };

  function nb(a) {
    return a instanceof kb && a.constructor === kb
      ? a.j
      : "type_error:TrustedResourceUrl";
  }

  function qb(a, b) {
    var c = fb(a);
    if (!rb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(sb, function (d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e))
        throw Error(
          'Found marker, "' +
            e +
            '", in format string, "' +
            c +
            '", but no valid label mapping found in args: ' +
            JSON.stringify(b)
        );
      d = b[e];
      return d instanceof cb ? fb(d) : encodeURIComponent(String(d));
    });
    return ob(a);
  }
  var sb = /%{(\w+)}/g,
    rb = RegExp(
      "^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)",
      "i"
    ),
    mb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    jb = {};

  function ob(a) {
    const b = bb();
    a = b ? b.createScriptURL(a) : a;
    return new kb(a, jb);
  }

  function pb(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b +=
              (b.length > a.length ? "&" : "") +
              encodeURIComponent(d) +
              "=" +
              encodeURIComponent(String(g))));
        }
      }
    return b;
  }

  function tb(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }

  function ub(a, b) {
    if (b)
      a = a
        .replace(vb, "&amp;")
        .replace(wb, "&lt;")
        .replace(xb, "&gt;")
        .replace(yb, "&quot;")
        .replace(zb, "&#39;")
        .replace(Ab, "&#0;");
    else {
      if (!Bb.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(vb, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(wb, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(xb, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(yb, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(zb, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(Ab, "&#0;"));
    }
    return a;
  }
  var vb = /&/g,
    wb = /</g,
    xb = />/g,
    yb = /"/g,
    zb = /'/g,
    Ab = /\x00/g,
    Bb = /[\x00&<>"']/;

  function Cb(a, b) {
    let c = 0;
    a = tb(String(a)).split(".");
    b = tb(String(b)).split(".");
    const d = Math.max(a.length, b.length);
    for (let g = 0; 0 == c && g < d; g++) {
      var e = a[g] || "",
        f = b[g] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length) break;
        c =
          Db(
            0 == e[1].length ? 0 : parseInt(e[1], 10),
            0 == f[1].length ? 0 : parseInt(f[1], 10)
          ) ||
          Db(0 == e[2].length, 0 == f[2].length) ||
          Db(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (0 == c);
    }
    return c;
  }

  function Db(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var Fb = class {
    constructor(a, b) {
      this.j = b === Eb ? a : "";
    }
  };
  q = Fb.prototype;
  q.ka = !0;
  q.aa = function () {
    return this.j.toString();
  };
  q.Tb = !0;
  q.Aa = function () {
    return 1;
  };
  q.toString = function () {
    return this.j.toString();
  };

  function Gb(a) {
    return a instanceof Fb && a.constructor === Fb ? a.j : "type_error:SafeUrl";
  }
  var Hb = RegExp(
      '^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',
      "i"
    ),
    Ib = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

  function Jb(a) {
    a = String(a);
    a = a.replace(/(%0A|%0D)/g, "");
    var b = a.match(Ib);
    return b && Hb.test(b[1]) ? new Fb(a, Eb) : null;
  }
  var Kb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function Lb(a) {
    if (a instanceof Fb) return a;
    a = "object" == typeof a && a.ka ? a.aa() : String(a);
    return Kb.test(a) ? new Fb(a, Eb) : Jb(a);
  }

  function Mb(a, b) {
    if (a instanceof Fb) return a;
    a = "object" == typeof a && a.ka ? a.aa() : String(a);
    if (b && /^data:/i.test(a) && ((b = Jb(a) || Nb), b.aa() == a)) return b;
    Kb.test(a) || (a = "about:invalid#zClosurez");
    return new Fb(a, Eb);
  }
  var Eb = {},
    Nb = new Fb("about:invalid#zClosurez", Eb);
  const Ob = {};
  class Pb {
    constructor(a, b) {
      this.j = b === Ob ? a : "";
      this.ka = !0;
    }
    aa() {
      return this.j;
    }
    toString() {
      return this.j.toString();
    }
  }
  var Qb = new Pb("", Ob);

  function Rb(a) {
    if (a instanceof Fb)
      return (
        'url("' + Gb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'
      );
    if (a instanceof cb) a = fb(a);
    else {
      a = String(a);
      var b = a.replace(Sb, "$1").replace(Sb, "$1").replace(Tb, "url");
      if (Ub.test(b)) {
        if ((b = !Vb.test(a))) {
          let c = (b = !0);
          for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
          }
          b = b && c && Wb(a);
        }
        a = b ? Xb(a) : "zClosurez";
      } else a = "zClosurez";
    }
    if (/[{;}]/.test(a))
      throw new ta("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }

  function Wb(a) {
    let b = !0;
    const c = /^[-_a-zA-Z0-9]$/;
    for (let d = 0; d < a.length; d++) {
      const e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0;
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1;
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  const Ub = RegExp("^[-,.\"'%_!# a-zA-Z0-9\\[\\]]+$"),
    Tb = RegExp(
      "\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))",
      "g"
    ),
    Sb = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-z.%\\[\\], ]+\\)",
      "g"
    ),
    Vb = /\/\*/;

  function Xb(a) {
    return a.replace(Tb, (b, c, d, e) => {
      let f = "";
      d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
        f = h;
        return k;
      });
      b = (Lb(d) || Nb).aa();
      return c + f + b + f + e;
    });
  }
  var Yb;
  a: {
    var Zb = t.navigator;
    if (Zb) {
      var $b = Zb.userAgent;
      if ($b) {
        Yb = $b;
        break a;
      }
    }
    Yb = "";
  }

  function u(a) {
    return -1 != Yb.indexOf(a);
  }

  function ac(a) {
    for (
      var b = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"),
        c = [],
        d;
      (d = b.exec(a));

    )
      c.push([d[1], d[2], d[3] || void 0]);
    return c;
  }

  function bc() {
    return u("Opera");
  }

  function cc() {
    return u("Trident") || u("MSIE");
  }

  function dc() {
    return u("Firefox") || u("FxiOS");
  }

  function ec() {
    return (
      u("Safari") &&
      !(
        fc() ||
        u("Coast") ||
        bc() ||
        u("Edge") ||
        u("Edg/") ||
        u("OPR") ||
        dc() ||
        u("Silk") ||
        u("Android")
      )
    );
  }

  function fc() {
    return (u("Chrome") || u("CriOS")) && !u("Edge");
  }

  function gc() {
    return u("Android") && !(fc() || dc() || bc() || u("Silk"));
  }

  function hc() {
    function a(e) {
      const f = Ja(e, d);
      return c[0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f]] || "";
    }
    var b = Yb;
    if (cc()) return ic(b);
    b = ac(b);
    var c = {};
    b.forEach(function (e) {
      c[e[0]] = e[1];
    });
    var d = ma(Wa, c);
    return bc()
      ? a(["Version", "Opera"])
      : u("Edge")
      ? a(["Edge"])
      : u("Edg/")
      ? a(["Edg"])
      : fc()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((b = b[2]) && b[1]) || "";
  }

  function ic(a) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1]) return b[1];
    b = "";
    var c = /MSIE +([\d\.]+)/.exec(a);
    if (c && c[1])
      if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
        if (a && a[1])
          switch (a[1]) {
            case "4.0":
              b = "8.0";
              break;
            case "5.0":
              b = "9.0";
              break;
            case "6.0":
              b = "10.0";
              break;
            case "7.0":
              b = "11.0";
          }
        else b = "7.0";
      else b = c[1];
    return b;
  }
  const jc = {};

  function kc(a) {
    return a instanceof lc && a.constructor === lc
      ? a.j
      : "type_error:SafeHtml";
  }

  function mc(a) {
    if (a instanceof lc) return a;
    const b = "object" == typeof a;
    let c = null;
    b && a.Tb && (c = a.Aa());
    return nc(ub(b && a.ka ? a.aa() : String(a)), c);
  }

  function nc(a, b) {
    const c = bb();
    a = c ? c.createHTML(a) : a;
    return new lc(a, b, jc);
  }

  function oc(a) {
    if (!pc.test(a)) throw Error("");
    if (a.toUpperCase() in qc) throw Error("");
  }

  function rc(a) {
    const b = mc(sc);
    let c = b.Aa();
    const d = [],
      e = (f) => {
        Array.isArray(f)
          ? f.forEach(e)
          : ((f = mc(f)),
            d.push(kc(f).toString()),
            (f = f.Aa()),
            0 == c ? (c = f) : 0 != f && c != f && (c = null));
      };
    a.forEach(e);
    return nc(d.join(kc(b).toString()), c);
  }

  function tc(a) {
    return rc(Array.prototype.slice.call(arguments));
  }

  function uc(a) {
    var b = "";
    if (a)
      for (let e in a)
        if (Object.prototype.hasOwnProperty.call(a, e)) {
          if (!pc.test(e)) throw Error("");
          var c = a[e];
          if (null != c) {
            var d = e;
            if (c instanceof cb) c = fb(c);
            else if ("style" == d.toLowerCase()) {
              if (!ea(c)) throw Error("");
              if (!(c instanceof Pb)) {
                let f = "";
                for (let g in c)
                  if (Object.prototype.hasOwnProperty.call(c, g)) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(g))
                      throw Error(`Name allows only [-_a-zA-Z0-9], got: ${g}`);
                    let h = c[g];
                    null != h &&
                      ((h = Array.isArray(h) ? h.map(Rb).join(" ") : Rb(h)),
                      (f += `${g}:${h};`));
                  }
                c = f ? new Pb(f, Ob) : Qb;
              }
              c =
                c instanceof Pb && c.constructor === Pb
                  ? c.j
                  : "type_error:SafeStyle";
            } else {
              if (/^on/i.test(d)) throw Error("");
              if (d.toLowerCase() in vc)
                if (c instanceof kb) c = nb(c).toString();
                else if (c instanceof Fb) c = Gb(c);
                else if ("string" === typeof c) c = (Lb(c) || Nb).aa();
                else throw Error("");
            }
            c.ka && (c = c.aa());
            d = `${d}="` + ub(String(c)) + '"';
            b += " " + d;
          }
        }
    return b;
  }
  class lc {
    constructor(a, b, c) {
      this.j = c === jc ? a : "";
      this.l = b;
      this.ka = this.Tb = !0;
    }
    Aa() {
      return this.l;
    }
    aa() {
      return this.j.toString();
    }
    toString() {
      return this.j.toString();
    }
  }
  const pc = /^[a-zA-Z0-9-]+$/,
    vc = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    },
    qc = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    };
  var wc = nc("<!DOCTYPE html>", 0),
    sc = new lc((t.trustedTypes && t.trustedTypes.emptyHTML) || "", 0, jc);
  var xc = za(function () {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = kc(sc);
    return !b.parentElement;
  });

  function yc(a, b) {
    if (xc()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = kc(b);
  }

  function zc(a, b) {
    b = b instanceof Fb ? b : Mb(b, /^data:image\//i.test(b));
    a.src = Gb(b);
  }
  var Ac = /^[\w+/_-]+[=]{0,2}$/;

  function Bc() {
    var a = t.document;
    return a.querySelector
      ? (a = a.querySelector("script[nonce]")) &&
        (a = a.nonce || a.getAttribute("nonce")) &&
        Ac.test(a)
        ? a
        : ""
      : "";
  }

  function Cc(a) {
    return (a = ub(a, void 0));
  }

  function Dc(a, b) {
    const c = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
    };
    let d;
    d = b ? b.createElement("div") : t.document.createElement("div");
    return a.replace(Ec, function (e, f) {
      var g = c[e];
      if (g) return g;
      "#" == f.charAt(0) &&
        ((f = Number("0" + f.substr(1))),
        isNaN(f) || (g = String.fromCharCode(f)));
      g ||
        ((g = nc(e + " ", null)),
        yc(d, g),
        (g = d.firstChild.nodeValue.slice(0, -1)));
      return (c[e] = g);
    });
  }
  var Ec = /&([^;\s<&]+);?/g;

  function Fc() {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ na()).toString(36)
    );
  }

  function Gc(a) {
    let b = 0;
    for (let c = 0; c < a.length; ++c) b = (31 * b + a.charCodeAt(c)) >>> 0;
    return b;
  }

  function Hc(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }

  function Ic(a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }

  function Jc(a) {
    Jc[" "](a);
    return a;
  }
  Jc[" "] = ba;

  function Kc(a, b) {
    try {
      return Jc(a[b]), !0;
    } catch (c) {}
    return !1;
  }

  function Lc(a, b) {
    var c = Mc;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  }
  var Nc = bc(),
    Oc = cc(),
    Pc = u("Edge"),
    Qc = Pc || Oc,
    Rc =
      u("Gecko") &&
      !(-1 != Yb.toLowerCase().indexOf("webkit") && !u("Edge")) &&
      !(u("Trident") || u("MSIE")) &&
      !u("Edge"),
    Sc = -1 != Yb.toLowerCase().indexOf("webkit") && !u("Edge");

  function Tc() {
    var a = t.document;
    return a ? a.documentMode : void 0;
  }
  var Uc;
  a: {
    var Vc = "",
      Wc = (function () {
        var a = Yb;
        if (Rc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Pc) return /Edge\/([\d\.]+)/.exec(a);
        if (Oc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Sc) return /WebKit\/(\S+)/.exec(a);
        if (Nc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Wc && (Vc = Wc ? Wc[1] : "");
    if (Oc) {
      var Xc = Tc();
      if (null != Xc && Xc > parseFloat(Vc)) {
        Uc = String(Xc);
        break a;
      }
    }
    Uc = Vc;
  }
  var Yc = Uc,
    Mc = {};

  function Zc(a) {
    return Lc(a, function () {
      return 0 <= Cb(Yc, a);
    });
  }
  var $c;
  if (t.document && Oc) {
    var ad = Tc();
    $c = ad ? ad : parseInt(Yc, 10) || void 0;
  } else $c = void 0;
  var bd = $c;
  dc();
  gc();
  fc();
  var cd =
    ec() &&
    !((u("iPhone") && !u("iPod") && !u("iPad")) || u("iPad") || u("iPod"));
  var dd = {},
    ed = null,
    fd = Rc || Sc,
    gd = fd || "function" == typeof t.btoa,
    hd = fd || (!cd && !Oc && "function" == typeof t.atob);

  function id(a, b) {
    void 0 === b && (b = 0);
    jd();
    b = dd[b];
    const c = Array(Math.floor(a.length / 3)),
      d = b[64] || "";
    let e = 0,
      f = 0;
    for (; e < a.length - 2; e += 3) {
      var g = a[e],
        h = a[e + 1],
        k = a[e + 2],
        l = b[g >> 2];
      g = b[((g & 3) << 4) | (h >> 4)];
      h = b[((h & 15) << 2) | (k >> 6)];
      k = b[k & 63];
      c[f++] = l + g + h + k;
    }
    l = 0;
    k = d;
    switch (a.length - e) {
      case 2:
        (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
      case 1:
        (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
    }
    return c.join("");
  }

  function kd(a, b) {
    if (gd && !b) a = t.btoa(a);
    else {
      for (var c = [], d = 0, e = 0; e < a.length; e++) {
        var f = a.charCodeAt(e);
        255 < f && ((c[d++] = f & 255), (f >>= 8));
        c[d++] = f;
      }
      a = id(c, b);
    }
    return a;
  }

  function ld(a) {
    if (hd) return t.atob(a);
    var b = "";
    md(a, function (c) {
      b += String.fromCharCode(c);
    });
    return b;
  }

  function md(a, b) {
    function c(k) {
      for (; d < a.length; ) {
        var l = a.charAt(d++),
          m = ed[l];
        if (null != m) return m;
        if (!/^[\s\xa0]*$/.test(l))
          throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    jd();
    for (var d = 0; ; ) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        h = c(64);
      if (64 === h && -1 === e) break;
      b((e << 2) | (f >> 4));
      64 != g &&
        (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
    }
  }

  function jd() {
    if (!ed) {
      ed = {};
      for (
        var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          b = ["+/=", "+/", "-_=", "-_.", "-_"],
          c = 0;
        5 > c;
        c++
      ) {
        var d = a.concat(b[c].split(""));
        dd[c] = d;
        for (var e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === ed[f] && (ed[f] = e);
        }
      }
    }
  }
  var nd = "function" === typeof Uint8Array;

  function od(a) {
    return pd(
      a,
      (b) => b,
      (b) => new Uint8Array(b)
    );
  }

  function qd(a, b, c) {
    return "object" === typeof a
      ? nd && !Array.isArray(a) && a instanceof Uint8Array
        ? c(a)
        : pd(a, b, c)
      : b(a);
  }

  function pd(a, b, c) {
    if (Array.isArray(a)) {
      var d = Array(a.length);
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        null != f && (d[e] = qd(f, b, c));
      }
      Array.isArray(a) && a[rd] && sd(d);
      return d;
    }
    d = {};
    for (e in a)
      Object.prototype.hasOwnProperty.call(a, e) &&
        ((f = a[e]), null != f && (d[e] = qd(f, b, c)));
    return d;
  }

  function td(a) {
    return pd(
      a,
      (b) => ("number" === typeof b ? (isFinite(b) ? b : String(b)) : b),
      (b) => id(b)
    );
  }
  const rd = Symbol("IS_REPEATED_FIELD");

  function sd(a) {
    Array.isArray(a) && !Object.isFrozen(a) && (a[rd] = !0);
    return a;
  }
  let ud;
  let vd;

  function wd(a, b) {
    vd = b;
    a = new a(b);
    vd = null;
    return a;
  }

  function y(a, b, c) {
    var d = vd;
    vd = null;
    a || (a = d);
    d = this.constructor.Vh;
    a || (a = d ? [d] : []);
    this.C = d ? 0 : -1;
    this.l = null;
    this.A = a;
    a: {
      d = this.A.length;
      a = d - 1;
      if (
        d &&
        ((d = this.A[a]),
        !(
          null === d ||
          "object" != typeof d ||
          Array.isArray(d) ||
          (nd && d instanceof Uint8Array)
        ))
      ) {
        this.D = a - this.C;
        this.B = d;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.D = Math.max(b, a + 1 - this.C)), (this.B = null))
        : (this.D = Number.MAX_VALUE);
    }
    if (c)
      for (b = 0; b < c.length; b++)
        (a = c[b]),
          a < this.D
            ? ((a += this.C), (d = this.A[a]) ? sd(d) : (this.A[a] = xd))
            : (yd(this), (d = this.B[a]) ? sd(d) : (this.B[a] = xd));
  }
  const xd = Object.freeze(sd([]));

  function yd(a) {
    let b = a.D + a.C;
    a.A[b] || (a.B = a.A[b] = {});
  }

  function z(a, b) {
    if (-1 === b) return null;
    if (b < a.D) {
      b += a.C;
      var c = a.A[b];
      return c !== xd ? c : (a.A[b] = sd([]));
    }
    if (a.B) return (c = a.B[b]), c !== xd ? c : (a.B[b] = sd([]));
  }

  function A(a, b) {
    return null != z(a, b);
  }

  function zd(a, b) {
    a = z(a, b);
    return null == a ? a : +a;
  }

  function B(a, b) {
    a = z(a, b);
    return null == a ? a : !!a;
  }

  function Ad(a, b, c) {
    a = z(a, b);
    return null == a ? c : a;
  }

  function Bd(a, b, c = !1) {
    a = B(a, b);
    return null == a ? c : a;
  }

  function F(a, b, c) {
    b < a.D ? (a.A[b + a.C] = c) : (yd(a), (a.B[b] = c));
    return a;
  }

  function Cd(a, b, c, d) {
    c !== d ? F(a, b, c) : F(a, b, void 0);
    return a;
  }

  function H(a, b, c) {
    if (-1 === c) return null;
    a.l || (a.l = {});
    if (!a.l[c]) {
      let d = z(a, c);
      d && (a.l[c] = new b(d));
    }
    return a.l[c];
  }

  function J(a, b, c) {
    a.l || (a.l = {});
    if (!a.l[c]) {
      let d = z(a, c),
        e = [];
      for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
      a.l[c] = e;
    }
    return a.l[c];
  }

  function Dd(a, b, c) {
    a.l || (a.l = {});
    let d = c ? Ed(c, !1) : c;
    a.l[b] = c;
    return F(a, b, d);
  }
  y.prototype.toJSON = function () {
    const a = Ed(this, !1);
    return ud ? a : td(a);
  };

  function Ed(a, b) {
    if (a.l)
      for (let c in a.l) {
        if (!Object.prototype.hasOwnProperty.call(a.l, c)) continue;
        const d = a.l[c];
        if (Array.isArray(d))
          for (let e = 0; e < d.length; e++) d[e] && Ed(d[e], b);
        else d && Ed(d, b);
      }
    return a.A;
  }

  function Gd(a) {
    ud = !0;
    try {
      return JSON.stringify(a.toJSON(), Hd);
    } finally {
      ud = !1;
    }
  }

  function Hd(a, b) {
    switch (typeof b) {
      case "number":
        return isFinite(b) ? b : String(b);
      case "object":
        if (nd && null != b && b instanceof Uint8Array) return id(b);
    }
    return b;
  }

  function Id(a, b) {
    return wd(a, b ? JSON.parse(b) : null);
  }

  function K(a, b) {
    return Ad(a, b, "");
  }

  function Jd(a, b, c, d) {
    let e = 0;
    for (let f = 0; f < d.length; f++) {
      let g = d[f];
      null != z(a, g) && (0 !== e && F(a, e, void 0), (e = g));
    }
    return H(a, b, e === c ? c : -1);
  }

  function Kd(a, b) {
    return Cd(a, b, 1, 0);
  }

  function Ld(a, b) {
    var c = void 0;
    return new (c || (c = Promise))(function (d, e) {
      function f(k) {
        try {
          h(b.next(k));
        } catch (l) {
          e(l);
        }
      }

      function g(k) {
        try {
          h(b["throw"](k));
        } catch (l) {
          e(l);
        }
      }

      function h(k) {
        k.done
          ? d(k.value)
          : new c(function (l) {
              l(k.value);
            }).then(f, g);
      }
      h((b = b.apply(a, void 0)).next());
    });
  }
  var Md = gb("https://tpc.googlesyndication.com/sodar/%{basename}.js");

  function Nd() {
    var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
    return null !== a && void 0 !== a ? a : null;
  }
  let Od;

  function Pd() {
    var a, b;
    if (void 0 === Od)
      try {
        Od =
          null !==
            (b =
              null === (a = Nd()) || void 0 === a
                ? void 0
                : a.createPolicy("google#safe", {
                    createHTML: (c) => c,
                    createScript: (c) => c,
                    createScriptURL: (c) => c,
                  })) && void 0 !== b
            ? b
            : null;
      } catch (c) {
        (Od = null), console.log(c);
      }
    return Od;
  }
  var Qd = class {};
  class Rd extends Qd {
    constructor(a) {
      super();
      this.l = a;
    }
    toString() {
      return this.l.toString();
    }
  }

  function Sd(a) {
    var b,
      c = null === (b = Pd()) || void 0 === b ? void 0 : b.createScript(a);
    return new Rd(null !== c && void 0 !== c ? c : a);
  }

  function Td(a) {
    if (a instanceof Rd) return a.l;
    throw Error("");
  }
  var Ud = class {};
  class Vd extends Ud {
    constructor(a) {
      super();
      this.j = a;
    }
    toString() {
      return this.j;
    }
  }
  var Wd = new Vd("about:invalid#zTSz");
  var Xd = class {};
  class Yd extends Xd {
    constructor(a) {
      super();
      this.j = a;
    }
    toString() {
      return this.j.toString();
    }
  }

  function Zd(a) {
    var b;
    const c =
      null === (b = Pd()) || void 0 === b ? void 0 : b.createScriptURL(a);
    return new Yd(null !== c && void 0 !== c ? c : a);
  }

  function $d(a) {
    if (a instanceof Yd) return a.j;
    throw Error("");
  }

  function ae(a) {
    var b;
    a = $d(a);
    return (null === (b = Nd()) || void 0 === b ? 0 : b.isScriptURL(a))
      ? TrustedScriptURL.prototype.toString.apply(a)
      : a;
  }

  function be(a) {
    return a instanceof Xd ? $d(a) : nb(a);
  }

  function ce(a) {
    if (a instanceof Ud)
      if (a instanceof Vd) a = a.j;
      else throw Error("");
    else a = Gb(a);
    return a;
  }

  function de(a) {
    return ob(be(a).toString());
  }

  function ee(a, b) {
    a.href = ce(b);
  }

  function fe(a) {
    var b;
    const c = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
        .document,
      d =
        null === (b = c.querySelector) || void 0 === b
          ? void 0
          : b.call(c, "script[nonce]");
    (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") &&
      a.setAttribute("nonce", b);
  }

  function ge(a, b) {
    b =
      b instanceof Qd
        ? Td(b)
        : b instanceof ib && b.constructor === ib
        ? b.j
        : "type_error:SafeScript";
    a.textContent = b;
    fe(a);
  }

  function he(a, b) {
    a.src = be(b);
    fe(a);
  }
  var ie = {
      passive: !0,
    },
    je = za(function () {
      let a = !1;
      try {
        const b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        t.addEventListener("test", null, b);
      } catch (b) {}
      return a;
    });

  function ke(a) {
    return a ? (a.passive && je() ? a : a.capture || !1) : !1;
  }

  function L(a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, ke(d)), !0) : !1;
  }

  function le(a, b, c, d) {
    return a.removeEventListener
      ? (a.removeEventListener(b, c, ke(d)), !0)
      : !1;
  }

  function me(a) {
    var b = window;
    new Promise((c, d) => {
      function e() {
        var g;
        f.onload = null;
        f.onerror = null;
        null === (g = f.parentElement) || void 0 === g
          ? void 0
          : g.removeChild(f);
      }
      const f = b.document.createElement("script");
      f.onload = () => {
        e();
        c();
      };
      f.onerror = () => {
        e();
        d(void 0);
      };
      f.type = "text/javascript";
      he(f, a);
      "complete" !== b.document.readyState
        ? L(b, "load", () => {
            b.document.body.appendChild(f);
          })
        : b.document.body.appendChild(f);
    });
  }

  function ne(a) {
    return Ld(this, function* () {
      var b =
        "https://pagead2.googlesyndication.com/getconfig/sodar" +
        `?sv=${200}&tid=${a.j}` +
        `&tv=${a.l}&st=` +
        `${a.Ga}`;
      let c = void 0;
      try {
        c = yield oe(b);
      } catch (g) {}
      if (c) {
        b = a.Ra || c.sodar_query_id;
        var d = void 0 === c.rc_enable ? "n" : c.rc_enable,
          e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
          f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
        if (b && c.bg_hash_basename && c.bg_binary)
          return {
            context: a.A,
            xd: c.bg_hash_basename,
            wd: c.bg_binary,
            Rd: a.j + "_" + a.l,
            Ra: b,
            Ga: a.Ga,
            vb: d,
            Eb: e,
            tb: f,
          };
      }
    });
  }
  let oe = (a) =>
    new Promise((b, c) => {
      const d = new XMLHttpRequest();
      d.onreadystatechange = () => {
        d.readyState === d.DONE &&
          (200 <= d.status && 300 > d.status
            ? b(JSON.parse(d.responseText))
            : c());
      };
      d.open("GET", a, !0);
      d.send();
    });

  function pe(a) {
    Ld(this, function* () {
      const b = yield ne(a);
      if (b) {
        var c = window,
          d = c.GoogleGcLKhOms;
        (d && "function" === typeof d.push) || (d = c.GoogleGcLKhOms = []);
        d.push({
          ["_ctx_"]: b.context,
          ["_bgv_"]: b.xd,
          ["_bgp_"]: b.wd,
          ["_li_"]: b.Rd,
          ["_jk_"]: b.Ra,
          ["_st_"]: b.Ga,
          ["_rc_"]: b.vb,
          ["_dl_"]: b.Eb,
          ["_g2_"]: b.tb,
        });
        if ((d = c.GoogleDX5YKUSk)) (c.GoogleDX5YKUSk = void 0), d[1]();
        c = qb(Md, {
          basename: "sodar2",
        });
        me(c);
      }
      return b;
    });
  }

  function qe(a, b) {
    return Dd(a, 5, b);
  }

  function re(a, b) {
    return Cd(a, 3, b, "");
  }
  var se = class extends y {
    constructor() {
      super(void 0);
    }
  };

  function te(a, b) {
    return Cd(a, 1, b, "");
  }
  var ue = class extends y {
    constructor(a) {
      super(a);
    }
  };

  function ve(a) {
    switch (a) {
      case 1:
        return "gda";
      case 2:
        return "gpt";
      case 3:
        return "ima";
      case 4:
        return "pal";
      case 5:
        return "xfad";
      case 6:
        return "dv3n";
      case 7:
        return "spa";
      default:
        return "unk";
    }
  }
  var we = class {
      constructor(a) {
        this.j = a.j;
        this.l = a.l;
        this.A = a.A;
        this.Ra = a.Ra;
        this.X = a.L();
        this.Ga = a.Ga;
        this.vb = a.vb;
        this.Eb = a.Eb;
        this.tb = a.tb;
      }
    },
    xe = class {
      constructor(a, b, c) {
        this.j = a;
        this.l = b;
        this.A = c;
        this.X = window;
        this.Ga = "env";
        this.vb = "n";
        this.Eb = "0";
        this.tb = "1";
      }
      L() {
        return this.X;
      }
      build() {
        return new we(this);
      }
    };
  var ze = class extends y {
      constructor(a) {
        super(a, -1, ye);
      }
    },
    ye = [2, 3];
  var Ae = class extends y {
    constructor(a) {
      super(a);
    }
    j() {
      return z(this, 1);
    }
    H() {
      return z(this, 2);
    }
    I() {
      return z(this, 3);
    }
    F() {
      return z(this, 4);
    }
  };
  var Be = class extends y {
    constructor() {
      super(void 0);
    }
    j() {
      return z(this, 1);
    }
    H() {
      return z(this, 2);
    }
    I() {
      return z(this, 3);
    }
    F() {
      return z(this, 4);
    }
  };
  var Ce = class extends y {
    constructor() {
      super(void 0);
    }
    j() {
      return z(this, 1);
    }
    H() {
      return z(this, 2);
    }
    I() {
      return z(this, 3);
    }
    F() {
      return z(this, 4);
    }
  };
  var De = {
    Ce: "google_adtest",
    Ge: "google_ad_client",
    He: "google_ad_format",
    Je: "google_ad_height",
    We: "google_ad_width",
    Ne: "google_ad_layout",
    Oe: "google_ad_layout_key",
    Pe: "google_ad_output",
    Qe: "google_ad_region",
    Te: "google_ad_slot",
    Ue: "google_ad_type",
    Ve: "google_ad_url",
    Xe: "google_allow_expandable_ads",
    mf: "google_analytics_domain_name",
    nf: "google_analytics_uacct",
    Cf: "google_container_id",
    Mf: "google_gl",
    fg: "google_enable_ose",
    ng: "google_full_width_responsive",
    hh: "google_rl_filtering",
    gh: "google_rl_mode",
    ih: "google_rt",
    fh: "google_rl_dest_url",
    Rg: "google_max_radlink_len",
    Wg: "google_num_radlinks",
    Xg: "google_num_radlinks_per_unit",
    Fe: "google_ad_channel",
    Qg: "google_max_num_ads",
    Sg: "google_max_responsive_height",
    xf: "google_color_border",
    eg: "google_enable_content_recommendations",
    Jf: "google_content_recommendation_ui_type",
    If: "google_source_type",
    Hf: "google_content_recommendation_rows_num",
    Gf: "google_content_recommendation_columns_num",
    Ff: "google_content_recommendation_ad_positions",
    Kf: "google_content_recommendation_use_square_imgs",
    zf: "google_color_link",
    yf: "google_color_line",
    Bf: "google_color_url",
    De: "google_ad_block",
    Se: "google_ad_section",
    Ee: "google_ad_callback",
    uf: "google_captcha_token",
    Af: "google_color_text",
    kf: "google_alternate_ad_url",
    Me: "google_ad_host_tier_id",
    vf: "google_city",
    Ke: "google_ad_host",
    Le: "google_ad_host_channel",
    lf: "google_alternate_color",
    wf: "google_color_bg",
    gg: "google_encoding",
    lg: "google_font_face",
    Pf: "google_cust_ch",
    Sf: "google_cust_job",
    Rf: "google_cust_interests",
    Qf: "google_cust_id",
    Tf: "google_cust_u_url",
    pg: "google_hints",
    Eg: "google_image_size",
    Tg: "google_mtl",
    Lh: "google_cpm",
    Ef: "google_contents",
    Vg: "google_native_settings_key",
    Lf: "google_country",
    Dh: "google_targeting",
    mg: "google_font_size",
    Wf: "google_disable_video_autoplay",
    Qh: "google_video_product_type",
    Ph: "google_video_doc_id",
    Oh: "google_cust_gender",
    zh: "google_cust_lh",
    yh: "google_cust_l",
    Kh: "google_tfs",
    Ug: "google_native_ad_template",
    Jg: "google_kw",
    Ah: "google_tag_for_child_directed_treatment",
    Bh: "google_tag_for_under_age_of_consent",
    kh: "google_region",
    Of: "google_cust_criteria",
    Re: "google_safe",
    Nf: "google_ctr_threshold",
    lh: "google_resizing_allowed",
    oh: "google_resizing_width",
    mh: "google_resizing_height",
    Nh: "google_cust_age",
    LANGUAGE: "google_language",
    Kg: "google_kw_type",
    bh: "google_pucrd",
    ah: "google_page_url",
    Ch: "google_tag_partner",
    th: "google_restrict_data_processing",
    ze: "google_adbreak_test",
    Ie: "google_ad_frequency_hint",
    Ae: "google_admob_interstitial_slot",
    Be: "google_admob_rewarded_slot",
    Pg: "google_max_ad_content_rating",
  };
  var Ee = document,
    M = window;

  function Fe(a, b, c) {
    return Math.min(Math.max(a, b), c);
  }

  function Ge(a) {
    return Array.prototype.reduce.call(
      arguments,
      function (b, c) {
        return b + c;
      },
      0
    );
  }

  function He(a) {
    return Ge.apply(null, arguments) / arguments.length;
  }

  function Ie(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  }
  Ie.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  Ie.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  Ie.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };

  function Je(a, b) {
    this.width = a;
    this.height = b;
  }
  q = Je.prototype;
  q.aspectRatio = function () {
    return this.width / this.height;
  };
  q.isEmpty = function () {
    return !(this.width * this.height);
  };
  q.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  q.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  q.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };

  function Ke(a) {
    return a ? new Le(Me(a)) : sa || (sa = new Le());
  }

  function Ne(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Je(a.clientWidth, a.clientHeight);
  }

  function Oe(a) {
    var b = a.scrollingElement
      ? a.scrollingElement
      : Sc || "CSS1Compat" != a.compatMode
      ? a.body || a.documentElement
      : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return Oc && Zc("10") && a.pageYOffset != b.scrollTop
      ? new Ie(b.scrollLeft, b.scrollTop)
      : new Ie(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  }

  function Pe(a) {
    return a ? a.parentWindow || a.defaultView : window;
  }

  function Qe(a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      if (!ca(f) || (ea(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (ea(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        Ea(g ? Oa(f) : f, d);
      }
    }
  }

  function Re(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }

  function Se(a) {
    var b,
      c = arguments.length;
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = [],
      e = Infinity;
    for (b = 0; b < c; b++) {
      for (var f = [], g = arguments[b]; g; ) f.unshift(g), (g = g.parentNode);
      d.push(f);
      e = Math.min(e, f.length);
    }
    f = null;
    for (b = 0; b < e; b++) {
      g = d[0][b];
      for (var h = 1; h < c; h++) if (g != d[h][b]) return f;
      f = g;
    }
    return f;
  }

  function Me(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  var Te = {
      SCRIPT: 1,
      STYLE: 1,
      HEAD: 1,
      IFRAME: 1,
      OBJECT: 1,
    },
    Ue = {
      IMG: " ",
      BR: "\n",
    };

  function Ve(a) {
    var b = [];
    We(a, b, !0);
    a = b.join("");
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    a = a.replace(/ +/g, " ");
    " " != a && (a = a.replace(/^\s*/, ""));
    return a;
  }

  function We(a, b, c) {
    if (!(a.nodeName in Te))
      if (3 == a.nodeType)
        c
          ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
          : b.push(a.nodeValue);
      else if (a.nodeName in Ue) b.push(Ue[a.nodeName]);
      else for (a = a.firstChild; a; ) We(a, b, c), (a = a.nextSibling);
  }

  function Xe(a, b, c, d) {
    if (!b && !c) return null;
    var e = b ? String(b).toUpperCase() : null;
    return Ye(
      a,
      function (f) {
        return (
          (!e || f.nodeName == e) &&
          (!c ||
            ("string" === typeof f.className &&
              Ka(f.className.split(/\s+/), c)))
        );
      },
      d
    );
  }

  function Ye(a, b, c) {
    for (var d = 0; a && (null == c || d <= c); ) {
      if (b(a)) return a;
      a = a.parentNode;
      d++;
    }
    return null;
  }

  function Le(a) {
    this.j = a || t.document || document;
  }
  q = Le.prototype;
  q.getElementsByTagName = function (a, b) {
    return (b || this.j).getElementsByTagName(String(a));
  };

  function Ze(a, b) {
    return Re(a.j, b);
  }
  q.L = function () {
    var a = this.j;
    return a.parentWindow || a.defaultView;
  };
  q.appendChild = function (a, b) {
    a.appendChild(b);
  };
  q.append = function (a, b) {
    Qe(Me(a), a, arguments);
  };
  q.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  q.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  q.Id = Se;

  function $e() {
    return (
      !(u("iPad") || (u("Android") && !u("Mobile")) || u("Silk")) &&
      (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    );
  }
  var af = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );

  function bf(a) {
    return a ? decodeURI(a) : a;
  }

  function cf(a) {
    try {
      return !!a && null != a.location.href && Kc(a, "foo");
    } catch (b) {
      return !1;
    }
  }

  function df(a, b, c, d) {
    d = d || t;
    c && (d = ef(d));
    for (c = 0; d && 40 > c++ && ((!b && !cf(d)) || !a(d)); ) d = ef(d);
  }

  function ef(a) {
    try {
      const b = a.parent;
      if (b && b != a) return b;
    } catch (b) {}
    return null;
  }

  function ff(a, b) {
    const c = a.createElement("script");
    he(c, b);
    (a = a.getElementsByTagName("script")[0]) &&
      a.parentNode &&
      a.parentNode.insertBefore(c, a);
  }

  function gf(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }

  function hf(a, b) {
    if (!jf()) {
      let c = Math.random();
      if (c < b) return (c = kf(t)), a[Math.floor(c * a.length)];
    }
    return null;
  }

  function kf(a) {
    if (!a.crypto) return Math.random();
    try {
      const b = new Uint32Array(1);
      a.crypto.getRandomValues(b);
      return b[0] / 65536 / 65536;
    } catch (b) {
      return Math.random();
    }
  }

  function lf(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) &&
          b.call(void 0, a[c], c, a);
  }

  function mf(a) {
    const b = [];
    lf(a, function (c) {
      b.push(c);
    });
    return b;
  }

  function of(a) {
    const b = a.length;
    if (0 == b) return 0;
    let c = 305419896;
    for (let d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  }
  var jf = za(
    () =>
      Ia(
        [
          "Google Web Preview",
          "Mediapartners-Google",
          "Google-Read-Aloud",
          "Google-Adwords",
        ],
        pf
      ) || 1e-4 > Math.random()
  );
  const pf = (a) => -1 != Yb.indexOf(a);
  var qf = /^([0-9.]+)px$/,
    rf = /^(-?[0-9.]{1,30})$/;

  function sf(a, b) {
    return rf.test(a) && ((a = Number(a)), !isNaN(a))
      ? a
      : void 0 == b
      ? null
      : b;
  }

  function tf(a) {
    return /^true$/.test(a);
  }

  function uf(a) {
    return (a = qf.exec(a)) ? +a[1] : null;
  }

  function vf() {
    var a = t.document.URL;
    if (!a) return "";
    const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
    try {
      const c = b.exec(decodeURIComponent(a));
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true";
    } catch (c) {}
    return "";
  }
  var wf = {
    Ye: "allow-forms",
    Ze: "allow-modals",
    $e: "allow-orientation-lock",
    bf: "allow-pointer-lock",
    cf: "allow-popups",
    df: "allow-popups-to-escape-sandbox",
    ef: "allow-presentation",
    ff: "allow-same-origin",
    gf: "allow-scripts",
    hf: "allow-top-navigation",
    jf: "allow-top-navigation-by-user-activation",
  };
  const xf = za(() => mf(wf));

  function yf() {
    var a = [
      "allow-top-navigation",
      "allow-modals",
      "allow-orientation-lock",
      "allow-presentation",
      "allow-pointer-lock",
    ];
    const b = xf();
    return a.length ? Fa(b, (c) => !Ka(a, c)) : b;
  }

  function zf() {
    const a = Re(document, "IFRAME"),
      b = {};
    Ea(xf(), (c) => {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
    });
    return b;
  }
  var Af = (a, b) => {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch (c) {
        return !1;
      }
    },
    Bf = (a, b) => {
      for (let c = 0; 50 > c; ++c) {
        if (Af(a, b)) return a;
        if (!(a = ef(a))) break;
      }
      return null;
    },
    O = (a, b) => {
      lf(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    },
    Cf = {
      ["http://googleads.g.doubleclick.net"]: !0,
      ["http://pagead2.googlesyndication.com"]: !0,
      ["https://googleads.g.doubleclick.net"]: !0,
      ["https://pagead2.googlesyndication.com"]: !0,
    },
    Df = /\.proxy\.googleprod\.com(:\d+)?$/;
  const Ef = /.*domain\.test$/,
    Ff = /\.prod\.google\.com(:\d+)?$/;
  var Gf = (a) => !!Cf[a] || Df.test(a) || Ef.test(a) || Ff.test(a),
    Hf = (a, b) => {
      b = Ja(a, b);
      if (0 <= b) {
        const c = a[b];
        Array.prototype.splice.call(a, b, 1);
        return c;
      }
      return null;
    },
    Jf = () => {
      var a = window.document,
        b = If;
      a = void 0 === a ? window.document : a;
      0 != b.length &&
        a.head &&
        b.forEach((c) => {
          if (c) {
            var d = a;
            d = void 0 === d ? window.document : d;
            if (c && d.head) {
              var e = document.createElement("meta");
              d.head.appendChild(e);
              e.httpEquiv = "origin-trial";
              e.content = c;
            }
          }
        });
    },
    Kf = (a, b) => {
      if ("number" !== typeof a.goog_pvsid)
        try {
          Object.defineProperty(a, "goog_pvsid", {
            value: Math.floor(Math.random() * 2 ** 52),
            configurable: !1,
          });
        } catch (c) {
          b && b.da(784, c);
        }
      a = Number(a.goog_pvsid);
      b && (!a || 0 >= a) && b.da(784, Error(`Invalid correlator, ${a}`));
      return a || -1;
    };

  function Lf(a, b, c, d) {
    d = void 0 === d ? [] : d;
    const e = new a.MutationObserver((f) => {
      for (const g of f)
        for (const h of g.removedNodes)
          if (d && (h === b || Se(h, b))) {
            for (const k of d) k.disconnect();
            d.length = 0;
            c();
            return;
          }
    });
    d.push(e);
    e.observe(a.document.documentElement, {
      childList: !0,
      subtree: !0,
    });
    df(
      (f) => {
        if (!f.parent || !cf(f.parent)) return !1;
        const g = f.parent.document.getElementsByTagName("iframe");
        for (let l = 0; l < g.length; l++)
          try {
            a: {
              var h = g[l];
              try {
                var k =
                  h.contentWindow ||
                  (h.contentDocument ? Pe(h.contentDocument) : null);
                break a;
              } catch (m) {}
              k = null;
            }
            if (k == f) {
              Lf(f.parent, g[l], c, d);
              break;
            }
          } catch (m) {}
        return !1;
      },
      !1,
      !1,
      a
    );
  }
  var Mf = (a, b) => {
      Lf(Pe(Me(a)), a, b);
    },
    Nf = (a, b) => {
      const c = document.createElement("div");
      c.id = a;
      c.textContent = b;
      O(c, {
        height: "24px",
        "line-height": "24px",
        "text-align": "center",
        "vertical-align": "middle",
        color: "white",
        "background-color": "black",
        margin: "0",
        "font-family": "Roboto",
        "font-style": "normal",
        "font-weight": "500",
        "font-size": "11px",
        "letter-spacing": "0.08em",
      });
      return c;
    },
    Of = (a, b) =>
      new Promise((c) => {
        setTimeout(() => void c(b), a);
      });

  function Pf(a, b, c = null) {
    Qf(a, b, c);
  }

  function Qf(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    const d = a.document.createElement("img");
    if (c) {
      const e = (f) => {
        c && c(f);
        le(d, "load", e);
        le(d, "error", e);
      };
      L(d, "load", e);
      L(d, "error", e);
    }
    d.src = b;
    a.google_image_requests.push(d);
  }
  var Sf = (a) => {
      let b =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=gfp_cw_status";
      lf(a, (c, d) => {
        c && (b += `&${d}=${encodeURIComponent(c)}`);
      });
      Rf(b);
    },
    Rf = (a) => {
      var b = window;
      b.fetch
        ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : Pf(b, a);
    };

  function Tf(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  }
  q = Tf.prototype;
  q.sa = function () {
    return this.bottom - this.top;
  };

  function Uf(a) {
    return new Tf(a.top, a.right, a.bottom, a.left);
  }
  q.contains = function (a) {
    return this && a
      ? a instanceof Tf
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };

  function Vf(a, b) {
    return (
      a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
    );
  }
  q.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  q.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  q.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };

  function Wf(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  }

  function Xf(a, b) {
    var c = Math.max(a.left, b.left),
      d = Math.min(a.left + a.width, b.left + b.width);
    if (c <= d) {
      var e = Math.max(a.top, b.top);
      a = Math.min(a.top + a.height, b.top + b.height);
      if (e <= a) return new Wf(c, e, d - c, a - e);
    }
    return null;
  }

  function Yf(a, b) {
    var c = Xf(a, b);
    if (!c || !c.height || !c.width)
      return [new Wf(a.left, a.top, a.width, a.height)];
    c = [];
    var d = a.top,
      e = a.height,
      f = a.left + a.width,
      g = a.top + a.height,
      h = b.left + b.width,
      k = b.top + b.height;
    b.top > a.top &&
      (c.push(new Wf(a.left, a.top, a.width, b.top - a.top)),
      (d = b.top),
      (e -= b.top - a.top));
    k < g && (c.push(new Wf(a.left, k, a.width, g - k)), (e = k - d));
    b.left > a.left && c.push(new Wf(a.left, d, b.left - a.left, e));
    h < f && c.push(new Wf(h, d, f - h, e));
    return c;
  }
  Wf.prototype.contains = function (a) {
    return a instanceof Ie
      ? a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  Wf.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  Wf.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  Wf.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  const Zf = {
    "AMP-CAROUSEL": "ac",
    "AMP-FX-FLYING-CARPET": "fc",
    "AMP-LIGHTBOX": "lb",
    "AMP-STICKY-AD": "sa",
  };

  function $f(a = t) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (c) {}
    try {
      if (b && b.pageViewId && b.canonicalUrl) return b;
    } catch (c) {}
    return null;
  }

  function ag() {
    const a = $f();
    return a && a.initialIntersection;
  }

  function bg() {
    const a = ag();
    return a && ea(a.rootBounds)
      ? new Je(a.rootBounds.width, a.rootBounds.height)
      : null;
  }

  function cg(a) {
    return (a = a || $f()) ? (cf(a.master) ? a.master : null) : null;
  }

  function dg(a, b) {
    const c = (a.ampInaboxIframes = a.ampInaboxIframes || []);
    let d = () => {},
      e = () => {};
    b &&
      (c.push(b),
      (e = () => {
        a.AMP &&
          a.AMP.inaboxUnregisterIframe &&
          a.AMP.inaboxUnregisterIframe(b);
        La(c, b);
        d();
      }));
    if (a.ampInaboxInitialized) return e;
    a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
    const f = (g) => {
      if (a.ampInaboxInitialized) g = !0;
      else {
        var h,
          k = "amp-ini-load" === g.data;
        a.ampInaboxPendingMessages &&
          !k &&
          (h = /^amp-(\d{15,20})?/.exec(g.data)) &&
          (a.ampInaboxPendingMessages.push(g),
          (g = h[1]),
          a.ampInaboxInitialized ||
            (g && !/^\d{15,20}$/.test(g)) ||
            a.document.querySelector('script[src$="amp4ads-host-v0.js"]') ||
            ff(
              a.document,
              g
                ? qb(
                    gb(
                      "https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"
                    ),
                    {
                      ampVersion: g,
                    }
                  )
                : ob(fb(gb("https://cdn.ampproject.org/amp4ads-host-v0.js")))
            ));
        g = !1;
      }
      g && d();
    };
    c.google_amp_listener_added ||
      ((c.google_amp_listener_added = !0),
      L(a, "message", f),
      (d = () => {
        le(a, "message", f);
      }));
    return e;
  }
  class eg {
    constructor(a) {
      this.Qd = a;
    }
  }

  function fg(a) {
    return new eg((b) => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const gg = [
    fg("data"),
    fg("http"),
    fg("https"),
    fg("mailto"),
    fg("ftp"),
    new eg((a) => /^[^:]*([/?#]|$)/.test(a)),
  ];

  function hg(a = gg) {
    for (let b = 0; b < a.length; ++b) {
      const c = a[b];
      if (c instanceof eg && c.Qd("#")) return new Vd("#");
    }
  }

  function ig(a, b, c) {
    if ("string" === typeof b) (b = jg(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = jg(c, d);
        f && (c.style[f] = e);
      }
  }
  var kg = {};

  function jg(a, b) {
    var c = kg[b];
    if (!c) {
      var d = Hc(b);
      c = d;
      void 0 === a.style[d] &&
        ((d = (Sc ? "Webkit" : Rc ? "Moz" : Oc ? "ms" : null) + Ic(d)),
        void 0 !== a.style[d] && (c = d));
      kg[b] = c;
    }
    return c;
  }

  function lg(a, b) {
    var c = Me(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ""
      : "";
  }

  function mg(a, b) {
    return (
      lg(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  }

  function ng(a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      };
    }
  }

  function og(a) {
    var b = Me(a),
      c = new Ie(0, 0);
    var d = b ? Me(b) : document;
    d =
      !Oc || 9 <= Number(bd) || "CSS1Compat" == Ke(d).j.compatMode
        ? d.documentElement
        : d.body;
    if (a == d) return c;
    a = ng(a);
    b = Oe(Ke(b).j);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  }

  function pg(a) {
    var b = qg;
    if ("none" != mg(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  }

  function qg(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = Sc && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect
      ? ((a = ng(a)), new Je(a.right - a.left, a.bottom - a.top))
      : new Je(b, c);
  }

  function rg(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
      d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    b = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return +b;
  }

  function sg(a, b) {
    return (b = a.currentStyle ? a.currentStyle[b] : null) ? rg(a, b) : 0;
  }
  var tg = {
    thin: 2,
    medium: 4,
    thick: 6,
  };

  function ug(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
      return 0;
    b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return b in tg ? tg[b] : rg(a, b);
  }
  var vg = (a, b) => {
      if (a)
        for (let c in a)
          Object.prototype.hasOwnProperty.call(a, c) &&
            b.call(void 0, a[c], c, a);
    },
    wg = (a) => !(!a || !a.call) && "function" === typeof a,
    xg = (a) => "number" === typeof a && 0 < a,
    yg = () => {
      var a = P();
      "google_onload_fired" in a ||
        ((a.google_onload_fired = !1),
        L(a, "load", () => {
          a.google_onload_fired = !0;
        }));
    },
    Ag = (a, b) => {
      a = zg(a);
      if (!a) return b;
      const c = b.slice(-1);
      return b + ("?" === c || "#" === c ? "" : "&") + a;
    },
    zg = (a) =>
      Object.entries(Bg(a))
        .map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`)
        .join("&"),
    Bg = (a) => {
      const b = {};
      vg(a, (c, d) => {
        if (c || 0 === c || !1 === c)
          "boolean" === typeof c && (c = c ? 1 : 0), (b[d] = c);
      });
      return b;
    },
    Cg = () => {
      try {
        return M.history.length;
      } catch (a) {
        return 0;
      }
    },
    Dg = (a) => {
      a = cg($f(a)) || a;
      a.google_unique_id = (a.google_unique_id || 0) + 1;
    },
    Eg = (a) => {
      a = a.google_unique_id;
      return "number" === typeof a ? a : 0;
    },
    Fg = (a) => {
      a.u_tz = -new Date().getTimezoneOffset();
      a.u_his = Cg();
      a.u_java =
        !!M.navigator &&
        "unknown" !== typeof M.navigator.javaEnabled &&
        !!M.navigator.javaEnabled &&
        M.navigator.javaEnabled();
      M.screen &&
        ((a.u_h = M.screen.height),
        (a.u_w = M.screen.width),
        (a.u_ah = M.screen.availHeight),
        (a.u_aw = M.screen.availWidth),
        (a.u_cd = M.screen.colorDepth));
      M.navigator &&
        M.navigator.plugins &&
        (a.u_nplug = M.navigator.plugins.length);
      M.navigator &&
        M.navigator.mimeTypes &&
        (a.u_nmime = M.navigator.mimeTypes.length);
    },
    Gg = (a) => {
      let b;
      b = 9 !== a.nodeType && a.id;
      a: {
        if (a && a.nodeName && a.parentElement) {
          var c = a.nodeName.toString().toLowerCase();
          const d = a.parentElement.childNodes;
          let e = 0;
          for (let f = 0; f < d.length; ++f) {
            const g = d[f];
            if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
              if (a === g) {
                c = "." + e;
                break a;
              }
              ++e;
            }
          }
        }
        c = "";
      }
      return (
        (a.nodeName && a.nodeName.toString().toLowerCase()) +
        (b ? "/" + b : "") +
        c
      );
    },
    Hg = !!window.google_async_iframe_id;
  let Ig = (Hg && window.parent) || window;
  var P = () => {
      if (Hg && !cf(Ig)) {
        let a = "." + Ee.domain;
        try {
          for (; 2 < a.split(".").length && !cf(Ig); )
            (Ee.domain = a = a.substr(a.indexOf(".") + 1)),
              (Ig = window.parent);
        } catch (b) {}
        cf(Ig) || (Ig = window);
      }
      return Ig;
    },
    Jg = RegExp("(^| )adsbygoogle($| )"),
    Kg = (a) =>
      function () {
        if (a) {
          const b = a;
          a = null;
          b.apply(null, arguments);
        }
      },
    Lg = () => {
      var a;
      let b;
      const c = window.ActiveXObject;
      if (navigator.plugins && navigator.mimeTypes.length) {
        if ((a = navigator.plugins["Shockwave Flash"]) && a.description)
          return a.description
            .replace(/([a-zA-Z]|\s)+/, "")
            .replace(/(\s)+r/, ".");
      } else {
        if (
          navigator.userAgent &&
          0 <= navigator.userAgent.indexOf("Windows CE")
        ) {
          b = 3;
          for (a = 1; a; )
            try {
              (a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1))), b++;
            } catch (d) {
              a = null;
            }
          return b.toString();
        }
        if (cc()) {
          a = null;
          try {
            a = new c("ShockwaveFlash.ShockwaveFlash.7");
          } catch (d) {
            b = 0;
            try {
              (a = new c("ShockwaveFlash.ShockwaveFlash.6")),
                (b = 6),
                (a.AllowScriptAccess = "always");
            } catch (e) {
              if (6 === b) return b.toString();
            }
            try {
              a = new c("ShockwaveFlash.ShockwaveFlash");
            } catch (e) {}
          }
          if (a)
            return (
              (b = a.GetVariable("$version").split(" ")[1]),
              b.replace(/,/g, ".")
            );
        }
      }
      return "0";
    },
    Mg = (a) => ((a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1),
    Ng = (a) => {
      a = a.top;
      return cf(a) ? a : null;
    },
    Og = (a) => {
      let b = Number(a.google_ad_width),
        c = Number(a.google_ad_height);
      if (!(0 < b && 0 < c)) {
        a: {
          try {
            const e = String(a.google_ad_format);
            if (e && e.match) {
              const f = e.match(/(\d+)x(\d+)/i);
              if (f) {
                const g = parseInt(f[1], 10),
                  h = parseInt(f[2], 10);
                if (0 < g && 0 < h) {
                  var d = {
                    width: g,
                    height: h,
                  };
                  break a;
                }
              }
            }
          } catch (e) {}
          d = null;
        }
        a = d;
        if (!a) return null;
        b = 0 < b ? b : a.width;
        c = 0 < c ? c : a.height;
      }
      return {
        width: b,
        height: c,
      };
    },
    Pg = (a, b) =>
      a.source !== b.contentWindow && a.source.parent !== b.contentWindow
        ? !1
        : !0;
  class Qg {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {};
    }
  }
  const Rg = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"
  );
  var Sg = class {
      constructor(a, b) {
        this.j = a;
        this.l = b;
      }
    },
    Tg = class {
      constructor(a, b, c) {
        this.url = a;
        this.X = b;
        this.Cc = !!c;
        this.depth = null;
      }
    };

  function Ug(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }

  function Vg(a, b, c, d, e) {
    const f = [];
    lf(a, function (g, h) {
      (g = Wg(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }

  function Wg(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        const f = [];
        for (let g = 0; g < a.length; g++) f.push(Wg(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(Vg(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }

  function Xg(a) {
    let b = 1;
    for (const c in a.l) b = c.length > b ? c.length : b;
    return 3997 - b - a.A.length - 1;
  }

  function Yg(a, b, c) {
    b = b + "//pagead2.googlesyndication.com" + c;
    let d = Xg(a) - c.length;
    if (0 > d) return "";
    a.j.sort(function (f, g) {
      return f - g;
    });
    c = null;
    let e = "";
    for (let f = 0; f < a.j.length; f++) {
      const g = a.j[f],
        h = a.l[g];
      for (let k = 0; k < h.length; k++) {
        if (!d) {
          c = null == c ? g : c;
          break;
        }
        let l = Vg(h[k], a.A, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            b += l;
            e = a.A;
            break;
          }
          c = null == c ? g : c;
        }
      }
    }
    a = "";
    null != c && (a = e + "trn=" + c);
    return b + a;
  }
  class Zg {
    constructor() {
      this.A = "&";
      this.l = {};
      this.B = 0;
      this.j = [];
    }
  }

  function $g(a, b, c, d, e, f) {
    if ((d ? a.j : Math.random()) < (e || 0.01))
      try {
        let g;
        c instanceof Zg
          ? (g = c)
          : ((g = new Zg()),
            lf(c, (k, l) => {
              var m = g,
                n = m.B++;
              k = Ug(l, k);
              m.j.push(n);
              m.l[n] = k;
            }));
        const h = Yg(g, a.l, "/pagead/gen_204?id=" + b + "&");
        h && ("undefined" !== typeof f ? Pf(t, h, f) : Pf(t, h));
      } catch (g) {}
  }
  class ah {
    constructor() {
      this.l = "http:" === M.location.protocol ? "http:" : "https:";
      this.j = Math.random();
    }
  }
  let bh = null;

  function ch() {
    if (null === bh) {
      bh = "";
      try {
        let a = "";
        try {
          a = t.top.location.hash;
        } catch (b) {
          a = t.location.hash;
        }
        if (a) {
          const b = a.match(/\bdeid=([\d,]+)/);
          bh = b ? b[1] : "";
        }
      } catch (a) {}
    }
    return bh;
  }
  var dh = () => {
      const a = t.performance;
      return a && a.now && a.timing
        ? Math.floor(a.now() + a.timing.navigationStart)
        : na();
    },
    eh = () => {
      const a = t.performance;
      return a && a.now ? a.now() : null;
    };
  class fh {
    constructor(a, b) {
      var c = eh() || dh();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.uniqueId = Math.random();
      this.slotId = void 0;
    }
  }
  const gh = t.performance,
    hh = !!(gh && gh.mark && gh.measure && gh.clearMarks),
    ih = za(() => {
      var a;
      if ((a = hh)) (a = ch()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });

  function jh(a) {
    a &&
      gh &&
      ih() &&
      (gh.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      gh.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }

  function kh(a) {
    a.j = !1;
    a.events != a.l.google_js_reporting_queue &&
      (ih() && Ea(a.events, jh), (a.events.length = 0));
  }

  function lh(a, b) {
    if (!a.j) return b();
    const c = a.start("491", 3);
    let d;
    try {
      d = b();
    } catch (e) {
      throw (jh(c), e);
    }
    a.end(c);
    return d;
  }
  class mh {
    constructor(a) {
      this.events = [];
      this.l = a || t;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.events = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.j = ih() || (null != b ? b : 1 > Math.random());
    }
    start(a, b) {
      if (!this.j) return null;
      a = new fh(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      gh && ih() && gh.mark(b);
      return a;
    }
    end(a) {
      if (this.j && "number" === typeof a.value) {
        a.duration = (eh() || dh()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        gh && ih() && gh.mark(b);
        !this.j || 2048 < this.events.length || this.events.push(a);
      }
    }
  }

  function nh(a) {
    let b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    a.stack && (b = oh(a.stack, b));
    return b;
  }

  function oh(a, b) {
    try {
      -1 == a.indexOf(b) && (a = b + "\n" + a);
      let c;
      for (; a != c; )
        (c = a),
          (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
      return a.replace(/\n */g, "\n");
    } catch (c) {
      return b;
    }
  }

  function ph(a, b) {
    a.j = b;
  }

  function qh(a, b, c, d) {
    let e, f;
    try {
      a.l && a.l.j
        ? ((f = a.l.start(b.toString(), 3)), (e = c()), a.l.end(f))
        : (e = c());
    } catch (g) {
      c = !0;
      try {
        jh(f),
          (c = a.C(
            b,
            new Qg(g, {
              message: nh(g),
            }),
            void 0,
            d
          ));
      } catch (h) {
        a.da(217, h);
      }
      if (c) {
        let h, k;
        null == (h = window.console) || null == (k = h.error) || k.call(h, g);
      } else throw g;
    }
    return e;
  }

  function rh(a, b, c, d, e) {
    return (...f) => qh(a, b, () => c.apply(d, f), e);
  }
  class sh {
    constructor() {
      var a = th;
      this.B = uh;
      this.j = null;
      this.C = this.da;
      this.l = void 0 === a ? null : a;
      this.A = !1;
    }
    da(a, b, c, d, e) {
      e = e || "jserror";
      let f;
      try {
        const G = new Zg();
        var g = G;
        g.j.push(1);
        g.l[1] = Ug("context", a);
        (b.error && b.meta && b.id) ||
          (b = new Qg(b, {
            message: nh(b),
          }));
        if (b.msg) {
          g = G;
          var h = b.msg.substring(0, 512);
          g.j.push(2);
          g.l[2] = Ug("msg", h);
        }
        var k = b.meta || {};
        b = k;
        if (this.j)
          try {
            this.j(b);
          } catch (va) {}
        if (d)
          try {
            d(b);
          } catch (va) {}
        d = G;
        k = [k];
        d.j.push(3);
        d.l[3] = k;
        d = t;
        k = [];
        b = null;
        do {
          var l = d;
          if (cf(l)) {
            var m = l.location.href;
            b = (l.document && l.document.referrer) || null;
          } else (m = b), (b = null);
          k.push(new Tg(m || "", l));
          try {
            d = l.parent;
          } catch (va) {
            d = null;
          }
        } while (d && l != d);
        for (let va = 0, Ma = k.length - 1; va <= Ma; ++va)
          k[va].depth = Ma - va;
        l = t;
        if (
          l.location &&
          l.location.ancestorOrigins &&
          l.location.ancestorOrigins.length == k.length - 1
        )
          for (m = 1; m < k.length; ++m) {
            var n = k[m];
            n.url ||
              ((n.url = l.location.ancestorOrigins[m - 1] || ""), (n.Cc = !0));
          }
        var p = k;
        let Q = new Tg(t.location.href, t, !1);
        l = null;
        const da = p.length - 1;
        for (n = da; 0 <= n; --n) {
          var r = p[n];
          !l && Rg.test(r.url) && (l = r);
          if (r.url && !r.Cc) {
            Q = r;
            break;
          }
        }
        r = null;
        const N = p.length && p[da].url;
        0 != Q.depth && N && (r = p[da]);
        f = new Sg(Q, r);
        if (f.l) {
          p = G;
          var x = f.l.url || "";
          p.j.push(4);
          p.l[4] = Ug("top", x);
        }
        var v = {
          url: f.j.url || "",
        };
        if (f.j.url) {
          var D = f.j.url.match(af),
            w = D[1],
            E = D[3],
            C = D[4];
          x = "";
          w && (x += w + ":");
          E && ((x += "//"), (x += E), C && (x += ":" + C));
          var I = x;
        } else I = "";
        w = G;
        v = [
          v,
          {
            url: I,
          },
        ];
        w.j.push(5);
        w.l[5] = v;
        $g(this.B, e, G, this.A, c);
      } catch (G) {
        try {
          $g(
            this.B,
            e,
            {
              context: "ecmserr",
              rctx: a,
              msg: nh(G),
              url: f && f.j.url,
            },
            this.A,
            c
          );
        } catch (Q) {}
      }
      return !0;
    }
  }

  function vh(a, ...b) {
    if (0 === b.length) return Zd(a[0]);
    const c = [a[0]];
    for (let d = 0; d < b.length; d++)
      c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return Zd(c.join(""));
  }

  function wh(a, b) {
    let c = ae(a);
    if (/#/.test(c)) throw Error("");
    let d = /\?/.test(c) ? "&" : "?";
    b.forEach((e, f) => {
      e = e instanceof Array ? e : [e];
      for (let g = 0; g < e.length; g++) {
        const h = e[g];
        null !== h &&
          void 0 !== h &&
          ((c +=
            d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h))),
          (d = "&"));
      }
    });
    return Zd(c);
  }

  function xh() {
    var a;
    const b = Td(yh);
    var c = (null === (a = Nd()) || void 0 === a ? 0 : a.isScript(b))
      ? TrustedScript.prototype.toString.apply(b)
      : b;
    return Zd(
      URL.createObjectURL(
        new Blob([c], {
          type: "text/javascript",
        })
      )
    );
  }
  let uh, zh;
  const Ah = P(),
    th = new mh(Ah);
  uh = new ah();
  "number" !== typeof Ah.google_srt && (Ah.google_srt = Math.random());
  var Bh = uh,
    Ch = Ah.google_srt;
  0 <= Ch && 1 >= Ch && (Bh.j = Ch);
  zh = new sh();
  zh.j = () => {};
  zh.A = !0;
  "complete" == Ah.document.readyState
    ? Ah.google_measure_js_timing || kh(th)
    : th.j &&
      L(Ah, "load", () => {
        Ah.google_measure_js_timing || kh(th);
      });
  var Dh = (a, b, c) => qh(zh, a, b, c),
    S = (a, b) => rh(zh, a, b, void 0, void 0),
    T = (a, b, c) => {
      $g(uh, a, b, !0, c, void 0);
    },
    Eh = () => (a) => {
      zh.da(915, a instanceof Error ? a : Error(a), void 0, void 0);
    };
  var Fh = (a, b) => {
    const c = vf();
    return (
      a +
      (-1 == a.indexOf("?") ? "?" : "&") +
      [
        0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "",
        "xpc=",
        b,
        "&p=",
        encodeURIComponent(t.document.location.protocol),
        "//",
        encodeURIComponent(t.document.location.host),
      ].join("")
    );
  };
  ob(fb(gb("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
  var Gh = class {
      constructor() {
        var a = {
          notify: /^expandable-xpc-ready$/,
        };
        this.j = this.l = null;
        "function" === typeof a ? (this.j = a) : (this.l = a);
      }
      getVerifier(a) {
        return this.l ? this.l[a] : null;
      }
      getSchema(a) {
        return this.j ? this.j(a) : null;
      }
      doesReturnAnotherSchema() {
        return this.j ? !0 : !1;
      }
    },
    Hh = (a, b, c, d = null) => {
      const e = (g) => {
        let h;
        try {
          h = JSON.parse(g.data);
        } catch (k) {
          return;
        }
        !h ||
          h.googMsgType !== b ||
          (d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g)) ||
          c(h, g);
      };
      L(a, "message", e);
      let f = !1;
      return () => {
        let g = !1;
        f || ((f = !0), (g = le(a, "message", e)));
        return g;
      };
    },
    Ih = (a, b, c, d = null) => {
      const e = Hh(
        a,
        b,
        xa(c, () => e()),
        d
      );
      return e;
    },
    Jh = class extends Error {
      constructor() {
        super();
      }
    },
    Kh = (a, b, c, d, e) => {
      if (Array.isArray(a)) {
        var f = a;
        for (var g = 0; g < a.length; g++) a[g] = Kh(a[g], b, c, d, e);
      } else if (ea(a)) {
        if (b.doesReturnAnotherSchema())
          if ((f = b.getSchema(a))) {
            if (((b = f), b.doesReturnAnotherSchema()))
              return Kh(a, b, c, d, e);
          } else throw new Jh();
        f = {};
        for (g in a)
          if (Object.prototype.hasOwnProperty.call(a, g)) {
            d = b.getVerifier(g);
            c = a[g];
            var h = b;
            if (d) {
              const k = d.predicate || d;
              if ("function" === typeof k) {
                h = k(c);
                if (!h) {
                  if (!d || !d.nullOnInvalid) throw new Jh();
                  e && (e[g] = !0);
                  f[g] = null;
                  continue;
                }
                if (h instanceof Gh) d = null;
                else {
                  f[g] = c;
                  continue;
                }
              }
            } else if (!ea(c)) continue;
            f[g] = Kh(c, h, g, d, e);
          }
      } else if (
        ((f = a),
        (b = d ? d.predicate || d : void 0),
        (b instanceof RegExp &&
          !b.test("string" === typeof a || void 0 == a ? a : String(a))) ||
          ("function" === typeof b && !b(a)))
      ) {
        if (!d || !d.nullOnInvalid) throw new Jh();
        e && (e[c] = !0);
        f = null;
      }
      return f;
    },
    Mh = (a, b) => {
      var c = Lh;
      return Hh(a, "ct", (d, e) => {
        try {
          const f = Kh(d, c, null, null, null);
          b(f, e);
        } catch (f) {
          if (!(f instanceof Jh)) throw f;
        }
      });
    },
    Nh = (a, b, c, d, e) => {
      if (
        !(0 >= e) &&
        ((c.googMsgType = b),
        a.postMessage(JSON.stringify(c), d),
        (a = a.frames))
      )
        for (let f = 0; f < a.length; ++f) 1 < e && Nh(a[f], b, c, d, --e);
    };
  var Lh = new Gh();

  function Oh(a, b, c, d) {
    Gf(d.origin) && "expandable-xpc-ready" == c.notify && Ph(a, b);
  }

  function Ph(a, b) {
    var c = a.Sb;
    c.google_eas_queue = c.google_eas_queue || [];
    c.google_eas_queue.push({
      a: a.id,
      b: a.url,
      c: a.width,
      d: a.height,
      e: a.oc,
      f: a.ee,
      g: a.nd,
      h: a.Pd,
      i: void 0,
    });
    t.setTimeout(
      S(
        220,
        Kg(() => {
          ff(c.document, de(b));
        })
      ),
      0
    );
  }
  var Qh = (a, b = !1) => {
    try {
      return b
        ? new Je(a.innerWidth, a.innerHeight).round()
        : Ne(a || window).round();
    } catch (c) {
      return new Je(-12245933, -12245933);
    }
  };

  function Rh(a, b = t) {
    a =
      a.scrollingElement ||
      ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return new Ie(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
  }

  function Sh(a) {
    try {
      return !(
        !a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
      );
    } catch (b) {
      return !1;
    }
  }
  var Th = (a, b) => {
    var c;
    var d;
    c = (d =
      (d = $f()) &&
      (c = d.initialLayoutRect) &&
      "number" === typeof c.top &&
      "number" === typeof c.left &&
      "number" === typeof c.width &&
      "number" === typeof c.height
        ? new Wf(c.left, c.top, c.width, c.height)
        : null)
      ? new Ie(d.left, d.top)
      : (c = ag()) && ea(c.rootBounds)
      ? new Ie(
          c.rootBounds.left + c.boundingClientRect.left,
          c.rootBounds.top + c.boundingClientRect.top
        )
      : null;
    if (c) return c;
    try {
      var e = new Ie(0, 0),
        f = Pe(Me(b));
      if (Kc(f, "parent")) {
        do {
          if (f == a) var g = og(b);
          else {
            var h = ng(b);
            g = new Ie(h.left, h.top);
          }
          c = g;
          e.x += c.x;
          e.y += c.y;
        } while (
          f &&
          f != a &&
          f != f.parent &&
          (b = f.frameElement) &&
          (f = f.parent)
        );
      }
      return e;
    } catch (k) {
      return zh.da(888, k), new Ie(-12245933, -12245933);
    }
  };
  var Vh = class extends y {
      constructor() {
        super(void 0, -1, Uh);
      }
    },
    Uh = [15];
  var Wh = class extends y {
    constructor() {
      super(void 0);
    }
  };
  var Xh = class extends y {
    constructor() {
      super(void 0);
    }
  };
  let Yh = null,
    Zh = null;
  var $h = () => {
      if (null != Yh) return Yh;
      Yh = !1;
      try {
        const a = Ng(t);
        a && -1 !== a.location.hash.indexOf("google_logging") && (Yh = !0);
        t.localStorage.getItem("google_logging") && (Yh = !0);
      } catch (a) {}
      return Yh;
    },
    ai = () => {
      if (null != Zh) return Zh;
      Zh = !1;
      try {
        const a = Ng(t);
        if (
          (a && -1 !== a.location.hash.indexOf("auto_ads_logging")) ||
          t.localStorage.getItem("auto_ads_logging")
        )
          Zh = !0;
      } catch (a) {}
      return Zh;
    },
    bi = (a, b = []) => {
      let c = !1;
      t.google_logging_queue || ((c = !0), (t.google_logging_queue = []));
      t.google_logging_queue.push([a, b]);
      c &&
        $h() &&
        ff(
          t.document,
          ob(
            fb(
              gb(
                "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"
              )
            )
          )
        );
    };
  ob(fb(gb("https://pagead2.googlesyndication.com/pagead/osd.js")));

  function ci() {
    var a = di,
      b = ei;
    if (!(window && Math.random && navigator)) return -1;
    if (window.__google_ad_urls) {
      var c = window.__google_ad_urls;
      try {
        if (c && c.getOseId()) return c.getOseId();
      } catch (d) {}
    }
    if (!window.__google_ad_urls_id) {
      c = window.google_enable_ose;
      let d;
      !0 === c
        ? (d = 2)
        : !1 !== c &&
          ((d = hf([0], a)), null == d && ((d = hf([2], b)) || (d = 3)));
      if (!d) return 0;
      window.__google_ad_urls_id = d;
    }
    return window.__google_ad_urls_id;
  }

  function fi(a) {
    return (
      {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5,
      }[
        a.visibilityState ||
          a.webkitVisibilityState ||
          a.mozVisibilityState ||
          ""
      ] || 0
    );
  }

  function gi(a) {
    let b;
    a.visibilityState
      ? (b = "visibilitychange")
      : a.mozVisibilityState
      ? (b = "mozvisibilitychange")
      : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b;
  }

  function hi(a) {
    return null != a.hidden
      ? a.hidden
      : null != a.mozHidden
      ? a.mozHidden
      : null != a.webkitHidden
      ? a.webkitHidden
      : null;
  }
  var ii = (a) => {
    if (a.Ub && a.hasOwnProperty("Ub")) return a.Ub;
    const b = new a();
    return (a.Ub = b);
  };

  function ji() {
    let a = P();
    const b = a.__google_ad_urls;
    return b ? b : (a.__google_ad_urls = new ki());
  }
  class ki {
    getNewBlocks() {}
    setupOse() {}
    getOseId() {
      return -1;
    }
    getCorrelator() {
      return "";
    }
    numBlocks() {
      return 0;
    }
    registerAdBlock() {}
    unloadAdBlock() {}
  }
  const li = new mh(P());
  var mi = () => {
    const a = P();
    a &&
      "undefined" != typeof a.google_measure_js_timing &&
      (a.google_measure_js_timing || kh(li));
  };
  (() => {
    const a = P();
    a &&
      a.document &&
      ("complete" == a.document.readyState
        ? mi()
        : li.j &&
          L(a, "load", () => {
            mi();
          }));
  })();
  var oi = () => {
      var a = ni;
      const b = P() || t;
      return b.google_osd_loaded
        ? !1
        : (ff(b.document, a), (b.google_osd_loaded = !0));
    },
    pi = (a, b, c) => {
      a && (c ? L(a, "load", b) : le(a, "load", b));
    },
    qi = () => {
      const a = (P() || t).google_osd_amcb;
      return "function" === typeof a ? a : null;
    },
    ri = ob(
      fb(gb("https://www.googletagservices.com/activeview/js/current/osd.js"))
    );

  function si() {
    const a = P(),
      b = a.__google_ad_urls;
    if (!b) return (a.__google_ad_urls = new ti(a));
    try {
      if (0 <= b.getOseId()) return b;
    } catch (c) {}
    try {
      return (a.__google_ad_urls = new ti(a, b));
    } catch (c) {
      return (a.__google_ad_urls = new ti(a));
    }
  }
  class ti {
    constructor(a, b) {
      this.l = b && b.l ? b.l : 0;
      this.A = b ? b.A : "";
      this.j = b && b.j ? b.j : [];
      if (b) for (a = 0; a < this.j.length; ++a) this.j[a].B = !0;
    }
    getNewBlocks(a, b) {
      let c = this.j.length;
      for (let d = 0; d < c; d++) {
        let e = this.j[d];
        !e.A &&
          e.j &&
          ((e.A = !0), a(e.j, e.D, e.J, e.l, void 0, e.B, e.F, e.I, e.H));
      }
      b && ((P() || t).google_osd_amcb = a);
    }
    setupOse(a) {
      if (this.getOseId()) return this.getOseId();
      let b = ci();
      if (!b) return 0;
      this.l = b;
      this.A = String(a || 0);
      return this.getOseId();
    }
    getOseId() {
      return window && Math.random && navigator ? this.l : -1;
    }
    getCorrelator() {
      return this.A;
    }
    numBlocks() {
      return this.j.length;
    }
    registerAdBlock(a, b, c, d, e, f, g = () => {}) {
      c = qi();
      e = dh() || -1;
      f = t.pageYOffset;
      0 <= f || (f = -1);
      c && d
        ? c(d, a, b, !1, void 0, !1, g, e, f)
        : ((g = new ui(a, b, d, g, e, f)),
          this.j.push(g),
          pi(d, g.C, !0),
          ni ||
            (Pf(
              t,
              "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om" +
                `&rs=${b}` +
                `&req=${a}`
            ),
            (ni = ri)),
          oi() && yg());
    }
    unloadAdBlock(a, b, c = !1) {
      b = P();
      void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
      c && (c = Hf(this.j, (d) => d.j == a)) && pi(a, c.C, !1);
    }
  }
  var ni = null,
    ei = 0,
    di = 0,
    ui = class {
      constructor(a, b, c, d = ba, e = -1, f = -1) {
        this.D = a;
        this.J = b;
        this.j = c;
        this.B = this.A = this.l = !1;
        this.F = d;
        this.I = e;
        this.H = f;
        this.C = () => (this.l = !0);
      }
    };
  window.Goog_AdSense_getAdAdapterInstance = si;
  oa("Goog_AdSense_OsdAdapter", ti);
  var U = class {
      constructor(a, b = !1) {
        this.j = a;
        this.defaultValue = b;
      }
    },
    vi = class {
      constructor(a, b = 0) {
        this.j = a;
        this.defaultValue = b;
      }
    };
  var wi = new U(1084),
    xi = new U(1082),
    yi = new U(236),
    zi = new U(383, !0),
    Ai = new U(1043),
    Bi = new vi(1032),
    Ci = new (class {
      constructor(a, b = "") {
        this.j = a;
        this.defaultValue = b;
      }
    })(14),
    Di = new vi(1044),
    Ei = new vi(1017, -1),
    Fi = new vi(1077),
    Gi = new U(316),
    Hi = new U(1021, !0),
    Ii = new U(334),
    Ji = new vi(54),
    Ki = new U(1004),
    Li = new U(313),
    Mi = new vi(66, -1),
    Ni = new vi(65, -1),
    Oi = new U(369),
    Pi = new U(368),
    Qi = new U(1087),
    Ri = new vi(1067),
    Si = new U(348),
    Ti = new U(265),
    Ui = new U(260),
    Vi = new U(1076),
    Wi = new U(233),
    Xi = new vi(29, 2),
    Yi = new vi(30, 3),
    Zi = new vi(1072),
    $i = new U(290),
    aj = new U(190),
    bj = new vi(1068),
    cj = new U(1036, !0),
    dj = new U(154),
    ej = new U(1045),
    fj = new U(251),
    gj = new U(1088),
    hj = new vi(1066),
    ij = new U(380254521),
    jj = new U(381914117),
    kj = new U(83),
    lj = new U(360245598),
    mj = new vi(1927),
    nj = new U(1931, !0),
    oj = new U(377431981, !0),
    pj = new U(77),
    qj = new U(78),
    rj = new U(309),
    sj = new U(1951),
    tj = new U(80),
    uj = new U(76),
    vj = new U(81),
    wj = new U(380025941),
    xj = new U(84),
    yj = new U(1950),
    zj = new U(188),
    Aj = new U(390641437, !0),
    Bj = new U(1928),
    Cj = new U(1941),
    Dj = new U(370946349),
    Ej = new U(379841917),
    Fj = new U(393546021),
    Gj = new vi(1935);
  var Hj = class {
      constructor() {
        const a = {};
        this.A = (b, c) => (null != a[b] ? a[b] : c);
        this.B = (b, c) => (null != a[b] ? a[b] : c);
        this.j = (b, c) => (null != a[b] ? a[b] : c);
        this.C = (b, c) => (null != a[b] ? a[b] : c);
        this.l = () => {};
      }
    },
    V = (a) => ii(Hj).A(a.j, a.defaultValue),
    Ij = (a) => ii(Hj).B(a.j, a.defaultValue);
  let Jj = null;
  var Kj = (a, b) => {
      let c = 0,
        d = a,
        e = 0;
      for (; a && a != a.parent; )
        if (((a = a.parent), e++, cf(a))) (d = a), (c = e);
        else if (b) break;
      return {
        X: d,
        level: c,
      };
    },
    Lj = () => {
      if (V(gj)) return Kj(t, !1).X;
      Jj || (Jj = Kj(t, !0).X);
      return Jj;
    };
  var Mj = (a, b, c, d) => {
      c = c || a.google_ad_width;
      d = d || a.google_ad_height;
      if (a && a.top == a) return !1;
      const e = b.documentElement;
      if (c && d) {
        let f = 1,
          g = 1;
        a.innerHeight
          ? ((f = a.innerWidth), (g = a.innerHeight))
          : e && e.clientHeight
          ? ((f = e.clientWidth), (g = e.clientHeight))
          : b.body && ((f = b.body.clientWidth), (g = b.body.clientHeight));
        if (g > 2 * d || f > 2 * c) return !1;
      }
      return !0;
    },
    Nj = (a, b) => {
      vg(a, (c, d) => {
        b[d] = c;
      });
    },
    Oj = (a) => {
      let b = a.location.href;
      if (a == a.top)
        return {
          url: b,
          wb: !0,
        };
      let c = !1;
      const d = a.document;
      d && d.referrer && ((b = d.referrer), a.parent == a.top && (c = !0));
      (a = a.location.ancestorOrigins) &&
        (a = a[a.length - 1]) &&
        -1 == b.indexOf(a) &&
        ((c = !1), (b = a));
      return {
        url: b,
        wb: c,
      };
    },
    Pj = () => {
      var a = P();
      if (a == a.top) return 0;
      for (; a && a != a.top && cf(a); a = a.parent) {
        if (a.sf_) return 2;
        if (a.$sf) return 3;
        if (a.inGptIF) return 4;
        if (a.inDapIF) return 5;
      }
      return 1;
    };
  var Ua = {
    jh: 0,
    hg: 1,
    ig: 2,
    og: 8,
    xh: 9,
    Ng: 10,
    Og: 11,
    sh: 16,
    Vf: 17,
    Uf: 24,
    Lg: 25,
    qf: 26,
    pf: 27,
    Yc: 30,
    Gg: 32,
    Ig: 40,
  };
  var Qj = {
      overlays: 1,
      interstitials: 2,
      vignettes: 2,
      inserts: 3,
      immersives: 4,
      list_view: 5,
    },
    Rj = {
      [1]: 1,
      [2]: 1,
      [8]: 2,
      [27]: 3,
      [9]: 4,
      [30]: 5,
    };

  function Sj(a) {
    a.google_reactive_ads_global_state
      ? null == a.google_reactive_ads_global_state.floatingAdsStacking &&
        (a.google_reactive_ads_global_state.floatingAdsStacking = new Tj())
      : (a.google_reactive_ads_global_state = new Uj());
    return a.google_reactive_ads_global_state;
  }
  class Uj {
    constructor() {
      this.wasPlaTagProcessed = !1;
      this.wasReactiveAdConfigReceived = {};
      this.adCount = {};
      this.wasReactiveAdVisible = {};
      this.stateForType = {};
      this.reactiveTypeEnabledInAsfe = {};
      this.wasReactiveTagRequestSent = !1;
      this.reactiveTypeDisabledByPublisher = {};
      this.tagSpecificState = {};
      this.messageValidationEnabled = !1;
      this.floatingAdsStacking = new Tj();
    }
  }
  var Tj = class {
    constructor() {
      this.maxZIndexRestrictions = {};
      this.nextRestrictionId = 0;
      this.maxZIndexListeners = [];
    }
  };
  var Vj = 728 * 1.38,
    Wj = (a, b = 420) =>
      (a = W(a).clientWidth) ? (a > b ? 32768 : 320 > a ? 65536 : 0) : 16384,
    Xj = (a) => {
      var b = W(a).clientWidth;
      a = a.innerWidth;
      return (b = b && a ? b / a : 0)
        ? 1.05 < b
          ? 262144
          : 0.95 > b
          ? 524288
          : 0
        : 131072;
    },
    Zj = (a) => Math.max(0, Yj(a, !0) - W(a).clientHeight),
    W = (a) => {
      a = a.document;
      let b = {};
      a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
      return b || {};
    },
    Yj = (a, b) => {
      const c = W(a);
      return b
        ? c.scrollHeight == W(a).clientHeight
          ? c.offsetHeight
          : c.scrollHeight
        : c.offsetHeight;
    },
    bk = (a, b) =>
      ak(b) || 10 === b || !a.adCount
        ? !1
        : 1 == b || 2 == b
        ? !(!a.adCount[1] && !a.adCount[2])
        : (a = a.adCount[b])
        ? 1 <= a
        : !1,
    ck = (a, b) =>
      a && a.source ? a.source === b || a.source.parent === b : !1,
    dk = (a) =>
      void 0 === a.pageYOffset
        ? (
            a.document.documentElement ||
            a.document.body.parentNode ||
            a.document.body
          ).scrollTop
        : a.pageYOffset,
    ek = (a) =>
      void 0 === a.pageXOffset
        ? (
            a.document.documentElement ||
            a.document.body.parentNode ||
            a.document.body
          ).scrollLeft
        : a.pageXOffset,
    fk = (a) => {
      const b = {};
      let c;
      Array.isArray(a) ? (c = a) : a && a.key_value && (c = a.key_value);
      if (c)
        for (a = 0; a < c.length; a++) {
          const d = c[a];
          if ("key" in d && "value" in d) {
            const e = d.value;
            b[d.key] = null == e ? null : String(e);
          }
        }
      return b;
    },
    gk = (a, b, c, d, e) => {
      $g(
        c,
        b,
        {
          c: e.data.substring(0, 500),
          u: a.location.href.substring(0, 500),
        },
        !0,
        0.1
      );
      return !0;
    },
    ak = (a) => 26 === a || 27 === a || 40 === a;
  var hk = (a) => {
    let b = 0;
    try {
      (b |= a != a.top ? 512 : 0), (b |= Wj(a, 1e4));
    } catch (c) {
      b |= 32;
    }
    return b;
  };
  var ik = (a) => {
    let b = 0;
    try {
      (b |= a != a.top ? 512 : 0), (b |= Wj(a, 1e4));
    } catch (c) {
      b |= 32;
    }
    return b;
  };
  var kk = class extends y {
      constructor(a) {
        super(a, -1, jk);
      }
    },
    lk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    mk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    jk = [3];
  var ok = class extends y {
      constructor(a) {
        super(a, -1, nk);
      }
    },
    nk = [2];
  var pk = class extends y {
    constructor(a) {
      super(a);
    }
  };
  var rk = class extends y {
      constructor(a) {
        super(a, -1, qk);
      }
    },
    qk = [1];
  var tk = class extends y {
      constructor(a) {
        super(a, -1, sk);
      }
    },
    sk = [4];
  var uk = class extends y {
    constructor(a) {
      super(a);
    }
    V() {
      return H(this, tk, 1);
    }
    j() {
      return z(this, 2);
    }
  };
  var vk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    wk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    xk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    yk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    zk = [1, 2, 3];
  var Ak = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Bk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Dk = class extends y {
      constructor(a) {
        super(a, -1, Ck);
      }
    },
    Ek = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Fk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Ck = [1];
  var Gk = class extends y {
    constructor(a) {
      super(a);
    }
  };
  var Ik = class extends y {
      constructor(a) {
        super(a, -1, Hk);
      }
    },
    Hk = [3, 4];
  var Jk = class extends y {
    constructor(a) {
      super(a);
    }
  };

  function Kk() {
    var a = new Lk();
    return F(a, 2, 1);
  }
  var Lk = class extends y {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return F(this, 1, a);
    }
  };
  var Nk = class extends y {
      constructor(a) {
        super(a, -1, Mk);
      }
      V() {
        return H(this, tk, 1);
      }
      j() {
        return z(this, 2);
      }
    },
    Mk = [6, 7, 9, 10, 11];
  var Pk = class extends y {
      constructor(a) {
        super(a, -1, Ok);
      }
    },
    Ok = [4];
  var Qk = class extends y {
    constructor(a) {
      super(a);
    }
  };
  var Sk = class extends y {
      constructor(a) {
        super(a, -1, Rk);
      }
    },
    Tk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Rk = [1];
  var Vk = class extends y {
      constructor(a) {
        super(a, -1, Uk);
      }
    },
    Xk = class extends y {
      constructor(a) {
        super(a, -1, Wk);
      }
    },
    Yk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Zk = class extends y {
      constructor(a) {
        super(a);
      }
    },
    $k = class extends y {
      constructor(a) {
        super(a);
      }
    },
    al = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Uk = [1],
    Wk = [1],
    bl = [1, 2];

  function cl(a) {
    return H(a, dl, 13);
  }

  function el(a) {
    return H(a, fl, 15);
  }
  var hl = class extends y {
      constructor(a) {
        super(a, -1, gl);
      }
    },
    il = class extends y {
      constructor() {
        super(void 0);
      }
    },
    jl = class extends y {
      constructor(a) {
        super(a);
      }
    },
    ll = class extends y {
      constructor(a) {
        super(a, -1, kl);
      }
    },
    ml = class extends y {
      constructor(a) {
        super(a);
      }
    },
    nl = class extends y {
      constructor(a) {
        super(a);
      }
    },
    dl = class extends y {
      constructor(a) {
        super(a);
      }
    },
    ol = class extends y {
      constructor(a) {
        super(a);
      }
    },
    fl = class extends y {
      constructor(a) {
        super(a);
      }
    },
    pl = class extends y {
      constructor(a) {
        super(a);
      }
    },
    ql = class extends y {
      constructor(a) {
        super(a);
      }
    },
    gl = [1, 2, 5, 7],
    kl = [2, 5, 6, 11];
  var rl = class extends y {
    constructor() {
      super(void 0);
    }
  };

  function sl(a, b) {
    if (b) {
      var c = b.adClient;
      if ("string" === typeof c && c) {
        a.cb = c;
        a.A = !!b.adTest;
        c = b.pubVars;
        ea(c) && (a.G = c);
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
          a.D = {};
          for (d of b.fillMessage) a.D[d.key] = d.value;
        }
        a.B = b.adWidth;
        a.l = b.adHeight;
        (xg(a.B) && xg(a.l)) || T("rctnosize", b);
        var d = !0;
      } else d = !1;
    } else d = !1;
    return d && a.H(b);
  }
  class tl {
    constructor() {
      this.D = this.G = this.A = this.cb = null;
      this.l = this.B = 0;
    }
    H() {
      return !0;
    }
  }

  function ul(a, b) {
    b = void 0 === b ? [] : b;
    const c = Date.now();
    return Fa(b, (d) => c - d < 1e3 * a);
  }

  function vl(a, b) {
    try {
      const c = a.getItem("__lsv__");
      if (!c) return [];
      let d;
      try {
        d = JSON.parse(c);
      } catch (e) {}
      if (!Array.isArray(d) || Ia(d, (e) => !Number.isInteger(e)))
        return a.removeItem("__lsv__"), [];
      d = ul(b, d);
      d.length || null == a || a.removeItem("__lsv__");
      return d;
    } catch (c) {
      return null;
    }
  }

  function wl(a, b) {
    var c;
    if (!(c = 0 >= b) && !(c = null == a)) {
      try {
        a.setItem("__storage_test__", "__storage_test__");
        const e = a.getItem("__storage_test__");
        a.removeItem("__storage_test__");
        var d = "__storage_test__" === e;
      } catch (e) {
        d = !1;
      }
      c = !d;
    }
    return c ? null : vl(a, b);
  }
  var xl = (a, b, c) => {
    let d = 0;
    try {
      d |= a != a.top ? 512 : 0;
      d |= Xj(a);
      d |= Wj(a);
      d |= a.innerHeight >= a.innerWidth ? 0 : 8;
      d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
      var e;
      if ((e = b)) {
        var f = wl(c, 3600);
        e = !(f && 1 > f.length);
      }
      e && (d |= 134217728);
      V(wj) && (d |= 128);
    } catch (g) {
      d |= 32;
    }
    return d;
  };
  class yl extends tl {
    constructor() {
      super();
      this.C = !1;
      this.j = null;
      this.F = !1;
    }
    H(a) {
      this.C = !!a.enableAma;
      var b = a.amaConfig;
      if (b)
        try {
          var c = Id(hl, b);
        } catch (d) {
          c = null;
        }
      else c = null;
      this.j = c;
      Array.isArray(a.fillMessage) && (this.F = !0);
      return !0;
    }
  }
  var zl = !Oc && !ec();

  function Al(a) {
    if (/-[a-z]/.test("adFormat")) return null;
    if (zl && a.dataset) {
      if (gc() && !("adFormat" in a.dataset)) return null;
      a = a.dataset.adFormat;
      return void 0 === a ? null : a;
    }
    return a.getAttribute(
      "data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase()
    );
  }
  var Bl = (a, b, c) => {
      if (!b) return null;
      const d = Re(document, "INS");
      d.id = "google_pedestal_container";
      d.style.width = "100%";
      d.style.zIndex = "-1";
      if (c) {
        var e = a.getComputedStyle(c),
          f = "";
        if (e && "static" != e.position) {
          var g = c.parentNode.lastElementChild;
          for (f = e.position; g && g != c; ) {
            if ("none" != a.getComputedStyle(g).display) {
              f = a.getComputedStyle(g).position;
              break;
            }
            g = g.previousElementSibling;
          }
        }
        if ((c = f)) d.style.position = c;
      }
      b.appendChild(d);
      if (d) {
        var h = a.document;
        f = h.createElement("div");
        f.style.width = "100%";
        f.style.height = "2000px";
        c = W(a).clientHeight;
        e = h.body.scrollHeight;
        a = a.innerHeight;
        g = h.body.getBoundingClientRect().bottom;
        d.appendChild(f);
        var k = f.getBoundingClientRect().top;
        h = h.body.getBoundingClientRect().top;
        d.removeChild(f);
        f = e;
        e <= a && 0 < c && 0 < g && (f = g - h);
        a = k - h >= 0.8 * f;
      } else a = !1;
      return a ? d : (b.removeChild(d), null);
    },
    Dl = (a) => {
      let b = 0;
      try {
        (b |= a != a.top ? 512 : 0),
          $e() || (b |= 1048576),
          1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
            (b |= 32768),
          Cl(a) && (b |= 33554432);
      } catch (c) {
        b |= 32;
      }
      return b;
    },
    Cl = (a) => {
      a = a.document.getElementsByClassName("adsbygoogle");
      for (let b = 0; b < a.length; b++)
        if ("autorelaxed" == Al(a[b])) return !0;
      return !1;
    };
  var El = class extends y {
    constructor(a) {
      super(a);
    }
  };
  var Gl = class extends y {
      constructor(a) {
        super(a, -1, Fl);
      }
    },
    Hl = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Jl = class extends y {
      constructor(a) {
        super(a, -1, Il);
      }
    },
    Fl = [2],
    Il = [2];
  var Kl = class extends y {
    constructor(a) {
      super(a);
    }
  };
  var Ll = (a) => {
      a.google_ad_modifications || (a.google_ad_modifications = {});
      return a.google_ad_modifications;
    },
    Ml = (a) => {
      a = Ll(a);
      a.eids || (a.eids = []);
      return a.eids;
    },
    Nl = (a, b) => {
      a = Ll(a);
      a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
      const c = !a.processed_sra_frame_pingbacks[b];
      a.processed_sra_frame_pingbacks[b] = !0;
      return c;
    };
  var Ol = {
      rf: "google_ads_preview",
      Xf: "google_mc_lab",
      kg: "google_anchor_debug",
      jg: "google_bottom_anchor_debug",
      INTERSTITIAL: "google_ia_debug",
      Fg: "google_scr_debug",
      Hg: "google_ia_debug_allow_onclick",
      $g: "googleads",
      Yc: "google_pedestal_debug",
      rh: "google_responsive_slot_preview",
      qh: "google_responsive_dummy_ad",
    },
    Pl = {
      ["google_bottom_anchor_debug"]: 1,
      ["google_anchor_debug"]: 2,
      ["google_ia_debug"]: 8,
      ["google_scr_debug"]: 9,
      ["googleads"]: 2,
      ["google_pedestal_debug"]: 30,
    };
  var Ql = {
    INTERSTITIAL: 1,
    BOTTOM_ANCHOR: 2,
    TOP_ANCHOR: 3,
    wh: 4,
    1: "INTERSTITIAL",
    2: "BOTTOM_ANCHOR",
    3: "TOP_ANCHOR",
    4: "SCROLL_TRIGGERED_IMMERSIVE",
  };
  var Sl = (a, b) => {
      if (!a) return !1;
      a = a.hash;
      if (!a || !a.indexOf) return !1;
      if (-1 != a.indexOf(b)) return !0;
      b = Rl(b);
      return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
    },
    Rl = (a) => {
      let b = "";
      vg(a.split("_"), (c) => {
        b += c.substr(0, 2);
      });
      return b;
    },
    Tl = () => {
      var a = t.location;
      let b = !1;
      vg(Ol, (c) => {
        Sl(a, c) && (b = !0);
      });
      return b;
    },
    Ul = (a, b) => {
      switch (a) {
        case 1:
          return Sl(b, "google_ia_debug");
        case 2:
          return Sl(b, "google_bottom_anchor_debug");
        case 3:
          return Sl(b, "google_anchor_debug") || Sl(b, "googleads");
        case 4:
          return Sl(b, "google_scr_debug");
      }
      return !1;
    };
  const Vl = (a) => null !== a && void 0 !== a;

  function Wl(a, b) {
    if (!b(a)) throw Error(String(a));
  }
  var Xl = (a) => "string" === typeof a,
    Yl = (a) => void 0 === a;
  var Zl;
  Zl = {
    eh: 0,
    Wc: 3,
    Xc: 4,
    Zc: 5,
  };
  var $l = Zl.Wc,
    am = Zl.Xc,
    bm = Zl.Zc;

  function cm(a, b) {
    b &&
      !a.j &&
      (a.j = b.split(":").find((c) => 0 === c.indexOf("ID=")) || null);
  }
  var dm = class {
      constructor() {
        this.j = null;
        this.l = {
          [$l]: {},
          [am]: {},
          [bm]: {},
        };
        const a = (b) => (this.j ? of(`${b} + ${this.j}`) % 1e3 : void 0);
        this.l[am] = {
          [9]: (...b) => a(b[0]),
        };
      }
    },
    em;

  function fm(a) {
    return new gm(
      {
        value: a,
      },
      null
    );
  }

  function hm(a) {
    return new gm(null, Error(a));
  }

  function im(a) {
    try {
      return fm(a());
    } catch (b) {
      return new gm(null, b);
    }
  }

  function jm(a) {
    return null != a.j ? a.j.value : null;
  }

  function km(a, b) {
    null != a.j && b(a.j.value);
  }

  function lm(a, b) {
    null != a.j || b(a.l);
    return a;
  }
  class gm {
    constructor(a, b) {
      this.j = a;
      this.l = b;
    }
    map(a) {
      return null != this.j
        ? ((a = a(this.j.value)), a instanceof gm ? a : fm(a))
        : this;
    }
  }

  function mm() {
    var a = P(),
      b = $f(a);
    if (b)
      return (
        (b = b || $f())
          ? ((a = b.pageViewId),
            (b = b.clientId),
            "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6)))
          : (a = null),
        +a
      );
    a = Kj(a, !1).X;
    (b = a.google_global_correlator) ||
      (a.google_global_correlator = b =
        1 + Math.floor(Math.random() * Math.pow(2, 43)));
    return b;
  }

  function nm() {
    if (om) return om;
    const a = cg() || P(),
      b = a.google_persistent_state_async;
    return null != b &&
      "object" == typeof b &&
      null != b.S &&
      "object" == typeof b.S
      ? (om = b)
      : (a.google_persistent_state_async = om = new pm());
  }

  function qm(a) {
    return rm[a] || "google_ps_" + a;
  }

  function X(a, b, c) {
    b = qm(b);
    a = a.S;
    const d = a[b];
    return void 0 === d ? (a[b] = c) : d;
  }

  function sm(a, b) {
    var c = X(a, b, 0) + 1;
    return (a.S[qm(b)] = c);
  }

  function tm() {
    var a = nm();
    return X(a, 20, {});
  }

  function um() {
    var a = nm();
    return X(a, 28, []);
  }
  class pm {
    constructor() {
      this.S = {};
    }
  }
  var om = null;
  const rm = {
    [8]: "google_prev_ad_formats_by_region",
    [9]: "google_prev_ad_slotnames_by_region",
  };
  var vm = (a) => {
    if (!a || !A(a, 1)) return !1;
    a = z(a, 1);
    switch (a) {
      case 1:
        return !0;
      case 2:
        return !1;
      default:
        throw Error("Unhandled AutoConsentUiStatus: " + a);
    }
  };
  var wm = class extends y {
    constructor(a) {
      super(a);
    }
  };

  function xm(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    const c = b;
    return c ? im(() => Id(wm, c)) : fm(null);
  }

  function ym(a, b) {
    return F(a, 5, b);
  }
  var zm = class extends y {
    constructor() {
      super(void 0);
    }
  };

  function Am(a) {
    this.j = a || {
      cookie: "",
    };
  }
  q = Am.prototype;
  q.set = function (a, b, c) {
    let d,
      e,
      f,
      g = !1,
      h;
    "object" === typeof c &&
      ((h = c.Yh),
      (g = c.qe || !1),
      (f = c.domain || void 0),
      (e = c.path || void 0),
      (d = c.Ec));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.j.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (e ? ";path=" + e : "") +
      (0 > d
        ? ""
        : 0 == d
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * d).toUTCString()) +
      (g ? ";secure" : "") +
      (null != h ? ";samesite=" + h : "");
  };
  q.get = function (a, b) {
    const c = a + "=",
      d = (this.j.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
      f = tb(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return "";
    }
    return b;
  };
  q.remove = function (a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
      Ec: 0,
      path: b,
      domain: c,
    });
    return d;
  };
  q.isEmpty = function () {
    return !this.j.cookie;
  };
  q.Pa = function () {
    return this.j.cookie ? (this.j.cookie || "").split(";").length : 0;
  };
  q.clear = function () {
    var a = (this.j.cookie || "").split(";");
    const b = [],
      c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
      (e = tb(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a]);
  };

  function Bm(a, b = window) {
    if (B(a, 5))
      try {
        return b.localStorage;
      } catch (c) {}
    return null;
  }

  function Cm(a, b) {
    return B(a, 5) && "null" !== b.origin ? b.document.cookie : null;
  }

  function Dm(a, b, c) {
    b = Cm(b, c);
    return null === b
      ? null
      : new Am({
          cookie: b,
        }).get(a) || "";
  }

  function Em() {
    this.R = this.R;
    this.Z = this.Z;
  }
  Em.prototype.R = !1;
  Em.prototype.kb = function () {
    this.R || ((this.R = !0), this.B());
  };
  Em.prototype.B = function () {
    if (this.Z) for (; this.Z.length; ) this.Z.shift()();
  };
  const Fm = (a) => {
    void 0 !== a.addtlConsent &&
      "string" !== typeof a.addtlConsent &&
      (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies &&
      "boolean" !== typeof a.gdprApplies &&
      (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
      (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
      ? 2
      : a.cmpStatus && "error" !== a.cmpStatus
      ? 0
      : 3;
  };

  function Gm(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = Fm(a));
    return "error" === a.cmpStatus ||
      0 !== a.internalErrorState ||
      ("loaded" === a.cmpStatus &&
        ("tcloaded" === a.eventStatus ||
          "useractioncomplete" === a.eventStatus))
      ? !0
      : !1;
  }

  function Hm(a) {
    if (Gm(a))
      if (
        !1 !== a.gdprApplies &&
        "tcunavailable" !== a.tcString &&
        void 0 !== a.gdprApplies &&
        "string" === typeof a.tcString &&
        a.tcString.length
      ) {
        b: {
          if (a.publisher && a.publisher.restrictions) {
            var b = a.publisher.restrictions["1"];
            if (void 0 !== b) {
              b = b["755"];
              break b;
            }
          }
          b = void 0;
        }
        0 === b
          ? (a = !1)
          : a.purpose && a.vendor
          ? ((b = a.vendor.consents),
            (b = !(!b || !b["755"])) &&
            a.purposeOneTreatment &&
            ("DE" === a.publisherCC || "CH" === a.publisherCC)
              ? (a = !0)
              : (b && ((a = a.purpose.consents), (b = !(!a || !a["1"]))),
                (a = b)))
          : (a = !0);
      } else a = !0;
    else a = !1;
    return a;
  }

  function Im(a) {
    if (a.l) return a.l;
    a.l = Bf(a.j, "__tcfapiLocator");
    return a.l;
  }

  function Jm(a) {
    return "function" === typeof a.j.__tcfapi || null != Im(a);
  }

  function Km(a, b, c, d) {
    c || (c = () => {});
    if ("function" === typeof a.j.__tcfapi) (a = a.j.__tcfapi), a(b, 2, c, d);
    else if (Im(a)) {
      Lm(a);
      const e = ++a.F;
      a.D[e] = c;
      a.l &&
        a.l.postMessage(
          {
            ["__tcfapiCall"]: {
              command: b,
              version: 2,
              callId: e,
              parameter: d,
            },
          },
          "*"
        );
    } else c({}, !1);
  }

  function Mm(a, b) {
    let c = {
      internalErrorState: 0,
    };
    const d = Aa(() => b(c));
    let e = 0;
    -1 !== a.C &&
      (e = setTimeout(() => {
        e = 0;
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, a.C));
    Km(a, "addEventListener", (f) => {
      f &&
        ((c = f),
        (c.internalErrorState = Fm(c)),
        Gm(c) &&
          (0 != c.internalErrorState && (c.tcString = "tcunavailable"),
          Km(a, "removeEventListener", null, c.listenerId),
          e && (clearTimeout(e), (e = 0)),
          d()));
    });
  }

  function Nm(a, b) {
    let c = {
      internalErrorState: 0,
    };
    const d = Aa(() => b(c));
    let e = 0;
    -1 !== a.C &&
      (e = setTimeout(() => {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, a.C));
    Km(a, "addEventListener", (f, g) => {
      e && (clearTimeout(e), (e = 0));
      g && (c = f);
      c.internalErrorState = Fm(c);
      0 != c.internalErrorState && (c.tcString = "tcunavailable");
      if (0 != c.internalErrorState || Gm(c))
        Km(a, "removeEventListener", null, c.listenerId), d();
    });
  }

  function Om(a) {
    return new Promise((b) => {
      Nm(a, b);
    });
  }

  function Lm(a) {
    a.A ||
      ((a.A = (b) => {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
            .__tcfapiReturn;
          a.D[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      L(a.j, "message", a.A));
  }
  class Pm extends Em {
    constructor(a, b = 500) {
      super();
      this.j = a;
      this.l = null;
      this.D = {};
      this.F = 0;
      this.C = b;
      this.A = null;
    }
    B() {
      this.D = {};
      this.A && (le(this.j, "message", this.A), delete this.A);
      delete this.D;
      delete this.j;
      delete this.l;
      super.B();
    }
    addEventListener(a) {
      let b = {};
      const c = Aa(() => a(b));
      let d = 0;
      -1 !== this.C &&
        (d = setTimeout(() => {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c();
        }, this.C));
      const e = (f, g) => {
        clearTimeout(d);
        f
          ? ((b = f),
            (b.internalErrorState = Fm(b)),
            (g && 0 === b.internalErrorState) ||
              ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
          : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
        a(b);
      };
      try {
        Km(this, "addEventListener", e);
      } catch (f) {
        (b.tcString = "tcunavailable"),
          (b.internalErrorState = 3),
          d && (clearTimeout(d), (d = 0)),
          c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && Km(this, "removeEventListener", null, a.listenerId);
    }
  }
  var Sm = ({ X: a, Vb: b, Ac: c = !1, Bc: d = !1 }) => {
    if (
      !Qm({
        X: a,
        Vb: b,
        Ac: c,
        Bc: d,
      })
    )
      return Rm(a, ym(new zm(), !0));
    b = nm();
    (b = X(b, 24, void 0))
      ? ((b = ym(new zm(), Hm(b))), (a = Rm(a, b)))
      : (a = new gm(null, Error("tcunav")));
    return a;
  };

  function Qm({ X: a, Vb: b, Ac: c, Bc: d }) {
    if (!(d = !d && Jm(new Pm(a)))) {
      if ((c = !c)) {
        if (b) {
          a = xm(a);
          if (null != a.j)
            if ((a = a.j.value) && A(a, 1))
              b: switch (((a = z(a, 1)), a)) {
                case 1:
                  a = !0;
                  break b;
                default:
                  throw Error("Unhandled AutoGdprFeatureStatus: " + a);
              }
            else a = !1;
          else zh.da(806, a.l, void 0, void 0), (a = !1);
          b = !a;
        }
        c = b;
      }
      d = c;
    }
    return d ? !0 : !1;
  }

  function Rm(a, b) {
    return (a = Bm(b, a)) ? fm(a) : new gm(null, Error("unav"));
  }
  let Tm = void 0;

  function Um() {
    Wl(Tm, Vl);
    return Tm;
  }

  function Vm(a) {
    Wl(Tm, Yl);
    Tm = a;
  }

  function Wm(a) {
    try {
      const b = a.getItem("google_adsense_settings");
      if (!b) return {};
      const c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : Sa(
            c,
            (d, e) =>
              Object.prototype.hasOwnProperty.call(c, e) &&
              "string" === typeof e &&
              Array.isArray(d)
          );
    } catch (b) {
      return {};
    }
  }

  function Xm(a) {
    V(wi) &&
      T(
        "abg_adsensesettings_lserr",
        {
          s: a,
          g: V(xi),
          c: Um(),
          r: 0.01,
        },
        0.01
      );
  }
  class Ym {
    constructor(a) {
      this.methodName = a;
    }
  }
  var Zm = new Ym(15),
    $m = new Ym(2),
    an = new Ym(3),
    bn = new Ym(5),
    cn = new Ym(6),
    dn = new Ym(7),
    en = new Ym(8),
    fn = new Ym(14),
    gn = (a, b, c) => b[a.methodName] || c || (() => {});
  var hn = (a = t) => a.ggeac || (a.ggeac = {});

  function jn(a, b, c) {
    a.j = (d) => {
      gn($m, b, () => [])(d, c);
    };
    a.l = () => gn(an, b, () => [])(c);
  }
  class kn {
    constructor() {
      this.j = () => {};
      this.l = () => [];
    }
  }
  var ln = (a, b = 0) => {
    jn(ii(kn), a, b);
  };
  class mn {
    constructor() {
      this.j = () => {};
    }
  }
  var on = (a) => {
      var b = 1;
      a = void 0 === a ? hn() : a;
      b = void 0 === b ? 0 : b;
      ln(a, b);
      nn(a, b);
      ii(mn).j = gn(fn, a);
      ii(Hj).l();
    },
    nn = (a, b) => {
      const c = ii(Hj);
      c.A = (d, e) => gn(bn, a, () => !1)(d, e, b);
      c.B = (d, e) => gn(cn, a, () => 0)(d, e, b);
      c.j = (d, e) => gn(dn, a, () => "")(d, e, b);
      c.C = (d, e) => gn(en, a, () => [])(d, e, b);
      c.l = () => {
        gn(Zm, a)(b);
      };
    };
  var pn = (a) => {
    const b = ii(kn).l();
    a = Ml(a);
    return b.concat(a).join(",");
  };
  var qn = (a, b) => {
    ph(a, (c) => {
      c.shv = String(b);
      c.mjsv = "m202109080101";
      const d = pn(t);
      d && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d);
    });
  };
  let rn = new Date().getTime();
  var sn = (a) => {
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? 0.05 : a;
  };
  var tn = {
    Ag: 0,
    zg: 1,
    wg: 2,
    rg: 3,
    xg: 4,
    sg: 5,
    yg: 6,
    ug: 7,
    vg: 8,
    qg: 9,
    tg: 10,
  };
  var un = {
    Cg: 0,
    Dg: 1,
    Bg: 2,
  };

  function vn(a, b) {
    return (
      a.left < b.right &&
      b.left < a.right &&
      a.top < b.bottom &&
      b.top < a.bottom
    );
  }

  function wn(a) {
    a = Ga(a, (b) => new Tf(b.top, b.right, b.bottom, b.left));
    a = xn(a);
    return {
      top: a.top,
      right: a.right,
      bottom: a.bottom,
      left: a.left,
    };
  }

  function xn(a) {
    if (!a.length) throw Error("pso:box:m:nb");
    return Ha(
      a.slice(1),
      (b, c) => {
        b.left = Math.min(b.left, c.left);
        b.top = Math.min(b.top, c.top);
        b.right = Math.max(b.right, c.right);
        b.bottom = Math.max(b.bottom, c.bottom);
        return b;
      },
      Uf(a[0])
    );
  }

  function yn(a) {
    if (0 != a.j) throw Error("Already resolved/rejected.");
  }
  var An = class {
    constructor() {
      this.l = new zn(this);
      this.j = 0;
    }
  };

  function Bn(a) {
    switch (a.j.j) {
      case 0:
        break;
      case 1:
        a.l && a.l(a.j.B);
        break;
      case 2:
        a.A && a.A(a.j.A);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  var zn = class {
    constructor(a) {
      this.j = a;
    }
    then(a, b) {
      if (this.l) throw Error("Then functions already set.");
      this.l = a;
      this.A = b;
      Bn(this);
    }
  };

  function Cn(a, b) {
    return void 0 !== a.j[Dn(b)];
  }

  function En(a) {
    var b = [],
      c;
    for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
    return b;
  }

  function Fn(a) {
    var b = [],
      c;
    for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
    return b;
  }
  const Gn = class {
    constructor() {
      this.j = {};
      this.l = {};
    }
    set(a, b) {
      const c = Dn(a);
      this.j[c] = b;
      this.l[c] = a;
    }
    remove(a) {
      a = Dn(a);
      this.j[a] = void 0;
      this.l[a] = void 0;
    }
    get(a, b) {
      a = Dn(a);
      return void 0 !== this.j[a] ? this.j[a] : b;
    }
    Pa() {
      return En(this).length;
    }
    clear() {
      this.j = {};
      this.l = {};
    }
  };

  function Dn(a) {
    return a instanceof Object ? String(fa(a)) : a + "";
  }

  function Hn(a, b) {
    In(a).forEach(b, void 0);
  }

  function In(a) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b;
  }
  const Jn = class {
    constructor(a) {
      this.j = new Gn();
      if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.j.set(a, !0);
    }
    remove(a) {
      this.j.remove(a);
    }
    contains(a) {
      return Cn(this.j, a);
    }
  };
  const Kn = new Jn(
    "IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(
      " "
    )
  );
  var Nn = (a, b) => {
    const c = new Ln(a, b);
    return () => Mn(c);
  };

  function Mn(a) {
    if (a.j) return !1;
    if (null == a.l) return On(a), !0;
    const b = a.l + 1e3 - new Date().getTime();
    if (1 > b) return On(a), !0;
    Pn(a, b);
    return !0;
  }

  function On(a) {
    a.l = new Date().getTime();
    a.B();
  }

  function Pn(a, b) {
    a.j = !0;
    a.A.setTimeout(() => {
      a.j = !1;
      On(a);
    }, b);
  }
  class Ln {
    constructor(a, b) {
      this.A = a;
      this.B = b;
      this.l = null;
      this.j = !1;
    }
  }

  function Qn(a, b, c) {
    return {
      top: a.j - c,
      right: a.A + a.l + b,
      bottom: a.j + c,
      left: a.A - b,
    };
  }
  class Rn {
    constructor(a, b, c) {
      this.A = a;
      this.j = b;
      this.l = c;
    }
  }

  function Sn(a, b) {
    a = a.getBoundingClientRect();
    return new Tn(a.top + dk(b), a.bottom - a.top);
  }

  function Un(a) {
    return new Tn(Math.round(a.va), Math.round(a.j));
  }
  class Tn {
    constructor(a, b) {
      this.va = a;
      this.j = b;
    }
    sa() {
      return this.j;
    }
  }

  function Vn(a, b) {
    a.D ? b(a.A) : a.l.push(b);
  }

  function Wn(a, b) {
    a.D = !0;
    a.A = b;
    a.l.forEach((c) => {
      c(a.A);
    });
    a.l = [];
  }
  class Xn {
    constructor(a) {
      this.j = a;
      this.l = [];
      this.D = !1;
      this.C = this.A = null;
      this.F = Nn(a, () => {
        if (null != this.C) {
          var b = Yj(this.j, !0) - this.C;
          1e3 < b && Wn(this, b);
        }
      });
      this.B = null;
    }
    init(a, b) {
      null == a
        ? ((this.C = a = Yj(this.j, !0)),
          this.j.addEventListener("scroll", this.F),
          null != b && b(a))
        : (this.B = this.j.setTimeout(() => {
            this.init(void 0, b);
          }, a));
    }
    kb() {
      null != this.B && this.j.clearTimeout(this.B);
      this.j.removeEventListener("scroll", this.F);
      this.l = [];
      this.A = null;
    }
  }
  var Yn = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
  class Zn {
    constructor(a = 1) {
      this.j = a;
    }
    next() {
      var a = (48271 * this.j) % 2147483647;
      this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
      return this.j / 2147483647;
    }
  }

  function $n(a, b) {
    a.j.forEach((c, d) => void b(c, d, a));
  }

  function ao(a, b, c) {
    const d = [];
    for (const e of a.j) b(e) ? d.push(e) : c(e);
    return new bo(d);
  }

  function co(a, b = 1) {
    a = a.j.slice(0);
    const c = new Zn(b);
    Ra(a, () => c.next());
    return new bo(a);
  }
  const bo = class {
    constructor(a) {
      this.j = a.slice(0);
    }
    filter(a) {
      return new bo(Fa(this.j, a));
    }
    apply(a) {
      return new bo(a(this.j.slice(0)));
    }
    sort(a) {
      return new bo(this.j.slice(0).sort(a));
    }
    get(a) {
      return this.j[a];
    }
    add(a) {
      const b = this.j.slice(0);
      b.push(a);
      return new bo(b);
    }
  };
  class eo {
    constructor(a) {
      this.j = new Jn(a);
    }
    contains(a) {
      return this.j.contains(a);
    }
  }

  function fo(a, b, c = !1) {
    a.l.push(b);
    c && b(a.j);
  }

  function go(a, b) {
    a.j = b;
    Ea(a.l, (c) => {
      c(a.j);
    });
  }

  function ho(a, b) {
    fo(b, (c) => go(a, c), !0);
  }
  class io {
    constructor(a) {
      this.j = a;
      this.l = [];
    }
    map(a) {
      const b = new io(a(this.j));
      fo(this, (c) => go(b, a(c)));
      return b;
    }
  }
  class jo {
    constructor() {
      this.j = new Gn();
    }
    set(a, b) {
      let c = this.j.get(a);
      c || ((c = new Jn()), this.j.set(a, c));
      c.add(b);
    }
  }
  class ko {
    constructor(a, { mc: b, dd: c, Nd: d, Oc: e }) {
      this.C = a;
      this.A = c;
      this.B = new bo(b || []);
      this.l = e;
      this.j = d;
    }
  }
  var lo = (a) => {
      var b = a.split("~").filter((c) => 0 < c.length);
      a = new Gn();
      for (const c of b)
        (b = c.indexOf(".")),
          -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
      return a;
    },
    no = (a) => {
      var b = mo(a);
      a = [];
      for (let c of b)
        (b = String(c.Ja)),
          a.push(c.ua + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
      return a.join("~");
    };
  const mo = (a) => {
      const b = [],
        c = a.B;
      c &&
        c.j.length &&
        b.push({
          ua: "a",
          Ja: oo(c),
        });
      null != a.A &&
        b.push({
          ua: "as",
          Ja: a.A,
        });
      null != a.j &&
        b.push({
          ua: "i",
          Ja: String(a.j),
        });
      null != a.l &&
        b.push({
          ua: "rp",
          Ja: String(a.l),
        });
      b.sort(function (d, e) {
        return d.ua.localeCompare(e.ua);
      });
      b.unshift({
        ua: "t",
        Ja: po(a.C),
      });
      return b;
    },
    po = (a) => {
      switch (a) {
        case 0:
          return "aa";
        case 1:
          return "ma";
        default:
          throw Error("Invalid slot type" + a);
      }
    },
    oo = (a) => {
      a = a.j.slice(0).map(qo);
      a = JSON.stringify(a);
      return of(a);
    },
    qo = (a) => {
      const b = {};
      null != z(a, 7) && (b.q = z(a, 7));
      null != z(a, 2) && (b.o = z(a, 2));
      null != z(a, 5) && (b.p = z(a, 5));
      return b;
    };

  function ro(a) {
    const b = [].slice.call(arguments).filter(ya((e) => null === e));
    if (!b.length) return null;
    let c = [],
      d = {};
    b.forEach((e) => {
      c = c.concat(e.pc || []);
      d = Object.assign(d, e.Qa());
    });
    return new so(c, d);
  }

  function to(a) {
    switch (a) {
      case 1:
        return new so(null, {
          google_ad_semantic_area: "mc",
        });
      case 2:
        return new so(null, {
          google_ad_semantic_area: "h",
        });
      case 3:
        return new so(null, {
          google_ad_semantic_area: "f",
        });
      case 4:
        return new so(null, {
          google_ad_semantic_area: "s",
        });
      default:
        return null;
    }
  }

  function uo(a) {
    return null == a
      ? null
      : new so(null, {
          google_placement_id: no(a),
        });
  }
  class so {
    constructor(a, b) {
      this.pc = a;
      this.j = b;
    }
    Qa() {
      return this.j;
    }
  }
  var vo = class extends y {
    constructor(a) {
      super(a);
    }
  };

  function wo(a) {
    try {
      const b = a.localStorage.getItem("google_ama_settings");
      return b ? Id(vo, b) : null;
    } catch (b) {
      return null;
    }
  }

  function xo(a, b) {
    if (void 0 !== a.Nb) {
      let c = wo(b);
      c || (c = new vo());
      void 0 !== a.Nb && F(c, 2, a.Nb);
      F(c, 1, na() + 864e5);
      a = Gd(c);
      try {
        b.localStorage.setItem("google_ama_settings", a);
      } catch (d) {}
    } else if ((a = wo(b)) && z(a, 1) < na())
      try {
        b.localStorage.removeItem("google_ama_settings");
      } catch (c) {}
  }

  function yo(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = "INS" == a.tagName))
      a: {
        b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
          if (!c[b[d]]) {
            b = !1;
            break a;
          }
        b = !0;
      }
    return b;
  }

  function zo(a) {
    return In(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
  }

  function Ao(a, b) {
    a = Ze(new Le(a), "DIV");
    const c = a.style;
    c.width = "100%";
    c.height = "auto";
    c.clear = b ? "both" : "none";
    return a;
  }

  function Bo(a, b, c) {
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if ((c = b.parentNode)) {
          var d = b.nextSibling;
          if (d && d.parentNode != c)
            for (; d && 8 == d.nodeType; ) d = d.nextSibling;
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    yo(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }

  function Do(a) {
    if (a && a.parentNode) {
      const b = a.parentNode;
      b.removeChild(a);
      yo(b) &&
        (b.style.display = b.getAttribute("data-init-display") || "none");
    }
  }
  var Fo = (a, b, c, d = 0) => {
      var e = Eo(b, c, d);
      if (e.init) {
        for (c = b = e.init; (c = e.nb(c)); ) b = c;
        e = {
          anchor: b,
          position: e.Bb,
        };
      } else
        e = {
          anchor: b,
          position: c,
        };
      a["google-ama-order-assurance"] = d;
      Bo(a, e.anchor, e.position);
    },
    Go = (a, b, c, d = 0) => {
      V(Li) ? Fo(a, b, c, d) : Bo(a, b, c);
    };

  function Eo(a, b, c) {
    const d = (f) => {
        f = Ho(f);
        return null == f ? !1 : c < f;
      },
      e = (f) => {
        f = Ho(f);
        return null == f ? !1 : c > f;
      };
    switch (b) {
      case 0:
        return {
          init: Io(a.previousSibling, d),
          nb: (f) => Io(f.previousSibling, d),
          Bb: 0,
        };
      case 2:
        return {
          init: Io(a.lastChild, d),
          nb: (f) => Io(f.previousSibling, d),
          Bb: 0,
        };
      case 3:
        return {
          init: Io(a.nextSibling, e),
          nb: (f) => Io(f.nextSibling, e),
          Bb: 3,
        };
      case 1:
        return {
          init: Io(a.firstChild, e),
          nb: (f) => Io(f.nextSibling, e),
          Bb: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }

  function Ho(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }

  function Io(a, b) {
    return a && b(a) ? a : null;
  }
  var Jo = (a, b) => {
      try {
        const c = b.document.documentElement.getBoundingClientRect(),
          d = a.getBoundingClientRect();
        return {
          x: d.left - c.left,
          y: d.top - c.top,
        };
      } catch (c) {
        return null;
      }
    },
    Ko = (a, b) => {
      const c = 40 === a.google_reactive_ad_format,
        d = !!a.rss || 16 === a.google_reactive_ad_format;
      return (
        !!a.google_ad_resizable &&
        (!a.google_reactive_ad_format || c) &&
        !d &&
        !!b.navigator &&
        /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) &&
        b.top == b
      );
    },
    Lo = (a, b, c) => {
      a = a.style;
      "rtl" == b
        ? V(fj)
          ? a.setProperty("margin-right", c, "important")
          : (a.marginRight = c)
        : V(fj)
        ? a.setProperty("margin-left", c, "important")
        : (a.marginLeft = c);
    };
  const Mo = (a, b, c) => {
    a = Jo(b, a);
    return "rtl" == c ? -a.x : a.x;
  };
  var No = (a, b) => {
      b = b.parentElement;
      return b ? ((a = gf(b, a)) ? a.direction : "") : "";
    },
    Oo = (a, b, c) => {
      if (0 === Mo(a, b, c)) return !1;
      Lo(b, c, "0px");
      const d = Mo(a, b, c);
      Lo(b, c, -1 * d + "px");
      a = Mo(a, b, c);
      0 !== a && a !== d && Lo(b, c, (d / (a - d)) * d + "px");
      return !0;
    };

  function Po(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = Hc(d.ac);
      a[e] = d.value;
    }
  }

  function Qo(a, b, c, d, e, f) {
    a = Ro(a, e);
    a.ea.setAttribute("data-ad-format", d ? d : "auto");
    So(a, b, c, f);
    return a;
  }

  function To(a, b, c = null) {
    a = Ro(a, {});
    So(a, b, null, c);
    return a;
  }

  function So(a, b, c, d) {
    var e = [];
    if ((d = d && d.pc)) a.za.className = d.join(" ");
    a = a.ea;
    a.className = "adsbygoogle";
    a.setAttribute("data-ad-client", b);
    c && a.setAttribute("data-ad-slot", c);
    e.length && a.setAttribute("data-ad-channel", e.join("+"));
  }

  function Ro(a, b) {
    var c = Ao(a, b.clearBoth || !1),
      d = c.style;
    d.textAlign = "center";
    b.Ab && Po(d, b.Ab);
    a = Ze(new Le(a), "INS");
    d = a.style;
    d.display = "block";
    d.margin = "auto";
    d.backgroundColor = "transparent";
    b.kc && (d.marginTop = b.kc);
    b.Kb && (d.marginBottom = b.Kb);
    b.Ha && Po(d, b.Ha);
    c.appendChild(a);
    return {
      za: c,
      ea: a,
    };
  }

  function Uo(a, b, c) {
    b.setAttribute("data-adsbygoogle-status", "reserved");
    b.className += " adsbygoogle-noablate";
    var d = {
      element: b,
    };
    c = c && c.Qa();
    if (b.hasAttribute("data-pub-vars")) {
      try {
        c = JSON.parse(b.getAttribute("data-pub-vars"));
      } catch (e) {
        return;
      }
      b.removeAttribute("data-pub-vars");
    }
    c && (d.params = c);
    (a.adsbygoogle = a.adsbygoogle || []).push(d);
  }

  function Vo(a) {
    var b = zo(a.document);
    Ea(b, function (c) {
      var d = Wo(a, c),
        e;
      if ((e = d)) (e = Jo(c, a)), (e = !((e ? e.y : 0) < W(a).clientHeight));
      e &&
        (c.setAttribute("data-pub-vars", JSON.stringify(d)),
        c.removeAttribute("height"),
        c.style.removeProperty("height"),
        c.removeAttribute("width"),
        c.style.removeProperty("width"),
        Uo(a, c));
    });
  }

  function Wo(a, b) {
    b = b.getAttribute("google_element_uid");
    a = a.google_sv_map;
    if (!b || !a || !a[b]) return null;
    a = a[b];
    b = {};
    for (let c in De) a[De[c]] && (b[De[c]] = a[De[c]]);
    return b;
  }
  const Xo = (a, b) => {
    if (3 == b.nodeType)
      return (
        3 == b.nodeType
          ? ((b = b.data),
            (a = -1 != b.indexOf("&") ? Dc(b, a.document) : b),
            (a = /\S/.test(a)))
          : (a = !1),
        a
      );
    if (1 == b.nodeType) {
      var c = a.getComputedStyle(b);
      if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility)
        return !1;
      if ((c = b.tagName) && Kn.contains(c.toUpperCase())) return !0;
      b = b.childNodes;
      for (c = 0; c < b.length; c++) if (Xo(a, b[c])) return !0;
    }
    return !1;
  };
  var Yo = (a) => {
    if (460 <= a)
      return (a = Math.min(a, 1200)), Math.ceil(800 > a ? a / 4 : 200);
    a = Math.min(a, 600);
    return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130;
  };
  var Zo = class {
    constructor() {
      this.j = {
        clearBoth: !0,
      };
    }
    l(a, b, c, d) {
      return Qo(d.document, a, null, null, this.j, b);
    }
    A(a) {
      return Yo(Math.min(a.screen.width || 0, a.screen.height || 0));
    }
  };

  function $o(a) {
    var b = [];
    Hn(a.getElementsByTagName("p"), function (c) {
      100 <= ap(c) && b.push(c);
    });
    return b;
  }

  function ap(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = 0;
    Hn(a.childNodes, function (c) {
      b += ap(c);
    });
    return b;
  }

  function bp(a) {
    return 0 == a.length || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }

  function cp(a, b) {
    if (null == a.j) return b;
    switch (a.j) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.j);
    }
  }

  function dp(a, b) {
    var c = [];
    try {
      c = b.querySelectorAll(a.B);
    } catch (g) {}
    if (!c.length) return [];
    b = Oa(c);
    b = cp(a, b);
    "number" === typeof a.l &&
      ((c = a.l),
      0 > c && (c += b.length),
      (b = 0 <= c && c < b.length ? [b[c]] : []));
    if ("number" === typeof a.A) {
      c = [];
      for (var d = 0; d < b.length; d++) {
        var e = $o(b[d]),
          f = a.A;
        0 > f && (f += e.length);
        0 <= f && f < e.length && c.push(e[f]);
      }
      b = c;
    }
    return b;
  }
  const ep = class {
    constructor(a, b, c, d) {
      this.B = a;
      this.l = b;
      this.A = c;
      this.j = d;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: this.B,
        occurrenceIndex: this.l,
        paragraphIndex: this.A,
        ignoreMode: this.j,
      });
    }
  };

  function fp(a) {
    if (!a) return null;
    var b = z(a, 7);
    if (z(a, 1) || z(a, 3) || 0 < z(a, 4).length) {
      var c = z(a, 3),
        d = z(a, 1),
        e = z(a, 4);
      b = z(a, 2);
      var f = z(a, 5);
      a = gp(z(a, 6));
      var g = "";
      d && (g += d);
      c && (g += "#" + bp(c));
      if (e) for (c = 0; c < e.length; c++) g += "." + bp(e[c]);
      b = (e = g) ? new ep(e, b, f, a) : null;
    } else b = b ? new ep(b, z(a, 2), z(a, 5), gp(z(a, 6))) : null;
    return b;
  }
  var hp = {
    1: 1,
    2: 2,
    3: 3,
    0: 0,
  };

  function gp(a) {
    return null == a ? a : hp[a];
  }

  function ip(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      var d = z(a[c], 1),
        e = z(a[c], 2);
      if (d && null != e) {
        var f = {};
        f.ac = d;
        f.value = e;
        b.push(f);
      }
    }
    return b;
  }

  function jp(a, b) {
    var c = {};
    a && ((c.kc = z(a, 1)), (c.Kb = z(a, 2)), (c.clearBoth = !!B(a, 3)));
    b && ((c.Ab = ip(J(b, Gk, 3))), (c.Ha = ip(J(b, Gk, 4))));
    return c;
  }
  var kp = {
      1: 0,
      2: 1,
      3: 2,
      4: 3,
    },
    lp = {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
    };
  const mp = class {
    constructor(a) {
      this.j = a;
    }
    l(a, b, c, d) {
      return Qo(d.document, a, null, null, this.j, b);
    }
    A() {
      return null;
    }
  };
  class np {
    constructor(a) {
      this.l = a;
    }
    j(a) {
      a = Math.floor(a.l);
      const b = Yo(a);
      return new so(["ap_container"], {
        ["google_reactive_ad_format"]: 27,
        ["google_responsive_auto_format"]: 16,
        ["google_max_num_ads"]: 1,
        ["google_ad_type"]: this.l,
        ["google_ad_format"]: a + "x" + b,
        ["google_ad_width"]: a,
        ["google_ad_height"]: b,
      });
    }
  }
  var op = class {
    constructor(a, b) {
      this.B = a;
      this.A = b;
    }
    l() {
      return this.B;
    }
    j() {
      return this.A;
    }
  };
  const pp = class {
    constructor(a) {
      this.j = a;
    }
    l(a, b, c, d) {
      var e = 0 < J(this.j, Ik, 9).length ? J(this.j, Ik, 9)[0] : null,
        f = jp(H(this.j, Jk, 3), e);
      if (!e) return null;
      if ((e = z(e, 1))) {
        d = d.document;
        var g = c.tagName;
        c = Ze(new Le(d), g);
        c.style.clear = f.clearBoth ? "both" : "none";
        "A" == g && (c.style.display = "block");
        c.style.padding = "0px";
        c.style.margin = "0px";
        f.Ab && Po(c.style, f.Ab);
        d = Ze(new Le(d), "INS");
        f.Ha && Po(d.style, f.Ha);
        c.appendChild(d);
        f = {
          za: c,
          ea: d,
        };
        f.ea.setAttribute("data-ad-type", "text");
        f.ea.setAttribute("data-native-settings-key", e);
        So(f, a, null, b);
        a = f;
      } else a = null;
      return a;
    }
    A() {
      var a = 0 < J(this.j, Ik, 9).length ? J(this.j, Ik, 9)[0] : null;
      if (!a) return null;
      a = J(a, Gk, 3);
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if ("height" == z(c, 1) && 0 < parseInt(z(c, 2), 10))
          return parseInt(z(c, 2), 10);
      }
      return null;
    }
  };
  var qp = class {
    constructor(a) {
      this.j = a;
    }
    l(a, b, c, d) {
      if (!this.j) return null;
      const e = this.j.google_ad_format || null,
        f = this.j.google_ad_slot || null;
      if ((c = c.style)) {
        var g = [];
        for (let h = 0; h < c.length; h++) {
          const k = c.item(h);
          "width" !== k &&
            "height" !== k &&
            g.push({
              ac: k,
              value: c.getPropertyValue(k),
            });
        }
        c = {
          Ha: g,
        };
      } else c = {};
      a = Qo(d.document, a, f, e, c, b);
      a.ea.setAttribute("data-pub-vars", JSON.stringify(this.j));
      return a;
    }
    A() {
      return this.j ? parseInt(this.j.google_ad_height, 10) || null : null;
    }
    Qa() {
      return this.j;
    }
  };
  class rp {
    constructor(a) {
      this.l = a;
    }
    j() {
      return new so([], {
        ["google_ad_type"]: this.l,
        ["google_reactive_ad_format"]: 26,
        ["google_ad_format"]: "fluid",
      });
    }
  }
  var sp = class {
    constructor(a, b) {
      this.B = a;
      this.A = b;
    }
    j() {
      return this.A;
    }
    l(a) {
      a = dp(this.B, a.document);
      return 0 < a.length ? a[0] : null;
    }
  };

  function tp(a, b, c, d) {
    var e = a.V();
    if (!e) return null;
    var f = fp(e);
    if (!f) return null;
    var g = a.j();
    g = kp[g];
    var h = void 0 === g ? null : g;
    if (null === h) return null;
    g = (g = H(a, Jk, 3)) ? B(g, 3) : null;
    f = new sp(f, h);
    h = z(a, 10).slice(0);
    A(e, 5) && h.push(1);
    var k = d ? d : {};
    d = z(a, 12);
    e = A(a, 4) ? H(a, Lk, 4) : null;
    switch (z(a, 8)) {
      case 1:
        return (
          (k = k.vd || null),
          new up(f, new mp(jp(H(a, Jk, 3), null)), k, g, 0, h, e, c, b, d, a)
        );
      case 2:
        return new up(
          f,
          new pp(a),
          k.Od || new rp("text"),
          g,
          1,
          h,
          e,
          c,
          b,
          d,
          a
        );
    }
    return null;
  }

  function vp(a, b, c) {
    const d = [];
    for (let e = 0; e < a.length; e++) {
      const f = tp(a[e], e, b, c);
      null !== f && d.push(f);
    }
    return d;
  }

  function wp(a) {
    return a.B;
  }

  function xp(a) {
    return a.D instanceof qp ? a.D.Qa() : null;
  }

  function yp(a, b, c) {
    Cn(a.K, b) || a.K.set(b, []);
    a.K.get(b).push(c);
  }

  function zp(a) {
    return Ao(a.l.document, a.I || !1);
  }

  function Ap(a) {
    return a.D.A(a.l);
  }

  function Bp(a, b = null, c = null) {
    return new up(
      a.H,
      b || a.D,
      c || a.O,
      a.I,
      a.Ca,
      a.Xb,
      a.Ta,
      a.l,
      a.Z,
      a.F,
      a.A,
      a.C,
      a.R
    );
  }
  class up {
    constructor(
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      l = null,
      m = null,
      n = null,
      p = null
    ) {
      this.H = a;
      this.D = b;
      this.O = c;
      this.I = d;
      this.Ca = e;
      this.Xb = f;
      this.Ta = g ? g : new Lk();
      this.l = h;
      this.Z = k;
      this.F = l;
      this.A = m;
      this.C = n;
      this.R = p;
      this.J = [];
      this.B = !1;
      this.K = new Gn();
    }
    L() {
      return this.l;
    }
    j() {
      return this.H.j();
    }
  }
  const Cp = {
    TABLE: {
      La: new eo([1, 2]),
    },
    THEAD: {
      La: new eo([0, 3, 1, 2]),
    },
    TBODY: {
      La: new eo([0, 3, 1, 2]),
    },
    TR: {
      La: new eo([0, 3, 1, 2]),
    },
    TD: {
      La: new eo([0, 3]),
    },
  };

  function Dp(a, b, c, d) {
    const e = c.childNodes;
    c = c.querySelectorAll(b);
    b = [];
    for (const f of c)
      (c = Da(e, f)), 0 > c || b.push(new Ep(a, [f], c, f, 3, Ve(f).trim(), d));
    return b;
  }

  function Fp(a, b, c) {
    let d = [];
    const e = [],
      f = b.childNodes,
      g = f.length;
    let h = 0,
      k = "";
    for (let n = 0; n < g; n++) {
      var l = f[n];
      if (1 == l.nodeType || 3 == l.nodeType) {
        a: {
          var m = l;
          if (1 != m.nodeType) {
            m = null;
            break a;
          }
          if ("BR" == m.tagName) break a;
          const p = c.getComputedStyle(m).getPropertyValue("display");
          m = "inline" == p || "inline-block" == p ? null : m;
        }
        m
          ? (d.length && k && e.push(new Ep(a, d, n - 1, m, 0, k, c)),
            (d = []),
            (h = n + 1),
            (k = ""))
          : (d.push(l), (l = Ve(l).trim()), (k += l && k ? " " + l : l));
      }
    }
    d.length && k && e.push(new Ep(a, d, h, b, 2, k, c));
    return e;
  }

  function Gp(a, b) {
    return a.j - b.j;
  }

  function Hp(a) {
    const b = Kk();
    return new up(
      new op(a.Gb, a.Hb),
      new mp({
        clearBoth: !0,
      }),
      null,
      !0,
      2,
      [],
      b,
      a.l,
      null,
      null,
      null,
      a.A,
      a.j
    );
  }
  class Ep {
    constructor(a, b, c, d, e, f, g) {
      this.A = a;
      this.Ka = b.slice(0);
      this.j = c;
      this.Gb = d;
      this.Hb = e;
      this.B = f;
      this.l = g;
    }
    L() {
      return this.l;
    }
  }

  function Ip(a) {
    return Na(
      a.B ? Fp(a.j, a.na, a.l) : [],
      a.A ? Dp(a.j, a.A, a.na, a.l) : []
    ).filter((b) => {
      var c = b.Gb.tagName;
      c
        ? ((c = Cp[c.toUpperCase()]), (b = null != c && c.La.contains(b.Hb)))
        : (b = !1);
      return !b;
    });
  }
  class Jp {
    constructor(a, b, c) {
      this.na = a;
      this.A = b.ib;
      this.B = b.vc;
      this.j = b.articleStructure;
      this.l = c;
    }
  }

  function Kp(a, b) {
    if (!b) return !1;
    const c = fa(b),
      d = a.j.get(c);
    if (null != d) return d;
    if (
      1 == b.nodeType &&
      ("UL" == b.tagName || "OL" == b.tagName) &&
      "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")
    )
      return a.j.set(c, !0), !0;
    b = Kp(a, b.parentNode);
    a.j.set(c, b);
    return b;
  }

  function Lp(a, b) {
    return Ia(b.Ka, (c) => Kp(a, c));
  }
  class Mp {
    constructor(a) {
      this.j = new Gn();
      this.l = a;
    }
  }
  class Np {
    constructor(a, b) {
      this.B = a;
      this.j = [];
      this.l = [];
      this.A = b;
    }
  }
  var Pp = (a, { Uh: b = !1, Wh: c = 3, re: d = null } = {}) => {
      a = Ip(a);
      return Op(a, b, c, d);
    },
    Op = (a, b = !1, c = 3, d = null) => {
      if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
      var e = a.slice(0);
      e.sort(Gp);
      a = [];
      b = new Np(b, d);
      for (const l of e) {
        d = b;
        e = {
          Cb: l,
          sb: 51 > l.B.length ? !1 : null != d.A ? !Lp(d.A, l) : !0,
        };
        if (d.B || e.sb) {
          if (d.j.length) {
            var f = d.j[d.j.length - 1].Cb;
            b: {
              var g = f.L();
              var h = f.Ka[f.Ka.length - 1];
              f = e.Cb.Ka[0];
              if (!h || !f) {
                g = !1;
                break b;
              }
              var k = h.parentElement;
              const m = f.parentElement;
              if (k && m && k == m) {
                k = 0;
                for (h = h.nextSibling; 10 > k && h; ) {
                  if (h == f) {
                    g = !0;
                    break b;
                  }
                  if (Xo(g, h)) break;
                  h = h.nextSibling;
                  k++;
                }
                g = !1;
              } else g = !1;
            }
          } else g = !0;
          g
            ? (d.j.push(e), e.sb && d.l.push(e.Cb))
            : ((d.j = [e]), (d.l = e.sb ? [e.Cb] : []));
        }
        if (b.l.length >= c) {
          if (1 >= b.l.length) d = null;
          else {
            e = b.l[1];
            for (d = b; d.j.length && !d.j[0].sb; ) d.j.shift();
            d.j.shift();
            d.l.shift();
            d = e;
          }
          d && a.push(d);
        }
      }
      return a;
    };
  var Rp = (a, b) => {
      a = Qp(a, b);
      const c = new Mp(b);
      return Yn(a, (d) =>
        Pp(d, {
          re: c,
        })
      );
    },
    Qp = (a, b) => {
      const c = new Gn();
      a.forEach((d) => {
        var e = fp(H(d, tk, 1));
        if (e) {
          const f = e.toString();
          Cn(c, f) ||
            c.set(f, {
              articleStructure: d,
              md: e,
              ib: null,
              vc: !1,
            });
          e = c.get(f);
          (d = (d = H(d, tk, 2)) ? z(d, 7) : null)
            ? (e.ib = e.ib ? e.ib + "," + d : d)
            : (e.vc = !0);
        }
      });
      return Fn(c)
        .map((d) => {
          const e = dp(d.md, b.document);
          return e.length ? new Jp(e[0], d, b) : null;
        })
        .filter((d) => null != d);
    };
  const Sp = (a) => {
      a = a.na.getBoundingClientRect();
      return 0 < a.width && 0 < a.height;
    },
    Tp = (a) => {
      let b = 0;
      a.forEach((c) => (b = Math.max(b, c.na.getBoundingClientRect().width)));
      return (c) => c.na.getBoundingClientRect().width > 0.5 * b;
    },
    Up = (a) => {
      const b = W(a).clientHeight || 0;
      return (c) => c.na.getBoundingClientRect().height >= 0.75 * b;
    },
    Vp = (a, b) =>
      a.na.getBoundingClientRect().top - b.na.getBoundingClientRect().top;
  var Wp = (a) =>
      (null == a ? 0 : a.google_ad_slot)
        ? fm(
            new ko(1, {
              dd: a.google_ad_slot,
            })
          )
        : hm("Missing dimension when creating placement id"),
    Yp = (a) => {
      switch (a.Ca) {
        case 0:
        case 1:
          var b = a.A;
          null == b
            ? (a = null)
            : ((a = b.V()),
              null == a
                ? (a = null)
                : ((b = b.j()),
                  (a =
                    null == b
                      ? null
                      : new ko(0, {
                          mc: [a],
                          Oc: b,
                        }))));
          return null != a
            ? fm(a)
            : hm("Missing dimension when creating placement id");
        case 2:
          return (
            (a = Xp(a)),
            null != a
              ? fm(a)
              : hm("Missing dimension when creating placement id")
          );
        default:
          return hm("Invalid type: " + a.Ca);
      }
    };
  const Xp = (a) => {
    if (null == a || null == a.C) return null;
    const b = H(a.C, tk, 1),
      c = H(a.C, tk, 2);
    if (null == b || null == c) return null;
    const d = a.R;
    if (null == d) return null;
    a = a.j();
    return null == a
      ? null
      : new ko(0, {
          mc: [b, c],
          Nd: d,
          Oc: lp[a],
        });
  };

  function Zp(a) {
    const b = xp(a.N);
    return (b ? Wp(b) : Yp(a.N)).map((c) => no(c));
  }

  function $p(a) {
    a.j = a.j || Zp(a);
    return a.j;
  }

  function aq(a, b) {
    if (a.N.B) throw Error("AMA:AP:AP");
    Go(b, a.V(), a.N.j());
    a = a.N;
    a.B = !0;
    null != b && a.J.push(b);
  }
  var bq = class {
    constructor(a, b, c) {
      this.N = a;
      this.l = b;
      this.P = c;
      this.j = null;
    }
    V() {
      return this.l;
    }
    fill(a, b) {
      var c = this.N;
      (a = c.D.l(a, b, this.l, c.l)) && aq(this, a.za);
      return a;
    }
  };
  var cq = S(754, function (a, b) {
    var c = [],
      d = [];
    try {
      for (var e = [], f = 0; f < a.length; f++) {
        var g = a[f],
          h = g.H.l(g.l);
        h &&
          e.push({
            Kc: g,
            anchorElement: h,
          });
      }
      for (f = 0; f < e.length; f++) {
        a = d;
        var k = a.push;
        var l = e[f],
          m = l.anchorElement,
          n = l.Kc,
          p = n.I,
          r = n.l.document.createElement("div");
        r.className = "google-auto-placed";
        var x = r.style;
        x.textAlign = "center";
        x.width = "100%";
        x.height = "0px";
        x.clear = p ? "both" : "none";
        var v = r;
        try {
          Go(v, m, n.j());
          var D = v;
        } catch (G) {
          throw (Do(v), G);
        }
        k.call(a, D);
      }
      var w = dk(b),
        E = ek(b);
      for (f = 0; f < d.length; f++) {
        b = E;
        k = w;
        var C = d[f].getBoundingClientRect(),
          I = e[f];
        c.push(
          new bq(
            I.Kc,
            I.anchorElement,
            new Rn(C.left + b, C.top + k, C.right - C.left)
          )
        );
      }
    } finally {
      for (f = 0; f < d.length; f++) Do(d[f]);
    }
    return c;
  });

  function dq(a, b) {
    const c = Ip(b);
    c.sort(Gp);
    return new eq(a, b, c);
  }

  function fq(a, b, c) {
    return new up(
      new op(b, c),
      new mp({}),
      null,
      !0,
      2,
      [],
      null,
      a.j,
      null,
      null,
      null,
      a.C.j,
      null
    );
  }
  var eq = class {
    constructor(a, b, c) {
      this.j = a;
      this.C = b;
      this.B = c;
      this.l = !1;
      this.A = 0;
    }
    next() {
      if (!this.l) {
        if (this.A >= this.B.length) var a = null;
        else {
          {
            const b = this.B[this.A++].Ka[0];
            ea(b) && 1 == b.nodeType
              ? (a = fq(this, b, 0))
              : ((a = this.j.document.createElement("div")),
                O(a, {
                  display: "none",
                }),
                b.parentNode.insertBefore(a, b),
                (a = fq(this, a, 3)));
          }
          a = cq([a], this.j)[0] || null;
        }
        if (a) return a;
        this.l = !0;
      }
      return null;
    }
  };
  var gq = class {
    constructor(a) {
      this.l = a;
    }
    j() {
      return this.l.next();
    }
  };
  const hq = {
      1: "0.5vp",
      2: "300px",
    },
    iq = {
      1: 700,
      2: 1200,
    },
    jq = {
      [1]: {
        Tc: "3vp",
        ic: "1vp",
        Sc: "0.3vp",
      },
      [2]: {
        Tc: "900px",
        ic: "300px",
        Sc: "90px",
      },
    };

  function kq(a) {
    const b = lq(a);
    return mq(b, W(a).clientHeight || iq[b]);
  }
  class nq {
    constructor(a, b, c, d, e, f) {
      this.A = a;
      this.C = b;
      this.D = c.sort((g, h) => g.adCount - h.adCount);
      this.l = d;
      this.B = e;
      this.j = f;
    }
  }

  function oq(a, b) {
    for (let c of a) if (z(c, 1) == b) return c;
    return null;
  }

  function pq(a, b) {
    if (void 0 === a) return null;
    const c = [];
    for (let d of a) {
      a = z(d, 1);
      const e = qq(z(d, 2), b),
        f = qq(z(d, 3), b);
      if ("number" !== typeof a || null === e) return null;
      c.push({
        adCount: a,
        hc: {
          zb: e,
          ta: f,
        },
      });
    }
    return c;
  }

  function rq(a, b) {
    const c = qq(z(a, 2), b),
      d = qq(z(a, 5), b);
    if (null === c) return null;
    const e = z(a, 4);
    if (null == e) return null;
    var f = J(a, lk, 3);
    f = pq(f, b);
    if (null === f) return null;
    const g = H(a, mk, 7);
    b = g ? sq(g, b) : void 0;
    return new nq(c, d, f, e, zd(a, 6), b);
  }

  function mq(a, b) {
    a = qq(hq[a], b);
    return new nq(null === a ? Infinity : a, null, [], 3, null);
  }

  function qq(a, b) {
    if (!a) return null;
    const c = parseFloat(a);
    return isNaN(c)
      ? null
      : a.endsWith("px")
      ? c
      : a.endsWith("vp")
      ? c * b
      : null;
  }

  function lq(a) {
    a = 900 <= W(a).clientWidth;
    return $e() && !a ? 1 : 2;
  }

  function tq(a, b, c) {
    if (4 > c) return [];
    const d = Math.ceil(c / 2);
    return [
      {
        adCount: d,
        hc: {
          zb: 2 * a,
          ta: 2 * b,
        },
      },
      {
        adCount: d + Math.ceil((c - d) / 2),
        hc: {
          zb: 3 * a,
          ta: 3 * b,
        },
      },
    ];
  }

  function sq(a, b) {
    const c = qq(z(a, 2), b) || 0,
      d = z(a, 3) || 1;
    a = qq(z(a, 1), b) || 0;
    return {
      Gc: c,
      Fc: d,
      Ia: a,
    };
  }

  function uq(a, b, c) {
    return vn(
      {
        top: a.j.top - (c + 1),
        right: a.j.right + (c + 1),
        bottom: a.j.bottom + (c + 1),
        left: a.j.left - (c + 1),
      },
      b.j
    );
  }

  function vq(a) {
    if (!a.length) return null;
    const b = wn(a.map((c) => c.j));
    a = a.reduce((c, d) => c + d.l, 0);
    return new wq(b, a);
  }
  class wq {
    constructor(a, b) {
      this.j = a;
      this.l = b;
    }
  }
  var Cq = (a, b) => {
    const c = Oa(b.document.querySelectorAll(".google-auto-placed")),
      d = xq(b),
      e = yq(b),
      f = zq(b),
      g = Aq(b),
      h = Oa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
      k = Oa(b.document.querySelectorAll("div.googlepublisherpluginad"));
    let l = [].concat(
      Oa(
        b.document.querySelectorAll(
          "iframe[id^=aswift_],iframe[id^=google_ads_frame]"
        )
      ),
      Oa(b.document.querySelectorAll("ins.adsbygoogle"))
    );
    b = [];
    for (const [m, n] of [
      [a.pb, c],
      [a.Ba, d],
      [a.Md, e],
      [a.qb, f],
      [a.rb, g],
      [a.Jd, h],
      [a.Ld, k],
    ])
      (a = n), !1 === m ? (b = b.concat(a)) : (l = l.concat(a));
    a = Bq(l);
    b = Bq(b);
    a = a.slice(0);
    for (const m of b)
      for (b = 0; b < a.length; b++)
        (m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
    return a;
  };
  const Dq = (a) => {
      try {
        return Fa(
          Ga(a.googletag.pubads().getSlots(), (b) =>
            a.document.getElementById(b.getSlotElementId())
          ),
          (b) => null != b
        );
      } catch (b) {}
      return null;
    },
    xq = (a) =>
      Oa(
        a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')
      ),
    yq = (a) =>
      Oa(
        a.document.querySelectorAll(
          "ins.adsbygoogle[data-ad-format=autorelaxed]"
        )
      ),
    zq = (a) =>
      (Dq(a) || Oa(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(
        Oa(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))
      ),
    Aq = (a) =>
      Oa(
        a.document.querySelectorAll(
          "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
        )
      );
  var Bq = (a) => {
    const b = [];
    for (const c of a) {
      a = !0;
      for (let d = 0; d < b.length; d++) {
        const e = b[d];
        if (e.contains(c)) {
          a = !1;
          break;
        }
        if (c.contains(e)) {
          a = !1;
          b[d] = c;
          break;
        }
      }
      a && b.push(c);
    }
    return b;
  };
  var Eq = S(453, Cq),
    Fq = S(454, (a, b) => {
      const c = Oa(b.document.querySelectorAll(".google-auto-placed")),
        d = xq(b),
        e = yq(b),
        f = zq(b),
        g = Aq(b),
        h = Oa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
      b = Oa(b.document.querySelectorAll("div.googlepublisherpluginad"));
      return Bq(
        [].concat(
          !0 === a.pb ? c : [],
          !0 === a.Ba ? d : [],
          !0 === a.Md ? e : [],
          !0 === a.qb ? f : [],
          !0 === a.rb ? g : [],
          !0 === a.Jd ? h : [],
          !0 === a.Ld ? b : []
        )
      );
    });

  function Gq(a, b, c) {
    const d = Hq(a);
    b = Iq(d, b, c);
    return new Jq(a, d, b);
  }

  function Kq(a) {
    return 1 < (a.bottom - a.top) * (a.right - a.left);
  }

  function Lq(a) {
    return a.j.map((b) => b.box);
  }

  function Mq(a) {
    return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0);
  }
  class Jq {
    constructor(a, b, c) {
      this.A = a;
      this.j = b.slice(0);
      this.B = c.slice(0);
      this.l = null;
    }
  }

  function Hq(a) {
    const b = Eq(
        {
          Ba: !1,
        },
        a
      ),
      c = ek(a),
      d = dk(a);
    return b
      .map((e) => {
        const f = e.getBoundingClientRect();
        return (e =
          !!e.className && -1 != e.className.indexOf("google-auto-placed")) ||
          Kq(f)
          ? {
              box: {
                top: f.top + d,
                right: f.right + c,
                bottom: f.bottom + d,
                left: f.left + c,
              },
              Rh: e ? 1 : 0,
            }
          : null;
      })
      .filter(ya((e) => null === e));
  }

  function Iq(a, b, c) {
    return void 0 != b && a.length <= (void 0 != c ? c : 8)
      ? Nq(a, b)
      : Ga(a, (d) => new wq(d.box, 1));
  }

  function Nq(a, b) {
    a = Ga(a, (d) => new wq(d.box, 1));
    const c = [];
    for (; 0 < a.length; ) {
      let d = a.pop(),
        e = !0;
      for (; e; ) {
        e = !1;
        for (let f = 0; f < a.length; f++)
          if (uq(d, a[f], b)) {
            d = vq([d, a[f]]);
            Array.prototype.splice.call(a, f, 1);
            e = !0;
            break;
          }
      }
      c.push(d);
    }
    return c;
  }

  function Oq(a, b, c) {
    const d = Qn(c, 1, b + 1);
    return !Ia(a, (e) => vn(e, d));
  }

  function Pq(a, b, c, d, e) {
    e = e.P;
    const f = Qn(e, 0, b),
      g = Qn(e, 0, c),
      h = Qn(e, 0, d);
    return !Ia(a, (k) => vn(k, g) || (vn(k, f) && !vn(k, h)));
  }

  function Qq(a, b, c, d) {
    const e = Lq(a);
    if (Oq(e, b, d.P)) return !0;
    if (!Pq(e, b, c.Gc, c.Ia, d)) return !1;
    const f = new wq(Qn(d.P, 0, 0), 1);
    a = Fa(a.B, (g) => uq(g, f, c.Ia));
    b = Ha(a, (g, h) => g + h.l, 1);
    return 0 === a.length || b > c.Fc ? !1 : !0;
  }
  var Rq = (a, b) => {
    const c = [];
    let d = a;
    for (
      a = () => {
        c.push({
          anchor: d.anchor,
          position: d.position,
        });
        return d.anchor == b.anchor && d.position == b.position;
      };
      d;

    ) {
      switch (d.position) {
        case 1:
          if (a()) return c;
          d.position = 2;
        case 2:
          if (a()) return c;
          if (d.anchor.firstChild) {
            d = {
              anchor: d.anchor.firstChild,
              position: 1,
            };
            continue;
          } else d.position = 3;
        case 3:
          if (a()) return c;
          d.position = 4;
        case 4:
          if (a()) return c;
      }
      for (
        ;
        d &&
        !d.anchor.nextSibling &&
        d.anchor.parentNode != d.anchor.ownerDocument.body;

      ) {
        d = {
          anchor: d.anchor.parentNode,
          position: 3,
        };
        if (a()) return c;
        d.position = 4;
        if (a()) return c;
      }
      d && d.anchor.nextSibling
        ? (d = {
            anchor: d.anchor.nextSibling,
            position: 1,
          })
        : (d = null);
    }
    return c;
  };

  function Sq(a, b) {
    const c = new jo(),
      d = new Jn();
    b.forEach((e) => {
      if (Jd(e, wk, 1, zk)) {
        e = Jd(e, wk, 1, zk);
        if (H(e, uk, 1) && H(e, uk, 1).V() && H(e, uk, 2) && H(e, uk, 2).V()) {
          const g = Tq(a, H(e, uk, 1).V()),
            h = Tq(a, H(e, uk, 2).V());
          if (g && h)
            for (var f of Rq(
              {
                anchor: g,
                position: H(e, uk, 1).j(),
              },
              {
                anchor: h,
                position: H(e, uk, 2).j(),
              }
            ))
              c.set(fa(f.anchor), f.position);
        }
        H(e, uk, 3) &&
          H(e, uk, 3).V() &&
          (f = Tq(a, H(e, uk, 3).V())) &&
          c.set(fa(f), H(e, uk, 3).j());
      } else
        Jd(e, xk, 2, zk)
          ? Uq(a, Jd(e, xk, 2, zk), c)
          : Jd(e, yk, 3, zk) && Vq(a, Jd(e, yk, 3, zk), d);
    });
    return new Wq(c, d);
  }
  class Wq {
    constructor(a, b) {
      this.l = a;
      this.j = b;
    }
  }
  const Uq = (a, b, c) => {
      H(b, tk, 1) &&
        (a = Xq(a, H(b, tk, 1))) &&
        a.forEach((d) => {
          d = fa(d);
          c.set(d, 1);
          c.set(d, 4);
          c.set(d, 2);
          c.set(d, 3);
        });
    },
    Vq = (a, b, c) => {
      H(b, tk, 1) &&
        (a = Xq(a, H(b, tk, 1))) &&
        a.forEach((d) => {
          c.add(fa(d));
        });
    },
    Tq = (a, b) => ((a = Xq(a, b)) && 0 < a.length ? a[0] : null),
    Xq = (a, b) => ((b = fp(b)) ? dp(b, a) : null);

  function Yq(a) {
    return function (b) {
      return cq(b, a);
    };
  }

  function Zq(a) {
    const b = W(a).clientHeight;
    return b ? ma($q, b + dk(a)) : ua;
  }

  function ar(a, b, c) {
    if (0 > a) throw Error("ama::ead:nd");
    if (Infinity === a) return ua;
    const d = Lq(c || Gq(b));
    return (e) => Oq(d, a, e.P);
  }

  function br(a, b, c, d) {
    if (0 > a || 0 > b.Gc || 0 > b.Fc || 0 > b.Ia) throw Error("ama::ead:nd");
    return Infinity === a ? ua : (e) => Qq(d || Gq(c, b.Ia), a, b, e);
  }

  function cr(a) {
    if (!a.length) return ua;
    const b = new eo(a);
    return (c) => b.contains(c.Ca);
  }

  function dr(a) {
    return function (b) {
      for (let c of b.Xb) if (-1 < a.indexOf(c)) return !1;
      return !0;
    };
  }

  function er(a) {
    return a.length
      ? function (b) {
          const c = b.Xb;
          return a.some((d) => -1 < c.indexOf(d));
        }
      : wa;
  }

  function fr(a, b) {
    if (0 >= a) return wa;
    const c = W(b).scrollHeight - a;
    return function (d) {
      return d.P.j <= c;
    };
  }

  function gr(a) {
    const b = {};
    a &&
      a.forEach((c) => {
        b[c] = !0;
      });
    return function (c) {
      return !b[z(c.Ta, 2) || 0];
    };
  }

  function hr(a) {
    return a.length ? (b) => a.includes(z(b.Ta, 2) || 0) : wa;
  }

  function ir(a) {
    return a.length ? (b) => a.includes(z(b.Ta, 1) || 0) : wa;
  }

  function jr(a, b) {
    const c = Sq(a, b);
    return function (d) {
      var e = d.V();
      d = lp[d.N.j()];
      var f = fa(e);
      f = c.l.j.get(f);
      if (!(f = f ? f.contains(d) : !1))
        a: {
          if (c.j.contains(fa(e)))
            switch (d) {
              case 2:
              case 3:
                f = !0;
                break a;
              default:
                f = !1;
                break a;
            }
          for (e = e.parentElement; e; ) {
            if (c.j.contains(fa(e))) {
              f = !0;
              break a;
            }
            e = e.parentElement;
          }
          f = !1;
        }
      return !f;
    };
  }
  const $q = (a, b) => b.P.j >= a,
    kr = (a, b, c) => {
      c = c.P.l;
      return a <= c && c <= b;
    };
  var lr = class {
    constructor(a, b) {
      this.A = a;
      this.l = b;
    }
    j() {
      const a = Zq(this.A);
      let b = this.l.next();
      for (; b; ) {
        if (a(b)) return b;
        b = this.l.next();
      }
      return null;
    }
  };
  var mr = class {
    constructor(a, b) {
      this.l = a;
      this.A = b;
    }
    j() {
      var a = new Nk();
      var b = H(this.A.j, tk, 1);
      a = Dd(a, 1, b);
      a = F(a, 2, 2);
      a = F(a, 8, 1);
      a = vp([a], this.l);
      return cq(a, this.l)[0] || null;
    }
  };

  function nr(a) {
    return Sd(a[0]);
  }

  function or(a) {
    return (...b) => {
      b = b.map((c) => Sd(JSON.stringify(c).replace(/</g, "\\x3c")).toString());
      return Sd(`(${a.join("")})(${b.join(",")})`);
    };
  }
  const pr = (a, b, c) => {
      a = a.createElement("script");
      he(a, ob(fb(c)));
      a.setAttribute("async", "true");
      b.appendChild(a);
    },
    qr = {
      [1]: "out_of_view",
    };
  class rr {
    constructor() {
      this.promise = new Promise((a) => {
        this.j = a;
      });
    }
  }
  var sr = class {
    constructor() {
      const a = new rr();
      this.promise = a.promise;
      this.resolve = a.j;
    }
  };

  function tr(a, b, c) {
    b.google_llp || (b.google_llp = {});
    b = b.google_llp;
    b[a] || ((b[a] = new sr()), c && c());
    return b[a];
  }

  function ur(a, b, c) {
    return tr(a, b, function () {
      ff(b.document, c);
    }).promise;
  }

  function vr(a, b, c) {
    return new wr(
      ur(7, a, c)
        .then((d) => {
          d.init(b);
          d.handleAdConfig({
            preloadAdBreaks: "on",
            sound: "on",
          });
          return d;
        })
        .catch(Eh())
    );
  }

  function xr(a, b) {
    a.j ||
      (a.l.then((c) => {
        c.handleAdBreak({
          type: "preroll",
          name: "audiosense-preroll",
          adBreakDone: b,
        });
      }),
      (a.j = !0));
  }
  var wr = class {
    constructor(a) {
      this.l = a;
      this.j = !1;
    }
  };
  var yr = {
      ga: "ama_success",
      ba: 0.1,
      pa: !0,
    },
    zr = {
      ga: "ama_failure",
      ba: 0.1,
      pa: !0,
    },
    Ar = {
      ga: "ama_inf_scr",
      ba: 0.1,
      pa: !0,
    },
    Br = {
      ga: "ama_inf_scr",
      ba: 0.1,
      pa: !0,
    },
    Cr = {
      ga: "ama_coverage",
      ba: 0.1,
      pa: !0,
    },
    Dr = {
      ga: "ama_inf_scr",
      ba: 1,
      pa: !0,
    },
    Er = {
      ga: "ama_opt",
      ba: 0.1,
      pa: !0,
    },
    Fr = {
      ga: "ama_aud_sen",
      ba: 1,
      pa: !0,
    };

  function Gr(a, b) {
    a.F.wpc = b;
    return a;
  }

  function Hr(a, b) {
    for (var c = 0; c < b.length; c++) a.ia(b[c]);
    return a;
  }

  function Ir(a, b) {
    a.A = a.A ? a.A : b;
    return a;
  }
  class Jr {
    constructor(a) {
      this.F = {};
      this.F.c = a;
      this.C = [];
      this.A = null;
      this.D = [];
      this.H = 0;
    }
    ia(a) {
      for (var b = 0; b < this.C.length; b++) if (this.C[b] == a) return this;
      this.C.push(a);
      return this;
    }
    B(a) {
      var b = Xa(this.F);
      0 < this.H && (b.t = this.H);
      b.err = this.C.join();
      b.warn = this.D.join();
      this.A &&
        ((b.excp_n = this.A.name),
        (b.excp_m = this.A.message && this.A.message.substring(0, 512)),
        (b.excp_s = this.A.stack && oh(this.A.stack, "")));
      b.w = 0 < a.innerWidth ? a.innerWidth : null;
      b.h = 0 < a.innerHeight ? a.innerHeight : null;
      return b;
    }
  }

  function Kr(a, b, c) {
    c = c.B(a.j);
    b.pa && (c.pvc = Kf(a.j));
    0 < b.ba && ((c.r = b.ba), T(b.ga, c, b.ba));
  }
  var Lr = class {
    constructor(a) {
      this.j = a;
    }
  };

  function Mr(a, b, c, d) {
    let e;
    const f = null == (e = H(b, Sk, 6)) ? void 0 : J(e, Tk, 1);
    return f && 0 != f.length
      ? (b = H(b, Ak, 27))
        ? H(b, Bk, 2)
          ? fm(new Nr(a, f, b, c, d))
          : hm("No AudioSenseConfig.PlacementConfig found")
        : hm("No AudioSenseConfig found")
      : hm("No ArticleStructure found");
  }

  function Or(a) {
    a.A.addEventListener("playing", () => {
      a.C.j || (a.A.pause(), xr(a.C, () => a.A.play()));
    });
  }

  function Pr(a) {
    return (a = H(a.l, Dk, 3))
      ? J(a, Ek, 1).some((b) => 1 === Ad(b, 1, 0))
      : !1;
  }

  function Qr(a, b) {
    let c;
    a = Object.assign({}, b, {
      vh: W(a.j).clientHeight,
      eid: null == (c = H(a.l, Fk, 4)) ? void 0 : K(c, 2),
    });
    T(Fr.ga, a, Fr.ba);
  }
  var Nr = class {
    constructor(a, b, c, d, e) {
      this.j = a;
      this.F = b;
      this.l = c;
      this.B = d;
      this.D = e;
      this.A = this.C = null;
    }
  };
  const Rr = ["-webkit-text-fill-color"];

  function Sr(a) {
    if (Qc) {
      {
        const c = gf(a.document.body, a);
        if (c) {
          a = {};
          var b = c.length;
          for (let d = 0; d < b; ++d) a[c[d]] = "initial";
          a = Tr(a);
        } else a = Ur();
      }
    } else a = Ur();
    return a;
  }
  var Ur = () => {
    const a = {
      all: "initial",
    };
    Ea(Rr, (b) => {
      a[b] = "unset";
    });
    return a;
  };

  function Tr(a) {
    Ea(Rr, (b) => {
      delete a[b];
    });
    return a;
  }
  var Vr = class {
    constructor(a) {
      this.j = a;
    }
    Oa(a) {
      const b = a.document.createElement("div");
      O(b, Sr(a));
      O(b, {
        width: "100%",
        "max-width": "1000px",
        margin: "auto",
      });
      b.appendChild(this.j);
      const c = a.document.createElement("div");
      O(c, Sr(a));
      O(c, {
        width: "100%",
        "text-align": "center",
        display: "block",
        padding: "5px 5px 2px",
        "box-sizing": "border-box",
        "background-color": "#FFF",
      });
      c.appendChild(b);
      return c;
    }
  };
  var Wr = (a, b) =>
    (b = H(b, Sk, 6)) ? Rp(J(b, Tk, 1), a).map((c) => Hp(c)) : [];

  function Xr(a) {
    const b = Yr(a);
    Ea(a.j.maxZIndexListeners, (c) => c(b));
  }

  function Yr(a) {
    a = mf(a.j.maxZIndexRestrictions);
    return a.length ? Math.min.apply(null, a) : null;
  }
  class Zr {
    constructor(a) {
      this.j = Sj(a).floatingAdsStacking;
    }
  }

  function $r(a) {
    if (null == a.j) {
      var b = a.l,
        c = a.A;
      const d = b.j.nextRestrictionId++;
      b.j.maxZIndexRestrictions[d] = c;
      Xr(b);
      a.j = d;
    }
  }

  function as(a) {
    if (null != a.j) {
      var b = a.l;
      delete b.j.maxZIndexRestrictions[a.j];
      Xr(b);
      a.j = null;
    }
  }
  class bs {
    constructor(a, b) {
      this.l = a;
      this.A = b;
      this.j = null;
    }
  }

  function cs(a, b) {
    a.j++;
    const c = "{SafeHtmlFormatter:" + a.j + "_" + Fc() + "}";
    a.l[Cc(c)] = b;
    return c;
  }
  class ds {
    constructor() {
      this.l = {};
      this.j = 0;
    }
    A(a, b) {
      a = this.l[b];
      if (!a) return b;
      b = "";
      a.Fb && (b += "<" + a.Fb + a.attributes + ">");
      a.zc && (b += a.zc);
      a.lb && (b += "</" + a.lb + ">");
      return b;
    }
    Fb(a, b) {
      oc(a);
      return cs(this, {
        Fb: a,
        attributes: uc(b),
      });
    }
    lb(a) {
      oc(a);
      return cs(this, {
        lb: a,
      });
    }
    text(a) {
      return cs(this, {
        zc: Cc(a),
      });
    }
  }

  function es(a) {
    const b = (c) => {
      c.some(
        (d) =>
          -1 < d.oldValue.indexOf("gsc-results-wrapper-visible") &&
          !d.target.classList.contains("gsc-results-wrapper-visible")
      ) && as(a.C);
    };
    a.j.__gcse || (a.j.__gcse = {});
    a.j.__gcse.initializationCallback = () => {
      const c = document.getElementsByClassName(
        "gsc-results-wrapper-overlay"
      )[0];
      c &&
        new MutationObserver(b).observe(c, {
          attributeFilter: ["class"],
          attributeOldValue: !0,
        });
    };
    a.j.__gcse.searchCallbacks = {
      web: {
        rendered: () => {
          $r(a.C);
          a.j.document.getElementsByClassName(
            "gsc-above-wrapper-area"
          )[0].style.display = "block";
        },
      },
    };
  }

  function fs(a) {
    const b = a.j.document.createElement("SCRIPT");
    b.type = "text/javascript";
    var c = a.B.map((d) => ({
      container: d,
      relatedSearches: 5,
    }));
    oa("google.ads.autorscse.innerPerformSearch", (d, e, f) => {
      d(e, void 0, {
        rsToken: f,
      });
      if (
        (d = a.j.document.getElementsByClassName(
          "gsc-result-info-container"
        )[0])
      ) {
        1 < d.childElementCount && d.removeChild(d.firstChild);
        f = a.j.document.createElement("p");
        f.style.fontWeight = "normal";
        var g = a.l.trim().substring(0, 2),
          h = a.j.location.host,
          k = new ds();
        const l = k.Fb("strong"),
          m = k.lb("strong");
        h = {
          en: `Search results for ${l}${e}${m} from ${l}${h}${m}`,
          de: `Suchergebnisse f\u00fcr ${l}${e}${m} von ${l}${h}${m}`,
          ja: `${l}${h}${m}\u304b\u3089\u306e${l}${e}${m}\u306e\u691c\u7d22\u7d50\u679c`,
          fr: `R\u00e9sultats de la recherche de ${l}${e}${m} sur ${l}${h}${m}`,
          es: `Resultados de b\u00fasqueda de ${l}${e}${m} de ${l}${h}${m}`,
        };
        e = k;
        g = h[g] || h.en;
        k = Cc("SafeHtmlFormatter:");
        e = Cc(g).replace(
          new RegExp(`\\{${k}[\\w&#;]+\\}`, "g"),
          la(e.A, e, [])
        );
        e = nc(e, null);
        if (null !== f && void 0 !== f.tagName) {
          if ("script" === f.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeScript.");
          if ("style" === f.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        f.innerHTML = kc(e);
        d.insertBefore(f, d.firstChild);
      }
    });
    c = or`function(afsProperty, cseElementName, rsBlocks, language){ 
          function performSearch(query, rsToken) { 
            const element = google.search.cse.element.getElement(cseElementName); 
            google.ads.autorscse.innerPerformSearch(element.execute, query, rsToken); 
          } 
          const pageOptions = { 
            pubId: afsProperty, 
            styleId: '5134551505', 
            hl: language, 
            resultsPageBaseUrl: 'http://google.com', 
            resultsPageQueryParam: 'q', 
            relatedSearchTargeting: 'content', 
            relatedSearchResultClickedCallback: performSearch, 
            relatedSearchUseResultCallback: true, 
          }; 
          _googCsa('relatedsearch', pageOptions, rsBlocks); 
        }`(a.A, "auto-rs-prose", c, a.l);
    ge(b, c);
    a.j.document.body.appendChild(b);
  }
  var gs = class {
    constructor(a, b, c, d) {
      this.j = a;
      this.B = b;
      this.l = d || "en";
      this.A = c.replace("ca", "partner");
      a = new Zr(a);
      this.C = new bs(a, 100001);
    }
    init() {
      if (
        0 != this.B.length &&
        !this.j.document.querySelector('script[src*="cse.google.com/cse"]')
      ) {
        var a = this.j.document.createElement("div");
        O(a, Sr(this.j));
        O(a, {
          width: 0,
          height: 0,
        });
        var b = this.j.document.createElement("div");
        b.classList.add("gcse-searchresults-only");
        b.setAttribute("data-gname", "auto-rs-prose");
        b.setAttribute("data-adclient", this.A);
        b.setAttribute("data-as_sitesearch", this.j.location.host);
        b.setAttribute("data-gl", this.l);
        a.appendChild(b);
        this.j.document.body.appendChild(a);
        a = this.j.document.createElement("SCRIPT");
        he(a, vh`https://www.google.com/adsense/search/async-ads.js`);
        this.j.document.head.appendChild(a);
        a = this.j.document.createElement("SCRIPT");
        a.type = "text/javascript";
        b = nr`(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');`;
        ge(a, b);
        this.j.document.head.appendChild(a);
        a = this.j.document.createElement("SCRIPT");
        b = vh`https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
        b = wh(b, new Map([["language", this.l]]));
        he(a, b);
        this.j.document.head.appendChild(a);
        es(this);
        fs(this);
      }
    }
  };

  function hs(a) {
    const b = zp(a.A.N),
      c = a.C.Oa(a.D, () => a.remove());
    b.appendChild(c);
    a.B && (b.className = a.B);
    return {
      Ed: b,
      Bd: c,
    };
  }
  class is {
    constructor(a, b, c, d) {
      this.D = a;
      this.A = b;
      this.C = c;
      this.B = d || null;
      this.j = null;
      this.l = new io(null);
    }
    init() {
      const a = hs(this);
      this.j = a.Ed;
      aq(this.A, this.j);
      go(this.l, a.Bd);
    }
    remove() {
      this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
      this.j = null;
      go(this.l, null);
    }
    F() {
      return this.l;
    }
  }
  var js = class {
    constructor(a, b, c) {
      this.j = a;
      this.l = b;
      this.A = c;
    }
  };

  function ks(a, b) {
    return a.P.j - b.P.j;
  }

  function ls(a, b) {
    const c = a.document.createElement("img");
    ms(a, c);
    zc(
      c,
      "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg"
    );
    O(c, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: null == b ? "auto" : "pointer",
    });
    b &&
      c.addEventListener("click", (d) => {
        b();
        d.stopPropagation();
      });
    return c;
  }

  function ns(a, b) {
    const c = b.document.createElement("button");
    ms(b, c);
    O(c, {
      display: "inline",
      "line-height": "24px",
      cursor: "pointer",
    });
    c.appendChild(b.document.createTextNode(a.l));
    c.addEventListener("click", (d) => {
      a.A();
      d.stopPropagation();
    });
    return c;
  }

  function os(a, b, c) {
    const d = b.document.createElement("img");
    zc(
      d,
      "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg"
    );
    d.setAttribute("aria-label", a.B);
    ms(b, d);
    O(d, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: "pointer",
    });
    d.addEventListener("click", (e) => {
      c();
      e.stopPropagation();
    });
    return d;
  }

  function ps(a) {
    const b = a.document.createElement("ins");
    ms(a, b);
    O(b, {
      float: "left",
      display: "inline-flex",
      padding: "8px 0px",
      "background-color": "#FFF",
      "border-radius": "0px 20px 20px 0px",
      "box-shadow":
        "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)",
    });
    return b;
  }
  class qs {
    constructor(a, b, c) {
      this.l = a;
      this.B = b;
      this.A = c;
      this.j = new io(!1);
    }
    Oa(a, b, c, d) {
      const e = ls(a, d),
        f = ls(a),
        g = ns(this, a),
        h = os(this, a, c);
      a = ps(a);
      a.appendChild(e);
      a.appendChild(f);
      a.appendChild(g);
      a.appendChild(h);
      fo(
        this.j,
        (k) => {
          O(e, {
            display: k ? "none" : "inline",
          });
          O(f, {
            display: k ? "inline" : "none",
          });
          k
            ? (O(g, {
                "line-height": "24px",
                "max-width": "100vw",
                opacity: "1",
                transition:
                  "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms",
              }),
              O(h, {
                margin: "0px 12px 0px 8px",
                opacity: 1,
                width: "24px",
                transition:
                  "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms",
              }))
            : (O(g, {
                "line-height": "0px",
                "max-width": "0vw",
                opacity: "0",
                transition:
                  "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms",
              }),
              O(h, {
                margin: "0",
                opacity: "0",
                width: "0",
                transition: "margin 100ms, opacity 50ms, width 100ms",
              }));
        },
        !0
      );
      return a;
    }
    xc() {
      return 40;
    }
    Hc() {
      go(this.j, !1);
      return 0;
    }
    Ic() {
      go(this.j, !0);
    }
  }

  function ms(a, b) {
    O(b, Sr(a));
    O(b, {
      "font-family": "Arial,sans-serif",
      "font-weight": "bold",
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: "#3C4043",
      "user-select": "none",
    });
  }

  function rs(a, b) {
    const c = b.document.createElement("button");
    ss(a, b, c);
    b = {
      width: "100%",
      "text-align": "center",
      display: "block",
      padding: "8px 0px",
      "background-color": a.l,
    };
    a.j && ((b["border-top"] = a.j), (b["border-bottom"] = a.j));
    O(c, b);
    c.addEventListener("click", (d) => {
      a.D();
      d.stopPropagation();
    });
    return c;
  }

  function ts(a, b, c, d) {
    const e = b.document.createElement("div");
    O(e, Sr(b));
    O(e, {
      "align-items": "center",
      "background-color": a.l,
      display: "flex",
      "justify-content": "center",
    });
    const f = b.document.createElement("span");
    f.appendChild(b.document.createTextNode(d));
    O(f, Sr(b));
    O(f, {
      "font-family": "Arial,sans-serif",
      "font-size": "12px",
      padding: "8px 0px",
    });
    b = b.matchMedia("(min-width: 768px)");
    d = (g) => {
      g.matches
        ? (O(e, {
            "flex-direction": "row",
          }),
          a.j &&
            O(e, {
              "border-top": a.j,
              "border-bottom": a.j,
            }),
          O(f, {
            "margin-left": "8px",
            "text-align": "start",
          }),
          O(c, {
            border: "0",
            "margin-right": "8px",
            width: "auto",
          }))
        : (O(e, {
            border: "0",
            "flex-direction": "column",
          }),
          O(f, {
            "margin-left": "0",
            "text-align": "center",
          }),
          O(c, {
            "margin-right": "0",
            width: "100%",
          }),
          a.j &&
            O(c, {
              "border-top": a.j,
              "border-bottom": a.j,
            }));
    };
    d(b);
    b.addEventListener("change", d);
    e.appendChild(c);
    e.appendChild(f);
    return e;
  }

  function ss(a, b, c) {
    O(c, Sr(b));
    O(c, {
      "font-family": "Arial,sans-serif",
      "font-weight": a.F,
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: a.H,
      "user-select": "none",
      cursor: "pointer",
    });
  }
  class us {
    constructor(a, b, c, d, e, f = null, g = null, h = null) {
      this.C = a;
      this.D = b;
      this.H = c;
      this.l = d;
      this.F = e;
      this.B = f;
      this.j = g;
      this.A = h;
    }
    Oa(a) {
      const b = a.document.createElement("div");
      ss(this, a, b);
      O(b, {
        display: "inline-flex",
        padding: "8px 0px",
        "background-color": this.l,
      });
      if (this.B) {
        var c = a.document.createElement("img");
        zc(c, this.B);
        ss(this, a, c);
        O(c, {
          margin: "0px 8px 0px 0px",
          width: "24px",
          height: "24px",
        });
      } else c = null;
      c && b.appendChild(c);
      c = a.document.createElement("span");
      ss(this, a, c);
      O(c, {
        "line-height": "24px",
      });
      c.appendChild(a.document.createTextNode(this.C));
      b.appendChild(c);
      c = rs(this, a);
      c.appendChild(b);
      return this.A ? ts(this, a, c, this.A) : c;
    }
  }
  var vs = (a, b) => {
    b = b.filter((c) => 5 == z(H(c, Lk, 4), 1) && 1 == z(c, 8));
    b = vp(b, a);
    a = cq(b, a);
    a.sort((c, d) => d.P.j - c.P.j);
    return a[0] || null;
  };
  var ys = (a, b, c = null, d, e = !1) => {
      let f = 0;
      try {
        (f = d
          ? f | (a.innerHeight >= d ? 0 : 1024)
          : f | (a.innerHeight >= a.innerWidth ? 0 : 8)),
          (f |= Wj(a, 3e3)),
          (f |= Xj(a));
      } catch (g) {
        f |= 32;
      }
      switch (b) {
        case 2:
          ws(a, e, c) && (f |= 16777216);
          break;
        case 1:
          xs(a, e, c) && (f |= 16777216);
      }
      return f;
    },
    ws = (a, b, c = null) => {
      const d = a.innerWidth;
      b = zs(
        d,
        b ? Math.max(2, Math.min(10, Math.ceil(d / 300))) + 1 : 3,
        0,
        Math.min(Math.round((a.innerWidth / 320) * 50), As) + 15
      );
      return Bs(a, b, c);
    },
    xs = (a, b, c = null) => {
      const d = a.innerWidth,
        e = a.innerHeight,
        f = Math.min(Math.round((a.innerWidth / 320) * 50), As) + 15;
      b = zs(
        d,
        b ? Math.max(2, Math.min(10, Math.ceil(d / 300))) + 1 : 3,
        e - f,
        e
      );
      25 < f &&
        b.push({
          x: d - 25,
          y: e - 25,
        });
      return Bs(a, b, c);
    },
    Ds = (a, b) => {
      const c = a.innerWidth,
        d = a.innerHeight;
      let e = d;
      for (; e > b; ) {
        var f = zs(c, 3, e - b, e);
        f = Cs(a, f);
        if (!f) return d - e;
        e = f.getBoundingClientRect().top - 1;
      }
      return null;
    },
    Bs = (a, b, c = null) => null != Cs(a, b, c);

  function Cs(a, b, c = null) {
    for (const d of b) if ((b = Es(a, d, c))) return b;
    return null;
  }

  function Es(a, b, c = null) {
    var d = a.document;
    var e = b.x,
      f = b.y;
    d.hasOwnProperty("_goog_efp_called_") ||
      (d._goog_efp_called_ = d.elementFromPoint(e, f));
    return (d = d.elementFromPoint(e, f))
      ? Fs(d, a, b, c) || Gs(d, a, b, c) || null
      : null;
  }

  function Gs(a, b, c, d = null) {
    const e = b.document;
    for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
      const f = Fs(a, b, c, d);
      if (f) return f;
    }
    return null;
  }
  var zs = (a, b, c, d) => {
    const e = [];
    for (let h = 0; 3 > h; h++)
      for (let k = 0; k < b; k++) {
        var f = e,
          g = b - 1;
        f.push.call(f, {
          x: (0 == g ? 0 : k / g) * a,
          y: c + (h / 2) * (d - c),
        });
      }
    return e;
  };

  function Fs(a, b, c, d = null) {
    if ("fixed" !== mg(a, "position")) return null;
    var e =
      "GoogleActiveViewInnerContainer" == a.getAttribute("class") ||
      (1 >= pg(a).width && 1 >= pg(a).height)
        ? !0
        : !1;
    d &&
      $g(
        d,
        "ach_evt",
        {
          url: b.location.href,
          tn: a.tagName,
          id: a.getAttribute("id"),
          cls: a.getAttribute("class"),
          ign: e,
          pw: b.innerWidth,
          ph: b.innerHeight,
          x: c.x,
          y: c.y,
        },
        !0,
        1
      );
    return e ? null : a;
  }
  const As = 90 * 1.38;

  function Hs(a) {
    if (a.H) {
      const b = dk(a.j);
      if (b > a.l + 100 || b < a.l - 100) Is(a), (a.l = Zj(a.j));
    }
    a.I && a.j.clearTimeout(a.I);
    a.I = a.j.setTimeout(() => Js(a), 200);
  }

  function Js(a) {
    var b = Zj(a.j);
    a.l && a.l > b && (a.l = b);
    b = dk(a.j);
    b >= a.l - 100 && ((a.l = Math.max(a.l, b)), Ks(a));
  }

  function Ls(a) {
    a.j.removeEventListener("scroll", a.K);
  }

  function Is(a) {
    a.H = !1;
    const b = a.C.Hc();
    switch (b) {
      case 0:
        go(a.B, a.D);
        break;
      case 1:
        a.A &&
          (O(a.A, {
            display: "none",
          }),
          go(a.B, null));
        break;
      default:
        throw Error("Unhandled OnHideOutcome: " + b);
    }
  }

  function Ks(a) {
    a.A || (a.A = Ms(a));
    O(a.A, {
      display: "block",
    });
    a.H = !0;
    a.C.Ic();
    go(a.B, a.D);
  }

  function Ms(a) {
    var b = Ds(a.j, a.C.xc() + 60);
    b = null == b ? 30 : b + 30;
    const c = a.j.document.createElement("div");
    O(c, Sr(a.j));
    O(c, {
      position: "fixed",
      left: "0px",
      bottom: b + "px",
      width: "100vw",
      "text-align": "center",
      "z-index": 2147483642,
      display: "none",
      "pointer-events": "none",
    });
    a.D = a.C.Oa(
      a.j,
      () => a.remove(),
      () => {
        Ls(a);
        Is(a);
      },
      () => {
        Ls(a);
        Ks(a);
      }
    );
    c.appendChild(a.D);
    a.J && (c.className = a.J);
    a.j.document.body.appendChild(c);
    return c;
  }
  class Ns {
    constructor(a, b, c) {
      this.j = a;
      this.C = b;
      this.D = null;
      this.B = new io(null);
      this.J = c || null;
      this.A = null;
      this.H = !1;
      this.l = 0;
      this.I = null;
      this.K = () => Hs(this);
    }
    init() {
      this.j.addEventListener("scroll", this.K);
      this.l = Zj(this.j);
      Js(this);
    }
    remove() {
      this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
      this.A = null;
      Ls(this);
      go(this.B, null);
    }
    F() {
      return this.B;
    }
  }

  function Os(a) {
    go(a.D, 0);
    null != a.A && (a.A.remove(), (a.A = null));
    null != a.l && (a.l.remove(), (a.l = null));
  }

  function Ps(a) {
    a.l = new Ns(a.C, a.J, a.H);
    a.l.init();
    ho(a.B, a.l.F());
    go(a.D, 2);
  }
  class Qs {
    constructor(a, b, c, d, e) {
      this.C = a;
      this.I = b;
      this.K = c;
      this.J = d;
      this.H = e;
      this.D = new io(0);
      this.B = new io(null);
      this.l = this.A = this.j = null;
    }
    init() {
      this.I
        ? ((this.A = new is(this.C, this.I, this.K, this.H)),
          this.A.init(),
          ho(this.B, this.A.F()),
          go(this.D, 1),
          null == this.j && ((this.j = new Xn(this.C)), this.j.init(2e3)),
          Vn(this.j, () => {
            Os(this);
            Ps(this);
          }))
        : Ps(this);
    }
    remove() {
      Os(this);
      this.j && (this.j.kb(), (this.j = null));
    }
    F() {
      return this.B;
    }
  }
  var Rs = (a, b, c, d, e) => {
    a = new Qs(
      a,
      vs(a, e),
      new us(b, d, "#FFF", "#4A4A4A", "normal"),
      new qs(b, c, d),
      "google-dns-link-placeholder"
    );
    a.init();
    return a;
  };
  var Ss = (a) => (a.googlefc = a.googlefc || {}),
    Ts = (a) => {
      a = a.googlefc = a.googlefc || {};
      return (a.ccpa = a.ccpa || {});
    };

  function Us(a) {
    var b = Ts(a.j);
    if (Vs(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
      var c = b.getLocalizedDnsText();
      b = b.getLocalizedDnsCollapseText();
      null != c && null != b && (a.l = Rs(a.j, c, b, () => Ws(a), a.B));
    }
  }

  function Xs(a) {
    const b = Ss(a.j);
    Ts(a.j).overrideDnsLink = !0;
    b.callbackQueue = b.callbackQueue || [];
    b.callbackQueue.push({
      INITIAL_CCPA_DATA_READY: () => Us(a),
    });
  }

  function Ws(a) {
    $r(a.A);
    Ts(a.j).openConfirmationDialog((b) => {
      b && a.l && (a.l.remove(), (a.l = null));
      as(a.A);
    });
  }
  class Ys {
    constructor(a, b, c) {
      this.j = a;
      this.A = new bs(b, 2147483643);
      this.B = c;
      this.l = null;
    }
  }

  function Vs(a, b) {
    switch (a) {
      case b.CCPA_DOES_NOT_APPLY:
      case b.OPTED_OUT:
        return !1;
      case b.NOT_OPTED_OUT:
        return !0;
      default:
        return !0;
    }
  }

  function Zs(a) {
    const b = a.document.createElement("ins");
    $s(a, b);
    O(b, {
      display: "flex",
      padding: "8px 0px",
      width: "100%",
    });
    return b;
  }

  function at(a, b, c, d) {
    const e = a.document.createElement("img");
    zc(e, b);
    d && e.setAttribute("aria-label", d);
    $s(a, e);
    O(e, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: "pointer",
    });
    e.addEventListener("click", (f) => {
      c();
      f.stopPropagation();
    });
    return e;
  }

  function bt(a, b) {
    const c = b.document.createElement("span");
    $s(b, c);
    O(c, {
      "line-height": "24px",
      cursor: "pointer",
    });
    c.appendChild(b.document.createTextNode(a.B));
    c.addEventListener("click", (d) => {
      a.l();
      d.stopPropagation();
    });
    return c;
  }

  function ct(a, b) {
    const c = b.document.createElement("span");
    c.appendChild(b.document.createTextNode(a.A));
    O(c, Sr(b));
    O(c, {
      "border-top": "11px solid #ECEDED",
      "font-family": "Arial,sans-serif",
      "font-size": "12px",
      "line-height": "1414px",
      padding: "8px 32px",
      "text-align": "center",
    });
    return c;
  }

  function dt(a) {
    const b = a.document.createElement("div");
    O(b, Sr(a));
    O(b, {
      "align-items": "flex-start",
      "background-color": "#FFF",
      "border-radius": "0px 20px 20px 0px",
      "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
      display: "inline-flex",
      "flex-direction": "column",
      float: "left",
    });
    return b;
  }
  class et {
    constructor(a, b, c, d) {
      this.B = a;
      this.C = b;
      this.A = c;
      this.l = d;
      this.j = new io(!1);
    }
    Oa(a, b, c, d) {
      c = Zs(a);
      const e = at(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg",
          d
        ),
        f = at(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg",
          this.l
        ),
        g = bt(this, a),
        h = at(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg",
          b,
          this.C
        );
      O(h, {
        "margin-left": "auto",
      });
      c.appendChild(e);
      c.appendChild(f);
      c.appendChild(g);
      c.appendChild(h);
      const k = ct(this, a);
      a = dt(a);
      a.appendChild(c);
      a.appendChild(k);
      fo(
        this.j,
        (l) => {
          O(e, {
            display: l ? "none" : "inline",
          });
          O(f, {
            display: l ? "inline" : "none",
          });
          l
            ? (O(g, {
                "line-height": "24px",
                "max-width": "100vw",
                opacity: "1",
                transition:
                  "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms",
              }),
              O(h, {
                "margin-right": "12px",
                opacity: 1,
                width: "24px",
                transition: "margin 50ms, opacity 50ms 50ms, width 50ms",
              }),
              O(k, {
                "border-width": "1px",
                "line-height": "14px",
                "max-width": "100vw",
                opacity: "1",
                padding: "8px 32px",
                transition:
                  "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms",
              }))
            : (O(g, {
                "line-height": "0px",
                "max-width": "0vw",
                opacity: "0",
                transition:
                  "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms",
              }),
              O(h, {
                "margin-right": "0",
                opacity: "0",
                width: "0",
                transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms",
              }),
              O(k, {
                "border-width": "0px",
                "line-height": "0px",
                "max-width": "0vw",
                opacity: "0",
                padding: "0",
                transition:
                  "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms",
              }));
        },
        !0
      );
      return a;
    }
    xc() {
      return 71;
    }
    Hc() {
      go(this.j, !1);
      return 0;
    }
    Ic() {
      go(this.j, !0);
    }
  }

  function $s(a, b) {
    O(b, Sr(a));
    O(b, {
      "font-family": "Arial,sans-serif",
      "font-weight": "bold",
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: "#1A73E8",
      "user-select": "none",
    });
  }

  function ft(a) {
    gt(
      a.l,
      (b) => {
        var c = a.B,
          d = b.ne,
          e = b.zd,
          f = b.od;
        b = b.showRevocationMessage;
        new Qs(
          c,
          vs(c, a.A),
          new us(
            d,
            b,
            "#1A73E8",
            "#FFF",
            "bold",
            "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg",
            "2px solid #ECEDED",
            f
          ),
          new et(d, e, f, b),
          "google-revocation-link-placeholder"
        ).init();
      },
      () => {
        as(a.j);
      }
    );
  }
  class ht {
    constructor(a, b, c, d) {
      this.B = a;
      this.j = new bs(b, 2147483643);
      this.A = c;
      this.l = d;
    }
  }

  function it(a) {
    if (!0 !== a.j.adsbygoogle_ama_fc_has_run) {
      var b = !1;
      vm(a.l) &&
        ((b = new ht(a.j, a.C, a.B || J(a.l, Nk, 4), a.A)),
        $r(b.j),
        ft(b),
        (b = !0));
      var c;
      a: if ((c = a.l) && A(c, 3))
        switch (((c = z(c, 3)), c)) {
          case 1:
            c = !0;
            break a;
          case 2:
            c = !1;
            break a;
          default:
            throw Error("Unhandled AutoCcpaUiStatus: " + c);
        }
      else c = !1;
      c && (Xs(new Ys(a.j, a.C, a.B || J(a.l, Nk, 4))), (b = !0));
      b && (a.A.start(), (a.j.adsbygoogle_ama_fc_has_run = !0));
    }
  }
  class jt {
    constructor(a, b, c, d, e) {
      this.j = a;
      this.A = b;
      this.l = c;
      this.C = d;
      this.B = e || null;
    }
  }
  var kt = (a, b, c, d, e, f) => {
      try {
        const g = a.j,
          h = Ze(a, "SCRIPT");
        h.async = !0;
        he(h, b);
        g.head.appendChild(h);
        h.addEventListener("load", () => {
          e();
          d && g.head.removeChild(h);
        });
        h.addEventListener("error", () => {
          0 < c ? kt(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
        });
      } catch (g) {
        f();
      }
    },
    lt = (a, b, c = () => {}, d = () => {}) => {
      kt(Ke(a), b, 0, !1, c, d);
    };
  var mt = (a = null) => {
    a = a || t;
    return a.googlefc || (a.googlefc = {});
  };
  Va(tn);
  Va(un);
  var nt = (a, b) => {
    const c = a.document,
      d = Ke(a),
      e = () => {
        if (!a.frames[b])
          if (c.body) {
            const f = Ze(d, "IFRAME");
            f.style.display = "none";
            f.style.width = "0px";
            f.style.height = "0px";
            f.style.border = "none";
            f.style.zIndex = "-1000";
            f.style.left = "-1000px";
            f.style.top = "-1000px";
            f.name = b;
            c.body.appendChild(f);
          } else a.setTimeout(e, 5);
      };
    e();
  };

  function gt(a, b, c) {
    const d = mt(a.j);
    d.callbackQueue = d.callbackQueue || [];
    d.callbackQueue.push({
      CONSENT_DATA_READY: () => {
        const e = mt(a.j),
          f = new Pm(a.j);
        Jm(f) &&
          Mm(f, (g) => {
            300 === g.cmpId &&
              g.tcString &&
              "tcunavailable" !== g.tcString &&
              b({
                ne: e.getDefaultConsentRevocationText(),
                zd: e.getDefaultConsentRevocationCloseText(),
                od: e.getDefaultConsentRevocationAttestationText(),
                showRevocationMessage: () => e.showRevocationMessage(),
              });
          });
        c();
      },
    });
  }

  function ot(a) {
    const b = qb(
      gb("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"),
      {
        id: a.l,
        ers: 2,
      }
    );
    lt(
      a.j,
      b,
      () => {},
      () => {}
    );
  }
  class pt {
    constructor(a, b) {
      this.j = a;
      this.l = b;
    }
    start() {
      try {
        nt(this.j, "googlefcPresent"), ot(this);
      } catch (a) {}
    }
  }
  var qt = (a, b, c) => {
    const d = H(a, Sk, 6);
    if (!d) return [];
    c = Rp(J(d, Tk, 1), c);
    return (a = el(a)) && B(a, 11)
      ? c.map((e) => Hp(e))
      : c.map((e) => {
          const f = Kk();
          return new up(
            new op(e.Gb, e.Hb),
            new Zo(),
            new np(b),
            !0,
            2,
            [],
            f,
            e.l,
            null,
            null,
            null,
            e.A,
            e.j
          );
        });
  };

  function rt(a) {
    return new so(["pedestal_container"], {
      ["google_reactive_ad_format"]: 30,
      ["google_phwr"]: 2.189,
      ["google_ad_width"]: Math.floor(a),
      ["google_ad_format"]: "autorelaxed",
      ["google_full_width_responsive"]: !0,
      ["google_enable_content_recommendations"]: !0,
      ["google_content_recommendation_ui_type"]: "pedestal",
    });
  }
  class st {
    j(a) {
      return rt(Math.floor(a.l));
    }
  }

  function tt(a) {
    var b = [
        "Could not locate a suitable placement in the content below the fold.",
      ],
      c,
      d;
    a = null === (c = Sj(a)) || void 0 === c ? void 0 : c.tagSpecificState[1];
    (c =
      null == a
        ? null
        : 4 ===
          (null === (d = a.debugCard) || void 0 === d ? void 0 : d.getAdType())
        ? a.debugCard
        : null) && c.displayAdLoadedContent(b);
  }
  var ut = {};

  function vt(a, b, c) {
    let d = wt(a, c, b);
    if (!d) return !0;
    let e = -1;
    const f = c.D.l;
    for (; d.Sa && d.Sa.length; ) {
      const h = d.Sa.shift();
      var g = Ap(h.N);
      const k = h.P.j,
        l = !!c.A.Ua || !!c.A.Wa || xt(c) || !!c.A.sc || k > e;
      g = !g || g <= d.hb;
      if (
        l &&
        g &&
        yt(c, h, {
          Dc: d.hb,
        })
      ) {
        e = k;
        if (d.fb.j.length + 1 >= f) return !0;
        d = wt(a, c, b);
        if (!d) return !0;
      }
    }
    return c.B;
  }
  var wt = (a, b, c) => {
    var d = b.D.l,
      e = b.D.B,
      f = b.D;
    f = Gq(b.L(), f.j ? f.j.Ia : void 0, d);
    if (f.j.length >= d) return null;
    e
      ? ((d = f.l || (f.l = W(f.A).scrollHeight || null)),
        (e = !d || 0 > d ? -1 : f.l * e - Mq(f)))
      : (e = void 0);
    a =
      null == e || 50 <= e
        ? zt(
            b,
            f,
            {
              types: a,
            },
            c
          )
        : null;
    return {
      fb: f,
      hb: e,
      Sa: a,
    };
  };
  ut[2] = ma(
    function (a, b) {
      a = zt(
        b,
        Gq(b.L()),
        {
          types: a,
          wa: kq(b.L()),
        },
        2
      );
      if (0 == a.length) return !0;
      for (var c = 0; c < a.length; c++) if (yt(b, a[c])) return !0;
      return b.B ? (b.C.push(11), !0) : !1;
    },
    [0]
  );
  ut[5] = ma(vt, [0], 5);
  ut[3] = function (a) {
    if (!a.B) return !1;
    var b = zt(
      a,
      Gq(a.L()),
      {
        types: [0],
        wa: kq(a.L()),
      },
      3
    );
    if (0 == b.length) return !0;
    for (var c = b.length - 1; 0 <= c; c--) if (yt(a, b[c])) return !0;
    a.C.push(11);
    return !0;
  };
  var At = (a) => {
      var b;
      a.A.Uc ? (b = new nq(0, null, [], 3, null)) : (b = kq(a.L()));
      return {
        types: [0],
        wa: b,
      };
    },
    Ct = (a) => {
      var b = a.L().document.body.getBoundingClientRect().width;
      b = rt(b);
      var c = a.j;
      var d = c.document.body,
        e = Bl(c, d, null);
      if (e) c = e;
      else {
        if (c.document.body) {
          e = Math.floor(c.document.body.getBoundingClientRect().width);
          for (
            var f = [
                {
                  element: c.document.body,
                  depth: 0,
                  height: 0,
                },
              ],
              g = -1,
              h = null;
            0 < f.length;

          ) {
            const l = f.pop(),
              m = l.element;
            var k = l.height;
            0 < l.depth && k > g && ((g = k), (h = m));
            if (5 > l.depth)
              for (let n = 0; n < m.children.length; n++) {
                const p = m.children[n];
                k = e;
                const r = p.getBoundingClientRect().width;
                (null == r || null == k ? 0 : r >= 0.9 * k && r <= 1.01 * k) &&
                  f.push({
                    element: p,
                    depth: l.depth + 1,
                    height: p.getBoundingClientRect().height,
                  });
              }
          }
          e = h;
        } else e = null;
        c = e ? Bl(c, e.parentNode || d, e) : null;
      }
      c &&
        ((b = ro(a.J, b)), (d = Qo(a.j.document, a.F, null, null, {}, b))) &&
        (Go(d.za, c, 2, 256), Bt(a, d, b));
    },
    Et = (a, b) => {
      var c = At(a);
      c.ec = [5];
      c = zt(a, Gq(a.L()), c, 8);
      Dt(a, c.reverse(), b);
    },
    Dt = (a, b, c) => {
      for (const d of b)
        if (
          ((b = c.j(d.P)),
          yt(a, d, {
            cd: b,
          }))
        )
          return !0;
      return !1;
    };
  ut[8] = function (a) {
    var b = a.L().document;
    if ("complete" != b.readyState)
      return (
        b.addEventListener("readystatechange", () => ut[8](a), {
          once: !0,
        }),
        !0
      );
    if (!a.B) return !1;
    if (!a.ub()) return !0;
    b = At(a);
    b.dc = [2, 4, 5];
    b = zt(a, Gq(a.L()), b, 8);
    const c = new st();
    if (Dt(a, b, c)) return !0;
    if (a.A.uc)
      switch (a.A.Jc || 0) {
        case 1:
          Et(a, c);
          break;
        default:
          Ct(a);
      }
    return !0;
  };
  ut[6] = ma(vt, [2], 6);
  ut[7] = ma(vt, [1], 7);
  ut[9] = function (a) {
    const b = wt([0, 2], a, 9);
    if (!b || !b.Sa) return a.C.push(17), tt(a.L()), a.B;
    for (var c of b.Sa) {
      var d = c;
      var e = a.A.Pb || null;
      null == e
        ? (d = null)
        : ((e = Bp(d.N, new Ft(), new Gt(e, a.L()))),
          (d = new bq(e, d.V(), d.P)));
      if (
        d &&
        !(Ap(d.N) > b.hb) &&
        yt(a, d, {
          Dc: b.hb,
          yd: !0,
        })
      )
        return (
          (a = d.N.J),
          (c = c.N),
          (a = 0 < a.length ? a[0] : null),
          (c.B = !0),
          null != a && c.J.push(a),
          !0
        );
    }
    a.C.push(17);
    tt(a.L());
    return a.B;
  };
  class Ft {
    l(a, b, c, d) {
      return To(d.document, a, b);
    }
    A(a) {
      return W(a).clientHeight || 0;
    }
  }
  class Gt {
    constructor(a, b) {
      this.l = a;
      this.A = b;
    }
    j() {
      var a = this.l,
        b = this.A;
      const c = a.G || {};
      c.google_ad_client = a.cb;
      c.google_ad_height = W(b).clientHeight || 0;
      c.google_ad_width = W(b).clientWidth || 0;
      c.google_reactive_ad_format = 9;
      b = new rl();
      F(b, 1, a.C);
      a.j && Dd(b, 2, a.j);
      a.F && F(b, 3, !0);
      c.google_rasc = Gd(b);
      a.A && (c.google_adtest = "on");
      return new so(["fsi_container"], c);
    }
  }
  var Ht = no(new ko(0, {})),
    It = no(new ko(1, {})),
    Jt = (a) => a === Ht || a === It;

  function Kt(a, b, c) {
    Cn(a.j, b) || a.j.set(b, []);
    a.j.get(b).push(c);
  }
  class Lt {
    constructor() {
      this.j = new Gn();
    }
  }

  function Mt(a, b) {
    b && ((a.l.apv = z(b, 4)), A(b, 23) && (a.l.sat = "" + z(H(b, jl, 23), 1)));
    return a;
  }

  function Nt(a, b) {
    a.l.afm = b.join(",");
    return a;
  }
  class Ot extends Jr {
    constructor(a) {
      super(a);
      this.l = {};
    }
    B(a) {
      try {
        this.l.su = a.location.hostname;
      } catch (b) {
        this.l.su = "_ex";
      }
      a = super.B(a);
      Za(a, this.l);
      return a;
    }
  }

  function Pt(a) {
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }

  function Qt(a, b) {
    a.j.op = Rt(b);
  }

  function St(a, b, c) {
    30 >= c.length
      ? (a.j[b] = Tt(c))
      : ((a.j[b] = Tt(c.slice(0, 30))), (a.j[b + "_c"] = c.length.toString()));
  }

  function Ut(a, b, c) {
    St(a, "fap", b);
    a.j.fad = Rt(c);
  }

  function Vt(a, b, c) {
    St(a, "fmp", b);
    a.j.fmd = Rt(c);
  }

  function Wt(a, b, c) {
    St(a, "vap", b);
    a.j.vad = Rt(c);
  }

  function Xt(a, b, c) {
    St(a, "vmp", b);
    a.j.vmd = Rt(c);
  }

  function Yt(a, b, c) {
    St(a, "pap", b);
    a.j.pad = Rt(c);
  }

  function Zt(a, b, c) {
    St(a, "pmp", b);
    a.j.pmd = Rt(c);
  }

  function $t(a, b) {
    St(a, "psq", b);
  }
  var au = class extends Ot {
    constructor(a) {
      super(0);
      Object.assign(this, a);
      this.j = {};
    }
    B(a) {
      a = super.B(a);
      Object.assign(a, this.j);
      return a;
    }
  };

  function Tt(a) {
    let b, c;
    return a
      .map((d) =>
        null != (c = null == (b = d) ? void 0 : b.toString()) ? c : "null"
      )
      .join("~");
  }

  function Rt(a) {
    return null == a
      ? "null"
      : "string" === typeof a
      ? a
      : "boolean" === typeof a
      ? a
        ? "1"
        : "0"
      : Number.isInteger(a)
      ? a.toString()
      : a.toFixed(3);
  }
  class bu {
    constructor(a) {
      this.j = this.A = this.l = !1;
      this.xb = null;
      this.Fa = a;
    }
  }

  function cu(a, b, c) {
    const d = b.N;
    if (!Cn(a.j, d)) {
      let e;
      a.j.set(d, new bu(null != (e = jm($p(b))) ? e : ""));
    }
    c(a.j.get(d));
  }

  function du(a) {
    cu(eu, a, (b) => {
      b.l = !0;
    });
  }

  function fu(a) {
    cu(eu, a, (b) => {
      b.A = !0;
    });
  }

  function gu(a) {
    var b = eu;
    cu(b, a, (c) => {
      c.j = !0;
    });
    b.H.push(a.N);
  }

  function hu(a, b) {
    cu(eu, a, (c) => {
      c.xb = b;
    });
  }

  function iu(a, b, c) {
    const d = [];
    let e = 0;
    for (const h of c.filter(b)) {
      let k;
      if (Jt(null != (k = h.xb) ? k : "")) ++e;
      else {
        let l;
        b = a.l.get(null != (l = h.xb) ? l : "", null);
        d.push(b);
      }
    }
    let f, g;
    return {
      list: d.sort(
        (h, k) => (null != (f = h) ? f : -1) - (null != (g = k) ? g : -1)
      ),
      Ea: e,
    };
  }

  function ju(a, b) {
    Qt(b, a.l.Pa());
    var c = Fn(a.j).filter((h) => 0 === (h.Fa.startsWith(Ht) ? 0 : 1)),
      d = Fn(a.j).filter((h) => 1 === (h.Fa.startsWith(Ht) ? 0 : 1)),
      e = iu(a, (h) => h.l, c);
    Ut(b, e.list, e.Ea);
    e = iu(a, (h) => h.l, d);
    Vt(b, e.list, e.Ea);
    e = iu(a, (h) => h.A, c);
    Wt(b, e.list, e.Ea);
    e = iu(a, (h) => h.A, d);
    Xt(b, e.list, e.Ea);
    c = iu(a, (h) => h.j, c);
    Yt(b, c.list, c.Ea);
    d = iu(a, (h) => h.j, d);
    Zt(b, d.list, d.Ea);
    let f, g;
    $t(
      b,
      a.H.map((h) => (null == (f = a.j.get(h)) ? void 0 : f.xb)).map((h) =>
        null != (g = a.l.get(h)) ? g : null
      )
    );
  }
  var eu = new (class {
    constructor() {
      this.C = null;
      this.F = this.D = !1;
      this.A = null;
      this.J = this.I = !1;
      this.B = null;
      this.l = new Gn();
      this.j = new Gn();
      this.H = [];
    }
  })();
  class ku {
    constructor(a = 0) {
      this.j = a;
    }
  }
  class lu {
    constructor(a) {
      this.l = a;
      this.j = -1;
    }
  }

  function mu(a) {
    let b = 0;
    for (; a; )
      (!b || a.previousElementSibling || a.nextElementSibling) && b++,
        (a = a.parentElement);
    return b;
  }

  function nu(a, b) {
    const c = a.B.filter((d) =>
      En(d.jb).every((e) => d.jb.get(e) === b.get(e))
    );
    return 0 === c.length
      ? (a.l.push(19), null)
      : c.reduce((d, e) => (d.jb.Pa() > e.jb.Pa() ? d : e), c[0]);
  }

  function ou(a, b) {
    b = $p(b);
    if (null == b.j) return a.l.push(18), null;
    b = b.j.value;
    if (Cn(a.A, b)) return a.A.get(b);
    var c = lo(b);
    c = nu(a, c);
    a.A.set(b, c);
    return c;
  }

  function pu(a, b) {
    let c;
    return (null == (c = ou(a, b)) ? void 0 : c.fe) || Number.MAX_VALUE;
  }

  function qu(a, b) {
    const c = Ij(Zi) || 0;
    if (0 == b.length || 0 == c) return !0;
    const d = new bo(b).filter((e) => {
      let f;
      e = (null == (f = ou(a, e)) ? void 0 : f.Fa) || "";
      return "" != e && !(e === Ht || e === It);
    });
    return c <= d.j.length / b.length;
  }
  var ru = class {
    constructor(a) {
      this.j = a;
      this.A = new Gn();
      let b;
      this.B = ((null == (b = H(a, Xk, 2)) ? void 0 : J(b, Yk, 1)) || []).map(
        (c) => {
          const d = lo(K(c, 1)),
            e = Ad(c, 2, 0);
          return {
            jb: d,
            fe: e,
            Fa: K(c, 1),
          };
        }
      );
      this.l = [];
    }
  };

  function su(a, b) {
    return 0 == b.j.length ? b : b.sort((c, d) => pu(a.j, c) - pu(a.j, d));
  }

  function tu(a, b) {
    var c = b.P.j,
      d = Math,
      e = d.min;
    const f = b.V(),
      g = b.N.j();
    c += 200 * e.call(d, 20, 0 == g || 3 == g ? mu(f.parentElement) : mu(f));
    d = a.A;
    0 > d.j && (d.j = W(d.l).scrollHeight || 0);
    d = d.j - b.P.j;
    c += 1e3 < d ? 0 : 2 * (1e3 - d);
    a = a.l;
    b = b.V();
    return (
      c +
      ("string" === typeof b.className &&
      0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot")
        ? a.j
        : 0)
    );
  }

  function uu(a, b) {
    return 0 == b.j.length ? b : b.sort((c, d) => tu(a, c) - tu(a, d));
  }

  function vu(a, b) {
    return b.sort((c, d) => {
      const e = c.N.F,
        f = d.N.F;
      var g;
      null == e || null == f
        ? (g =
            null == e && null == f ? tu(a, c) - tu(a, d) : null == e ? 1 : -1)
        : (g = e - f);
      return g;
    });
  }
  class wu {
    constructor(a, b = 0, c = null) {
      this.A = new lu(a);
      this.l = new ku(b);
      this.j = c && new ru(c);
    }
  }
  class xu {
    constructor(a, b, c, d) {
      this.A = new bo(a);
      this.l = new wu(b, void 0 === c ? 0 : c, void 0 === d ? null : d);
      this.j = b;
      this.B = new Lt();
    }
    find(a, b) {
      b = void 0 === b ? 0 : b;
      const c = a.Yb ? a.Yb : [0],
        d = "number" === typeof a.Zb || null === a.Zb ? a.Zb : 0,
        e = "number" === typeof a.minWidth ? a.minWidth : 0,
        f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
        g = "number" === typeof a.ta ? a.ta : 0,
        h = new Jn(a.te || []);
      let k = this.A.filter((m, n) => !h.contains(n));
      k = ao(
        ao(
          ao(
            ao(
              ao(
                ao(ao(k, cr(c), yu(1, b)), dr(a.Na || []), yu(2, b)),
                gr(a.Ob || []),
                yu(3, b)
              ),
              hr(a.Xh || []),
              yu(4, b)
            ),
            ir(a.ec || []),
            yu(5, b)
          ),
          er(a.dc || []),
          yu(6, b)
        ),
        ya(wp),
        yu(7, b)
      );
      let l = (k = k.apply(Yq(this.j)));
      null !== d &&
        (l =
          a.gb && a.qc
            ? ao(l, br(d, a.qc, this.j, a.fb), zu(16, b))
            : ao(l, ar(d, this.j, a.fb), zu(9, b)));
      l = ao(l, ma(kr, e, f), zu(10, b));
      a.eb && (l = ao(l, jr(this.j.document, a.eb), zu(11, b)));
      l = ao(ao(l, Zq(this.j), zu(12, b)), fr(g, this.j), zu(13, b));
      a.Wa
        ? (l = vu(this.l, l))
        : a.ve
        ? ((l = su(this.l, l)),
          $n(k, (m) => {
            du(m);
            var n;
            null != (n = this.l.j) &&
              ((n = ou(n, m)),
              null != (null == n ? void 0 : n.Fa) && hu(m, n.Fa));
          }),
          $n(l, (m) => fu(m)))
        : (l = uu(this.l, l));
      a.Ua &&
        (l = co(
          l,
          Gc(this.j.location.href + this.j.localStorage.google_experiment_mod)
        ));
      1 === c.length &&
        Kt(this.B, c[0], {
          qd: k.j.length,
          we: l.j.length,
        });
      return l.j.slice(0);
    }
  }
  const yu = (a, b) => (c) => yp(c, b, a),
    zu = (a, b) => (c) => yp(c.N, b, a);

  function Au(a, b) {
    if (!a) return !1;
    a = gf(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return "left" == a || "right" == a;
  }

  function Bu(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    return a ? a : null;
  }

  function Cu(a) {
    return !!a.nextSibling || (!!a.parentNode && Cu(a.parentNode));
  }

  function Du(a) {
    const b = Yj(a, !0),
      c = W(a).scrollWidth,
      d = W(a).scrollHeight;
    let e = "unknown";
    a && a.document && a.document.readyState && (e = a.document.readyState);
    var f = dk(a);
    const g = [];
    var h = [];
    const k = [],
      l = [];
    var m = [],
      n = [],
      p = [];
    let r = 0,
      x = 0,
      v = Infinity,
      D = Infinity,
      w = null;
    var E = Cq(
      {
        Ba: !1,
      },
      a
    );
    for (var C of E) {
      E = C.getBoundingClientRect();
      const Q = b - (E.bottom + f);
      var I = void 0,
        G = void 0;
      if (
        C.className &&
        -1 != C.className.indexOf("adsbygoogle-ablated-ad-slot")
      ) {
        I = C.getAttribute("google_element_uid");
        G = a.google_sv_map;
        if (!I || !G || !G[I]) continue;
        I = (G = Og(G[I])) ? G.height : 0;
        G = G ? G.width : 0;
      } else if (
        ((I = E.bottom - E.top), (G = E.right - E.left), 1 >= I || 1 >= G)
      )
        continue;
      g.push(I);
      k.push(G);
      l.push(I * G);
      C.className && -1 != C.className.indexOf("google-auto-placed")
        ? ((x += 1),
          C.className &&
            -1 != C.className.indexOf("pedestal_container") &&
            (w = I))
        : ((v = Math.min(v, Q)), n.push(E), (r += 1), h.push(I), m.push(I * G));
      D = Math.min(D, Q);
      p.push(E);
    }
    v = Infinity === v ? null : v;
    D = Infinity === D ? null : D;
    f = Eu(n);
    p = Eu(p);
    h = Fu(b, h);
    n = Fu(b, g);
    m = Fu(b * c, m);
    C = Fu(b * c, l);
    return new Gu(a, {
      Dd: e,
      $b: b,
      $d: c,
      Zd: d,
      Sd: r,
      pd: x,
      sd: Hu(g),
      td: Hu(k),
      rd: Hu(l),
      Xd: f,
      Wd: p,
      Vd: v,
      Ud: D,
      Mb: h,
      Lb: n,
      ld: m,
      kd: C,
      ae: w,
    });
  }

  function Iu(a, b, c, d) {
    const e = $e() && !(900 <= W(a.l).clientWidth);
    d = Fa(d, (f) => Ka(a.A, f)).join(",");
    return {
      wpc: b,
      su: c,
      eid: d,
      doc: a.j.Dd,
      pg_h: Ju(a.j.$b),
      pg_w: Ju(a.j.$d),
      pg_hs: Ju(a.j.Zd),
      c: Ju(a.j.Sd),
      aa_c: Ju(a.j.pd),
      av_h: Ju(a.j.sd),
      av_w: Ju(a.j.td),
      av_a: Ju(a.j.rd),
      s: Ju(a.j.Xd),
      all_s: Ju(a.j.Wd),
      b: Ju(a.j.Vd),
      all_b: Ju(a.j.Ud),
      d: Ju(a.j.Mb),
      all_d: Ju(a.j.Lb),
      ard: Ju(a.j.ld),
      all_ard: Ju(a.j.kd),
      pd_h: Ju(a.j.ae),
      dt: e ? "m" : "d",
    };
  }
  class Gu {
    constructor(a, b) {
      this.l = a;
      this.j = b;
      this.A =
        "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(
          " "
        );
    }
  }

  function Hu(a) {
    return (
      He.apply(
        null,
        Fa(a, (b) => 0 < b)
      ) || null
    );
  }

  function Fu(a, b) {
    return 0 >= a ? null : Ge.apply(null, b) / a;
  }

  function Eu(a) {
    let b = Infinity;
    for (let e = 0; e < a.length - 1; e++)
      for (let f = e + 1; f < a.length; f++) {
        var c = a[e],
          d = a[f];
        c = Math.max(
          Math.max(0, c.left - d.right, d.left - c.right),
          Math.max(0, c.top - d.bottom, d.top - c.bottom)
        );
        0 < c && (b = Math.min(c, b));
      }
    return Infinity !== b ? b : null;
  }

  function Ju(a) {
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }

  function Ku(a, b) {
    b = (W(b).clientHeight || 0) - dk(b);
    let c = 0;
    for (let d = 0; d < a.length; d++) {
      const e = a[d].getBoundingClientRect();
      Kq(e) && e.top <= b && (c += 1);
    }
    return c;
  }

  function Lu(a) {
    const b = {};
    var c = Eq(
      {
        Ba: !1,
        pb: !1,
        qb: !1,
        rb: !1,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Kq);
    b.ed = c.length;
    c = Fq(
      {
        qb: !0,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Kq);
    b.Fd = c.length;
    c = Fq(
      {
        rb: !0,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Kq);
    b.Yd = c.length;
    c = Fq(
      {
        pb: !0,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Kq);
    b.jd = c.length;
    c = (W(a).clientHeight || 0) - dk(a);
    c = Eq(
      {
        Ba: !1,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Kq)
      .filter(la(Mu, null, c));
    b.gd = c.length;
    a = Du(a);
    c = null != a.j.Mb ? a.j.Mb : null;
    null != c && (b.Td = c);
    a = null != a.j.Lb ? a.j.Lb : null;
    null != a && (b.hd = a);
    return b;
  }

  function xt(a) {
    var b;
    let c;
    if (
      0 ==
      (null != (c = null == (b = a.l.l.j) ? void 0 : [...z(b.j, 1)].length)
        ? c
        : 0)
    )
      return !1;
    if (0 == (Ij(Zi) || 0)) return !0;
    if (void 0 === a.I) {
      b = a.l.find({
        Yb: [0, 1, 2],
      });
      let d;
      a.I = (null == (d = a.l.l.j) ? void 0 : qu(d, b)) || !1;
    }
    return a.I;
  }

  function yt(a, b, c) {
    var { Dc: d, cd: e, yd: f } = void 0 === c ? {} : c;
    c = b.N;
    if (c.B) return !1;
    var g = b.V(),
      h = c.j(),
      k = a.B;
    a: {
      var l = a.j;
      switch (h) {
        case 0:
          l = Au(Bu(g), l);
          break a;
        case 3:
          l = Au(g, l);
          break a;
        case 2:
          var m = g.lastChild;
          l = Au(m ? (1 == m.nodeType ? m : Bu(m)) : null, l);
          break a;
      }
      l = !1;
    }
    if ((k = !l && !(!k && 2 == h && !Cu(g))))
      (g = 1 == h || 2 == h ? g : g.parentNode),
        (k = !(g && !yo(g) && 0 >= g.offsetWidth));
    if (!k) return !1;
    g =
      null == d
        ? null
        : new so(null, {
            google_max_responsive_height: d,
          });
    h = to(z(c.Ta, 2) || 0);
    k = c.F;
    k =
      null == k
        ? null
        : new so(null, {
            google_ml_rank: k,
          });
    l = Nu(a, c);
    g = ro(a.J, c.O ? c.O.j(b.P) : null, g, e || null, h, k, l);
    h = b.fill(a.F, g);
    if ((k = f)) {
      if (h) {
        k = h.ea;
        l = k.style.width;
        k.style.width = "100%";
        m = k.offsetWidth;
        k.style.width = l;
        k = m;
        l = a.j;
        m = h.ea;
        var n = (g && g.Qa()) || {};
        if (l.top != l) var p = Ng(l) ? 3 : 16;
        else if (488 > W(l).clientWidth)
          if (l.innerHeight >= l.innerWidth)
            if (((p = W(l).clientWidth), !p || 0.3 < (p - k) / p)) p = 6;
            else {
              if ((p = "true" != n.google_full_width_responsive))
                c: {
                  var r = m.parentElement;
                  for (p = W(l).clientWidth; r; r = r.parentElement) {
                    const x = gf(r, l);
                    if (!x) continue;
                    const v = uf(x.width);
                    if (v && !(v >= p) && "visible" != x.overflow) {
                      p = !0;
                      break c;
                    }
                  }
                  p = !1;
                }
              p = p ? 7 : !0;
            }
          else p = 5;
        else p = 4;
        if (!0 !== p) k = p;
        else {
          if (!(n = "true" == n.google_full_width_responsive))
            b: {
              do
                if ((n = gf(m, l)) && "fixed" == n.position) {
                  n = !1;
                  break b;
                }
              while ((m = m.parentElement));
              n = !0;
            }
          n
            ? V(Wi) || (l.location && "#bffwroe2etoq" == l.location.hash)
              ? (k = !0)
              : ((l = W(l).clientWidth),
                (k = l - k),
                (k =
                  l && 0 <= k ? !0 : l ? (-10 > k ? 11 : 0 > k ? 14 : 12) : 10))
            : (k = 9);
        }
        if (k) {
          k = a.j;
          l = h.ea;
          if ((m = No(k, l)))
            (l.style.border =
              l.style.borderStyle =
              l.style.outline =
              l.style.outlineStyle =
              l.style.transition =
                "none"),
              (l.style.borderSpacing = l.style.padding = "0"),
              Lo(l, m, "0px"),
              (l.style.width = W(k).clientWidth + "px"),
              Oo(k, l, m),
              (l.style.zIndex = 30);
          k = !0;
        } else Do(h.za), (k = !1);
      } else k = !1;
      k = !k;
    }
    if (k || !Bt(a, h, g)) return !1;
    bi(9, [c.F, c.Ca]);
    xt(a) && gu(b);
    return !0;
  }

  function zt(a, b, c, d) {
    const e = c.wa ? c.wa : a.D;
    var f = {
      zb: e.A,
      ta: e.C,
    };
    for (let g of e.D) g.adCount <= b.j.length && (f = g.hc);
    return a.l.find(
      {
        te: Ou(a),
        Yb: c.types,
        Zb: f.zb,
        fb: b,
        Na: a.Z,
        ta: f.ta || void 0,
        Ua: !!a.A.Ua,
        Wa: !!a.A.Wa,
        ve: xt(a),
        dc: c.dc,
        minWidth: c.minWidth,
        maxWidth: c.maxWidth,
        Ob: a.R,
        eb: a.O,
        ec: c.ec,
        gb: !!a.A.gb,
        qc: e.j,
      },
      d
    );
  }

  function Pu(a) {
    return a.H ? a.H : (a.H = a.j.google_ama_state);
  }

  function Ou(a) {
    if (V(Ki)) return [];
    const b = Pu(a);
    return null == b || null == b.placed
      ? []
      : b.placed
          .map((c) => c.index)
          .filter((c) => 0 <= c && c < a.l.A.j.length);
  }

  function Nu(a, b) {
    return jm(
      lm(Yp(b).map(uo), () => {
        a.C.push(18);
      })
    );
  }

  function Bt(a, b, c) {
    if (!b) return !1;
    try {
      Uo(a.j, b.ea, c);
    } catch (d) {
      return Do(b.za), a.C.push(6), !1;
    }
    return !0;
  }
  class Qu {
    constructor(a, b, c, d, e) {
      e = void 0 === e ? {} : e;
      this.l = a;
      this.F = b;
      this.j = c;
      this.D = d.wa;
      this.Z = d.Na || [];
      this.J = d.Gd || null;
      this.R = d.Ob || [];
      this.O = d.eb || [];
      this.A = e;
      this.B = !1;
      this.K = [];
      this.C = [];
      this.I = this.H = void 0;
    }
    L() {
      return this.j;
    }
    ia(a) {
      this.K.push(a);
    }
    Wb() {
      return !!this.A.Qc;
    }
    ub() {
      return !Cl(this.j);
    }
  }
  const Mu = (a, b) => b.top <= a;

  function Ru(a, b, c, d, e) {
    this.xa = a;
    this.errors = b;
    this.Xa = c;
    this.j = d;
    this.l = e;
  }
  var Su = (a, b, { ub: c = !1, Wb: d = !1, pe: e = !1 } = {}) => {
    const f = [];
    e && f.push(9);
    -1 < b.indexOf(3) && f.push(6);
    -1 < b.indexOf(4) && !d && c && f.push(8);
    -1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3));
    -1 < b.indexOf(2) && f.push(7);
    -1 < b.indexOf(4) && d && c && f.push(8);
    return f;
  };
  class Tu {
    constructor(a, b) {
      this.B = a.slice(0);
      this.l = a.slice(0);
      this.A = La(this.l, 1);
      this.j = b;
    }
  }
  const Uu = class {
    constructor(a) {
      this.j = a;
      this.exception = void 0;
    }
  };
  class Vu {
    j() {
      return new so([], {
        ["google_reactive_ad_format"]: 40,
        ["google_tag_origin"]: "qs",
      });
    }
  }
  class Wu {
    j() {
      return new so(["adsbygoogle-resurrected-ad-slot"], {});
    }
  }

  function Xu(a) {
    return zo(a.j.document).map((b) => {
      const c = new op(b, 3);
      b = new qp(Wo(a.j, b));
      return new up(c, b, a.l, !1, 0, [], null, a.j, null);
    });
  }
  class Yu {
    constructor(a) {
      var b = new Wu();
      this.j = a;
      this.l = b || null;
    }
  }
  const Zu = {
    kc: "10px",
    Kb: "10px",
  };

  function $u(a) {
    return In(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(
      (b) => new up(new op(b, 1), new mp(Zu), a.l, !1, 0, [], null, a.j, null)
    );
  }
  class av {
    constructor(a, b) {
      this.j = a;
      this.l = b || null;
    }
  }

  function bv(a, b) {
    return null == a
      ? b + "ShouldNotBeNull"
      : 0 == a
      ? b + "ShouldNotBeZero"
      : -1 > a
      ? b + "ShouldNotBeLessMinusOne"
      : null;
  }

  function cv(a) {
    return (Pu(a.A) && Pu(a.A).placed) || [];
  }

  function dv(a) {
    return cv(a).map((b) => Un(Sn(b.element, a.j)));
  }

  function ev(a) {
    return cv(a).map((b) => b.index);
  }

  function fv(a, b) {
    const c = b.N;
    return !a.D && c.A && A(c.A, 8) && 1 == z(c.A, 8)
      ? []
      : c.B
      ? (c.J || []).map((d) => Un(Sn(d, a.j)))
      : [Un(new Tn(b.P.j, 0))];
  }

  function gv(a) {
    a.sort((e, f) => e.va - f.va);
    const b = [];
    let c = 0;
    for (let e = 0; e < a.length; ++e) {
      var d = a[e];
      let f = d.va;
      d = d.va + d.j;
      f <= c ? (c = Math.max(c, d)) : (b.push(new Tn(c, f - c)), (c = d));
    }
    return b;
  }

  function hv(a, b) {
    const c = [];
    let d = 0;
    for (const e of En(b)) {
      const f = b.get(e);
      f.sort((g, h) => h.sa() - g.sa());
      a.I || f.splice(a.C, f.length);
      !a.F && d + f.length > a.l && f.splice(a.l - d, f.length);
      c.push(e + "G" + f.map((g) => g.va + "~" + g.sa()).join("G"));
      d += f.length;
      if (!a.F && d >= a.l) break;
    }
    return c;
  }
  var iv = class {
    constructor(a, b, c) {
      this.H = -1 == c.Qb;
      this.B = c.Qb;
      this.I = -1 == c.mb;
      this.C = c.mb;
      this.F = -1 == c.yb;
      this.l = c.yb;
      this.D = c.Kd;
      this.A = b;
      this.j = a;
    }
  };
  const jv = (a) => {
      const b = /[a-zA-Z0-9._~-]/,
        c = /%[89a-zA-Z]./;
      return a.replace(/(%[a-zA-Z0-9]{2})/g, function (d) {
        if (!d.match(c)) {
          const e = decodeURIComponent(d);
          if (e.match(b)) return e;
        }
        return d.toUpperCase();
      });
    },
    kv = (a) => {
      let b = "";
      const c = /[/%?&=]/;
      for (let d = 0; d < a.length; ++d) {
        const e = a[d];
        b = e.match(c) ? b + e : b + encodeURIComponent(e);
      }
      return b;
    };
  var lv = (a, b) => {
    a = z(a, 2);
    if (!a) return !1;
    for (let c = 0; c < a.length; c++) if (a[c] == b) return !0;
    return !1;
  };
  const nv = (a, b) => {
      a = kv(jv(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
      const c = of(a),
        d = mv(a);
      return (
        b.find((e) => {
          const f = A(e, 7) ? z(H(e, ml, 7), 1) : z(e, 1);
          e = A(e, 7) ? z(H(e, ml, 7), 2) : 2;
          if ("number" !== typeof f) return !1;
          switch (e) {
            case 1:
              return f == c;
            case 2:
              return d[f] || !1;
          }
          return !1;
        }) || null
      );
    },
    mv = (a) => {
      const b = {};
      for (;;) {
        b[of(a)] = !0;
        if (!a) return b;
        a = a.substring(0, a.lastIndexOf("/"));
      }
    };

  function ov(a) {
    a.F.forEach((b) => {
      switch (b) {
        case 0:
          pv(a);
          break;
        case 1:
          b = new js(a.l, a.j, a.C);
          var c = Wr(b.j, b.l);
          c = cq(c, b.j).sort(ks);
          c = 0 == c.length ? [] : [c[Math.floor(c.length / 2)]];
          var d = b.j;
          const e = [];
          for (let f = 0; f < c.length; f++) {
            const g = c[f],
              h = "autors-container-" + f,
              k = d.document.createElement("div");
            k.setAttribute("id", h);
            new is(d, g, new Vr(k)).init();
            e.push(h);
          }
          new gs(b.j, e, b.A, z(H(b.l, Qk, 22), 1)).init();
          break;
        case 2:
          (b = H(a.j, Pk, 18)) &&
            it(
              new jt(
                a.l,
                a.ca || new pt(a.l, a.C),
                b,
                new Zr(a.l),
                J(a.j, Nk, 1)
              )
            );
          break;
        case 3:
          qv(a);
      }
    });
  }

  function pv(a) {
    rv(a) && sv(a, "p", tv(a));
    if (cl(a.j) && 1 === z(cl(a.j), 1)) {
      var b = H(cl(a.j), ol, 6);
      b && 2 === z(b, 1) && Vo(a.l);
    }
    b = a.A.ce;
    a: {
      var c = a.l;
      var d = lq(c);
      c = W(c).clientHeight || iq[d];
      var e = oq(J(b, kk, 2), d);
      if (e && (e = rq(e, c))) {
        d = e;
        break a;
      }
      d = mq(d, c);
    }
    if (
      a.A.T &&
      A(a.A.T, 10) &&
      ((c = zd(H(a.A.T, nl, 10), 1)), null !== c && void 0 !== c)
    ) {
      var f = a.l;
      d = c;
      c = lq(f);
      e = W(f).clientHeight || iq[c];
      var g = void 0;
      b &&
        (g = (g = (g = oq(J(b, kk, 2), c)) ? H(g, mk, 7) : void 0)
          ? sq(g, e)
          : void 0);
      var h = lq(f);
      f = W(f).clientHeight || iq[h];
      const N = qq(jq[h].ic, f);
      f = null === N ? mq(h, f) : new nq(N, N, tq(N, N, 8), 8, 0.3, g);
      g = qq(jq[c].Tc, e);
      h = qq(jq[c].ic, e);
      e = qq(jq[c].Sc, e);
      c = f.A;
      g &&
        e &&
        h &&
        void 0 !== d &&
        (c = 0.5 >= d ? h + (1 - 2 * d) * (g - h) : e + (2 - 2 * d) * (h - e));
      d = c;
      d = new nq(c, d, tq(c, d, f.l), f.l, f.B, f.j);
    }
    if (A(a.j, 26)) {
      c = H(a.j, ql, 26);
      e = a.l;
      g = B(c, 2);
      c = H(c, kk, 1);
      f = W(e).clientHeight || iq[lq(e)];
      var k;
      e = null != (k = qq(null == c ? void 0 : z(c, 2), f)) ? k : d.A;
      var l;
      k = null != (l = qq(null == c ? void 0 : z(c, 5), f)) ? l : d.C;
      var m;
      l = g
        ? []
        : null != (m = pq(null == c ? void 0 : J(c, lk, 3), f))
        ? m
        : d.D;
      var n;
      m = null != (n = null == c ? void 0 : z(c, 4)) ? n : d.l;
      var p;
      n = null != (p = null == c ? void 0 : zd(c, 6)) ? p : d.B;
      var r;
      p =
        null != (r = (null == c ? 0 : A(c, 7)) ? sq(H(c, mk, 7), f) : null)
          ? r
          : d.j;
      d = new nq(e, k, l, m, n, p);
    }
    r = a.A.T ? z(a.A.T, 6) : [];
    p = a.A.T ? J(a.A.T, vk, 5) : [];
    var x;
    m = a.j;
    k = J(m, Nk, 1);
    l = a.A.T && lv(a.A.T, 1) ? "text_image" : "text";
    c = new Vu();
    n = vp(k, a.l, {
      vd: c,
      Od: new rp(l),
    });
    k.length != n.length && a.K.push(13);
    n = n.concat($u(new av(a.l, c)));
    k = 0;
    c = V(Oi);
    e = !1;
    cl(m) &&
      1 === z(cl(m), 1) &&
      (f = H(cl(m), ol, 6)) &&
      ((k = z(f, 2) || 0), 1 === z(f, 1) && (e = !0));
    var v, D;
    f =
      (null == (x = H(m, Vk, 24))
        ? void 0
        : null == (v = H(x, Zk, 3))
        ? void 0
        : null == (D = H(v, $k, 3))
        ? void 0
        : Jd(D, al, 2, bl)) || !1;
    if (c || e || f)
      (x = Xu(new Yu(a.l))), (n = n.concat(x)), (eu.I = !0), (eu.B = x.length);
    n = n.concat(qt(m, l, a.l));
    x = H(m, Vk, 24);
    x = new xu(n, a.l, k, x);
    v = a.C;
    D = a.l;
    r = {
      wa: d,
      Gd: a.Z,
      Na: a.A.Na,
      Ob: r,
      eb: p,
    };
    n = V(Pi);
    el(a.j)
      ? ((p = el(a.j)),
        (n = n || Bd(p, 14, !1)),
        (m = Bd(p, 2, !1)),
        (l = Bd(p, 3, !1)),
        (k = Bd(p, 4, !1)),
        (d = Bd(p, 5, !1)),
        (c = Bd(p, 6, !1)),
        (e = zd(p, 8)),
        (p = {
          Ua: n,
          Wa: m,
          sc: l,
          Uc: k,
          uc: d,
          Qc: c,
          be: null == e ? 0 : e,
          Jc: z(p, 10),
          gb: uv(a),
          Pb: a.O,
        }))
      : (p = {
          Ua: n,
          Wa: !1,
          sc: !1,
          Uc: !1,
          uc: !1,
          Qc: !1,
          be: 0,
          Jc: 0,
          gb: uv(a),
          Pb: a.O,
        });
    a.B = new Qu(x, v, D, r, p);
    var w, E;
    (null == (w = Pu(a.B))
      ? 0
      : null == (E = w.optimization)
      ? 0
      : E.ablatingThisPageview) &&
      !xt(a.B) &&
      Vo(a.l);
    w = a.A.T ? z(a.A.T, 2) : [];
    E = z(b, 1);
    b = a.B;
    w = Su(E, w, {
      ub: b.ub(),
      Wb: b.Wb(),
      pe: !!b.A.Pb,
    });
    b = new Tu(w, b);
    a.H = b;
    w = a.H;
    b = new An();
    for (w.j.B = !0; 0 < w.l.length; )
      (E = w),
        (x = ut[w.l[0]]) ? (E = x(E.j)) : (E.j.ia(12), (E = !0)),
        E || w.j.ia(5),
        w.l.shift();
    try {
      var C = w.j.l.A.filter(wp).j.length,
        I = w.j.K.slice(0),
        G = w.j;
      let N;
      var Q = [...G.C, ...((null == (N = G.l.l.j) ? void 0 : [...N.l]) || [])];
      var da = new Uu(new Ru(C, I, Q, w.j.l.A.j.length, w.j.l.B.j));
      yn(b);
      b.j = 1;
      b.B = da;
      Bn(b.l);
    } catch (N) {
      (C = N), yn(b), (b.j = 2), (b.A = C), Bn(b.l);
    }
    b.l.then(la(a.ma, a), la(a.R, a));
  }

  function qv(a) {
    km(
      Mr(a.l, a.j, a.la, {
        ["google_ad_client"]: a.C,
      }),
      (b) => {
        const c = !!b.B.Va && Pr(b);
        c && (b.C = vr(b.j, b.D, b.B.Va));
        var d = b.j;
        var e = H(b.l, Bk, 2);
        var f = Qp(b.F, d);
        f = f.filter(Sp).filter(Tp(f)).filter(Up(d));
        f.sort(Vp);
        if ((f = f[0] || null)) {
          a: switch (Ad(e, 1, 0)) {
            case 1:
              d = new mr(d, f);
              break a;
            case 2:
              d = new gq(dq(d, f));
              break a;
            case 3:
              d = new lr(d, dq(d, f));
              break a;
            default:
              throw Error(`Unknown player position: ${Ad(e, 1, 0)}`);
          }
          d = d.j();
        } else d = null;
        if (d) {
          e = b.j;
          f = H(b.l, Fk, 4) || void 0;
          if (
            0 <
            e.document.getElementsByTagName("google-read-aloud-player").length
          )
            e = hm("Player already created");
          else {
            var g = b.B,
              h = e.document;
            const k = h.createElement("div");
            k.id = "google-auto-placed-read-aloud-player";
            O(k, {
              margin: "5px",
            });
            const l = h.createElement("script");
            ge(
              l,
              nr`window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`
            );
            k.appendChild(l);
            pr(h, k, gb("https://www.google-analytics.com/analytics.js"));
            pr(
              h,
              k,
              gb(
                "https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"
              )
            );
            h = h.createElement("google-read-aloud-player");
            h.setAttribute(
              "data-api-key",
              "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs"
            );
            h.setAttribute("data-tracking-ids", "UA-199725947-1");
            h.setAttribute("data-url", g.url);
            h.setAttribute("data-voice", "en-us-f-1");
            f &&
              (A(f, 1) &&
                0 != Ad(f, 1, 0) &&
                h.setAttribute("data-docking-begin-trigger", qr[Ad(f, 1, 0)]),
              A(f, 2) && h.setAttribute("data-experiment", K(f, 2)));
            k.appendChild(h);
            aq(d, k);
            e = fm(
              e.document.getElementsByTagName("google-read-aloud-player")[0]
            );
          }
          null != e.j
            ? ((b.A = e.j.value),
              c && Or(b),
              Qr(b, {
                sts: "ok",
                pp: d.P.j,
              }))
            : Qr(b, {
                sts: "wf",
              });
        } else
          Qr(b, {
            sts: "pf",
          });
      }
    );
  }

  function uv(a) {
    return a.A.T && A(a.A.T, 10) ? 0.5 <= (zd(H(a.A.T, nl, 10), 1) || 0) : !0;
  }

  function vv(a, b) {
    for (
      var c = Hr(Hr(new Ot(b.xa), b.errors), a.K), d = b.Xa, e = 0;
      e < d.length;
      e++
    )
      a: {
        for (var f = d[e], g = 0; g < c.D.length; g++) if (c.D[g] == f) break a;
        c.D.push(f);
      }
    c.l.ppos = b.Lc;
    c.l.eatf = b.Jb;
    c.l.reatf = b.ob;
    c.l.a = a.H.B.slice(0).join(",");
    a = Gr(Nt(Mt(c, a.j), a.F), a.C);
    if ((c = b.Ib))
      (a.l.as_count = c.ed),
        (a.l.d_count = c.Fd),
        (a.l.ng_count = c.Yd),
        (a.l.am_count = c.jd),
        (a.l.atf_count = c.gd),
        (a.l.mdns = Pt(c.Td)),
        (a.l.alldns = Pt(c.hd));
    c = b.Db;
    null != c && (a.l.allp = c);
    if ((c = b.Hd)) {
      d = [];
      for (var h of En(c))
        0 < c.get(h).length &&
          ((e = c.get(h)[0]), d.push("(" + [h, e.qd, e.we].join() + ")"));
      a.l.fd = d.join(",");
    }
    h = b.$b;
    null != h && (a.l.pgh = h);
    void 0 !== b.exception && Ir(a, b.exception).ia(1);
    return a;
  }

  function wv(a, b) {
    var c = vv(a, b);
    Kr(
      a.D,
      0 < b.errors.length || 0 < a.K.length || void 0 !== b.exception
        ? 0 < a.J
          ? Br
          : zr
        : 0 < a.J
        ? Ar
        : yr,
      c
    );
    if (H(a.j, Vk, 24)) {
      if (null != (b = a.B.l.l.j)) {
        eu.C = [...z(b.j, 1)];
        var d;
        let l;
        eu.F = !!(null == (d = H(b.j, Zk, 3))
          ? 0
          : null == (l = H(d, $k, 3))
          ? 0
          : Jd(l, al, 2, bl));
        d = new Gn();
        var e;
        let m;
        for (const n of null !=
        (m = null == (e = H(b.j, Xk, 2)) ? void 0 : J(e, Yk, 1))
          ? m
          : [])
          d.set(K(n, 1), Ad(n, 2, 0));
        eu.l = d;
      }
      e = Pu(a.B);
      var f;
      eu.A = !!(null == e
        ? 0
        : null == (f = e.optimization)
        ? 0
        : f.ablationFromStorage);
      var g;
      if (
        null == e
          ? 0
          : null == (g = e.optimization)
          ? 0
          : g.ablatingThisPageview
      )
        eu.D = !0;
      let k;
      eu.J = !!(null == e
        ? 0
        : null == (k = e.optimization)
        ? 0
        : k.availableAbg);
      var h;
      f = eu;
      c = new au(c);
      f.C
        ? ((g = null != (h = f.C) ? h : []),
          (c.j.sl = g.join("~")),
          (c.j.ab = Rt(f.D)),
          (c.j.rr = Rt(f.I)),
          (c.j.oab = Rt(f.F)),
          null != f.A && (c.j.sab = Rt(f.A)),
          (c.j.ls = Rt(f.J)),
          Qt(c, f.l.Pa()),
          null != f.B && (c.j.rp = Rt(f.B)),
          ju(f, c))
        : ((h = c),
          (f = "irr".replace(RegExp("~", "g"), "")),
          (h.j.e = h.j.e ? h.j.e + ("~" + f) : f));
      h = c;
      Kr(a.D, Er, h);
    }
  }

  function xv(a) {
    return cl(a.j) && 1 === z(cl(a.j), 1)
      ? !(H(cl(a.j), ol, 6) && 1 <= (z(H(cl(a.j), ol, 6), 3) || 0))
      : !1;
  }

  function yv(a) {
    if (xv(a)) {
      a = a.B;
      var b = Fq(
        {
          qb: !0,
          rb: !0,
        },
        a.j
      );
      a = 0 < Ku(b, a.j);
    } else
      (a = a.B.j),
        (b = Eq(
          {
            Ba: !1,
            pb: !1,
          },
          a
        )),
        (a = 0 < Ku(b, a));
    return a;
  }

  function zv(a) {
    if (rv(a)) {
      var b = tv(a);
      a.I.init(null == b ? void 0 : b, () => {
        sv(a, "s", b);
      });
      Vn(a.I, (c) => {
        sv(a, "d", tv(a), c);
        a.I.kb();
        let d, e;
        if (null == (d = a.j) ? 0 : null == (e = el(d)) ? 0 : Bd(e, 21, !1)) {
          let f, g;
          null != (f = a.j) && null != (g = el(f)) && F(g, 18, !1);
          try {
            let h;
            if (null == (h = a.F) ? 0 : h.includes(0))
              a.J++, pv(a), sv(a, "r", tv(a), c);
          } catch (h) {
            sv(a, "f", tv(a), c),
              Kr(a.D, Br, Ir(Nt(Mt(Gr(new Ot(0), a.C), a.j), a.F).ia(1), h));
          }
        }
      });
    }
  }

  function Av(a, b, c) {
    {
      var d = Pu(a.B),
        e = b.j;
      const f = e.j;
      let g = e.xa,
        h = e.errors.slice(),
        k = e.Xa.slice(),
        l = b.exception;
      d
        ? (d.numAutoAdsPlaced ? (g += d.numAutoAdsPlaced) : a.H.A && k.push(13),
          void 0 !== d.exception && (l = d.exception),
          (c = {
            xa: g,
            Db: f,
            errors: e.errors.slice(),
            Xa: k,
            exception: l,
            ob: c,
            Jb: !!d.eatf,
          }))
        : (k.push(12),
          a.H.A && k.push(13),
          (c = {
            xa: g,
            Db: f,
            errors: h,
            Xa: k,
            exception: l,
            ob: c,
            Jb: !1,
          }));
    }
    c.Ib = Lu(a.B.j);
    if ((b = b.j.l)) c.Hd = b;
    c.$b = W(a.l).scrollHeight;
    if (ai()) {
      d = a.B.l.A.j.slice(0);
      b = [];
      for (const f of d) {
        d = {};
        e = f.K;
        for (const g of En(e)) d[g] = e.get(g);
        d = {
          anchorElement: f.H.l(f.l),
          position: f.j(),
          clearBoth: f.I,
          locationType: f.Ca,
          placed: f.B,
          placementProto: f.A ? f.A.toJSON() : null,
          articleStructure: f.C ? f.C.toJSON() : null,
          rejectionReasons: d,
        };
        b.push(d);
      }
      bi(14, [
        {
          placementIdentifiers: b,
        },
        a.B.F,
        c.Ib,
      ]);
    }
    return c;
  }

  function Bv(a, b) {
    a = a.B.j;
    a = a.googleSimulationState = a.googleSimulationState || {};
    a.amaConfigPlacementCount = b.Db;
    a.numAutoAdsPlaced = b.xa;
    a.hasAtfAd = b.ob;
    void 0 !== b.exception && (a.exception = b.exception);
  }

  function sv(a, b, c, d) {
    a = {
      r: b,
      pg_h: W(a.l).scrollHeight,
      su: a.l.location.hostname,
      d: void 0 == c ? -1 : c,
    };
    void 0 !== d && (a.pg_hd = d);
    T(Dr.ga, a, Dr.ba);
  }

  function rv(a) {
    let b, c, d;
    return null !=
      (d =
        null == (b = a.j)
          ? void 0
          : null == (c = el(b))
          ? void 0
          : Bd(c, 18, !1))
      ? d
      : !1;
  }

  function tv(a) {
    let b = null;
    el(a.j) && A(el(a.j), 19) && (b = z(el(a.j), 19));
    return b;
  }
  class Cv {
    constructor(a, b, c, d, e, f, g, h, k, l, m) {
      this.l = a;
      this.D = b;
      this.C = c;
      this.j = d;
      this.A = e;
      this.F = f;
      this.Z = g || null;
      this.K = [];
      this.ca = h;
      this.I = k;
      this.O = l;
      this.J = 0;
      this.la = m
        ? m
        : {
            url: a.location.href,
            Va: void 0,
          };
    }
    ma(a) {
      try {
        const b = yv(this) || xv(this) ? yv(this) : void 0;
        xo(
          {
            Nb: b,
          },
          this.l
        );
        zv(this);
        const c = Av(this, a, yv(this));
        A(this.j, 25) && B(H(this.j, pl, 25), 1) && Bv(this, c);
        wv(this, c);
        S(753, () => {
          if (V(Ii) && null != this.B) {
            var d = this.l;
            var e = this.B;
            var f = {
                Qb: Ij(Ni),
                mb: Ij(Mi),
                yb: Ij(Ji),
                Kd: V(Hi),
              },
              g =
                bv(f.Qb, "gapsMeasurementWindow") ||
                bv(f.mb, "gapsPerMeasurementWindow") ||
                bv(f.yb, "maxGapsToReport");
            e =
              null != g
                ? hm(g)
                : -1 == f.mb && -1 == f.yb
                ? hm("ShouldHaveLimits")
                : fm(new iv(d, e, f));
            d = Xa(c);
            if (null != e.j) {
              e = e.j.value;
              f = cq(e.A.l.A.j.slice(0), e.j);
              g = dv(e);
              var h = new Jn(ev(e));
              for (var k = 0; k < f.length; ++k)
                if (!h.contains(k)) {
                  var l = fv(e, f[k]);
                  g.push(...l);
                }
              g.push(new Tn(0, 0));
              g.push(Un(new Tn(W(e.j).scrollHeight, 0)));
              f = gv(g);
              g = new Gn();
              for (h = 0; h < f.length; ++h)
                (k = f[h]),
                  (l = e.H ? 0 : Math.floor(k.va / e.B)),
                  Cn(g, l) || g.set(l, []),
                  g.get(l).push(k);
              f = hv(e, g);
              d.Lc = `M${e.l}H${e.B}C${e.C}B${Number(!!e.D)}W${f.join("W")}`;
            } else d.Lc = "E" + e.l.message;
            d = vv(this, d);
            Kr(this.D, Cr, d);
          }
        })();
      } catch (b) {
        this.R(b);
      }
    }
    R(a) {
      wv(this, {
        xa: 0,
        Db: void 0,
        errors: [],
        Xa: [],
        exception: a,
        ob: void 0,
        Jb: void 0,
        Ib: void 0,
      });
    }
  }
  class Dv {
    constructor(a, b, c, d) {
      this.j = a;
      this.A = b;
      this.C = c;
      this.l = !1;
      this.B = d;
    }
  }
  Va(tn);
  Va(un);
  var Ev = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Fv = class extends y {
      constructor(a) {
        super(a);
      }
    },
    Gv = class extends y {
      constructor(a) {
        super(a);
      }
    };

  function Hv(a) {
    a = new Am(a).get("FCCDCF", "");
    try {
      return a ? Id(Ev, a) : null;
    } catch (b) {
      return null;
    }
  }

  function Iv(a) {
    return (a = Hv(a)) ? H(a, Fv, 4) : null;
  }

  function Jv(a) {
    a.__uspapi || a.frames.__uspapiLocator || ((a = new Kv(a)), Lv(a));
  }

  function Lv(a) {
    !a.A ||
      a.j.__uspapi ||
      a.j.frames.__uspapiLocator ||
      ((a.j.__uspapiManager = "fc"),
      nt(a.j, "__uspapiLocator"),
      oa("__uspapi", (...b) => Mv(a, ...b)));
  }

  function Mv(a, b, c, d) {
    "function" === typeof d &&
      "getUSPData" === b &&
      d(
        {
          version: 1,
          uspString: a.A,
        },
        !0
      );
  }
  class Kv {
    constructor(a) {
      this.j = a;
      this.l = a.document;
      this.A = (a = (a = Hv(this.l)) ? H(a, Gv, 5) || null : null)
        ? z(a, 2)
        : null;
      (a = Iv(this.l)) && A(a, 1) && z(a, 1);
      (a = Iv(this.l)) && A(a, 2) && z(a, 2);
    }
  }
  const Nv = {
    ["google_ad_channel"]: !0,
    ["google_ad_host"]: !0,
  };
  var Ov = (a, b) => {
      a.location.href &&
        a.location.href.substring &&
        (b.url = a.location.href.substring(0, 200));
      T("ama", b, 0.01);
    },
    Pv = (a) => {
      const b = {};
      lf(Nv, (c, d) => {
        d in a && (b[d] = a[d]);
      });
      return b;
    };
  const Rv = (a, b, c) => {
    var d = new il();
    Dd(c, 3, d);
    var e = el(c) && z(el(c), 13) ? z(el(c), 13) : 1;
    F(d, 1, Date.now() + 864e5 * e);
    d = c.constructor;
    e = od(Ed(c, !1));
    d = wd(d, e);
    if (el(c)) {
      e = new fl();
      var f = Bd(el(c), 12, !1);
      e = F(e, 12, f);
      c = Bd(el(c), 15, !1);
      c = F(e, 15, c);
      Dd(d, 15, c);
    }
    c = J(d, Nk, 1);
    for (e = 0; e < c.length; e++) F(c[e], 11, sd([]));
    Dd(d, 22, void 0);
    if (V(Gi)) Qv(a);
    else
      try {
        (b || a.localStorage).setItem("google_ama_config", Gd(d));
      } catch (g) {
        Ov(a, {
          lserr: 1,
        });
      }
  };
  var Qv = (a) => {
    try {
      try {
        a.localStorage.removeItem("google_ama_config");
      } catch (b) {
        Ov(a, {
          lserr: 1,
        });
      }
    } catch (b) {
      Ov(a, {
        lserr: 1,
      });
    }
  };
  var Sv = (a, b, c, d, e, f = null, g) => {
    try {
      var h = a.localStorage;
    } catch (p) {
      h = null;
    }
    if (h) {
      if (V(Gi)) var k = null;
      else
        try {
          k = h.getItem("google_ama_config");
        } catch (p) {
          k = null;
        }
      try {
        var l = k ? Id(hl, k) : null;
      } catch (p) {
        l = null;
      }
      k = l;
    } else k = null;
    a: {
      if (d)
        try {
          var m = Id(hl, d);
          break a;
        } catch (p) {
          Ov(a, {
            cfg: 1,
            inv: 1,
          });
        }
      m = null;
    }
    if ((d = m)) {
      V(Qi) ? e && Rv(a, e, d) : Rv(a, null, d);
      e = nv(a, J(d, ll, 7));
      a: {
        if (e && ((m = z(e, 3)), (k = H(d, rk, 9)), m && k)) {
          b: {
            k = J(k, pk, 1);
            for (n of k)
              if (z(n, 1) == m) {
                var n = H(n, ok, 2) || null;
                break b;
              }
            n = null;
          }
          if (n) break a;
        }
        n = H(d, ok, 8) || new ok();
      }
      n = {
        ce: n,
      };
      e && (n.T = e);
      e && lv(e, 3) && (n.Na = [1]);
      if (7 == c.google_pgb_reactive && ((e = n.T), !e || !B(e, 8))) return !1;
      if (Nl(a, 2))
        if (
          (bi(5, [d.toJSON()]),
          (e = Pv(c)),
          (c = ((c = n.T) && z(c, 4)) || ""),
          (e.google_package = c),
          (e = new so(["google-auto-placed"], e)),
          (c = new Lr(a)),
          (e = void 0 === e ? null : e),
          (m = new Xn(a)),
          (f = void 0 === f ? null : f),
          (g = {
            url: a.location.href,
            Va: g,
          }),
          (k = null),
          (e = void 0 === e ? null : e),
          (k = void 0 === k ? null : k),
          (m = void 0 === m ? null : m),
          (f = void 0 === f ? null : f),
          b)
        )
          if (d) {
            l = [];
            H(d, Pk, 18) && l.push(2);
            n.T && l.push(0);
            el(d) && B(el(d), 22) && l.push(1);
            H(d, Ak, 27) && 1 == Ad(H(d, Ak, 27), 1, 0) && l.push(3);
            try {
              ov(new Cv(a, c, b, d, n, l, e, k, m, f, g));
            } catch (p) {
              ai() && bi(15, [p]),
                Kr(c, zr, Ir(Nt(Mt(Gr(new Ot(0), b), d), l).ia(1), p));
            }
          } else Kr(c, zr, Gr(new Ot(0), b).ia(8));
        else Kr(c, zr, new Ot(0).ia(9));
      return !0;
    }
    k &&
      (Ov(a, {
        cfg: 1,
        cl: 1,
      }),
      Qv(a));
    return !1;
  };
  const Tv = (function (a, ...b) {
      const c = [a[0]];
      for (let d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
      return new Vd(c.join(""));
    })`https://support.google.com/adsense/#topic=3373519`,
    Uv = /[\s!'",:;\\(\\)\\?\\.]/,
    Vv = "\u00bf\u00a1\u037e\u061f\u3002\uff0c\u00b7\u2019".split(""),
    Wv = ["ja", "zh_CN", "zh_TW"];
  class Xv {
    constructor() {
      this.l = null;
      this.j = Infinity;
    }
  }

  function Yv(a, b, c, d, e, f, g, h) {
    var k;
    for (let I = 0; I < b.childNodes.length; I++) {
      var l = b.childNodes[I];
      if (l.nodeType === Node.TEXT_NODE && "" !== l.textContent) {
        a: {
          var m = a;
          var n = d,
            p = e,
            r = l.textContent,
            x = c,
            v = g,
            D = h;
          const G = [];
          let Q = 0;
          for (;;) {
            var w = r.length;
            let da = null;
            var E = "";
            for (const N of J(x, Jl, 2))
              for (const va of J(N, Hl, 2)) {
                const Ma = K(va, 1);
                for (var C = Q; C < r.length; ) {
                  C = r.indexOf(Ma, C);
                  if (-1 === C) break;
                  if (
                    C > w ||
                    (C === w && null !== da && Ma.length < da.length)
                  )
                    break;
                  if (!Zv(r.charAt(C - 1)) || !Zv(r.charAt(C + Ma.length)))
                    break;
                  if (v.j + $v(r.substr(Q, C - Q)) >= Ad(x, 5, 0)) {
                    w = C;
                    da = Ma;
                    E = K(N, 1);
                    break;
                  }
                  C += 1;
                }
              }
            if (null === da) {
              if (0 === Q) {
                v.j += $v(r);
                m = null;
                break a;
              }
              Q < r.length &&
                ((n = r.substr(Q)),
                G.push(m.document.createTextNode(n)),
                (v.j += $v(n)));
              m = G;
              break a;
            }
            w > Q && G.push(m.document.createTextNode(r.substr(Q, w - Q)));
            G.push(aw(m, E, n, x, da, p));
            v.j = 0;
            Q = w + da.length;
            w = D;
            w.j++;
            w.l.add(E);
          }
        }
        if (m) {
          for (const G of m) b.insertBefore(G, l);
          b.removeChild(l);
          I += m.length - 1;
          if (null !== (k = g.l) && void 0 !== k) k;
          else {
            a: {
              for (m = b; m; ) {
                b: switch (m.tagName) {
                  case "DIV":
                  case "DL":
                  case "P":
                  case "UL":
                  case "OL":
                  case "TABLE":
                    l = !0;
                    break b;
                  default:
                    l = !1;
                }
                if (l) {
                  l = m;
                  break a;
                }
                m = m.parentElement;
              }
              l = a.document.body.childNodes[0];
            }
            g.l = l;
          }
        }
      } else {
        a: if (
          ((m = l),
          m.nodeType !== Node.ELEMENT_NODE ||
            m.classList.contains("google-adfil-skip"))
        )
          m = !1;
        else
          switch (m.tagName) {
            case "A":
            case "IFRAME":
            case "BUTTON":
            case "CANVAS":
            case "CODE":
            case "EMBED":
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "VIDEO":
              m = !1;
              break a;
            default:
              m = !0;
          }
        m && Yv(a, l, c, d, e, f, g, h);
      }
    }
  }

  function Zv(a) {
    return "" === a || !!a.match(Uv) || Ka(Vv, a);
  }

  function aw(a, b, c, d, e, f) {
    const g = a.document.createElement("A");
    g.className = "google-adfil";
    g.appendChild(a.document.createTextNode(e));
    ee(g, hg(gg) || Wd);
    bw(g);
    const h = a.performance.now();
    g.addEventListener("click", (k) => {
      var l = a.performance.now();
      l = {
        wp: c,
        c: f,
        e: Ad(d, 8, 0),
        m: e,
        q: b,
        v: Math.round(l - h),
      };
      T("adfil-clk", l, 1);
      l = `goog-${Math.random()}`;
      var m = a.document,
        n = m.createElement("DIV");
      n.className = "google-adfil-overlay";
      Y(n, "position", "fixed");
      Y(n, "background-color", "rgba(0,0,0,.92)");
      Y(n, "width", "80%");
      Y(n, "height", "90%");
      Y(n, "top", "5%");
      Y(n, "left", "10%");
      Y(n, "z-index", "2147483647");
      Y(n, "border", "3px outset");
      const p = m.createElement("INPUT");
      p.type = "TEXT";
      p.value = b;
      Y(p, "margin", "0");
      Y(p, "padding", "8pt");
      Y(p, "background-color", "#eee");
      n.appendChild(p);
      m = m.createElement("DIV");
      m.setAttribute("id", l);
      n.appendChild(m);
      a.document.body.appendChild(n);
      n = {
        pubId: "test1-srp",
        styleId: "5365798520",
        adtest: "on",
        query: b,
        hl: K(d, 7),
        personalizedAds: "false",
        fexp: Ad(d, 8, 0),
      };
      l = {
        container: l,
        number: 4,
        width: Math.round(0.8 * a.document.body.offsetWidth - 6),
      };
      (a._googCsa = a._googCsa || cw(a))("ads", n, l);
      k.preventDefault();
      return !1;
    });
    return g;
  }

  function cw(a) {
    return (b, c, d) => {
      const e = a._googCsa;
      (e.q = e.q || []).push([b, c, d]);
      e.t = Number(new Date());
    };
  }

  function Y(a, b, c) {
    a.style.setProperty(b, c, "important");
  }

  function bw(a) {
    Y(a, "text-decoration", "underline dotted currentcolor");
    Y(a, "-webkit-text-decoration-line", "underline");
    Y(a, "-webkit-text-decoration-style", "dotted");
    Y(a, "border", "0");
    Y(a, "outline", "0");
  }

  function $v(a) {
    a = a.trim();
    return "" === a ? 0 : a.split(/\s+/).length;
  }
  var dw = class {
    constructor() {
      this.j = 0;
      this.l = new Set();
      this.A = 0;
    }
  };

  function ew(a, b, c, d) {
    const e = fw(a) || gw(c);
    e &&
      Dh(
        898,
        () => {
          a: {
            var f;
            if (!b.hasOwnProperty("adfcb")) {
              var g = jf() ? null : Math.floor(20 * kf(a));
              b.adfcb = g;
            }
            g = b.adfcb;
            if (null != g) {
              try {
                if (!a.document.body) break a;
              } catch (p) {
                break a;
              }
              if (a.performance) {
                var h = a.document.body;
                if (
                  null !== (f = h.classList) &&
                  void 0 !== f &&
                  f.contains &&
                  !h.hasAttribute("data-google-affiliate-annotated")
                ) {
                  h.setAttribute("data-google-affiliate-annotated", "1");
                  h = a.performance.now();
                  f = new dw();
                  var k = $v(a.document.body.innerText);
                  f.A = k;
                  if (k >= Ad(e, 4, 0)) {
                    k = new Xv();
                    var l = a.document.body,
                      m = K(e, 7);
                    Yv(a, l, e, d, g, Ka(Wv, m) ? 1 : 0, k, f);
                    if (k.l) {
                      l = K(e, 3);
                      var n = K(e, 6);
                      m = a.document.createElement("A");
                      m.appendChild(a.document.createTextNode(n));
                      ee(m, Tv);
                      m.setAttribute("target", "_blank");
                      bw(m);
                      Y(m, "padding", "0 8px");
                      n = a.document.createElement("P");
                      n.className = "google-adfil-skip";
                      n.appendChild(a.document.createTextNode(l));
                      n.appendChild(m);
                      Y(n, "border", "0 solid #bdc1c6");
                      Y(n, "border-width", "1px 0");
                      Y(n, "margin", "6pt 0");
                      Y(n, "padding", "21px");
                      Y(n, "text-align", "center");
                      Y(n, "width", "auto");
                      l = n;
                      k = k.l;
                      k.parentNode && k.parentNode.insertBefore(l, k);
                    }
                  }
                  h = a.performance.now() - h;
                  0 < f.j &&
                    ((k = a.document),
                    (l = k.createElement("SCRIPT")),
                    l.setAttribute("async", "async"),
                    he(l, vh`https://www.google.com/adsense/search/ads.js`),
                    k.body.appendChild(l));
                  k = Ad(e, 8, 0);
                  T(
                    "adfil-imp",
                    {
                      wp: d,
                      c: g,
                      e: k,
                      n: f.j,
                      t: f.l.size,
                      w: f.A,
                      x: Math.round(h),
                    },
                    1
                  );
                }
              }
            }
          }
        },
        (f) => {
          f.e = `${Ad(e, 8, 0)}`;
        }
      );
  }

  function fw(a) {
    var b, c;
    try {
      const d =
        null ===
          (c = null === (b = a.location) || void 0 === b ? void 0 : b.hash) ||
        void 0 === c
          ? void 0
          : c.match(/\bgoog_cpmi=([^&]*)/);
      if (!d) return null;
      const e = decodeURIComponent(d[1]);
      return new Gl(JSON.parse(e));
    } catch (d) {
      return null;
    }
  }

  function gw(a) {
    return Ij(Fi) ? H(a, Gl, 11) : null;
  }
  var hw = class {
    constructor(a) {
      this.M = a.M;
      this.pubWin = a.pubWin;
      this.G = a.G;
      this.U = a.U;
      this.$ = a.$;
      this.Da = a.Da;
      this.W = a.W;
      this.Y = a.Y;
      this.B = -1;
      this.j = 0;
      this.A = this.F = null;
      this.H = this.C = 0;
      this.l = [];
      this.Ma = this.D = "";
    }
  };
  var iw = (a, b, c) => {
    a.j |= 2;
    return b[c % b.length];
  };

  function jw(a) {
    return a
      ? (a = /^([\w-=:]+)&([A-Za-z0-9\+\/=]+)&([A-Za-z0-9\+\/=]+)$/.exec(a))
        ? {
            yc: a[1],
            domain: ld(a[2]),
            path: ld(a[3]),
          }
        : null
      : null;
  }

  function kw(a, b) {
    return b ? (b ? Dm("__gads", b, a.j) : null) : null;
  }

  function lw(a, b, c, d) {
    if (d) {
      var e = {
        Ec: c.H() - Date.now() / 1e3,
        path: c.I(),
        domain: c.F(),
        qe: !1,
      };
      c = c.j();
      a = a.j;
      B(d, 5) && "null" !== a.origin && new Am(a.document).set(b, c, e);
    }
  }
  var mw = class {
    constructor(a) {
      this.j = a;
      this.l = 0;
    }
  };
  var nw = (a, b) => {
      const c = new XMLHttpRequest();
      try {
        c.open("GET", a);
      } catch (d) {
        throw Error("Error opening XHR: " + d);
      }
      return new Promise((d) => {
        const e = () => {
          c.readyState != XMLHttpRequest.DONE ||
            300 <= c.status ||
            d(b(c.responseText));
        };
        c.onreadystatechange = e;
        c.onload = e;
        c.onerror = () => {
          throw Error("XHR error: " + a);
        };
        c.send();
      });
    },
    ow = (a) => nw(a, (b) => (b.includes('"_cookies_":') ? JSON.parse(b) : b));

  function pw(a, b, c) {
    return S(629, (d) => {
      if ("string" === typeof d) {
        if ("[]" === d) return Promise.resolve();
        var e = Id(Ae, d);
      } else {
        delete a._gfp_s_;
        if (!d) throw Error("Invalid JSONP response");
        d = d._cookies_;
        if (!d) return Promise.resolve();
        var f = d[0];
        if (!f) throw Error("Invalid JSONP response");
        var g = f._expires_,
          h = f._path_;
        d = f._domain_;
        if ("string" !== typeof d) throw Error("Invalid JSONP response");
        var k = f._value_;
        if (k) {
          if (
            "string" !== typeof k ||
            "number" !== typeof g ||
            "string" !== typeof h
          )
            throw Error("Invalid JSONP response");
          e = new Ae();
          e = F(e, 1, k);
          e = F(e, 2, g);
          e = F(e, 3, h);
          e = F(e, 4, d);
        }
        if (V(ij) && (f = f._gpid_)) {
          if (
            "string" !== typeof f ||
            "number" !== typeof g ||
            "string" !== typeof h
          )
            throw Error("Invalid JSONP response");
          var l = new Be();
          var m = h;
          k = kd(d);
          m = kd(m);
          l = F(l, 1, `${f}&${k}&${m}`);
          g = F(l, 2, g);
          h = F(g, 3, h);
          l = F(h, 4, d);
        }
      }
      e &&
        ((d = e),
        b &&
          (lw(c, "__gads", d, b),
          B(b, 5) &&
            0.01 > c.j.Math.random() &&
            ((h = kw(c, b)),
            Sf({
              domain: d.F(),
              host: c.j.location.host,
              success: h === d.j() ? "1" : "0",
            }))));
      V(ij) && l && lw(c, "__gpi", l, b);
      return Promise.resolve();
    });
  }

  function qw(a, b, c) {
    let d = void 0;
    if (0 === a.l) {
      if (kw(a, b)) var e = !0;
      else if (
        ((e = a.j),
        B(b, 5) &&
          "null" !== e.origin &&
          new Am(e.document).set("GoogleAdServingTest", "Good", void 0),
        (e = "Good" === Dm("GoogleAdServingTest", b, a.j)))
      ) {
        var f = a.j;
        B(b, 5) &&
          "null" !== f.origin &&
          new Am(f.document).remove("GoogleAdServingTest", void 0, void 0);
      }
      a.l = e ? 2 : 1;
    }
    2 === a.l && (d = pw(c, b, a));
    c._gfp_p_ = !0;
    return d;
  }

  function rw(a, b, c, d) {
    d = {
      domain: c.location.hostname,
      callback: "_gfp_s_",
      client: d,
    };
    var e = kw(b, a) || "";
    e && (d.cookie = e);
    if (V(ij)) {
      e = (a ? Dm("__gpi", a, b.j) : null) || "";
      let h;
      (e = null == (h = jw(e)) ? void 0 : h.yc) && (d.gpi_cookie = e);
      d.gpid_exp = "1";
    }
    const f = lb(
        ob(fb(gb("https://partner.googleadservices.com/gampad/cookie.js"))),
        d
      ),
      g = qw(b, a, c);
    g
      ? new Promise((h) => {
          c._gfp_s_ = (k) => {
            g(k).then(h);
          };
          ff(c.document, f);
        })
      : Promise.resolve();
  }
  var sw = (a, b, c) => {
    "_gfp_p_" in b || ((b._gfp_p_ = !1), "_gfp_a_" in b || (b._gfp_a_ = !0));
    var d = new mw(b);
    c = b.google_ad_client || c;
    var e = b._gfp_a_;
    if ("boolean" !== typeof e)
      throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
    if (e) {
      e = b._gfp_p_;
      if ("boolean" !== typeof e)
        throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
      e
        ? Promise.resolve()
        : V(Ai)
        ? ((c = `${"https://partner.googleadservices.com/gampad/cookie.js"}?domain=${
            b.location.hostname
          }&client=${c}`),
          (e = kw(d, a) || "") && (c += `&cookie=${e}`),
          (b = qw(d, a, b)) ? ow(c).then(b) : Promise.resolve())
        : rw(a, d, b, c);
    } else Promise.resolve();
    a = kw(d, a) || "";
    em || (em = new dm());
    d = em;
    cm(d, a);
    a = d.l;
    ii(mn).j(a);
    ii(kn).j(20);
    ii(kn).j(17);
  };
  var tw = (a, b) => {
    let c = 0;
    try {
      c |= a != a.top ? 512 : 0;
      const f = Math.min(a.screen.width || 0, a.screen.height || 0);
      c |= f ? (320 > f ? 8192 : 0) : 2048;
      var d;
      if ((d = a.navigator)) {
        var e = a.navigator.userAgent;
        d =
          /Firefox/.test(e) ||
          /Android 2/.test(e) ||
          /iPhone OS [34]_/.test(e) ||
          /Windows Phone (?:OS )?[67]/.test(e) ||
          /MSIE.*Windows NT/.test(e) ||
          /Windows NT.*Trident/.test(e);
      }
      c |= d ? 1048576 : 0;
    } catch (f) {
      c |= 32;
    }
    return (a = 0 | c | ys(a, b, uh, a.innerWidth > Vj ? 650 : 0, V(Vi)));
  };
  var uw = (a) => {
      let b = 0;
      try {
        (b |= a != a.top ? 512 : 0),
          (b |=
            a.navigator && /Android 2/.test(a.navigator.userAgent)
              ? 1048576
              : 0);
      } catch (c) {
        b |= 32;
      }
      return b;
    },
    vw = (a, b, c) => {
      let d = 0;
      try {
        d |= Wj(a, 2500);
        if (V(rj)) {
          const g = W(a).clientHeight;
          d |= g ? (320 > g ? -2147483648 : 0) : 1073741824;
        }
        d |= Xj(a);
        var e;
        if ((e = 0 < b)) {
          var f = wl(c, b);
          e = !(f && 1 > f.length);
        }
        e && (d |= 134217728);
      } catch (g) {
        d |= 32;
      }
      return d;
    };
  const ww = {
    [27]: 512,
    [26]: 128,
  };
  var xw = (a, b, c, d) => {
      switch (c) {
        case 1:
        case 2:
          return 0 === tw(a, c);
        case 8:
          return (
            (b =
              "on" === b.google_adtest || Sl(a.location, "google_ia_debug")
                ? -1
                : 3600),
            0 == (uw(a) | vw(a, b, d))
          );
        case 9:
          return (
            (b = !(
              "on" === b.google_adtest || Sl(a.location, "google_scr_debug")
            )),
            !xl(a, b, d)
          );
        case 30:
          return 0 == Dl(a);
        case 26:
          return 0 == ik(a);
        case 27:
          return 0 === hk(a);
        case 40:
          return !0;
        default:
          return !1;
      }
    },
    yw = (a, b, c, d) => {
      switch (c) {
        case 0:
        case 40:
        case 10:
        case 11:
          return 0;
        case 1:
        case 2:
          return tw(a, c);
        case 8:
          return (
            (b =
              "on" === b.google_adtest || Sl(a.location, "google_ia_debug")
                ? -1
                : 3600),
            uw(a) | vw(a, b, d)
          );
        case 9:
          return xl(
            a,
            !("on" === b.google_adtest || Sl(a.location, "google_scr_debug")),
            d
          );
        case 16:
          return Ko(b, a) ? 0 : 8388608;
        case 30:
          return Dl(a);
        case 26:
          return ik(a);
        case 27:
          return hk(a);
        default:
          return 32;
      }
    },
    zw = (a, b, c) => {
      const d = b.google_reactive_ad_format;
      if (!Ta(d)) return !1;
      a = Ng(a);
      if (!a || !xw(a, b, d, c)) return !1;
      b = Sj(a);
      if (bk(b, d)) return !1;
      b.adCount[d] || (b.adCount[d] = 0);
      b.adCount[d]++;
      return !0;
    },
    Bw = (a) => {
      const b = a.google_reactive_ad_format;
      return (
        !a.google_reactive_ads_config &&
        Aw(a) &&
        16 !== b &&
        10 !== b &&
        11 !== b &&
        40 !== b
      );
    },
    Cw = (a) => {
      if (!a.hash) return null;
      let b = null;
      vg(Ol, (c) => {
        !b && Sl(a, c) && (b = Pl[c]);
      });
      return b;
    },
    Ew = (a, b) => {
      const c = Sj(a).tagSpecificState[1] || null;
      null != c &&
        null == c.debugCard &&
        vg(Ql, (d) => {
          !c.debugCardRequested &&
            "number" === typeof d &&
            Ul(d, a.location) &&
            ((c.debugCardRequested = !0),
            Dw(a, b, (e) => {
              c.debugCard = e.createDebugCard(d, a);
            }));
        });
    },
    Gw = (a, b, c) => {
      if (!b) return null;
      const d = Sj(b);
      let e = 0;
      vg(Ua, (f) => {
        const g = ww[f];
        g && 0 === Fw(a, b, f, c) && (e |= g);
      });
      d.wasPlaTagProcessed && (e |= 256);
      a.google_reactive_tag_first && (e |= 1024);
      return e ? "" + e : null;
    },
    Hw = (a, b, c) => {
      const d = [];
      vg(Ua, (e) => {
        const f = Fw(b, a, e, c);
        0 !== f && d.push(e + ":" + f);
      });
      return d.join(",") || null;
    },
    Iw = (a) => {
      const b = [],
        c = {};
      vg(a, (d, e) => {
        if ((e = Qj[e]) && !c[e]) {
          c[e] = !0;
          if (d) d = 1;
          else if (!1 === d) d = 2;
          else return;
          b.push(e + ":" + d);
        }
      });
      return b.join(",");
    },
    Jw = (a) => {
      a = a.overlays;
      if (!a) return "";
      a = a.bottom;
      return "boolean" === typeof a ? (a ? "1" : "0") : "";
    },
    Fw = (a, b, c, d) => {
      if (!b) return 256;
      let e = 0;
      const f = Sj(b),
        g = bk(f, c);
      if (a.google_reactive_ad_format == c || g) e |= 64;
      let h = !1;
      vg(f.reactiveTypeDisabledByPublisher, (k, l) => {
        String(c) === l && (h = !0);
      });
      h && Cw(b.location) !== c && (e |= 128);
      return e | yw(b, a, c, d);
    },
    Kw = (a, b) => {
      if (a) {
        var c = Sj(a),
          d = {};
        vg(b, (e, f) => {
          (f = Qj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0);
        });
        vg(Ua, (e) => {
          d[Rj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0);
        });
      }
    },
    Lw = (a, b, c) => {
      b = S(b, c);
      return ur(
        1,
        P(),
        lb(
          de(a),
          ii(Hj).j(Ci.j, Ci.defaultValue)
            ? {
                bust: ii(Hj).j(Ci.j, Ci.defaultValue),
              }
            : {}
        )
      ).then(b);
    },
    Dw = (a, b, c) => {
      c = S(212, c);
      ur(3, a, de(b)).then(c);
    };
  const Mw = (a) => {
    a.adsbygoogle ||
      ((a.adsbygoogle = []),
      ff(
        a.document,
        de(vh`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)
      ));
  };
  var Nw = (a, b) => {
      L(a, "load", () => {
        Mw(a);
        a.adsbygoogle.push(b);
      });
    },
    Ow = (a) => {
      a = a.google_reactive_ad_format;
      return Ta(a) ? "" + a : null;
    },
    Aw = (a) => !!Ow(a) || null != a.google_pgb_reactive,
    Pw = (a) => {
      a = Ow(a);
      return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a;
    };
  var Qw = (a) => "number" === typeof a.google_reactive_sra_index,
    Vw = (a, b, c) => {
      const d = b.M || b.pubWin,
        e = b.G;
      e.google_reactive_plat = Hw(d, e, c);
      var f = Iw(a);
      f && (e.google_reactive_plaf = f);
      (f = Jw(a)) && (e.google_reactive_fba = f);
      Rw(a, e);
      f = Cw(b.pubWin.location);
      Sw(a, f, e);
      f
        ? ((e.fra = f), (e.google_pgb_reactive = 6))
        : (e.google_pgb_reactive = 5);
      bg() || Qh(b.pubWin.top);
      f = S(429, (h, k) => Tw(b, d, e.google_ad_client, a, h, k, c));
      const g = S(430, ma(gk, b.pubWin, 431, uh));
      Ih(b.pubWin, "rsrai", f, g);
      Sj(d).wasReactiveTagRequestSent = !0;
      Uw(b, a, c);
    };
  const Uw = (a, b, c) => {
    const d = a.G,
      e = ea(b.page_level_pubvars) ? b.page_level_pubvars : {};
    b = S(353, (g, h) => {
      var k = a.pubWin,
        l = d.google_ad_client,
        m = de(a.$.Va);
      return Gf(h.origin) ? Sv(k, l, e, g.config, c, null, m) : !1;
    });
    const f = S(353, ma(gk, a.pubWin, 353, uh));
    Ih(a.pubWin, "apcnf", b, f);
  };
  var Tw = (a, b, c, d, e, f, g) => {
      if (!Gf(f.origin)) return !1;
      f = e.data;
      if (!Array.isArray(f)) return !1;
      if (!Nl(b, 1)) return !0;
      f && bi(6, [f]);
      e = e.amaConfig;
      const h = [],
        k = [],
        l = Sj(b);
      let m = null;
      for (let n = 0; n < f.length; n++) {
        if (!f[n]) continue;
        const p = f[n],
          r = p.adFormat;
        l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
        if (!p.noCreative) {
          p.google_reactive_sra_index = n;
          if (9 === r && e) {
            p.pubVars = Object.assign(p.pubVars || {}, Ww(d, p));
            const x = new yl();
            if (sl(x, p)) {
              m = x;
              continue;
            }
          }
          h.push(p);
          k.push(r);
        }
      }
      h.length &&
        (T(
          "rasra::pm",
          {
            rt: k.join(","),
            c,
          },
          0.1
        ),
        Lw(a.$.Mc, 522, (n) => {
          Xw(h, b, c, n, d, g);
        }));
      e && Sv(b, c, d, e, g, m);
      return !0;
    },
    Ww = (a, b) => {
      const c = b.adFormat,
        d = b.adKey;
      delete b.adKey;
      const e = {};
      a = a.page_level_pubvars;
      ea(a) && Object.assign(e, a);
      e.google_ad_unit_key = d;
      e.google_reactive_sra_index = b.google_reactive_sra_index;
      30 === c && (e.google_reactive_ad_format = 30);
      e.google_pgb_reactive = e.google_pgb_reactive || 5;
      return (b.pubVars = e);
    },
    Xw = (a, b, c, d, e, f) => {
      const g = [];
      for (let h = 0; h < a.length; h++) {
        const k = a[h],
          l = k.adFormat,
          m = k.adKey,
          n = d.configProcessorForAdFormat(l);
        l && n && m
          ? ((k.pubVars = Ww(e, k)),
            delete k.google_reactive_sra_index,
            g.push(l),
            Dh(466, () => n.verifyAndProcessConfig(b, k, f)))
          : T(
              "rasra::ivc",
              {
                af: l,
                ak: m,
                c,
              },
              0.1
            );
      }
      T(
        "rasra::pr",
        {
          rt: g.join(","),
          c,
        },
        0.1
      );
    },
    Rw = (a, b) => {
      const c = [];
      let d = !1;
      vg(Qj, (e, f) => {
        let g;
        if (a.hasOwnProperty(f)) {
          const h = a[f];
          ea(h) && h.google_ad_channel && (g = String(h.google_ad_channel));
        }
        f = Qj[f] - 1;
        (c[f] && "+" != c[f]) ||
          ((c[f] = g ? g.replace(/,/g, "+") : "+"), (d = d || g));
      });
      d && (b.google_reactive_sra_channels = c.join(","));
    },
    Sw = (a, b, c) => {
      const d = a.page_level_pubvars;
      !c.google_adtest &&
        ("on" == a.google_adtest || (d && "on" == d.google_adtest) || b) &&
        (c.google_adtest = "on");
    };
  Jc("script");
  /* 
     
     Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
     
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
     
          http://www.apache.org/licenses/LICENSE-2.0 
     
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS-IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
  var Yw = {
    "image-top": 0,
    "image-middle": 1,
    "image-side": 2,
    "text-only": 3,
    "in-article": 4,
  };

  function Zw(a, b) {
    if (!Ko(b, a)) return () => {};
    a = $w(b, a);
    if (!a) return () => {};
    const c = um();
    b = Xa(b);
    const d = {
      cc: a,
      G: b,
      offsetWidth: a.offsetWidth,
    };
    c.push(d);
    return () => La(c, d);
  }

  function $w(a, b) {
    a = b.document.getElementById(a.google_async_iframe_id);
    if (!a) return null;
    for (a = a.parentElement; a && !Jg.test(a.className); ) a = a.parentElement;
    return a;
  }

  function ax(a, b) {
    for (let g = 0; g < a.childNodes.length; g++) {
      const h = {},
        k = a.childNodes[g];
      var c = k.style,
        d = h,
        e = ["width", "height"];
      for (let l = 0; l < e.length; l++) {
        const m = "google_ad_" + e[l];
        if (!d.hasOwnProperty(m)) {
          var f = uf(c[e[l]]);
          f = null === f ? null : Math.round(f);
          null != f && (d[m] = f);
        }
      }
      if (
        h.google_ad_width == b.google_ad_width &&
        h.google_ad_height == b.google_ad_height
      )
        return k;
    }
    return null;
  }

  function bx(a, b) {
    a.style.display = b ? "inline-block" : "none";
    const c = a.parentElement;
    b
      ? (c.dataset.adStatus = a.dataset.adStatus)
      : ((a.dataset.adStatus = c.dataset.adStatus), delete c.dataset.adStatus);
  }

  function cx(a, b) {
    const c = b.innerHeight >= b.innerWidth ? 0 : 90;
    if (a.j != c) {
      a.j = c;
      a = um();
      for (const d of a)
        if (
          d.cc.offsetWidth != d.offsetWidth ||
          d.G.google_full_width_responsive_allowed
        )
          (d.offsetWidth = d.cc.offsetWidth),
            Dh(467, () => {
              var e = d.cc,
                f = d.G;
              const g = ax(e, f);
              f.google_full_width_responsive_allowed &&
                ((e.style.marginLeft = f.gfwroml || ""),
                (e.style.marginRight = f.gfwromr || ""),
                (e.style.height = f.gfwroh ? f.gfwroh + "px" : ""),
                (e.style.width = f.gfwrow ? f.gfwrow + "px" : ""),
                (e.style.zIndex = f.gfwroz || ""),
                delete f.google_full_width_responsive_allowed);
              delete f.google_ad_format;
              delete f.google_ad_width;
              delete f.google_ad_height;
              delete f.google_content_recommendation_ui_type;
              delete f.google_content_recommendation_rows_num;
              delete f.google_content_recommendation_columns_num;
              P().google_spfd(e, f, b);
              const h = ax(e, f);
              !h && g && 1 == e.childNodes.length
                ? (bx(g, !1),
                  V(ej)
                    ? (f.rss = 1)
                    : ((f.google_reactive_ad_format = 16),
                      (f.google_ad_section = "responsive_resize")),
                  (e.dataset.adsbygoogleStatus = "reserved"),
                  (e.className += " adsbygoogle-noablate"),
                  Mw(b),
                  b.adsbygoogle.push({
                    element: e,
                    params: f,
                  }))
                : h && g
                ? h != g && (bx(g, !1), bx(h, !0))
                : T("auto_size_refresh", {
                    context: "showOrHideElm",
                    url: b.location.href,
                    nodes: e.childNodes.length,
                  });
            });
    }
  }
  class dx {
    constructor() {
      this.j = null;
    }
    init(a) {
      const b = nm();
      X(b, 27, !1) ||
        ((b.S[qm(27)] = !0),
        (this.j = a.innerHeight >= a.innerWidth ? 0 : 90),
        L(a, "resize", () => cx(this, a)));
    }
  }
  var ex = class {
    constructor(a, b, c) {
      this.B = a;
      this.A = b;
      this.j = c;
      this.l = null;
      this.C = this.D = 0;
    }
    F() {
      10 <= ++this.D && t.clearInterval(this.l);
      var a = No(this.B, this.A);
      a = Oo(this.B, this.A, a);
      const b = Jo(this.A, this.B);
      (null != b && 0 === b.x) || t.clearInterval(this.l);
      a &&
        (this.C++,
        T(
          "rspv:al",
          {
            aligns: this.C,
            attempt: this.D,
            client: this.j.google_ad_client,
            eoffs: null != b ? b.x : null,
            eids: pn(this.j),
            slot: this.j.google_ad_slot,
            url: this.j.google_page_url,
          },
          0.01
        ));
    }
  };
  var gx = (a) => {
      const b = {};
      b.dtd = fx(new Date().getTime(), rn);
      return Ag(b, a);
    },
    fx = (a, b, c = 1e5) => {
      a -= b;
      return a >= c ? "M" : 0 <= a ? a : "-M";
    };
  var ix = (a, b, c) => {
    let d;
    const e = (
      null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")
    )
      ? b.parentElement
      : b;
    c.addEventListener("load", () => hx(e));
    return Ih(a, "adpnt", (f, g) => {
      var h;
      if (ck(g, c.contentWindow)) {
        f = fk(f).qid;
        try {
          c.setAttribute("data-google-query-id", f);
          var k;
          null !== (h = a.googletag) && void 0 !== h ? h : (a.googletag = {});
          const l =
            null !== (k = a.googletag.queryIds) && void 0 !== k ? k : [];
          l.push(f);
          500 < l.length && l.shift();
          a.googletag.queryIds = l;
        } catch (l) {}
        e.dataset.adStatus &&
          T("adsense_late_fill", {
            status: e.dataset.adStatus,
          });
        e.dataset.adStatus = "filled";
        h = !0;
      } else h = !1;
      return h;
    });
  };

  function hx(a) {
    setTimeout(() => {
      "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled");
    }, 1e3);
  }

  function jx(a, b, c) {
    try {
      if (!Gf(c.origin)) return;
    } catch (f) {
      return;
    }
    const d = b.msg_type;
    let e;
    "string" === typeof d &&
      (e = a.$a[d]) &&
      qh(a.la, 168, () => {
        e.call(a, b, c);
      });
  }
  class kx extends Em {
    constructor(a) {
      var b = uh;
      super();
      this.j = a;
      this.la = zh;
      this.$c = b;
      this.$a = {};
      this.Vc = rh(this.la, 168, (c, d) => void jx(this, c, d));
      this.ud = rh(this.la, 169, (c, d) =>
        gk(this.j, "ras::xsf", this.$c, c, d)
      );
      this.ma = [];
      this.O(this.$a);
      this.ma.push(Hh(this.j, "sth", this.Vc, this.ud));
    }
    B() {
      for (const a of this.ma) a();
      this.ma.length = 0;
      super.B();
    }
  }
  class lx extends kx {
    constructor(a) {
      super(a);
      this.j = a;
    }
  }
  var mx = class extends lx {
    constructor(a, b) {
      super(a);
      this.l = b;
      this.A = () => {};
      L(this.l, "load", this.A);
    }
    B() {
      this.l && le(this.l, "load", this.A);
      super.B();
      this.l = null;
    }
    O(a) {
      a["adsense-labs"] = (b) => {
        if ((b = fk(b).settings))
          try {
            var c = new ze(JSON.parse(b));
            if (A(c, 1)) {
              var d = this.j,
                e = z(c, 1) || "";
              if (V(xi)) {
                var f = Sm({
                  X: d,
                  Vb: Um(),
                });
                if (null != f.j) {
                  Xm("ok");
                  var g = Wm(f.j.value);
                } else Xm(f.l.message), (g = {});
              } else g = Wm(d.localStorage);
              null !== c && (g[e] = c.toJSON());
              try {
                d.localStorage.setItem(
                  "google_adsense_settings",
                  JSON.stringify(g)
                );
              } catch (h) {}
            }
          } catch (h) {}
      };
    }
  };

  function nx(a) {
    a.A = a.D;
    a.H.style.transition = "height 500ms";
    a.C.style.transition = "height 500ms";
    a.F.style.transition = "height 500ms";
    a.l.style.transition = "height 500ms";
    ox(a);
  }

  function px(a, b) {
    (a.l.contentWindow || a.l.contentWindow).postMessage(
      JSON.stringify({
        ["msg_type"]: "expand-on-scroll-result",
        ["eos_success"]: !0,
        ["eos_amount"]: b,
        googMsgType: "sth",
      }),
      "*"
    );
  }

  function ox(a) {
    const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
    a.l.style.clip = b;
    a.F.style.clip = b;
    a.l.setAttribute("height", a.A);
    a.l.style.height = a.A + "px";
    a.F.setAttribute("height", a.A);
    a.F.style.height = a.A + "px";
    a.C.style.height = a.A + "px";
    a.H.style.height = a.A + "px";
  }

  function qx(a, b) {
    b = sf(b.r_nh);
    a.D = null == b ? 0 : b;
    if (0 >= a.D) return "1";
    a.J = og(a.H).y;
    a.I = dk(a.j);
    if (a.J + a.A < a.I) return "2";
    if (a.J > Yj(a.j) - a.j.innerHeight) return "3";
    b = a.I;
    a.l.setAttribute("height", a.D);
    a.l.style.height = a.D + "px";
    a.F.style.overflow = "hidden";
    a.H.style.position = "relative";
    a.H.style.transition = "height 100ms";
    a.C.style.transition = "height 100ms";
    a.F.style.transition = "height 100ms";
    a.l.style.transition = "height 100ms";
    b = Math.min(b + a.j.innerHeight - a.J, a.A);
    ig(a.C, {
      position: "relative",
      top: "auto",
      bottom: "auto",
    });
    b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
    ig(a.l, {
      clip: b,
    });
    ig(a.F, {
      clip: b,
    });
    return "0";
  }

  function rx(a, b = {}) {
    a.ca && (b.eid = a.ca);
    b.qid = a.qa;
    T("eoscrl", b, sn(String(a.Ya)));
  }
  class sx extends lx {
    constructor(a, b) {
      super(a.M);
      this.l = b;
      this.F = a.Y.firstElementChild;
      this.C = a.Y;
      this.H =
        this.C.parentElement &&
        this.C.parentElement.classList.contains("adsbygoogle")
          ? this.C.parentElement
          : this.C;
      this.A = parseInt(this.C.style.height, 10);
      this.ca = null;
      this.bb = this.Za = !1;
      this.qa = "";
      this.ha = this.I = this.D = 0;
      this.bd = this.A / 5;
      this.J = og(this.H).y;
      this.Ya = null;
      this.ad = Ca(
        S(651, () => {
          this.J = og(this.H).y;
          var c = this.I;
          this.I = dk(this.j);
          this.A < this.D
            ? ((c = this.I - c),
              0 < c &&
                ((this.ha += c),
                this.ha >= this.bd
                  ? (nx(this), px(this, this.D))
                  : ((this.A = Math.min(this.D, this.A + c)),
                    px(this, c),
                    ox(this))))
            : le(this.j, "scroll", this.K);
        }),
        this
      );
      this.K = () => {
        var c = this.ad;
        M.requestAnimationFrame ? M.requestAnimationFrame(c) : c();
      };
    }
    O(a) {
      a["expand-on-scroll"] = (b, c) => {
        Pg(c, this.l) &&
          ((b = fk(b)),
          (this.ca = b.i_expid),
          (this.qa = b.qid),
          (this.Ya = b.gen204_fraction),
          this.Za ||
            ((this.Za = !0),
            (b = qx(this, b)),
            "0" === b && L(this.j, "scroll", this.K, ie),
            c.source.postMessage(
              JSON.stringify({
                ["msg_type"]: "expand-on-scroll-result",
                ["eos_success"]: "0" === b,
                googMsgType: "sth",
              }),
              "*"
            ),
            rx(this, {
              err: b,
            })));
      };
      a["expand-on-scroll-force-expand"] = (b, c) => {
        Pg(c, this.l) &&
          !this.bb &&
          ((this.bb = !0), nx(this), le(this.j, "scroll", this.K));
      };
    }
    B() {
      this.K && le(this.j, "scroll", this.K, ie);
      super.B();
    }
  }

  function tx(a) {
    const b = a.I.getBoundingClientRect(),
      c = 0 > b.top + b.height;
    return !(b.top > a.l.innerHeight) && !c;
  }
  class ux extends Em {
    constructor(a, b, c) {
      super();
      this.l = a;
      this.C = b;
      this.I = c;
      this.D = 0;
      this.A = tx(this);
      this.H = Ba(this.F, this);
      this.j = S(433, () => {
        var d = this.H;
        M.requestAnimationFrame ? M.requestAnimationFrame(d) : d();
      });
      L(this.l, "scroll", this.j, ie);
    }
    F() {
      const a = tx(this);
      if (a && !this.A) {
        var b = {
          rr: "vis-bcr",
        };
        const c = this.C.contentWindow;
        c &&
          (Nh(c, "ig", b, "*", 2),
          10 <= ++this.D && this.j && le(this.l, "scroll", this.j, ie));
      }
      this.A = a;
    }
  }
  class vx extends lx {
    constructor(a, b) {
      a.M && super(a.M);
      this.l = b;
      this.C = a.Y;
      this.A = a.W;
    }
    O(a) {
      a.interscroller = (b, c) => {
        if (
          Pg(c, this.l) &&
          ((c = fk(b)),
          (b = c.i_h),
          (c = c.i_f),
          null != b && "" !== b && null != c && "" !== c)
        ) {
          this.C.style.position = "relative";
          O(this.A, {
            position: "absolute",
            clip: "rect(0, auto, auto, 0)",
          });
          var d = this.A.firstElementChild;
          d &&
            d.id == this.l.id &&
            O(d, {
              position: "fixed",
            });
          d = sf(mg(this.A, "zIndex").toString(), 0) + 1;
          b = Nf(this.l.id + "_header", b);
          O(b, {
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            "z-index": d,
          });
          this.C.insertAdjacentElement("afterbegin", b);
          b = Nf(this.l.id + "_footer", c);
          O(b, {
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
            "z-index": d,
          });
          this.C.insertAdjacentElement("beforeend", b);
        }
      };
    }
  }
  const wx = {
    display: "block",
    left: "auto",
    position: "fixed",
    bottom: "0px",
  };

  function xx(a, b) {
    if (!a.qa) return "1";
    b = sf(b.r_nh);
    a.D = null == b ? 0 : b;
    if (0 >= a.D) return "2";
    a.C = og(a.A).y;
    b = a.j.innerHeight;
    if (a.C + a.ca < b) return "4";
    if (a.C > Yj(a.j) - b) return "3";
    a.A.setAttribute("height", a.D);
    a.A.style.height = a.D + "px";
    ig(a.l, wx);
    a.l.style.height = a.D + "px";
    a.K.style.position = "relative";
    a.ha();
    return "0";
  }

  function yx(a, b = {}) {
    a.F && (b.eid = a.F);
    b.qid = a.H;
    T("pscrl", b, sn(String(a.I)));
  }
  class zx extends lx {
    constructor(a, b) {
      a.M && super(a.M);
      this.A = b;
      this.l = a.Y;
      this.K = this.l.parentElement;
      this.ca = parseInt(this.l.style.height, 10);
      this.F = null;
      this.J = !1;
      this.H = "";
      this.D = 0;
      this.C = og(this.A).y;
      this.I = null;
      this.qa =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        t.msRequestAnimationFrame;
      this.ha = S(636, () => {
        this.qa.call(this.j, this.ha);
        var c = this.j.innerHeight,
          d = dk(this.j);
        this.C = og(this.K).y;
        d + c > this.C
          ? ((d = d + c - this.C),
            (c = Math.min(d, this.ca)),
            (d = this.D - d),
            (d = Math.max(0, d)),
            0 >= d
              ? ig(this.l, {
                  position: "absolute",
                  top: "0px",
                  bottom: "auto",
                })
              : ig(this.l, {
                  position: "fixed",
                  top: "auto",
                  bottom: "0px",
                }),
            ig(this.l, {
              clip:
                "rect(" +
                d +
                "px, " +
                this.A.width +
                "px, " +
                (d + c) +
                "px, 0px)",
            }))
          : ig(this.l, {
              clip: "rect(3000px, " + this.A.width + "px, 0px, 0px)",
            });
      });
    }
    O(a) {
      a["parallax-scroll"] = (b, c) => {
        b = fk(b);
        this.F = b.i_expid;
        this.H = b.qid;
        this.I = b.gen204_fraction;
        !this.J &&
          Pg(c, this.A) &&
          ((this.J = !0),
          (b = xx(this, b)),
          c.source.postMessage(
            JSON.stringify({
              ["msg_type"]: "parallax-scroll-result",
              ["ps_success"]: "0" === b,
              googMsgType: "sth",
            }),
            "*"
          ),
          yx(this, {
            err: b,
          }));
      };
    }
  }

  function Ax(a, b) {
    b = b && b[0];
    if (!b) return null;
    b = b.target;
    const c = b.getBoundingClientRect(),
      d = Ne(a.j.L() || window);
    if (
      0 >= c.bottom ||
      c.bottom > d.height ||
      0 >= c.right ||
      c.left >= d.width
    )
      return null;
    var e = Bx(
        a,
        b,
        c,
        a.j.j.elementsFromPoint(
          Fe(c.left + c.width / 2, c.left, c.right - 1),
          Fe(c.bottom - 1 - 2, c.top, c.bottom - 1)
        ),
        1,
        []
      ),
      f = Bx(
        a,
        b,
        c,
        a.j.j.elementsFromPoint(
          Fe(c.left + c.width / 2, c.left, c.right - 1),
          Fe(c.top + 2, c.top, c.bottom - 1)
        ),
        2,
        e.ra
      ),
      g = Bx(
        a,
        b,
        c,
        a.j.j.elementsFromPoint(
          Fe(c.left + 2, c.left, c.right - 1),
          Fe(c.top + c.height / 2, c.top, c.bottom - 1)
        ),
        3,
        [...e.ra, ...f.ra]
      );
    const h = Bx(
      a,
      b,
      c,
      a.j.j.elementsFromPoint(
        Fe(c.right - 1 - 2, c.left, c.right - 1),
        Fe(c.top + c.height / 2, c.top, c.bottom - 1)
      ),
      4,
      [...e.ra, ...f.ra, ...g.ra]
    );
    var k = Cx(a, b, c),
      l = (n) =>
        Ka(a.A, n.overlapType) &&
        Ka(a.B, n.overlapDepth) &&
        Ka(a.l, n.overlapDetectionPoint);
    e = Fa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
    l = Fa(k, l);
    k = [...e, ...l];
    f = -2 > c.left || c.right > d.width + 2;
    f = 0 < k.length || f;
    g = Oe(a.j.j);
    const m = new Wf(c.left, c.top, c.width, c.height);
    e = [
      ...Ga(
        e,
        (n) =>
          new Wf(
            n.elementRect.left,
            n.elementRect.top,
            n.elementRect.width,
            n.elementRect.height
          )
      ),
      ...Qa(Ga(l, (n) => Yf(m, n.elementRect))),
      ...Fa(
        Yf(m, new Wf(0, 0, d.width, d.height)),
        (n) => 0 <= n.top && n.top + n.height <= d.height
      ),
    ];
    return {
      entries: k,
      isOverlappingOrOutsideViewport: f,
      scrollPosition: {
        scrollX: g.x,
        scrollY: g.y,
      },
      target: b,
      targetRect: c,
      viewportSize: {
        width: d.width,
        height: d.height,
      },
      overlappedArea: 20 > e.length ? Dx(m, e) : Ex(c, e),
    };
  }

  function Fx(a, b) {
    const c = a.j.L(),
      d = a.j.j;
    return new Promise((e, f) => {
      const g = c.IntersectionObserver;
      if (g)
        if (d.elementsFromPoint)
          if (d.createNodeIterator)
            if (d.createRange)
              if (c.Range.prototype.getBoundingClientRect) {
                var h = new g((k) => {
                  const l = new mh(),
                    m = lh(l, () => Ax(a, k));
                  m &&
                    (l.events.length &&
                      (m.executionTime = Math.round(
                        Number(l.events[0].duration)
                      )),
                    h.disconnect(),
                    e(m));
                }, Gx);
                h.observe(b);
              } else f(Error("5"));
            else f(Error("4"));
          else f(Error("3"));
        else f(Error("2"));
      else f(Error("1"));
    });
  }

  function Bx(a, b, c, d, e, f) {
    if (0 === c.width || 0 === c.height)
      return {
        entries: [],
        ra: [],
      };
    const g = [],
      h = [];
    for (let n = 0; n < d.length; n++) {
      const p = d[n];
      if (p === b) continue;
      if (Ka(f, p)) continue;
      h.push(p);
      const r = p.getBoundingClientRect();
      if (a.j.contains(p, b)) {
        g.push(Hx(a, c, p, r, 1, e));
        continue;
      }
      if (a.j.contains(b, p)) {
        g.push(Hx(a, c, p, r, 2, e));
        continue;
      }
      a: {
        var k = a;
        var l = b,
          m = p;
        const D = k.j.Id(l, m);
        if (!D) {
          k = null;
          break a;
        }
        const { suspectAncestor: w, ya: E } = Ix(k, l, D, m) || {},
          { suspectAncestor: C, ya: I } = Ix(k, m, D, l) || {};
        k =
          w && E && C && I
            ? E <= I
              ? {
                  suspectAncestor: w,
                  overlapType: Jx[E],
                }
              : {
                  suspectAncestor: C,
                  overlapType: Kx[I],
                }
            : w && E
            ? {
                suspectAncestor: w,
                overlapType: Jx[E],
              }
            : C && I
            ? {
                suspectAncestor: C,
                overlapType: Kx[I],
              }
            : null;
      }
      const { suspectAncestor: x, overlapType: v } = k || {};
      x && v ? g.push(Hx(a, c, p, r, v, e, x)) : g.push(Hx(a, c, p, r, 9, e));
    }
    return {
      entries: g,
      ra: h,
    };
  }

  function Cx(a, b, c) {
    const d = [];
    for (b = b.parentElement; b; b = b.parentElement) {
      const f = b.getBoundingClientRect();
      if (f) {
        var e = gf(b, a.j.L());
        e &&
          "visible" !== e.overflow &&
          ("auto" !== e.overflowY &&
          "scroll" !== e.overflowY &&
          c.bottom > f.bottom + 2
            ? d.push(Hx(a, c, b, f, 5, 1))
            : ((e = "auto" === e.overflowX || "scroll" === e.overflowX),
              !e && c.left < f.left - 2
                ? d.push(Hx(a, c, b, f, 5, 3))
                : !e && c.right > f.right + 2 && d.push(Hx(a, c, b, f, 5, 4))));
      }
    }
    return d;
  }

  function Dx(a, b) {
    if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
    let c = 0;
    for (let d = 1; d < 1 << b.length; d++) {
      let e = a,
        f = 0;
      for (
        let g = 0;
        g < b.length && (!(d & (1 << g)) || (f++, (e = Xf(e, b[g])), e));
        g++
      );
      e &&
        (c =
          1 === f % 2
            ? c + (e.width + 1) * (e.height + 1)
            : c - (e.width + 1) * (e.height + 1));
    }
    return c / ((a.width + 1) * (a.height + 1));
  }

  function Ex(a, b) {
    if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
    let c = 0;
    for (let d = a.left; d <= a.right; d++)
      for (let e = a.top; e <= a.bottom; e++)
        for (let f = 0; f < b.length; f++)
          if (
            d >= b[f].left &&
            d <= b[f].left + b[f].width &&
            e >= b[f].top &&
            e <= b[f].top + b[f].height
          ) {
            c++;
            break;
          }
    return c / ((a.width + 1) * (a.height + 1));
  }

  function Hx(a, b, c, d, e, f, g) {
    const h = {
      element: c,
      elementRect: d,
      overlapType: e,
      overlapDetectionPoint: f,
    };
    if (Ka(a.A, e) && Ka(a.l, f)) {
      b = new Tf(b.top, b.right - 1, b.bottom - 1, b.left);
      if ((a = Lx(a, c)) && Vf(b, a)) c = 4;
      else {
        a = Mx(c, d);
        if (Oc) {
          e = sg(c, "paddingLeft");
          f = sg(c, "paddingRight");
          var k = sg(c, "paddingTop"),
            l = sg(c, "paddingBottom");
          e = new Tf(k, f, l, e);
        } else
          (e = lg(c, "paddingLeft")),
            (f = lg(c, "paddingRight")),
            (k = lg(c, "paddingTop")),
            (l = lg(c, "paddingBottom")),
            (e = new Tf(
              parseFloat(k),
              parseFloat(f),
              parseFloat(l),
              parseFloat(e)
            ));
        Vf(
          b,
          new Tf(
            a.top + e.top,
            a.right - e.right,
            a.bottom - e.bottom,
            a.left + e.left
          )
        )
          ? (c = 3)
          : ((c = Mx(c, d)), (c = Vf(b, c) ? 2 : 1));
      }
      h.overlapDepth = c;
    }
    g && (h.suspectAncestor = g);
    return h;
  }

  function Ix(a, b, c, d) {
    const e = [];
    for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
    c = a.j.L();
    for (f = 0; f < e.length; f++) {
      const h = e[f];
      var g = gf(h, c);
      if (g) {
        if ("fixed" === g.position)
          return {
            suspectAncestor: h,
            ya: 1,
          };
        if ("sticky" === g.position && a.j.contains(h.parentElement, d))
          return {
            suspectAncestor: h,
            ya: 2,
          };
        if ("absolute" === g.position)
          return {
            suspectAncestor: h,
            ya: 3,
          };
        if ("none" !== g.cssFloat) {
          g = h === e[0];
          const k = Nx(a, e.slice(0, f), h);
          if (g || k)
            return {
              suspectAncestor: h,
              ya: 4,
            };
        }
      }
    }
    return (a = Nx(a, e, b))
      ? {
          suspectAncestor: a,
          ya: 5,
        }
      : null;
  }

  function Nx(a, b, c) {
    const d = c.getBoundingClientRect();
    if (!d) return null;
    for (let e = 0; e < b.length; e++) {
      const f = b[e];
      if (!a.j.contains(f, c)) continue;
      const g = f.getBoundingClientRect();
      if (!g) continue;
      const h = gf(f, a.j.L());
      if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f;
    }
    return null;
  }

  function Lx(a, b) {
    var c = a.j.j;
    a = c.createRange();
    if (!a) return null;
    c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
      acceptNode: (d) =>
        /^[\s\xa0]*$/.test(d.nodeValue)
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT,
    });
    for (b = c.nextNode(); c.nextNode(); );
    c = c.previousNode();
    if (!b || !c) return null;
    a.setStartBefore(b);
    a.setEndAfter(c);
    a = a.getBoundingClientRect();
    return 0 === a.width || 0 === a.height
      ? null
      : new Tf(a.top, a.right, a.bottom, a.left);
  }

  function Mx(a, b) {
    if (!Oc || 9 <= Number(bd)) {
      var c = lg(a, "borderLeftWidth");
      d = lg(a, "borderRightWidth");
      e = lg(a, "borderTopWidth");
      a = lg(a, "borderBottomWidth");
      c = new Tf(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
    } else {
      c = ug(a, "borderLeft");
      var d = ug(a, "borderRight"),
        e = ug(a, "borderTop");
      a = ug(a, "borderBottom");
      c = new Tf(e, d, a, c);
    }
    return new Tf(
      b.top + c.top,
      b.right - 1 - c.right,
      b.bottom - 1 - c.bottom,
      b.left + c.left
    );
  }
  class Ox {
    constructor(a, b = Px) {
      this.j = Ke(a);
      this.A = [5, 8, 9];
      this.B = [3, 4];
      this.l = b;
    }
  }
  const Jx = {
      [1]: 3,
      [4]: 10,
      [3]: 12,
      [2]: 4,
      [5]: 5,
    },
    Kx = {
      [1]: 6,
      [4]: 11,
      [3]: 13,
      [2]: 7,
      [5]: 8,
    };
  Fa(
    mf({
      cg: 1,
      dg: 2,
      Fh: 3,
      Gh: 4,
      Ih: 5,
      Zf: 6,
      $f: 7,
      bg: 8,
      Yg: 9,
      Hh: 10,
      ag: 11,
      Eh: 12,
      Yf: 13,
    }),
    (a) => !Ka([1, 2], a)
  );
  mf({
    sf: 1,
    Zg: 2,
    Df: 3,
    Jh: 4,
  });
  const Px = mf({
      tf: 1,
      Mh: 2,
      Mg: 3,
      uh: 4,
    }),
    Gx = {
      threshold: [0, 0.25, 0.5, 0.75, 0.95, 0.96, 0.97, 0.98, 0.99, 1],
    };

  function Qx(a, b) {
    Array.isArray(b) || (b = [b]);
    b = b.map(function (c) {
      return "string" === typeof c
        ? c
        : c.ac + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
    });
    ig(a, "transition", b.join(","));
  }
  var Rx = za(function () {
    if (Oc) return Zc("10.0");
    var a = Re(document, "DIV"),
      b = Sc ? "-webkit" : Rc ? "-moz" : Oc ? "-ms" : null,
      c = {
        transition: "opacity 1s linear",
      };
    b && (c[b + "-transition"] = "opacity 1s linear");
    c = {
      style: c,
    };
    oc("div");
    var d = void 0,
      e = null;
    b = "<div" + uc(c);
    null == d ? (d = []) : Array.isArray(d) || (d = [d]);
    !0 === $a.div
      ? (b += ">")
      : ((e = tc(d)), (b += ">" + kc(e).toString() + "</div>"), (e = e.Aa()));
    (c = c && c.dir) && (/^(ltr|rtl|auto)$/i.test(c) ? (e = 0) : (e = null));
    b = nc(b, e);
    yc(a, b);
    a = a.firstChild;
    b = a.style[Hc("transition")];
    return (
      "" != ("undefined" !== typeof b ? b : a.style[jg(a, "transition")] || "")
    );
  });

  function Sx(a, b, c) {
    0 > a.l[b].indexOf(c) && (a.l[b] += c);
  }

  function Tx(a, b) {
    0 <= a.j.indexOf(b) || (a.j = b + a.j);
  }

  function Ux(a, b) {
    0 > a.A.indexOf(b) && (a.A = b + a.A);
  }

  function Vx(a, b, c, d) {
    return "" != a.A || b
      ? null
      : "" == a.j.replace(Wx, "")
      ? (null != c && a.l[0]) || (null != d && a.l[1])
        ? !1
        : !0
      : !1;
  }

  function Xx(a) {
    var b = Vx(a, "", null, 0);
    if (null === b) return "XS";
    b = b ? "C" : "N";
    a = a.j;
    return 0 <= a.indexOf("a")
      ? b + "A"
      : 0 <= a.indexOf("f")
      ? b + "F"
      : b + "S";
  }
  var Yx = class {
    constructor(a, b) {
      this.l = ["", ""];
      this.j = a || "";
      this.A = b || "";
    }
    toString() {
      return [this.l[0], this.l[1], this.j, this.A].join("|");
    }
  };

  function Zx(a) {
    let b = a.ca;
    a.J = function () {};
    $x(a, a.I, b);
    let c = a.I.parentElement;
    if (!c) return a.j;
    let d = !0,
      e = null;
    for (; c; ) {
      try {
        e = /^head|html$/i.test(c.nodeName) ? null : gf(c, b);
      } catch (g) {
        Ux(a.j, "c");
      }
      const f = ay(a, b, c, e);
      c.classList.contains("adsbygoogle") &&
        e &&
        (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) &&
        (a.Z = !0);
      if (d && !f && by(e)) {
        Tx(a.j, "l");
        a.K = c;
        break;
      }
      d = d && f;
      if (e && cy(a, e)) break;
      c = c.parentElement;
      if (!c) {
        if (b === a.$a) break;
        try {
          if (((c = b.frameElement), (b = b.parent), !cf(b))) {
            Tx(a.j, "c");
            break;
          }
        } catch (g) {
          Tx(a.j, "c");
          break;
        }
      }
    }
    a.H && a.B && dy(a);
    return a.j;
  }

  function ey(a) {
    function b() {
      fy(c, f, g);
      if (h && !k && !g) {
        const l = function (m) {
          for (let n = 0; n < m.length; n++) ig(h, m[n], "0px");
        };
        l(gy);
        l(hy);
      }
    }
    const c = a.I;
    c.style.overflow = a.Za ? "visible" : "hidden";
    a.H &&
      (a.K
        ? (Qx(c, iy), Qx(a.K, iy))
        : Qx(
            c,
            "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"
          ));
    null !== a.R && (c.style.opacity = a.R);
    const d = null != a.F && null != a.A && (a.ma || a.A > a.F) ? a.A : null,
      e = null != a.D && null != a.l && (a.ma || a.l > a.D) ? a.l : null;
    if (a.O) {
      const l = a.O.length;
      for (let m = 0; m < l; m++) fy(a.O[m], d, e);
    }
    const f = a.A,
      g = a.l,
      h = a.K,
      k = a.Z;
    a.H ? t.setTimeout(b, 1e3) : b();
  }

  function jy(a) {
    if ((a.B && !a.qa) || (null == a.A && null == a.l && null == a.R && a.B))
      return a.j;
    var b = a.B;
    a.B = !1;
    Zx(a);
    a.B = b;
    if (!b || (null != a.la && !Vx(a.j, a.la, a.A, a.l))) return a.j;
    0 <= a.j.j.indexOf("n") && ((a.F = null), (a.D = null));
    if ((null == a.F && null !== a.A) || (null == a.D && null !== a.l))
      a.H = !1;
    (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && ((a.A = 0), (a.l = 0));
    b = a.j;
    b.l[0] = "";
    b.l[1] = "";
    b.j = "";
    b.A = "";
    ey(a);
    return Zx(a);
  }

  function cy(a, b) {
    let c = !1;
    "none" == b.display && (Tx(a.j, "n"), a.B && (c = !0));
    ("hidden" != b.visibility && "collapse" != b.visibility) || Tx(a.j, "v");
    "hidden" == b.overflow && Tx(a.j, "o");
    "absolute" == b.position
      ? (Tx(a.j, "a"), (c = !0))
      : "fixed" == b.position && (Tx(a.j, "f"), (c = !0));
    return c;
  }

  function $x(a, b, c) {
    let d = 0;
    if (!b || !b.parentElement) return !0;
    let e = !1,
      f = 0;
    const g = b.parentElement.childNodes;
    for (let k = 0; k < g.length; k++) {
      var h = g[k];
      h == b ? (e = !0) : ((h = ky(a, h, c)), (d |= h), e && (f |= h));
    }
    f & 1 && (d & 2 && Sx(a.j, 0, "o"), d & 4 && Sx(a.j, 1, "o"));
    return !(d & 1);
  }

  function ay(a, b, c, d) {
    let e = null;
    try {
      e = c.style;
    } catch (D) {
      Ux(a.j, "s");
    }
    var f = c.getAttribute("width"),
      g = sf(f),
      h = c.getAttribute("height"),
      k = sf(h),
      l = (d && /^block$/.test(d.display)) || (e && /^block$/.test(e.display));
    const m = $x(a, c, b);
    var n = d && d.width,
      p = d && d.height,
      r = e && e.width,
      x = e && e.height,
      v = uf(n) == a.F && uf(p) == a.D;
    n = v ? n : r;
    x = v ? p : x;
    r = uf(n);
    v = uf(x);
    g = null !== a.F && ((null !== r && a.F >= r) || (null !== g && a.F >= g));
    v = null !== a.D && ((null !== v && a.D >= v) || (null !== k && a.D >= k));
    k = !m && by(d);
    v =
      m ||
      v ||
      k ||
      !(f || n || (d && (!ly(String(d.minWidth)) || !my(String(d.maxWidth)))));
    l =
      m ||
      g ||
      k ||
      l ||
      !(
        h ||
        x ||
        (d && (!ly(String(d.minHeight)) || !my(String(d.maxHeight))))
      );
    ny(a, 0, v, c, "width", f, a.F, a.A);
    oy(a, 0, "d", v, e, d, "width", n, a.F, a.A);
    oy(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.F, a.A);
    oy(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
    if (a.bb) {
      c = /^html|body$/i.test(c.nodeName);
      p = uf(p);
      h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
      (f = null != a.l && d && p && Math.round(p) !== a.l) &&
        !(f = !h) &&
        ((f = p),
        (f =
          (V(Ui) || (b.location && "#gffwroe2ettq" == b.location.hash)) &&
          Math.round(f) < 0.8 * Math.round(b.innerHeight)));
      f = f && "100%" !== d.minHeight;
      if ((c = a.B && !c && f))
        c = !(
          a.Ya &&
          d &&
          (V(Ti) || (b.location && "#gffwroe2etoq" == b.location.hash)) &&
          Math.round(uf(d.minHeight)) === Math.round(b.innerHeight)
        );
      c &&
        (e.setProperty("height", "auto", "important"),
        d &&
          !ly(String(d.minHeight)) &&
          e.setProperty("min-height", "0px", "important"),
        d &&
          !my(String(d.maxHeight)) &&
          a.l &&
          Math.round(p) < a.l &&
          e.setProperty("max-height", "none", "important"));
    } else
      ny(a, 1, l, c, "height", h, a.D, a.l),
        oy(a, 1, "d", l, e, d, "height", x, a.D, a.l),
        oy(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.D, a.l),
        oy(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.D, a.l);
    return m;
  }

  function dy(a) {
    function b() {
      if (0 < c) {
        var l = gf(e, d) || {};
        const m = uf(l.width);
        l = uf(l.height);
        null !== m && null !== f && h && h(0, f - m);
        null !== l && null !== g && h && h(1, g - l);
        --c;
      } else t.clearInterval(k), h && (h(0, 0), h(1, 0));
    }
    let c = 31.25;
    const d = a.ca,
      e = a.I,
      f = a.A,
      g = a.l,
      h = a.J;
    let k;
    t.setTimeout(function () {
      k = t.setInterval(b, 16);
    }, 990);
  }

  function ky(a, b, c) {
    if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
    if (1 == b.nodeType) {
      if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
      let d = null;
      try {
        d = gf(b, c);
      } catch (e) {}
      if (d) {
        if ("none" == d.display || "fixed" == d.position) return 0;
        if ("absolute" == d.position) {
          if (
            !a.C.boundingClientRect ||
            "hidden" == d.visibility ||
            "collapse" == d.visibility
          )
            return 0;
          c = null;
          try {
            c = b.getBoundingClientRect();
          } catch (e) {
            return 0;
          }
          return (
            (c.right > a.C.boundingClientRect.left ? 2 : 0) |
            (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
          );
        }
      }
      return 1;
    }
    return 0;
  }

  function ny(a, b, c, d, e, f, g, h) {
    if (null != h) {
      if ("string" == typeof f) {
        if ("100%" == f || !f) return;
        f = sf(f);
        null == f && (Ux(a.j, "n"), Sx(a.j, b, "d"));
      }
      if (null != f)
        if (c) {
          if (a.B)
            if (a.H) {
              const k = Math.max(f + h - (g || 0), 0),
                l = a.J;
              a.J = function (m, n) {
                m == b && d.setAttribute(e, k - n);
                l && l(m, n);
              };
            } else d.setAttribute(e, h);
        } else Sx(a.j, b, "d");
    }
  }

  function oy(a, b, c, d, e, f, g, h, k, l) {
    if (null != l) {
      f = f && f[g];
      "string" != typeof f ||
        ("m" == c ? ly(f) : my(f)) ||
        ((f = uf(f)),
        null == f ? Tx(a.j, "p") : null != k && Tx(a.j, f == k ? "E" : "e"));
      if ("string" == typeof h) {
        if ("m" == c ? ly(h) : my(h)) return;
        h = uf(h);
        null == h && (Ux(a.j, "p"), Sx(a.j, b, c));
      }
      if (null != h)
        if (d && e) {
          if (a.B)
            if (a.H) {
              const m = Math.max(h + l - (k || 0), 0),
                n = a.J;
              a.J = function (p, r) {
                p == b && (e[g] = m - r + "px");
                n && n(p, r);
              };
            } else e[g] = l + "px";
        } else Sx(a.j, b, c);
    }
  }
  var ty = class {
    constructor(a, b, c, d, e, f, g) {
      this.$a = a;
      this.O = c;
      this.I = b;
      this.ca = (a = this.I.ownerDocument) && (a.defaultView || a.parentWindow);
      this.C = new py(this.I);
      this.B = g;
      this.qa = qy(this.C, d.jc, d.height, d.Rc);
      this.F = this.B
        ? this.C.boundingClientRect
          ? this.C.boundingClientRect.right - this.C.boundingClientRect.left
          : null
        : e;
      this.D = this.B
        ? this.C.boundingClientRect
          ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top
          : null
        : f;
      this.A = ry(d.width);
      this.l = ry(d.height);
      this.R = this.B ? ry(d.opacity) : null;
      this.la = d.check;
      this.H = "animate" == d.jc && !sy(this.C, this.l, this.ha) && Rx();
      this.Za = !!d.lc;
      this.j = new Yx();
      sy(this.C, this.l, this.ha) && Tx(this.j, "r");
      e = this.C;
      e.j && e.l >= e.A && Tx(this.j, "b");
      this.K = this.J = null;
      this.Z = !1;
      this.ma = !!d.me;
      this.bb = !!d.Pc;
      this.ha = !!d.Rc;
      this.Ya = d.cb;
    }
  };

  function sy(a, b, c) {
    var d;
    (d = a.j) &&
      !(d = !a.B) &&
      (c
        ? ((b = a.l + Math.min(b, ry(a.sa()))), (a = a.j && b >= a.A))
        : (a = a.j && a.l >= a.A),
      (d = a));
    return d;
  }
  var py = class {
    constructor(a) {
      var b = a && a.ownerDocument,
        c = b && (b.defaultView || b.parentWindow),
        d;
      if ((d = c)) d = cf(c.top) ? c.top : null;
      c = d;
      this.j = !!c;
      this.boundingClientRect = null;
      if (a)
        try {
          this.boundingClientRect = a.getBoundingClientRect();
        } catch (g) {}
      d = a;
      let e = 0,
        f = this.boundingClientRect;
      for (; d; )
        try {
          f && (e += f.top);
          const g = d.ownerDocument,
            h = g && (g.defaultView || g.parentWindow);
          (d = h && h.frameElement) && (f = d.getBoundingClientRect());
        } catch (g) {
          break;
        }
      this.l = e;
      c = c || t;
      this.A = (
        "CSS1Compat" == c.document.compatMode
          ? c.document.documentElement
          : c.document.body
      ).clientHeight;
      b = b && fi(b);
      this.B =
        !!a &&
        !(2 == b || 3 == b) &&
        !(
          this.boundingClientRect &&
          this.boundingClientRect.top >= this.boundingClientRect.bottom &&
          this.boundingClientRect.left >= this.boundingClientRect.right
        );
    }
    isVisible() {
      return this.B;
    }
    sa() {
      return this.boundingClientRect
        ? this.boundingClientRect.bottom - this.boundingClientRect.top
        : null;
    }
  };

  function qy(a, b, c, d) {
    switch (b) {
      case "no_rsz":
        return !1;
      case "force":
      case "animate":
        return !0;
      default:
        return sy(a, c, d);
    }
  }

  function by(a) {
    return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat);
  }

  function uy(a, b, c, d) {
    return jy(new ty(a, b, d, c, null, null, !0));
  }
  var vy = new Yx("s", ""),
    Wx = RegExp("[lonvafrbpEe]", "g");

  function my(a) {
    return !a || /^(auto|none|100%)$/.test(a);
  }

  function ly(a) {
    return !a || /^(0px|auto|none|0%)$/.test(a);
  }

  function fy(a, b, c) {
    null !== b &&
      null !== sf(a.getAttribute("width")) &&
      a.setAttribute("width", b);
    null !== c &&
      null !== sf(a.getAttribute("height")) &&
      a.setAttribute("height", c);
    null !== b && (a.style.width = b + "px");
    null !== c && (a.style.height = c + "px");
  }
  var gy =
      "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(
        " "
      ),
    hy =
      "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(
        " "
      );
  let wy =
      "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
    xy = gy;
  for (let a = 0; a < xy.length; a++)
    wy += ", " + xy[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
  xy = hy;
  for (let a = 0; a < xy.length; a++)
    wy += ", " + xy[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
  var iy = wy;

  function ry(a) {
    return "string" === typeof a
      ? sf(a)
      : "number" === typeof a && isFinite(a)
      ? a
      : null;
  }

  function yy(a, b, c, d, e, f, g, h, k, l) {
    const m = P();
    if (!a.l || !m) return (l.err = "2"), zy(a, l, null), !1;
    if ("no_rsz" === f) return (l.err = "7"), zy(a, l, null), !0;
    const n = new py(a.l);
    if (!n.j) return (l.err = "3"), zy(a, l, null), !1;
    var p = n.boundingClientRect
      ? n.boundingClientRect.right - n.boundingClientRect.left
      : null;
    null != p && (l.w = p);
    p = n.sa();
    null != p && (l.h = p);
    if (qy(n, f, d, k)) {
      var r = a.l.ownerDocument.getElementById(a.l.id + "_anchor");
      p = r ? [a.l] : null;
      r = r || a.l;
      const x = V(dj);
      b = uy(
        m,
        r,
        {
          width: c,
          height: d,
          opacity: e,
          check: b,
          jc: f,
          lc: g,
          me: h,
          Pc: x,
          Rc: k,
        },
        p
      );
      l.r_cui &&
        tf(l.r_cui.toString()) &&
        O(r, {
          height: (null === d ? 0 : d - 48) + "px",
          top: "24px",
        });
      null != c && (l.nw = c);
      null != d && (l.nh = d);
      l.rsz = b.toString();
      l.abl = Xx(b);
      l.frsz = ("force" === f).toString();
      l.err = "0";
      zy(a, l, n);
      Ia(ii(kn).l(), (v) => Ka([248427477, 248427478], v)) &&
        a.j === m &&
        Fx(new Ox(a.j, void 0), r)
          .then((v) => {
            bi(8, [v]);
            return v;
          })
          .then((v) => {
            T(
              "resize-ovlp",
              {
                adf: a.A,
                eid: a.F,
                io: Number(v.isOverlappingOrOutsideViewport),
                oa: v.overlappedArea.toFixed(2),
                qid: l.qid || "",
                slot: a.H,
                url: a.I,
                vp: v.viewportSize.width + "x" + v.viewportSize.height,
              },
              1
            );
          })
          .catch((v) => {
            T(
              "resize-ovlp-err",
              {
                err: v.message,
              },
              1
            );
          });
      return !0;
    }
    l.err = "1";
    zy(a, l, n);
    return !1;
  }

  function Ay(a, b, c) {
    const d = {
      scrl: dk(a.j || P()),
      adk: a.D,
      adf: a.A,
      fmt: a.C,
    };
    b &&
      ((d.str = sy(b, sf(c.r_nh), tf(c.r_cab))), (d.ad_y = b.l), (d.vph = b.A));
    vg(c, (e, f) => {
      d[f] = e;
    });
    return d;
  }

  function zy(a, b, c) {
    const d = sn(String(b.gen204_fraction));
    b = Ay(a, c, b);
    b.url = a.j.document.URL;
    T("resize", b, d);
  }
  class By extends lx {
    constructor(a, b, c) {
      super(a);
      this.l = b;
      this.D = String(c.google_ad_unit_key || "");
      this.A = String(c.google_ad_dom_fingerprint || "");
      this.C = String(c.google_ad_format || "");
      this.F = pn(c);
      this.H = String(c.google_ad_slot || "");
      this.I = String(c.google_page_url || "");
    }
    O(a) {
      a["resize-me"] = (b, c) => {
        if (ck(c, this.l.contentWindow)) {
          b = fk(b);
          var d = b.r_chk;
          if (null == d || "" === d) {
            var e = sf(b.r_nw),
              f = sf(b.r_nh),
              g = sf(b.r_no);
            null != g || (0 !== e && 0 !== f) || (g = 0);
            var h = b.r_str;
            h = h ? h : null;
            e = yy(
              this,
              d,
              e,
              f,
              g,
              h,
              tf(b.r_ao),
              tf(b.r_ifr),
              tf(b.r_cab),
              b
            );
            d = {
              msg_type: "resize-result",
            };
            d.r_str = h;
            d.r_status = e;
            c = c.source;
            d.googMsgType = "sth";
            c.postMessage(JSON.stringify(d), "*");
            this.l.dataset.googleQueryId ||
              this.l.setAttribute("data-google-query-id", b.qid);
          }
        }
      };
    }
    B() {
      super.B();
      this.l = null;
    }
  }
  const Cy = {
    google: 1,
    googlegroups: 1,
    gmail: 1,
    googlemail: 1,
    googleimages: 1,
    googleprint: 1,
  };
  const Dy = /^blogger$/,
    Ey = /^wordpress(.|\s|$)/i,
    Fy = /^joomla!/i,
    Gy = /^drupal/i,
    Hy = /\/wp-content\//,
    Iy = /\/wp-content\/plugins\/advanced-ads/,
    Jy = /\/wp-content\/themes\/genesis/,
    Ky = /\/wp-content\/plugins\/genesis/;
  var Ly = (a) => {
    var b = a.getElementsByTagName("script"),
      c = b.length;
    for (var d = 0; d < c; ++d) {
      var e = b[d];
      if (e.hasAttribute("src")) {
        e = e.getAttribute("src");
        if (Iy.test(e)) return 5;
        if (Ky.test(e)) return 6;
      }
    }
    b = a.getElementsByTagName("link");
    c = b.length;
    for (d = 0; d < c; ++d)
      if (
        ((e = b[d]),
        e.hasAttribute("href") &&
          ((e = e.getAttribute("href")), Jy.test(e) || Ky.test(e)))
      )
        return 6;
    a = a.getElementsByTagName("meta");
    d = a.length;
    for (e = 0; e < d; ++e) {
      var f = a[e];
      if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
        f = f.getAttribute("content");
        if (Dy.test(f)) return 1;
        if (Ey.test(f)) return 2;
        if (Fy.test(f)) return 3;
        if (Gy.test(f)) return 4;
      }
    }
    for (a = 0; a < c; ++a)
      if (
        ((d = b[a]),
        "stylesheet" == d.getAttribute("rel") &&
          d.hasAttribute("href") &&
          ((d = d.getAttribute("href")), Hy.test(d)))
      )
        return 2;
    return 0;
  };
  let My = navigator;
  var Ny = (a) => {
      let b = 1;
      let c;
      if (void 0 != a && "" != a)
        for (b = 0, c = a.length - 1; 0 <= c; c--) {
          var d = a.charCodeAt(c);
          b = ((b << 6) & 268435455) + d + (d << 14);
          d = b & 266338304;
          b = 0 != d ? b ^ (d >> 21) : b;
        }
      return b;
    },
    Oy = (a, b) => {
      if (!a || "none" == a) return 1;
      a = String(a);
      "auto" == a &&
        ((a = b),
        "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
      return Ny(a.toLowerCase());
    };
  const Py = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
    Qy = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
    Ry = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
  var Sy = {
    ["google_ad_block"]: "ad_block",
    ["google_ad_client"]: "client",
    ["google_ad_output"]: "output",
    ["google_ad_callback"]: "callback",
    ["google_ad_height"]: "h",
    ["google_ad_resize"]: "twa",
    ["google_ad_slot"]: "slotname",
    ["google_ad_unit_key"]: "adk",
    ["google_ad_dom_fingerprint"]: "adf",
    ["google_placement_id"]: "pi",
    ["google_ad_width"]: "w",
    ["google_captcha_token"]: "captok",
    ["google_content_recommendation_columns_num"]: "cr_col",
    ["google_content_recommendation_rows_num"]: "cr_row",
    ["google_ctr_threshold"]: "ctr_t",
    ["google_cust_criteria"]: "cust_params",
    ["gfwrnwer"]: "fwrn",
    ["gfwrnher"]: "fwrnh",
    ["google_image_size"]: "image_size",
    ["google_last_modified_time"]: "lmt",
    ["google_loeid"]: "loeid",
    ["google_max_num_ads"]: "num_ads",
    ["google_max_radlink_len"]: "max_radlink_len",
    ["google_mtl"]: "mtl",
    ["google_native_settings_key"]: "nsk",
    ["google_enable_content_recommendations"]: "ecr",
    ["google_num_radlinks"]: "num_radlinks",
    ["google_num_radlinks_per_unit"]: "num_radlinks_per_unit",
    ["google_pucrd"]: "pucrd",
    ["google_reactive_plaf"]: "plaf",
    ["google_reactive_plat"]: "plat",
    ["google_reactive_fba"]: "fba",
    ["google_reactive_sra_channels"]: "plach",
    ["google_responsive_auto_format"]: "rafmt",
    ["armr"]: "armr",
    ["google_rl_dest_url"]: "rl_dest_url",
    ["google_rl_filtering"]: "rl_filtering",
    ["google_rl_mode"]: "rl_mode",
    ["google_rt"]: "rt",
    ["google_video_play_muted"]: "vpmute",
    ["google_source_type"]: "src_type",
    ["google_restrict_data_processing"]: "rdp",
    ["google_tag_for_child_directed_treatment"]: "tfcd",
    ["google_tag_for_under_age_of_consent"]: "tfua",
    ["google_tag_origin"]: "to",
    ["google_ad_semantic_area"]: "sem",
    ["google_tfs"]: "tfs",
    ["google_package"]: "pwprc",
    ["google_tag_partner"]: "tp",
    ["fra"]: "fpla",
    ["google_ml_rank"]: "mlr",
    ["google_apsail"]: "psa",
    ["google_ad_channel"]: "channel",
    ["google_ad_type"]: "ad_type",
    ["google_ad_format"]: "format",
    ["google_color_bg"]: "color_bg",
    ["google_color_border"]: "color_border",
    ["google_color_link"]: "color_link",
    ["google_color_text"]: "color_text",
    ["google_color_url"]: "color_url",
    ["google_page_url"]: "url",
    ["google_allow_expandable_ads"]: "ea",
    ["google_ad_section"]: "region",
    ["google_cpm"]: "cpm",
    ["google_encoding"]: "oe",
    ["google_safe"]: "adsafe",
    ["google_flash_version"]: "flash",
    ["google_font_face"]: "f",
    ["google_font_size"]: "fs",
    ["google_hints"]: "hints",
    ["google_ad_host"]: "host",
    ["google_ad_host_channel"]: "h_ch",
    ["google_ad_host_tier_id"]: "ht_id",
    ["google_kw_type"]: "kw_type",
    ["google_kw"]: "kw",
    ["google_contents"]: "contents",
    ["google_targeting"]: "targeting",
    ["google_adtest"]: "adtest",
    ["google_alternate_color"]: "alt_color",
    ["google_alternate_ad_url"]: "alternate_ad_url",
    ["google_cust_age"]: "cust_age",
    ["google_cust_ch"]: "cust_ch",
    ["google_cust_gender"]: "cust_gender",
    ["google_cust_interests"]: "cust_interests",
    ["google_cust_job"]: "cust_job",
    ["google_cust_l"]: "cust_l",
    ["google_cust_lh"]: "cust_lh",
    ["google_cust_u_url"]: "cust_u_url",
    ["google_cust_id"]: "cust_id",
    ["google_language"]: "hl",
    ["google_city"]: "gcs",
    ["google_country"]: "gl",
    ["google_region"]: "gr",
    ["google_content_recommendation_ad_positions"]: "ad_pos",
    ["google_content_recommendation_columns_num"]: "cr_col",
    ["google_content_recommendation_rows_num"]: "cr_row",
    ["google_content_recommendation_ui_type"]: "crui",
    ["google_content_recommendation_use_square_imgs"]: "cr_sq_img",
    ["google_color_line"]: "color_line",
    ["google_disable_video_autoplay"]: "disable_video_autoplay",
    ["google_full_width_responsive_allowed"]: "fwr",
    ["google_full_width_responsive"]: "fwrattr",
    ["efwr"]: "efwr",
    ["google_pgb_reactive"]: "pra",
    ["google_resizing_allowed"]: "rs",
    ["google_resizing_height"]: "rh",
    ["google_resizing_width"]: "rw",
    ["rpe"]: "rpe",
    ["google_responsive_formats"]: "resp_fmts",
    ["google_safe_for_responsive_override"]: "sfro",
    ["google_video_doc_id"]: "video_doc_id",
    ["google_video_product_type"]: "video_product_type",
    ["google_webgl_support"]: "wgl",
  };

  function Ty(a) {
    try {
      return a.sz();
    } catch (b) {
      return !1;
    }
  }

  function Uy(a) {
    return (
      !!a &&
      ("object" === typeof a || "function" === typeof a) &&
      Ty(a) &&
      wg(a.nq) &&
      wg(a.nqa) &&
      wg(a.al) &&
      wg(a.rl)
    );
  }

  function Vy(a) {
    const b = S(189, la(a.R, a));
    a.l.setTimeout(b, 0);
  }
  class Wy {
    constructor(a) {
      this.B = [];
      this.l = a || window;
      this.j = 0;
      this.A = null;
      this.H = 0;
    }
    I(a, b) {
      0 != this.j || 0 != this.B.length || (b && b != window)
        ? this.C(a, b)
        : ((this.j = 2), this.F(new Xy(a, window)));
    }
    C(a, b) {
      this.B.push(new Xy(a, b || this.l));
      Vy(this);
    }
    K(a) {
      this.j = 1;
      if (a) {
        const b = S(188, la(this.D, this, !0));
        this.A = this.l.setTimeout(b, a);
      }
    }
    D(a) {
      a && ++this.H;
      1 == this.j &&
        (null != this.A && (this.l.clearTimeout(this.A), (this.A = null)),
        (this.j = 0));
      Vy(this);
    }
    O() {
      return !(!window || !Array);
    }
    J() {
      return this.H;
    }
    R() {
      if (0 == this.j && this.B.length) {
        const a = this.B.shift();
        this.j = 2;
        const b = S(190, la(this.F, this, a));
        a.X.setTimeout(b, 0);
        Vy(this);
      }
    }
    F(a) {
      this.j = 0;
      a.j();
    }
  }
  var Yy;
  Wy.prototype.nq = Wy.prototype.I;
  Wy.prototype.nqa = Wy.prototype.C;
  Wy.prototype.al = Wy.prototype.K;
  Wy.prototype.rl = Wy.prototype.D;
  Wy.prototype.sz = Wy.prototype.O;
  Wy.prototype.tc = Wy.prototype.J;
  var Xy = class {
    constructor(a, b) {
      this.j = a;
      this.X = b;
    }
  };

  function Zy(a) {
    -1 == a.l && (a.l = Ha(a.j, (b, c, d) => (c ? b + 2 ** d : b), 0));
    return a.l;
  }
  class $y {
    constructor() {
      this.j = [];
      this.l = -1;
    }
    set(a, b = !0) {
      0 <= a &&
        52 > a &&
        0 === a % 1 &&
        this.j[a] != b &&
        ((this.j[a] = b), (this.l = -1));
    }
    get(a) {
      return !!this.j[a];
    }
  }
  var az = () => {
    const a = new $y();
    t.SVGElement && t.document.createElementNS && a.set(0);
    const b = zf();
    b["allow-top-navigation-by-user-activation"] && a.set(1);
    b["allow-popups-to-escape-sandbox"] && a.set(2);
    t.crypto && t.crypto.subtle && a.set(3);
    t.TextDecoder && t.TextEncoder && a.set(4);
    return Zy(a);
  };

  function bz(a, b, c) {
    const d = a.createElement("link");
    try {
      (d.rel = "preload"),
        (d.href =
          b instanceof kb
            ? nb(b).toString()
            : b instanceof Fb
            ? Gb(b)
            : Gb(Mb(b)));
    } catch (e) {
      return;
    }
    d.as = "script";
    c && d.setAttribute("nonce", c);
    if ((a = a.getElementsByTagName("head")[0]))
      try {
        a.appendChild(d);
      } catch (e) {}
  }

  function cz(a) {
    dz();
    return ob(a);
  }
  var dz = ba;
  const ez = /^\.google\.(com?\.)?[a-z]{2,3}$/,
    fz = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;
  let gz = () => t,
    hz = t;
  const iz = (a) => {
    a = "https://" + `adservice${a}/adsid/integrator.${"js"}`;
    const b = [`domain=${encodeURIComponent(t.location.hostname)}`];
    Z[3] >= na() && b.push(`adsid=${encodeURIComponent(Z[1])}`);
    return a + "?" + b.join("&");
  };
  let Z, jz;
  const kz = () => {
    hz = gz();
    Z = hz.googleToken = hz.googleToken || {};
    var a = na();
    (Z[1] && Z[3] > a && 0 < Z[2]) ||
      ((Z[1] = ""), (Z[2] = -1), (Z[3] = -1), (Z[4] = ""), (Z[6] = ""));
    jz = hz.googleIMState = hz.googleIMState || {};
    a = jz[1];
    (ez.test(a) && !fz.test(a)) || (jz[1] = ".google.com");
    Array.isArray(jz[5]) || (jz[5] = []);
    "boolean" !== typeof jz[6] && (jz[6] = !1);
    Array.isArray(jz[7]) || (jz[7] = []);
    "number" !== typeof jz[8] && (jz[8] = 0);
  };
  var lz = (a) => {
    kz();
    ez.test(a) && !fz.test(a) && (jz[1] = a);
  };
  const mz = {
      Rb: () => 0 < jz[8],
      ie: () => {
        jz[8]++;
      },
      je: () => {
        0 < jz[8] && jz[8]--;
      },
      ke: () => {
        jz[8] = 0;
      },
      Zh: () => !1,
      wc: () => jz[5],
      nc: (a) => {
        try {
          a();
        } catch (b) {
          t.setTimeout(() => {
            throw b;
          }, 0);
        }
      },
      Nc: () => {
        if (!mz.Rb()) {
          var a = t.document,
            b = (e) => {
              e = iz(e);
              a: {
                try {
                  var f = Bc();
                  break a;
                } catch (g) {}
                f = void 0;
              }
              bz(a, e, f);
              f = a.createElement("script");
              f.type = "text/javascript";
              f.onerror = () => t.processGoogleToken({}, 2);
              e = cz(e);
              he(f, e);
              try {
                (a.head || a.body || a.documentElement).appendChild(f), mz.ie();
              } catch (g) {}
            },
            c = jz[1];
          b(c);
          ".google.com" != c && b(".google.com");
          var d = {
            ["newToken"]: "FBT",
          };
          t.setTimeout(() => t.processGoogleToken(d, 1), 1e3);
        }
      },
    },
    nz = (a) => {
      kz();
      const b = hz.googleToken[5] || 0;
      a && (0 != b || Z[3] >= na() ? mz.nc(a) : (mz.wc().push(a), mz.Nc()));
      (Z[3] >= na() && Z[2] >= na()) || mz.Nc();
    };
  var pz = (a) => {
    t.processGoogleToken = t.processGoogleToken || ((b, c) => oz(b, c));
    nz(a);
  };
  const oz = (a = {}, b = 0) => {
    var c = a.newToken || "",
      d = "NT" == c,
      e = parseInt(a.freshLifetimeSecs || "", 10),
      f = parseInt(a.validLifetimeSecs || "", 10);
    const g = a["1p_jar"] || "";
    a = a.pucrd || "";
    kz();
    1 == b ? mz.ke() : mz.je();
    var h = (hz.googleToken = hz.googleToken || {}),
      k =
        0 == b &&
        c &&
        "string" === typeof c &&
        !d &&
        "number" === typeof e &&
        0 < e &&
        "number" === typeof f &&
        0 < f &&
        "string" === typeof g;
    d = d && !mz.Rb() && (!(Z[3] >= na()) || "NT" == Z[1]);
    var l = !(Z[3] >= na()) && 0 != b;
    if (k || d || l)
      (d = na()),
        (e = d + 1e3 * e),
        (f = d + 1e3 * f),
        1e-5 > Math.random() &&
          Pf(
            t,
            "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
              `&err=${b}`
          ),
        (h[5] = b),
        (h[1] = c),
        (h[2] = e),
        (h[3] = f),
        (h[4] = g),
        (h[6] = a),
        kz();
    if (k || !mz.Rb()) {
      b = mz.wc();
      for (c = 0; c < b.length; c++) mz.nc(b[c]);
      b.length = 0;
    }
  };
  const qz = (a = window) => !a.PeriodicSyncManager;
  var rz = () => {
      var a = window;
      if ((!qz(a) && V(Bj)) || (qz(a) && V(Cj))) {
        a = a.navigator.userAgent;
        const b = /Chrome/.test(a);
        return /Android/.test(a) && b;
      }
      return !1;
    },
    sz = {
      issuerOrigin: "https://attestation.android.com",
      issuancePath: "/att/i",
      redemptionPath: "/att/r",
      shouldRedeemToken: () => rz(),
      shouldRequestToken: () => rz(),
    };
  const If = [
    "A88otRz1Fd3Nt567e2IYshC18LL3KGVXpVJW9oTCId4RYaygt23pbb4JqrbdIO/bwZPWEmRjBIRBu/bZbDR7Pg4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
    "A0gCLbXCcL0R1Oc8tFPDs0G4Elz17w3zHp+Zst66+D17veE2o7fUcPsA114QtSTRqfVJLMeTSdeWOom0CcyCsgYAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
    "A9RQ+LxFazAousxUwSCzaihJjHLO1UyjQp0teZKHl7WdbVjPDfHSKMd6D/ZI5MTjqClFycbl70EFd7cBJWXqKQEAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
    "A6WKeWsdn1Ct+ZPqS9NCxxaiBoQ7wdTkK2/gE69Yu0gfBKJfo1gOvgkGmf5/xaIajT/RUb9AbnF1FsSZ47cCcQcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
    "A04ZCu7yjrHgwQJK5ISHhH1DSg0qqowEay3n70KO6wV3D2Mj+OX3Kw20aSMitzgdG1xfrN7sOJV/dZIk+RvCzA4AAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
  ];

  function tz(a = window) {
    return a.goog_tt_state;
  }

  function uz(a) {
    return V(Fj) ? !0 : a.some((b) => 6 === b.state);
  }

  function vz(a, b, c) {
    return b || ".google.ch" === c || "function" === typeof a.__tcfapi;
  }

  function wz(a, b) {
    a = V(Fj)
      ? a.map((c) => c.issuerOrigin)
      : a.filter((c) => 6 === c.state).map((c) => c.issuerOrigin);
    if (0 == a.length) return null;
    a = {
      type: "send-redemption-record",
      issuers: a,
      refreshPolicy: "none",
      signRequestData: "include",
      includeTimestampHeader: !0,
      additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"],
    };
    b &&
      0 < Object.keys(b).length &&
      (a.additionalSigningData = kd(JSON.stringify(b), 3));
    return a;
  }

  function xz(a) {
    return a.j.map((b) => ({
      issuerOrigin: b.issuerOrigin,
      state: V(Ej) && !a.l ? 12 : 1,
    }));
  }

  function yz(a, b) {
    const c = window.goog_tt_state.find((d) => d.issuerOrigin === a);
    c && (c.state = b);
  }

  function zz() {
    const a = window.goog_tt_state;
    return Array.isArray(a) && a.some((b) => 1 != b.state);
  }

  function Az(a) {
    const b = `${a.issuerOrigin}${a.redemptionPath}`,
      c = {
        keepalive: !0,
        redirect: "follow",
        method: "get",
        trustToken: {
          type: "token-redemption",
          issuer: a.issuerOrigin,
          refreshPolicy: "none",
        },
      };
    yz(a.issuerOrigin, 2);
    return window
      .fetch(b, c)
      .then((d) => {
        if (!d.ok) throw Error(`${d.status}: Network response was not ok!`);
        yz(a.issuerOrigin, 6);
      })
      .catch((d) => {
        d && "NoModificationAllowedError" === d.name
          ? yz(a.issuerOrigin, 6)
          : yz(a.issuerOrigin, 5);
      });
  }

  function Bz(a, b) {
    const c = `${a.issuerOrigin}${a.issuancePath}`;
    yz(a.issuerOrigin, 8);
    return window
      .fetch(c, {
        trustToken: {
          type: "token-request",
        },
      })
      .then((d) => {
        if (!d.ok) throw Error(`${d.status}: Network response was not ok!`);
        yz(a.issuerOrigin, 10);
        if (b) return Az(a);
      })
      .catch((d) => {
        if (d && "NoModificationAllowedError" === d.name) {
          if ((yz(a.issuerOrigin, 10), b)) return Az(a);
        } else yz(a.issuerOrigin, 9);
      });
  }

  function Cz() {
    yz(sz.issuerOrigin, 13);
    return document
      .hasTrustToken(sz.issuerOrigin)
      .then((a) => (a ? Az(sz) : Bz(sz, !0)));
  }

  function Dz(a) {
    if (document.hasTrustToken && !V(Dj) && (!V(Ej) || a.l)) {
      if (zz()) return window.goog_tt_promise;
      var b = [];
      V(Fj)
        ? rz() && b.push(Cz())
        : a.j.forEach((c) => {
            yz(c.issuerOrigin, 13);
            const d = c.shouldRedeemToken(),
              e = c.shouldRequestToken();
            if (d || e) {
              var f = document.hasTrustToken(c.issuerOrigin).then((g) => {
                if (g) {
                  if (d) return Az(c);
                } else {
                  if (e) return Bz(c, d);
                  yz(c.issuerOrigin, 3);
                }
              });
              b.push(f);
            } else yz(c.issuerOrigin, 7);
          });
      if (window.Promise && window.Promise.all)
        return (
          (a = window.Promise.all(b)),
          "object" != typeof window.goog_tt_promise &&
            Object.defineProperty(window, "goog_tt_promise", {
              configurable: !1,
              value: a,
              writable: !1,
            }),
          a
        );
    }
  }
  class Ez extends Em {
    constructor(a = !1) {
      super();
      V(Aj) || V(Ej) || Jf();
      this.l = a;
      this.j = [];
      V(Fj) ? rz() && this.j.push(sz) : (this.j = [sz]);
      if (
        document.hasTrustToken &&
        !V(Dj) &&
        !Array.isArray(window.goog_tt_state)
      ) {
        const b = xz(this);
        Object.defineProperty(window, "goog_tt_state", {
          configurable: !1,
          get() {
            return b.slice();
          },
        });
      }
    }
  }
  const Fz = /[+, ]/;
  var Iz = (a, b) => {
      const c = a.G;
      var d = P().document,
        e = {},
        f = P(),
        g;
      var h = Kj(P(), !1).X;
      var k = Oj(h);
      var l = (g = Mj(P(), d, c.google_ad_width, c.google_ad_height));
      k = k.wb;
      var m = P();
      m = m.top == m ? 0 : cf(m.top) ? 1 : 2;
      let n = 4;
      l || 1 != m
        ? l || 2 != m
          ? l && 1 == m
            ? (n = 7)
            : l && 2 == m && (n = 8)
          : (n = 6)
        : (n = 5);
      k && (n |= 16);
      l = "" + n;
      k = Pj();
      m = !!c.google_page_url;
      e.google_iframing = l;
      0 != k && (e.google_iframing_environment = k);
      if (!m && "ad.yieldmanager.com" == d.domain) {
        for (
          l = d.URL.substring(d.URL.lastIndexOf("http"));
          -1 < l.indexOf("%");

        )
          try {
            l = decodeURIComponent(l);
          } catch (r) {
            break;
          }
        c.google_page_url = l;
        m = !!l;
      }
      m
        ? ((e.google_page_url = c.google_page_url),
          (e.google_page_location = (g ? d.referrer : d.URL) || "EMPTY"))
        : (g &&
          cf(f.top) &&
          d.referrer &&
          f.top.document.referrer === d.referrer
            ? (e.google_page_url = f.top.document.URL)
            : (e.google_page_url = g ? d.referrer : d.URL),
          (e.google_page_location = null));
      if (d.URL === e.google_page_url)
        try {
          var p = Math.round(Date.parse(d.lastModified) / 1e3) || null;
        } catch (r) {
          p = null;
        }
      else p = null;
      e.google_last_modified_time = p;
      d = h == h.top ? h.document.referrer : ((d = $f()) && d.referrer) || "";
      e.google_referrer_url = d;
      Nj(e, c);
      e = c.google_page_location || c.google_page_url;
      "EMPTY" == e && (e = c.google_page_url);
      e
        ? ((e = e.toString()),
          0 == e.indexOf("http://")
            ? (e = e.substring(7, e.length))
            : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)),
          (d = e.indexOf("/")),
          -1 == d && (d = e.length),
          (e = e.substring(0, d).split(".")),
          (d = !1),
          3 <= e.length && (d = e[e.length - 3] in Cy),
          2 <= e.length && (d = d || e[e.length - 2] in Cy),
          (e = d))
        : (e = !1);
      e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
      b = Gz(a, b);
      d = a.G;
      f = d.google_ad_channel;
      p = "/pagead/ads?";
      "ca-pub-6219811747049371" === d.google_ad_client &&
        Hz.test(f) &&
        (p = "/pagead/lopri?");
      e = `https://${e}${p}`;
      a = Bd(a.U, 9) && c.google_debug_params ? c.google_debug_params : "";
      a = Ag(b, e + a);
      return (c.google_ad_url = a);
    },
    Jz = (a) =>
      encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") +
      "&" +
      zg({
        ["adk"]: a.google_ad_unit_key,
        ["client"]: a.google_ad_client,
        ["fa"]: a.google_reactive_ad_format,
      }),
    Kz = (a) => {
      try {
        if (a.parentNode) return a.parentNode;
      } catch (c) {
        return null;
      }
      if (9 === a.nodeType)
        a: {
          try {
            const c = Pe(a);
            if (c) {
              const d = c.frameElement;
              if (d && cf(c.parent)) {
                var b = d;
                break a;
              }
            }
          } catch (c) {}
          b = null;
        }
      else b = null;
      return b;
    },
    Lz = (a, b) => {
      b.eid = pn(a.pubWin);
      const c = a.G.google_loeid;
      "string" === typeof c && ((a.j |= 4096), (b.loeid = c));
    },
    Mz = (a, b) => {
      a =
        (a = Ng(a.pubWin)) && a.document
          ? Rh(a.document, a)
          : new Ie(-12245933, -12245933);
      b.scr_x = Math.round(a.x);
      b.scr_y = Math.round(a.y);
    };
  const Nz = (a) => {
    try {
      const b = t.top.location.hash;
      if (b) {
        const c = b.match(a);
        return (c && c[1]) || "";
      }
    } catch (b) {}
    return "";
  };
  var Oz = (a) => {
      const b = ch();
      b && (a.debug_experiment_id = b);
      a.creatives = Nz(/\b(?:creatives)=([\d,]+)/);
      a.adgroups = Nz(/\b(?:adgroups)=([\d,]+)/);
      a.adgroups &&
        ((a.adtest = "on"),
        (a.disable_budget_throttling = !0),
        (a.use_budget_filtering = !1),
        (a.retrieve_only = !0),
        (a.disable_fcap = !0));
    },
    Pz = (a, b, c) => {
      const d = a.G;
      var e = a.pubWin,
        f = a.M,
        g = Lj();
      b.ref = d.google_referrer_url;
      b.loc = d.google_page_location;
      var h;
      (h = $f(e)) && ea(h.data) && "string" === typeof h.data.type
        ? ((h = h.data.type.toLowerCase()),
          (h = "doubleclick" == h || "adsense" == h ? null : h))
        : (h = null);
      h && (b.apn = h.substr(0, 10));
      g =
        0 < Ij(Di) && a.Ma
          ? {
              url: a.Ma,
              wb: !0,
            }
          : Oj(g);
      b.url || b.loc || !g.url || ((b.url = g.url), g.wb || (b.usrc = 1));
      h = d.google_trust_token_additional_signing_data || {};
      h.url = b.url;
      d.google_trust_token_additional_signing_data = h;
      g.url != (b.loc || b.url) && (b.top = g.url);
      Yy && Ty(Yy)
        ? (g = Yy)
        : ((g = Lj()),
          (h = g.google_jobrunner),
          (g = Uy(h) ? (Yy = h) : (g.google_jobrunner = Yy = new Wy(g))));
      (g = wg(g.tc) ? g.tc() : null) && (b.jtc = g);
      0 <= a.B && (b.eae = a.B);
      c = f ? Bm(c, f) : null;
      (c = Gw(d, f, c)) && (b.fc = c);
      if (!Mg(d)) {
        c = a.pubWin.document;
        g = "";
        if (
          c.documentMode &&
          ((h = Ze(new Le(c), "IFRAME")),
          (h.frameBorder = "0"),
          (h.style.height = 0),
          (h.style.width = 0),
          (h.style.position = "absolute"),
          c.body)
        ) {
          c.body.appendChild(h);
          try {
            const R = h.contentWindow.document;
            R.open();
            R.write(kc(wc));
            R.close();
            g += R.documentMode;
          } catch (R) {}
          c.body.removeChild(h);
        }
        b.docm = g;
      }
      let k, l, m, n, p, r, x, v, D;
      try {
        var w = e.screenX;
        k = e.screenY;
      } catch (R) {}
      try {
        (l = e.outerWidth), (m = e.outerHeight);
      } catch (R) {}
      try {
        (n = e.innerWidth), (p = e.innerHeight);
      } catch (R) {}
      try {
        (r = e.screenLeft), (x = e.screenTop);
      } catch (R) {}
      try {
        (n = e.innerWidth), (p = e.innerHeight);
      } catch (R) {}
      try {
        (v = e.screen.availWidth), (D = e.screen.availTop);
      } catch (R) {}
      b.brdim = [r, x, w, k, v, D, l, m, n, p].join();
      w = 0;
      void 0 === t.postMessage && (w |= 1);
      0 < w && (b.osd = w);
      b.vis = fi(e.document);
      w = a.W;
      e = Aw(d)
        ? vy
        : jy(
            new ty(
              e,
              w,
              null,
              {
                width: 0,
                height: 0,
              },
              d.google_ad_width,
              d.google_ad_height,
              !1
            )
          );
      b.rsz = e.toString();
      b.abl = Xx(e);
      if (!Aw(d) && (e = Og(d))) {
        w = 0;
        a: {
          try {
            {
              var E = d.google_async_iframe_id;
              const R = P().document;
              if (E) var C = R.getElementById(E);
              else {
                var I = R.getElementsByTagName("script"),
                  G = I[I.length - 1];
                C = (G && G.parentNode) || null;
              }
            }
            if ((E = C)) {
              C = [];
              I = 0;
              for (
                var Q = Date.now();
                100 >= ++I && 50 > Date.now() - Q && (E = Kz(E));

              )
                1 === E.nodeType && C.push(E);
              var da = C;
              b: {
                for (Q = 0; Q < da.length; Q++) {
                  c: {
                    var N = da[Q];
                    try {
                      if (
                        N.parentNode &&
                        0 < N.offsetWidth &&
                        0 < N.offsetHeight &&
                        N.style &&
                        "none" !== N.style.display &&
                        "hidden" !== N.style.visibility &&
                        (!N.style.opacity || 0 !== Number(N.style.opacity))
                      ) {
                        const R = N.getBoundingClientRect();
                        var va = 0 < R.right && 0 < R.bottom;
                        break c;
                      }
                    } catch (R) {}
                    va = !1;
                  }
                  if (!va) {
                    var Ma = !1;
                    break b;
                  }
                }
                Ma = !0;
              }
              if (Ma) {
                b: {
                  const R = Date.now();
                  Ma = /^html|body$/i;
                  va = /^fixed/i;
                  for (N = 0; N < da.length && 50 > Date.now() - R; N++) {
                    const nf = da[N];
                    if (
                      !Ma.test(nf.tagName) &&
                      va.test(nf.style.position || mg(nf, "position"))
                    ) {
                      var Fd = nf;
                      break b;
                    }
                  }
                  Fd = null;
                }
                break a;
              }
            }
          } catch (R) {}
          Fd = null;
        }
        Fd &&
          Fd.offsetWidth * Fd.offsetHeight <= 4 * e.width * e.height &&
          (w = 1);
        b.pfx = w;
      }
      a: {
        if (0.05 > Math.random() && f)
          try {
            const R = f.document.getElementsByTagName("head")[0];
            var Co = R ? Ly(R) : 0;
            break a;
          } catch (R) {}
        Co = 0;
      }
      f = Co;
      0 !== f && (b.cms = f);
      d.google_lrv !== K(a.U, 2) && (b.alvm = d.google_lrv || "none");
    },
    Qz = (a, b) => {
      let c = 0;
      a.location && a.location.ancestorOrigins
        ? (c = a.location.ancestorOrigins.length)
        : df(
            () => {
              c++;
              return !1;
            },
            !0,
            !0,
            a
          );
      c && (b.nhd = c);
    },
    Rz = (a, b) => {
      const c = X(b, 8, {});
      b = X(b, 9, {});
      const d = a.google_ad_section,
        e = a.google_ad_format;
      a = a.google_ad_slot;
      e
        ? (c[d] = c[d] ? c[d] + `,${e}` : e)
        : a && (b[d] = b[d] ? b[d] + `,${a}` : a);
    },
    Sz = (a, b, c) => {
      const d = a.G;
      var e = a.G;
      b.dt = rn;
      e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
      e = P();
      a: {
        var f = P();
        try {
          var g = f.performance;
          if (g && g.timing && g.now) {
            var h =
              g.timing.navigationStart +
              Math.round(g.now()) -
              g.timing.domLoading;
            break a;
          }
        } catch (G) {}
        h = null;
      }
      (e = h ? fx(h, e.Date.now() - rn, 1e6) : null) && (b.bdt = e);
      b.idt = fx(a.H, rn);
      e = a.G;
      b.shv = K(a.U, 2);
      a.Da && (b.mjsv = a.Da);
      "sa" == e.google_loader_used
        ? (b.ptt = 5)
        : "aa" == e.google_loader_used && (b.ptt = 9);
      /^\w{1,3}$/.test(e.google_loader_used) &&
        (b.saldr = e.google_loader_used);
      if ((e = $f(a.pubWin))) {
        b.is_amp = 1;
        h = e || $f();
        b.amp_v = h && h.mode ? +h.mode.version || null : null;
        if ((e = e || $f()) && e.container) {
          e = e.container.split(",");
          h = [];
          for (g = 0; g < e.length; g++) h.push(Zf[e[g]] || "x");
          e = h.join();
        } else e = null;
        e && (b.act = e);
      }
      P() == window.top && (b.abxe = 1);
      if ("_gfp_a_" in a.pubWin) {
        e = a.pubWin._gfp_a_;
        if ("boolean" !== typeof e)
          throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
          e = new mw(a.pubWin);
          (h = kw(e, c)) && (b.cookie = h);
          if (V(ij)) {
            h = c ? Dm("__gpi", c, e.j) : null;
            var k;
            (h = null == (k = jw(h)) ? void 0 : k.yc) && (b.gpic = h);
          }
          V(jj) &&
            "1" === (c ? Dm("__gpi_opt_out", c, e.j) : null) &&
            (b.gpico = "1");
        }
      }
      k = nm();
      h = X(k, 8, {});
      e = d.google_ad_section;
      h[e] && (b.prev_fmts = h[e]);
      h = X(k, 9, {});
      h[e] && (b.prev_slotnames = h[e].toLowerCase());
      Rz(d, k);
      e = X(k, 15, 0);
      0 < e && (b.nras = String(e));
      b.correlator = X(k, 7, mm());
      V(kj) && (b.rume = 1);
      if (d.google_ad_channel) {
        e = X(k, 10, {});
        h = "";
        g = d.google_ad_channel.split(Fz);
        for (f = 0; f < g.length; f++) {
          var l = g[f];
          e[l] ? (h += l + "+") : (e[l] = !0);
        }
        b.pv_ch = h;
      }
      if (d.google_ad_host_channel) {
        h = X(k, 11, []);
        g = d.google_ad_host_channel.split("|");
        k = -1;
        e = [];
        for (f = 0; f < g.length; f++) {
          l = g[f].split(Fz);
          h[f] || (h[f] = {});
          var m = "";
          for (var n = 0; n < l.length; n++) {
            var p = l[n];
            "" !== p && (h[f][p] ? (m += "+" + p) : (h[f][p] = !0));
          }
          m = m.slice(1);
          e[f] = m;
          "" !== m && (k = f);
        }
        h = "";
        if (-1 < k) {
          for (g = 0; g < k; g++) h += e[g] + "|";
          h += e[k];
        }
        b.pv_h_ch = h;
      }
      b.frm = d.google_iframing;
      b.ife = d.google_iframing_environment;
      k = d.google_ad_client;
      try {
        var r = Lj(),
          x = r.google_prev_clients;
        x || (x = r.google_prev_clients = {});
        if (k in x) var v = 1;
        else (x[k] = !0), (v = 2);
      } catch (G) {
        v = 0;
      }
      b.pv = v;
      r = a.pubWin.document;
      v = a.G;
      k = Cm(c, a.pubWin) || "";
      c = r.domain;
      g = a.pubWin.screen;
      f = r.referrer;
      m = Cg();
      if ($f()) var D = P().gaGlobal || {};
      else {
        e = Math.round(new Date().getTime() / 1e3);
        h = v.google_analytics_domain_name;
        c = "undefined" == typeof h ? Oy("auto", c) : Oy(h, c);
        n = -1 < k.indexOf("__utma=" + c + ".");
        l = -1 < k.indexOf("__utmb=" + c);
        (r = (cg() || P()).gaGlobal) ||
          ((r = {}), ((cg() || P()).gaGlobal = r));
        x = !1;
        if (n) {
          var w = k
            .split("__utma=" + c + ".")[1]
            .split(";")[0]
            .split(".");
          l ? (r.sid = w[3]) : r.sid || (r.sid = e + "");
          r.vid = w[0] + "." + w[1];
          r.from_cookie = !0;
        } else {
          r.sid || (r.sid = e + "");
          if (!r.vid) {
            x = !0;
            l = Math.round(2147483647 * Math.random());
            n = My.appName;
            p = My.version;
            var E = My.language ? My.language : My.browserLanguage,
              C = My.platform,
              I = My.userAgent;
            try {
              w = My.javaEnabled();
            } catch (G) {
              w = !1;
            }
            w = [n, p, E, C, I, w ? 1 : 0].join("");
            g
              ? (w += g.width + "x" + g.height + g.colorDepth)
              : t.java &&
                t.java.awt &&
                ((g = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize()),
                (w += g.screen.width + "x" + g.screen.height));
            w = w + k + (f || "");
            for (g = w.length; 0 < m; ) w += m-- ^ g++;
            r.vid = (l ^ (Ny(w) & 2147483647)) + "." + e;
          }
          (V(sj) && r.from_cookie) || (r.from_cookie = !1);
        }
        if (!r.cid) {
          b: for (
            e = h,
              w = 999,
              e &&
                ((e = 0 == e.indexOf(".") ? e.substr(1) : e),
                (w = e.split(".").length)),
              e = 999,
              k = k.split(";"),
              h = 0;
            h < k.length;
            h++
          )
            if ((g = Py.exec(k[h]) || Qy.exec(k[h]) || Ry.exec(k[h]))) {
              f = g[1] || 0;
              if (f == w) {
                D = g[2];
                break b;
              }
              f < e && ((e = f), (D = g[2]));
            }
          x && D && -1 != D.search(/^\d+\.\d+$/)
            ? ((r.vid = D), (r.from_cookie = !0))
            : D != r.vid && (r.cid = D);
        }
        r.dh = c;
        r.hid || (r.hid = Math.round(2147483647 * Math.random()));
        D = r;
      }
      b.ga_vid = D.vid;
      b.ga_sid = D.sid;
      b.ga_hid = D.hid;
      b.ga_fc = D.from_cookie;
      b.ga_cid = D.cid;
      b.ga_wpids = v.google_analytics_uacct;
      Qz(a.pubWin, b);
      (a = d.google_ad_layout) && 0 <= Yw[a] && (b.rplot = Yw[a]);
    };
  const Tz = (a, b) => {
    a = a.A;
    var c;
    (c = null == a ? 0 : B(a, 6)) || ((c = nm()), (c = X(c, 26, void 0)));
    c && (b.npa = 1);
    a &&
      (A(a, 3) && (b.gdpr = B(a, 3) ? "1" : "0"),
      (c = z(a, 1)) && (b.us_privacy = c),
      (c = z(a, 2)) && (b.gdpr_consent = c),
      (c = z(a, 4)) && (b.addtl_consent = c),
      (a = z(a, 7)) && (b.tcfe = a));
  };
  var Uz = (a, b) => {
      const c = a.G;
      Tz(a, b);
      vg(Sy, (d, e) => {
        b[d] = c[e];
      });
      Aw(c) && ((a = Ow(c)), (b.fa = a));
      b.pi ||
        null == c.google_ad_slot ||
        ((a = Wp(c)), null != a.j && ((a = no(a.j.value)), (b.pi = a)));
    },
    Vz = (a, b) => {
      var c = bg() || Qh(a.pubWin.top);
      c && ((b.biw = c.width), (b.bih = c.height));
      c = a.pubWin;
      c.top != c &&
        (a = Qh(a.pubWin)) &&
        ((b.isw = a.width), (b.ish = a.height));
    },
    Wz = (a, b) => {
      var c = a.pubWin;
      null !== c && c != c.top
        ? ((a = [c.document.URL]),
          c.name && a.push(c.name),
          (c = Qh(c, !1)),
          a.push(c.width.toString()),
          a.push(c.height.toString()),
          (a = of(a.join(""))))
        : (a = 0);
      0 !== a && (b.ifk = a);
    },
    Xz = (a, b) => {
      (a = tm()[a.G.google_ad_client]) && (b.psts = a.join());
    },
    Yz = (a, b, c) => {
      a = Bm(c, a.pubWin);
      a: {
        c = -1;
        try {
          a && (c = parseInt(a.getItem("goog_pem_mod"), 10));
        } catch (d) {
          a = null;
          break a;
        }
        a = 0 <= c && 1e3 > c ? c : null;
      }
      b.pem = a;
    },
    Zz = (a, b) => {
      (a = a.pubWin.google_user_agent_client_hint) && (b.uach = kd(a, 3));
    },
    $z = (a, b) => {
      (a = tz(a.pubWin)) &&
        0 < a.length &&
        (b.tt_state = kd(JSON.stringify(a), 3));
    },
    aA = (a, b) => {
      if ((a = a.pubWin.google_floc))
        (b.floc_id = a.id), (b.floc_ver = a.version);
    },
    bA = (a, b) => {
      try {
        const d =
          a.pubWin &&
          a.pubWin.external &&
          a.pubWin.external.getHostEnvironmentValue &&
          a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
        if (d) {
          var c = parseInt(JSON.parse(d("os-mode"))["os-mode"], 10);
          0 <= c && (b.wsm = c + 1);
        }
      } catch (d) {}
    },
    Gz = (a, b) => {
      const c = {};
      Uz(a, c);
      kz();
      c.adsid = Z[1];
      kz();
      c.pucrd = Z[6];
      Zz(a, c);
      $z(a, c);
      aA(a, c);
      Sz(a, c, b);
      Fg(c);
      Dh(889, () => {
        if (null == a.M) (c.adx = -12245933), (c.ady = -12245933);
        else {
          var d = Th(a.M, a.W);
          (c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady) ||
            ((c.adx = Math.round(d.x)), (c.ady = Math.round(d.y)));
          Sh(a.W) || ((c.adx = -12245933), (c.ady = -12245933), (a.j |= 32768));
        }
      });
      Vz(a, c);
      Wz(a, c);
      Mz(a, c);
      Lz(a, c);
      a.C && (c.oid = a.C);
      Xz(a, c);
      c.pvsid = Kf(a.pubWin, zh);
      Yz(a, c, b);
      bA(a, c);
      a.D && (c.scar = a.D);
      Pz(a, c, b);
      c.fu = a.j;
      c.bc = az();
      kz();
      c.jar = Z[4];
      Bd(a.U, 9) && Oz(c);
      $h() && (c.atl = !0);
      c.rc = a.G.rss;
      return c;
    };
  const Hz = /YtLoPri/;

  function cA({ Ad: a, se: b }) {
    return a || ("dev" === b ? "dev" : "");
  }
  var dA = "undefined" === typeof sttc ? void 0 : sttc;

  function eA(a) {
    try {
      return Wl(a, Xl), new Kl(JSON.parse(a));
    } catch (b) {
      zh.da(838, b instanceof Error ? b : Error(String(b)), void 0, (c) => {
        c.jspb = String(a);
      });
    }
    return new Kl();
  }

  function fA(a, b, c, d) {
    var e, f, g, h, k, l, m;
    const n = new rr();
    let p = "";
    const r = (x) => {
      try {
        const v = "object" === typeof x.data ? x.data : JSON.parse(x.data);
        p === v.paw_id && (le(a, "message", r), n.j(d(v)));
      } catch (v) {}
    };
    return "function" ===
      typeof (null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo)
      ? (L(a, "message", r), (p = c(a.gmaSdk)), n.promise)
      : "function" ===
          typeof (null ===
            (h =
              null ===
                (g =
                  null === (f = a.webkit) || void 0 === f
                    ? void 0
                    : f.messageHandlers) || void 0 === g
                ? void 0
                : g.getGmaQueryInfo) || void 0 === h
            ? void 0
            : h.postMessage) ||
        "function" ===
          typeof (null ===
            (m =
              null ===
                (l =
                  null === (k = a.webkit) || void 0 === k
                    ? void 0
                    : k.messageHandlers) || void 0 === l
                ? void 0
                : l.getGmaSig) || void 0 === m
            ? void 0
            : m.postMessage)
      ? ((p = String(Math.floor(2147483647 * kf(a)))),
        L(a, "message", r),
        b(a.webkit.messageHandlers, p),
        n.promise)
      : null;
  }

  function gA(a) {
    return fA(
      a,
      (b, c) => {
        var d;
        return void (
          null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig
        ).postMessage(c);
      },
      (b) => b.getQueryInfo(),
      (b) => b.signal
    );
  }

  function hA(a) {
    if (a.j) return a.j;
    a.j = Bf(a.l, "__uspapiLocator");
    return a.j;
  }

  function iA(a) {
    var b;
    return (
      "function" ===
        typeof (null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) ||
      null != hA(a)
    );
  }

  function jA(a, b) {
    var c, d;
    if (
      "function" ===
      typeof (null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi)
    )
      (null === (d = a.l) || void 0 === d ? void 0 : d.__uspapi)(
        "getUSPData",
        1,
        b
      );
    else if (hA(a)) {
      kA(a);
      const e = ++a.D;
      a.C[e] = b;
      a.j &&
        a.j.postMessage(
          {
            ["__uspapiCall"]: {
              command: "getUSPData",
              version: 1,
              callId: e,
            },
          },
          "*"
        );
    }
  }

  function lA(a, b) {
    let c = {};
    if (iA(a)) {
      var d = Aa(() => b(c));
      jA(a, (e, f) => {
        f && (c = e);
        d();
      });
      setTimeout(d, 500);
    } else b(c);
  }

  function kA(a) {
    a.A ||
      ((a.A = (b) => {
        var c;
        try {
          let e = {};
          "string" === typeof b.data ? (e = JSON.parse(b.data)) : (e = b.data);
          var d = e.__uspapiReturn;
          null === (c = a.C) || void 0 === c
            ? void 0
            : c[d.callId](d.returnValue, d.success);
        } catch (e) {}
      }),
      L(a.l, "message", a.A));
  }
  var mA = class extends Em {
    constructor(a) {
      super();
      this.l = a;
      this.j = null;
      this.C = {};
      this.D = 0;
      this.A = null;
    }
    B() {
      this.C = {};
      this.A && (le(this.l, "message", this.A), delete this.A);
      delete this.C;
      delete this.l;
      delete this.j;
      super.B();
    }
  };
  var nA = class extends y {
    constructor(a) {
      super(a);
    }
  };
  var pA = class extends y {
      constructor(a) {
        super(a, -1, oA);
      }
    },
    oA = [1, 2];
  var qA = class extends y {
    constructor(a) {
      super(a);
    }
  };
  var rA = class extends y {
    constructor(a) {
      super(a);
    }
  };

  function sA(a) {
    a.D ||
      (a.l || (a.j.googlefc ? (a.l = a.j) : (a.l = Bf(a.j, "googlefcPresent"))),
      (a.D = !0));
    return !!a.l;
  }

  function tA(a) {
    a.A ||
      ((a.A = (b) => {
        try {
          const c = Id(rA, b.data.__fciReturn);
          (0, a.C[z(c, 1)])(c);
        } catch (c) {}
      }),
      L(a.j, "message", a.A));
  }

  function uA(a, b, c) {
    if (sA(a))
      if (a.l === a.j)
        (a = a.j.googlefc || (a.j.googlefc = {})),
          (a.__fci = a.__fci || []),
          a.__fci.push(b, (d) => {
            c(Id(rA, d));
          });
      else {
        tA(a);
        const d = a.F++;
        a.C[d] = c;
        a.l.postMessage(
          {
            ["__fciCall"]: {
              command: b,
              callId: d,
            },
          },
          "*"
        );
      }
  }

  function vA(a, b) {
    return new Promise((c) => {
      uA(a, b, c);
    });
  }
  var wA = class extends Em {
      constructor(a) {
        super();
        this.j = a;
        this.A = this.l = null;
        this.C = {};
        this.F = 0;
        this.D = !1;
      }
    },
    xA = (a, b, c, d) => {
      if (!b) return Promise.resolve(null);
      const e = H(b, nA, 3);
      b = H(b, qA, 2);
      return e && b && 1 === z(b, 1) && 2 === z(e, 1)
        ? vA(a, "getM25Consent").then((f) => {
            var g = H(f, pA, 4);
            if (g) {
              if (((f = d), c)) {
                const h = z(g, 1);
                h && h.includes(c) && (f = !1);
                (g = z(g, 2)) && g.includes(c) && (f = !0);
              }
            } else f = null;
            return f;
          })
        : Promise.resolve(null);
    };
  const yA = (a, b) => {
    try {
      var c,
        d,
        e = ve(Ad(b, 2, 0)),
        f = K(b, 3);
      a: switch (Ad(b, 4, 0)) {
        case 1:
          var g = "pt";
          break a;
        case 2:
          g = "cr";
          break a;
        default:
          g = "";
      }
      var h = new xe(e, f, g),
        k =
          null !==
            (d =
              null === (c = H(b, ue, 5)) || void 0 === c ? void 0 : K(c, 1)) &&
          void 0 !== d
            ? d
            : "";
      h.Ra = k;
      h.X = a;
      var l = h.build();
      pe(l);
    } catch (m) {}
  };

  function zA(a, b) {
    a.goog_sdr_l ||
      (Object.defineProperty(a, "goog_sdr_l", {
        value: !0,
      }),
      "complete" === a.document.readyState
        ? yA(a, b)
        : L(a, "load", () => void yA(a, b)));
  }

  function AA(a) {
    var b, c;
    try {
      return (
        null !==
          (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) &&
        void 0 !== c
          ? c
          : {}
      ).google_ads_top_frame;
    } catch (d) {}
    return null;
  }

  function BA(a) {
    const b = RegExp("^https?://[^/#?]+/?$");
    return !!a && !b.test(a);
  }

  function CA(a) {
    if (a === a.top || cf(a.top))
      return Promise.resolve({
        status: 4,
      });
    const b = AA(a);
    if (!b)
      return Promise.resolve({
        status: 2,
      });
    if (a.parent === a.top && BA(a.document.referrer))
      return Promise.resolve({
        status: 3,
      });
    const c = new rr();
    a = new MessageChannel();
    a.port1.onmessage = (d) => {
      "__goog_top_url_resp" === d.data.msgType &&
        c.j({
          Ma: d.data.topUrl,
          status: d.data.topUrl ? 0 : 1,
        });
    };
    b.postMessage(
      {
        msgType: "__goog_top_url_req",
      },
      "*",
      [a.port2]
    );
    return c.promise;
  }
  var yh = nr`onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)`;

  function DA(a, b) {
    const c = a.document.getElementById(b.google_async_iframe_id + "_anchor");
    a = a.document.getElementById(b.google_async_iframe_id + "_expand");
    if (null == c || null == a) throw Error("no_ins");
    return {
      W: c,
      Y: a,
    };
  }
  var FA = async (a) => {
      var { U: b, $: c, Da: d, slot: e } = a;
      a = e.vars;
      const { W: f, Y: g } = DA(e.pubWin, e.vars),
        h = new hw({
          M: Ng(e.pubWin),
          pubWin: e.pubWin,
          G: a,
          U: b,
          $: c,
          Da: d,
          W: f,
          Y: g,
        });
      h.H = Date.now();
      bi(1, [h.G]);
      try {
        await EA(h);
      } catch (k) {
        if (!zh.da(159, k, void 0, void 0)) throw k;
      }
      Dh(639, () => {
        {
          var k = h.G;
          const m = h.M;
          if (
            m &&
            1 === k.google_responsive_auto_format &&
            !0 === k.google_full_width_responsive_allowed
          ) {
            var l;
            (l = (l = m.document.getElementById(k.google_async_iframe_id))
              ? Xe(l, "INS", "adsbygoogle")
              : null)
              ? ((k = new ex(m, l, k)),
                (k.l = t.setInterval(la(k.F, k), 500)),
                k.F(),
                (k = !0))
              : (k = !1);
          } else k = !1;
        }
        return k;
      });
      Dh(160, () => {
        const k = Lj().google_jobrunner;
        Uy(k) && k.rl();
      });
      Dh(914, () => {
        ew(e.pubWin.top, e.vars, b, e.vars.google_ad_client);
      });
    },
    EA = (a) => {
      if (/_sdo/.test(a.G.google_ad_format)) return Promise.resolve();
      var b = nm(),
        c = X(b, 22, !1);
      c || (b.S[qm(22)] = !0);
      c ||
        ((c = a.G),
        (b = a.U),
        ii(kn).j(13),
        ii(kn).j(11),
        (c = Ml(c)),
        (b = K(b, 10)) && c.push(b));
      b = nm();
      (c = X(b, 23, !1)) || (b.S[qm(23)] = !0);
      if (!c) {
        c = H(a.U, El, 5) || new El();
        b = Bd(a.U, 6);
        b = new Dv(a.pubWin, a.G.google_ad_client, c, b);
        c = V(cj);
        b.l = c;
        const e = H(b.C, Pk, 1);
        if (b.l) {
          c = b.j;
          if (b.B && !vm(e)) {
            var d = new wm();
            d = F(d, 1, 1);
          } else d = null;
          if (d) {
            d = Gd(d);
            try {
              c.localStorage.setItem("google_auto_fc_cmp_setting", d);
            } catch (f) {}
          }
        }
        e && it(new jt(b.j, new pt(b.j, b.A), e, new Zr(b.j)));
      }
      b = !$f() && !bc();
      return !b || (b && !GA(a)) ? HA(a) : Promise.resolve();
    };
  const IA = (a, b, c) => {
    c = void 0 === c ? !1 : c;
    b = Th(a.M, b);
    const d = bg() || Qh(a.pubWin.top);
    if (
      !b ||
      -12245933 == b.y ||
      -12245933 == d.width ||
      -12245933 == d.height ||
      !d.height
    )
      return 0;
    let e = 0;
    try {
      const f = a.pubWin.top;
      e = Rh(f.document, f).y;
    } catch (f) {
      return 0;
    }
    a = e + d.height;
    return b.y < e
      ? c
        ? 0
        : (e - b.y) / d.height
      : b.y > a
      ? (b.y - a) / d.height
      : 0;
  };

  function GA(a) {
    return JA(a) || KA(a);
  }

  function JA(a) {
    const b = a.G;
    if (!b.google_pause_ad_requests) return !1;
    const c = t.setTimeout(() => {
        T("abg:cmppar", {
          client: a.G.google_ad_client,
          url: a.G.google_page_url,
        });
      }, 1e4),
      d = S(450, () => {
        b.google_pause_ad_requests = !1;
        t.clearTimeout(c);
        a.pubWin.removeEventListener(
          "adsbygoogle-pub-unpause-ad-requests-event",
          d
        );
        GA(a) || HA(a);
      });
    a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
    return !0;
  }

  function KA(a) {
    const b = a.pubWin.document,
      c = LA();
    if (0 > c.hidden && 0 > c.visible) return !1;
    const d = a.W,
      e = gi(b);
    if (!e) return !1;
    if (!hi(b)) return MA(a, c.visible, d);
    const f = 3 === fi(b);
    if (IA(a, d) <= c.hidden && !f) return !1;
    let g = S(332, () => {
      !hi(b) && g && (le(b, e, g), MA(a, c.visible, d) || HA(a), (g = null));
    });
    return L(b, e, g);
  }
  async function NA() {
    if (!cc() && !u("Edge")) {
      var a = Ij(Ri),
        b = Ij(hj);
      if (!(0 >= b)) {
        var c = xh(),
          d = new Worker(be(c), void 0);
        c = new Promise((f) => {
          d.addEventListener("message", (g) => {
            0 <= g.data
              ? f()
              : d.postMessage({
                  a,
                });
          });
        });
        var e = performance.now();
        await Promise.race([c, Of(b, "timeout")]).then((f) => {
          "timeout" === f
            ? T("adsense_td_worker_timeout", {
                wait_ms: a,
                timeout_ms: b,
              })
            : T("adsense_td_worker_time", {
                wait_ms: Math.round(performance.now() - e),
                timeout_ms: b,
              });
        });
      }
    }
  }

  function LA() {
    const a = {
      hidden: 0,
      visible: Ij(Yi) || 4,
    };
    if (!t.IntersectionObserver || V(Si)) a.visible = -1;
    if ($e()) {
      const b = Ij(Xi) || 1;
      a.visible *= b;
    }
    return a;
  }

  function MA(a, b, c) {
    if (!c || 0 > b) return !1;
    var d = a.G;
    if (
      (!ak(d.google_reactive_ad_format) &&
        (Aw(d) || d.google_reactive_ads_config)) ||
      !Sh(c) ||
      IA(a, c) <= b
    )
      return !1;
    var e = nm();
    const f = X(e, 8, {});
    e = X(e, 9, {});
    d = d.google_ad_section || d.google_ad_region || "";
    const g = !!a.pubWin.google_apltlad;
    if (!f[d] && !e[d] && !g) return !1;
    a.F = new t.IntersectionObserver(
      (h, k) => {
        Ea(h, (l) => {
          0 >= l.intersectionRatio ||
            (k.unobserve(l.target),
            Dh(294, () => {
              HA(a);
            }));
        });
      },
      {
        rootMargin: 100 * b + "%",
      }
    );
    a.F.observe(c);
    return !0;
  }
  var HA = async (a) => {
      Dh(326, () => {
        if (1 === Eg(a.G)) {
          var c = V(zj),
            d = c || V(xj),
            e = a.pubWin;
          if (d && e === e.top) {
            var f = new Wh();
            d = new Xh();
            var g = Kf(a.pubWin);
            Cd(f, 1, g, 0);
            g = pn(a.pubWin);
            Cd(f, 5, g, "");
            Kd(f, 2);
            Dd(d, 1, f);
            f = new Vh();
            f = Cd(f, 10, !0, !1);
            g = V(pj);
            f = Cd(f, 8, g, !1);
            g = V(qj);
            f = Cd(f, 9, g, !1);
            g = V(uj);
            f = Cd(f, 7, g, !1);
            g = V(tj);
            f = Cd(f, 13, g, !1);
            g = V(vj);
            f = Cd(f, 14, g, !1);
            Dd(d, 2, f);
            e.google_rum_config = d.toJSON();
            c = Bd(a.U, 9) && c ? a.$.ge : a.$.he;
            ff(e.document, de(c));
          } else kh(th);
        }
      });
      try {
        await OA(a);
      } catch (c) {
        zh.da(827, c, void 0, void 0);
      }
      a.G.google_ad_channel = PA(a, a.G.google_ad_channel);
      a.G.google_tag_partner = QA(a, a.G.google_tag_partner);
      RA(a);
      const b = a.G.google_start_time;
      "number" === typeof b && ((rn = b), (a.G.google_start_time = null));
      Dh(161, () => {
        const c = a.G;
        null == c.google_ad_output && (c.google_ad_output = "html");
        if (null != c.google_ad_client) {
          var d;
          (d = String(c.google_ad_client))
            ? ((d = d.toLowerCase()),
              "ca-" != d.substring(0, 3) && (d = "ca-" + d))
            : (d = "");
          c.google_ad_client = d;
        }
        null != c.google_ad_slot &&
          (c.google_ad_slot = String(c.google_ad_slot));
        if (null == c.google_flash_version) {
          try {
            var e = Lg();
          } catch (f) {
            e = "0";
          }
          c.google_flash_version = e;
        }
        c.google_webgl_support = !!M.WebGLRenderingContext;
        c.google_ad_section = c.google_ad_section || c.google_ad_region || "";
        c.google_country = c.google_country || c.google_gl || "";
        e = new Date().getTime();
        Array.isArray(c.google_color_bg) &&
          (c.google_color_bg = iw(a, c.google_color_bg, e));
        Array.isArray(c.google_color_text) &&
          (c.google_color_text = iw(a, c.google_color_text, e));
        Array.isArray(c.google_color_link) &&
          (c.google_color_link = iw(a, c.google_color_link, e));
        Array.isArray(c.google_color_url) &&
          (c.google_color_url = iw(a, c.google_color_url, e));
        Array.isArray(c.google_color_border) &&
          (c.google_color_border = iw(a, c.google_color_border, e));
        Array.isArray(c.google_color_line) &&
          (c.google_color_line = iw(a, c.google_color_line, e));
      });
      SA(a);
      Aw(a.G) &&
        (Tl() && (a.G.google_adtest = a.G.google_adtest || "on"),
        (a.G.google_pgb_reactive = a.G.google_pgb_reactive || 3));
      TA(a.M);
      return UA(a);
    },
    SA = (a) => {
      a.M &&
        (Ew(a.M, a.$.Cd),
        Cw(a.M.location) &&
          Nw(a.M, {
            enable_page_level_ads: {
              ["pltais"]: !0,
            },
            google_ad_client: a.G.google_ad_client,
          }));
    },
    PA = (a, b) => (b ? [b] : []).concat(Ll(a.G).ad_channels || []).join("+"),
    QA = (a, b) => (b ? [b] : []).concat(Ll(a.G).tag_partners || []).join("+"),
    XA = (a, b, c, d) => {
      c.src = gx(a);
      const e = d.pubWin.document;
      a = P() == window.top;
      c = VA(c);
      a && d.l.push(dg(d.pubWin, c));
      WA(d.W, c);
      V(yi) &&
        t.setTimeout(
          S(644, () => {
            Mf(e.getElementById(b), () => {
              t.setTimeout(() => {
                for (const f of d.l) f();
                d.l.length = 0;
              }, 200);
            });
          }),
          0
        );
      return Promise.resolve(c);
    };

  function VA(a) {
    const b = Re(document, "IFRAME");
    lf(a, (c, d) => {
      null != c && b.setAttribute(d, c);
    });
    return b;
  }
  var YA = (a, b, c) =>
    9 == a.G.google_reactive_ad_format && Xe(a.Y, null, "fsi_container", void 0)
      ? (a.W.appendChild(b), Promise.resolve(b))
      : Lw(a.$.Mc, 525, (d) => {
          a.W.appendChild(b);
          const e = Bm(c, a.pubWin);
          d.createAdSlot(a.M, a.G, b, a.Y.parentElement, e);
          return b;
        });

  function ZA(a, b, c, d) {
    zA(
      a.pubWin,
      re(
        Kd(Kd(qe(new se(), te(new ue(), String(Kf(a.pubWin)))), 4), 2),
        K(a.U, 2)
      )
    );
    const e = a.M;
    a.G.google_acr && a.G.google_acr(b);
    L(b, "load", () => {
      b && b.setAttribute("data-load-complete", !0);
      (a.G.ovlp || V(aj)) && e && e === a.pubWin && $A(e, a, a.Y, b);
    });
    var f = (g) => {
      g && a.l.push(() => g.kb());
    };
    aB(a, b);
    V(jj) && bB(a, b);
    !e ||
      (Aw(a.G) && !Pw(a.G)) ||
      (f(new vx(a, b)),
      f(new By(e, b, a.G)),
      f(new zx(a, b)),
      f(new sx(a, b)),
      f(e.IntersectionObserver ? null : new ux(e, b, a.W)));
    e &&
      (f(new mx(e, b)),
      a.l.push(Zw(e, a.G)),
      ii(dx).init(e),
      a.l.push(ix(e, a.Y, b)));
    V(yj) || cB(a, c, b);
    b && b.setAttribute("data-google-container-id", d);
    c = a.G.iaaso;
    null != c &&
      ((d = a.Y),
      (f = d.parentElement),
      (f && Jg.test(f.className) ? f : d).setAttribute("data-auto-ad-size", c));
    c = a.Y;
    c.setAttribute("tabindex", "0");
    c.setAttribute("title", "Advertisement");
    c.setAttribute("aria-label", "Advertisement");
    dB(a);
  }
  var aB = (a, b) => {
      const c = a.pubWin,
        d = a.G.google_ad_client,
        e = tm();
      let f = null;
      const g = Hh(c, "pvt", (h, k) => {
        "string" === typeof h.token &&
          k.source === b.contentWindow &&
          ((f = h.token),
          g(),
          (e[d] = e[d] || []),
          e[d].push(f),
          100 < e[d].length && e[d].shift());
      });
    },
    bB = (a, b) => {
      Hh(a.pubWin, "gpi-uoo", (c, d) => {
        if (d.source === b.contentWindow) {
          d = new Ce();
          d = F(d, 1, c.userOptOut ? "1" : "0");
          d = F(d, 2, Number.MAX_SAFE_INTEGER);
          var e = bf(a.G.google_page_url.match(af)[5] || null);
          d = F(d, 3, e);
          e = bf(a.G.google_page_url.match(af)[3] || null);
          e = F(d, 4, e);
          d = new mw(a.pubWin);
          lw(d, "__gpi_opt_out", e, a.A);
          if (c.clearAdsData && (c = a.A)) {
            e = Dm("__gpi", c, d.j);
            var f = jw(e);
            f &&
              ((d = d.j),
              (e = f.path),
              (f = f.domain),
              B(c, 5) &&
                "null" !== d.origin &&
                new Am(d.document).remove("__gpi", e, f));
          }
        }
      });
    };
  const dB = (a) => {
      const b = $f(a.pubWin);
      if (b)
        if ("AMP-STICKY-AD" === b.container) {
          const c = (e) => {
              "fill_sticky" === e.data && b.renderStart && b.renderStart();
            },
            d = S(616, c);
          L(a.pubWin, "message", d);
          a.l.push(() => {
            le(a.pubWin, "message", c);
          });
        } else b.renderStart && b.renderStart();
    },
    $A = (a, b, c, d) => {
      Fx(new Ox(a, void 0), c)
        .then((e) => {
          bi(8, [e]);
          return e;
        })
        .then((e) => {
          const f = c.parentElement;
          (f && Jg.test(f.className) ? f : c).setAttribute(
            "data-overlap-observer-io",
            e.isOverlappingOrOutsideViewport
          );
          return e;
        })
        .then((e) => {
          const f = b.G.armr || "",
            g = e.executionTime || "",
            h = null == b.G.iaaso ? "" : Number(b.G.iaaso),
            k = Number(e.isOverlappingOrOutsideViewport),
            l = Ga(
              e.entries,
              (D) =>
                `${D.overlapType}:${D.overlapDepth}:${D.overlapDetectionPoint}`
            ),
            m = e.overlappedArea.toFixed(2),
            n = d.dataset.googleQueryId || "",
            p = m * e.targetRect.width * e.targetRect.height,
            r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
            x = Gg(e.target),
            v = [
              e.targetRect.left,
              e.targetRect.top,
              e.targetRect.right,
              e.targetRect.bottom,
            ].join();
          e = e.viewportSize.width + "x" + e.viewportSize.height;
          T(
            "ovlp",
            {
              adf: b.G.google_ad_dom_fingerprint,
              armr: f,
              client: b.G.google_ad_client,
              eid: pn(b.G),
              et: g,
              fwrattr: b.G.google_full_width_responsive,
              iaaso: h,
              io: k,
              saldr: b.G.google_loader_used,
              oa: m,
              oe: l.join(","),
              qid: n,
              rafmt: b.G.google_responsive_auto_format,
              roa: p,
              slot: b.G.google_ad_slot,
              sp: r,
              tgt: x,
              tr: v,
              url: b.G.google_page_url,
              vp: e,
            },
            1
          );
        })
        .catch((e) => {
          bi(8, ["Error:", e.message, c]);
          T(
            "ovlp-err",
            {
              err: e.message,
            },
            1
          );
        });
    };
  var eB = (a) => {
      var b = u("Edge") ? 4e3 : 8100;
      var c = a;
      c.length > b &&
        ((c = c.substring(0, b - 8)),
        (c = c.replace(/%\w?$/, "")),
        (c = c.replace(/&[^=]*=?$/, "")),
        (c += "&trunc=1"));
      if (c !== a) {
        b -= 8;
        let d = a.lastIndexOf("&", b);
        -1 === d && (d = a.lastIndexOf("?", b));
        T(
          "trn",
          {
            ol: a.length,
            tr: -1 === d ? "" : a.substring(d + 1),
            url: a,
          },
          0.01
        );
      }
      return c;
    },
    fB = (a, b, c) => {
      var d = b,
        e = 0 === a.B;
      b = a.G;
      const f = b.google_async_iframe_id,
        g = b.google_ad_width,
        h = b.google_ad_height,
        k = Qw(b),
        l = {
          id: f,
          name: f,
        };
      k ||
        (l.style =
          "left:0;position:absolute;top:0;border:0;" +
          `width:${g}px;` +
          `height:${h}px;`);
      var m = zf();
      if (
        m["allow-top-navigation-by-user-activation"] &&
        m["allow-popups-to-escape-sandbox"]
      ) {
        m = d;
        if ((d = "fsb=" + encodeURIComponent("1"))) {
          var n = m.indexOf("#");
          0 > n && (n = m.length);
          var p = m.indexOf("?");
          if (0 > p || p > n) {
            p = n;
            var r = "";
          } else r = m.substring(p + 1, n);
          m = [m.substr(0, p), r, m.substr(n)];
          n = m[1];
          m[1] = d ? (n ? n + "&" + d : d) : n;
          d = m[0] + (m[1] ? "?" + m[1] : "") + m[2];
        } else d = m;
        l.sandbox = yf().join(" ");
      }
      n = d;
      d = eB(d);
      p = e ? d.replace(/&ea=[^&]*/, "") + "&ea=0" : d;
      m = k ? d : gx(p);
      null != g && (l.width = String(g));
      null != h && (l.height = String(h));
      l.frameborder = "0";
      l.src = m;
      l.marginwidth = "0";
      l.marginheight = "0";
      l.vspace = "0";
      l.hspace = "0";
      l.allowtransparency = "true";
      l.scrolling = "no";
      l.allowfullscreen = "true";
      m = "";
      if (e) {
        m = 10;
        for (p = ""; 0 < m--; )
          p +=
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(
              Math.floor(62 * Math.random())
            );
        m = p;
        d = Fh(d, m);
        Fh(n, m);
      } else d = p;
      b.dash && (l.srcdoc = b.dash);
      n = tz(a.pubWin);
      p = b.google_trust_token_additional_signing_data;
      n && uz(n) && (n = wz(n, p)) && (l.trustToken = JSON.stringify(n));
      if (V(nj)) {
        n = a.pubWin.document;
        V(oj)
          ? (p =
              (p = window.navigator.userAgent.match(/Chrome\/([0-9]+)/)) &&
              92 > Number(p[1])
                ? "conversion-measurement"
                : "attribution-reporting")
          : (p = "conversion-measurement");
        var x;
        if (null == (x = n.featurePolicy) ? 0 : x.features().includes(p))
          l.allow = p;
      }
      k
        ? ((l.name = ""), (x = VA(l)), (c = YA(a, x, c)))
        : (c = XA(d, f, l, a));
      e &&
        ((e = a.$.xe),
        (b = {
          id: f,
          url: d,
          width: g,
          height: h,
          oc: m,
          ee: a.pubWin,
          nd: f,
          Th: "google_expandable_ad_slot" + Eg(b),
          Pd: e.toString(),
          Sb: a.pubWin,
        }),
        (b =
          !b.id || !b.url || 0 >= b.width || 0 >= b.height || !b.oc || !b.Sb
            ? void 0
            : Mh(b.Sb, ma(Oh, b, e))),
        b && a.l.push(b));
      return c;
    },
    cB = (a, b, c) => {
      const d = !cc() || 0 <= Cb(hc(), 11) ? si() : ji();
      d.getOseId() &&
        ((P().Goog_AdSense_getAdAdapterInstance = si),
        d.registerAdBlock(b, 1, "", c),
        a.l.push(() => {
          d.unloadAdBlock(c, !1, !0);
        }));
    };
  async function gB(a) {
    var b = a.G,
      c = a.pubWin,
      d = a.A,
      e = Bm(d, a.pubWin);
    if (!B(d, 5) && V(zi)) return Promise.resolve();
    B(d, 5) && sw(d, a.pubWin, a.G.google_ad_client);
    var f = a.G.google_reactive_ads_config;
    if (f) {
      Kw(a.M, f);
      const g = Bm(d);
      Vw(f, a, g);
      f = f.page_level_pubvars;
      ea(f) && Za(a.G, f);
    }
    await NA();
    B(d, 5) && (await hB(a.G));
    if (!V(Ej) || !vz(a.pubWin, Um(), K(a.U, 8))) {
      const g = Ij(Gj);
      f = c.google_trust_token_operation_promise;
      0 < g &&
        f &&
        (await Promise.race([
          f,
          new Promise((h) => void setTimeout(() => h(), g)),
        ]));
    }
    f = "";
    Qw(b)
      ? ((f = a.$.ye.toString() + "#" + Jz(b)), Rz(b, nm()), iB(b))
      : ((5 == b.google_pgb_reactive && b.google_reactive_ads_config) ||
          !Bw(b) ||
          zw(c, b, e)) &&
        iB(b) &&
        (f = Iz(a, d));
    bi(2, [b, f]);
    if (!f) return Promise.resolve();
    b.google_async_iframe_id || Dg(c);
    e = Eg(b);
    b =
      t.window === t.window.top
        ? "a!" + e.toString(36)
        : `${e.toString(36)}.${Fc()}`;
    c = 0 < IA(a, a.W, !0);
    e = {
      ["ifi"]: e,
      ["uci"]: b,
    };
    c && ((c = nm()), (e.btvi = X(c, 21, 1)), sm(c, 21));
    f = Ag(e, f);
    d = fB(a, f, d);
    f = eB(f);
    a.G.rpe &&
      uy(a.pubWin, a.W, {
        height: a.G.google_ad_height,
        jc: "force",
        lc: !0,
        Pc: !0,
        cb: a.G.google_ad_client,
      });
    d = await d;
    try {
      ZA(a, d, f, b);
    } catch (g) {
      zh.da(223, g, void 0, void 0);
    }
  }
  const hB = (a) =>
      ("aa" !== a.google_loader_used && "sa" !== a.google_loader_used) ||
      !(ec() ? 0 <= Cb(hc(), 11) : dc() && 0 <= Cb(hc(), 65))
        ? (pz(null), Promise.resolve())
        : new Promise((b) => {
            pz(b.bind(null, !0));
          }),
    jB = (a) => {
      const b = new mA(a);
      return new Promise((c) => {
        lA(b, (d) => {
          d && "string" === typeof d.uspString ? c(d.uspString) : c();
        });
      });
    },
    kB = (a) => {
      let b = Ij(Ei);
      0 > b && (b = -1);
      a = new Pm(a, b);
      return Jm(a) ? Om(a) : Promise.resolve();
    },
    lB = (a) => {
      var b = Af(t.top, "googlefcPresent");
      t.googlefc &&
        !b &&
        T(
          "adsense_fc_has_namespace_but_no_iframes",
          {
            publisherId: a,
          },
          1
        );
    },
    mB = (a) => (sA(a) ? vA(a, "loaded") : Promise.resolve()),
    nB = (a, b) => {
      const c = b.ue,
        d = b.uspString;
      b = b.le;
      const e = new zm();
      if (c) {
        var f = ym(e, Hm(c));
        f = F(f, 2, c.tcString);
        f = F(f, 4, c.addtlConsent || "");
        F(f, 7, c.internalErrorState);
        void 0 !== c.gdprApplies && F(e, 3, c.gdprApplies);
      } else ym(e, !0);
      d && F(e, 1, d);
      null !== b && F(e, 6, b);
      a.A = e;
    },
    oB = (a) => {
      var b = Ij(Bi);
      if (0 >= b) return Promise.resolve();
      const c = Dh(809, () => gA(a));
      return c
        ? Promise.race([c.catch(() => "0"), Of(b, "0")])
        : Promise.resolve();
    },
    pB = (a) => {
      var b = Ij(Di);
      if (0 >= b) return Promise.resolve();
      const c = dh();
      return Promise.race([Dh(832, () => CA(a)), Of(b)]).then((d) => {
        let e;
        const f = null != (e = null == d ? void 0 : d.status) ? e : 100;
        T("afc_etu", {
          etus: f,
          sig: dh() - c,
          tms: b,
        });
        return null == d ? void 0 : d.Ma;
      });
    },
    qB = (a) => {
      var b = Ij(Gj);
      const c = S(779, () => Dz(new Ez(a)));
      return Promise.race([c(), Of(b)]);
    };
  var rB = async (a) => {
      gz = P;
      lz(K(a.U, 8));
      Jv(a.pubWin);
      lB(a.G.google_ad_client);
      var b = new wA(a.pubWin),
        c = await mB(b);
      b = [
        kB(a.pubWin),
        jB(a.pubWin),
        xA(b, c, a.G.google_ad_client, Bd(a.U, 6)),
      ];
      b = await Promise.all(b);
      nB(a, {
        ue: b[0],
        uspString: b[1],
        le: b[2],
      });
      V(Ej) && vz(a.pubWin, Um(), K(a.U, 8)) && (await qB(!!B(a.A, 5)));
      b = oB(a.pubWin);
      c = Dh(868, () => pB(a.pubWin));
      a.D = (await b) || "";
      a.Ma = (await c) || "";
      await gB(a);
    },
    UA = (a) => {
      var b = a.pubWin.document,
        c = a.G,
        d = c.google_ad_width;
      const e = c.google_ad_height;
      let f = 0;
      try {
        !1 === c.google_allow_expandable_ads && (f |= 1);
        if (
          !b.body ||
          isNaN(c.google_ad_height) ||
          isNaN(c.google_ad_width) ||
          !/^http/.test(b.location.protocol)
        )
          f |= 2;
        a: {
          c = navigator;
          const h = c.userAgent,
            k = c.platform,
            l = /WebKit\/(\d+)/,
            m = /rv:(\d+\.\d+)/,
            n = /rv:1\.8([^.]|\.0)/;
          if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(h)) {
            const p = (l.exec(h) || [0, 0])[1],
              r = (m.exec(h) || [0, 0])[1];
            if (
              (/Win/.test(k) && /Trident/.test(h) && 11 <= b.documentMode) ||
              (!p && "Gecko" === c.product && 27 <= r && !n.test(h)) ||
              536 <= p
            ) {
              var g = !0;
              break a;
            }
          }
          g = !1;
        }
        g || (f |= 4);
        Mj(a.pubWin, a.pubWin.document, d, e) && (f |= 2);
      } catch (h) {
        f |= 8;
      }
      a.B = f;
      0 === a.B || (a.G.google_allow_expandable_ads = !1);
      Lj() != a.pubWin && (a.j |= 4);
      3 === fi(a.pubWin.document) && (a.j |= 32);
      if ((b = a.M)) (b = a.M), (b = !(W(b).scrollWidth <= W(b).clientWidth));
      b && (a.j |= 1024);
      a.pubWin.Prototype && a.pubWin.Prototype.Version && (a.j |= 16384);
      a.G.google_loader_features_used &&
        (a.j |= a.G.google_loader_features_used);
      V(yj)
        ? (a.C = 2)
        : ((b = Ij(bj)),
          (ni = ri),
          (ei = 0.02),
          (di = b),
          (b = !cc() || 0 <= Cb(hc(), 11) ? si() : ji()),
          (d = nm()),
          (a.C = b.setupOse(X(d, 7, mm()))));
      return rB(a);
    };

  function WA(a, b) {
    a.style.visibility = "visible";
    for (var c; (c = a.firstChild); ) a.removeChild(c);
    a.appendChild(b);
  }
  var iB = (a) => {
      const b = nm(),
        c = a.google_ad_section;
      Aw(a) && sm(b, 15);
      if (Mg(a)) {
        if (100 < sm(b, 5)) return !1;
      } else if (100 < sm(b, 6) - X(b, 15, 0) && "" == c) return !1;
      return !0;
    },
    RA = (a) => {
      const b = a.M;
      if (
        b &&
        !Ll(b).ads_density_stats_processed &&
        !$f(b) &&
        ((Ll(b).ads_density_stats_processed = !0), V($i) || 0.01 > kf(b))
      ) {
        const c = () => {
          if (b) {
            var d = Iu(
              Du(b),
              a.G.google_ad_client,
              b.location.hostname,
              pn(a.G).split(",")
            );
            T("ama_stats", d, 1);
          }
        };
        "complete" === b.document.readyState
          ? t.setTimeout(c, 1e3)
          : L(b, "load", () => {
              t.setTimeout(c, 1e3);
            });
      }
    },
    TA = (a) => {
      a &&
        !Ll(a).host_pinged_back &&
        ((Ll(a).host_pinged_back = !0),
        T(
          "abg_host",
          {
            host: a.location.host,
          },
          0.01
        ));
    },
    OA = async (a) => {
      const b = a.pubWin.document;
      if ("function" === typeof b.interestCohort && V(lj)) {
        const c = Ij(mj),
          d = await Promise.race([
            (async () => {
              const e = performance.now(),
                f = await b.interestCohort();
              T(
                "flocapi",
                {
                  time: performance.now() - e,
                },
                1
              );
              return f;
            })(),
            new Promise((e) => void setTimeout(() => e(), c)),
          ]);
        d && (a.pubWin.google_floc = d);
      }
    };
  ((a, b, c) => {
    Dh(843, () => {
      var d = t.google_sl_win || t;
      if (!d.google_sa_impl) {
        var e = eA(a);
        Vm(Bd(e, 6));
        qn(zh, K(e, 2));
        bi(16, [3, e.toJSON()]);
        var f = cA({
            Ad: b,
            se: K(e, 2),
          }),
          g = c(f, e);
        d.google_sa_impl = async (h) => {
          await FA({
            U: e,
            $: g,
            Da: f,
            slot: h,
          });
        };
        on(hn(d));
        d.google_process_slots && d.google_process_slots();
        d = (t.Prototype || {}).Version;
        null != d &&
          T("prtpjs", {
            version: d,
          });
      }
    });
  })(dA, "m202109080101", function (a, b) {
    const c = 2012 < Ad(b, 1, 0) ? `_fy${Ad(b, 1, 0)}` : "";
    K(b, 3);
    const d = K(b, 3).replace(/^\//, ""),
      e = K(b, 2);
    return {
      he: vh`https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum${c}.js`,
      ge: vh`https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum_debug${c}.js`,
      Mc: a
        ? vh`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`
        : vh`https://pagead2.googlesyndication.com/pagead/js/${K(
            b,
            2
          )}/${d}/reactive_library${c}.js`,
      Cd: a
        ? vh`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`
        : vh`https://pagead2.googlesyndication.com/pagead/js/${K(
            b,
            2
          )}/${d}/debug_card_library${c}.js`,
      xe: vh`https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/creativetoolset/xpc_expansion_embed.js`,
      ye: vh`https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`,
      Va: a
        ? vh`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`
        : vh`https://pagead2.googlesyndication.com/pagead/js/${K(
            b,
            2
          )}/${d}/slotcar_library${c}.js`,
    };
  });
}.call(
  this,
  '[2019,"r20210908","/r20110914",null,[],null,null,null,null,null,[],null,[]]'
));
