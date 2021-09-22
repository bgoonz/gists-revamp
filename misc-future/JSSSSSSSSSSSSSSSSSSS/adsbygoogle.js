(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = da(this),
        ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ia = {};

    function q(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = ha ? fa.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    ja("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ka(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ka(a) {
        a = {
            next: a
        };
        a[q(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function la(a) {
        return a.raw = a
    }

    function r(a) {
        var b = "undefined" != typeof p.Symbol && q(p.Symbol, "iterator") && a[q(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ma(a) {
        if (!(a instanceof Array)) {
            a = r(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (ha && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function u(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Cb = b.prototype
    }

    function ta(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ja("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = r(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!ta(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!ta(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ta(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ta(g, e) && ta(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && ta(g, e) && ta(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    ja("Map", function(a) {
        function b() {
            var h = {};
            return h.M = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ka(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.M;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && ta(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var t = m[h];
                    if (k !== k && t.key !== t.key || k === t.key) return {
                        id: l,
                        list: m,
                        index: h,
                        u: t
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                u: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = r(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(r([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.u ? l.u.value = k : (l.u = {
                next: this.h,
                M: this.h.M,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.u), this.h.M.next = l.u, this.h.M = l.u, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.u && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.u.M.next = h.u.next, h.u.next.M = h.u.M, h.u.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.M = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).u
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).u) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[q(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function ua(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    ja("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    ja("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    ja("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");

    function va(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[q(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    var wa = ha && "function" == typeof q(Object, "assign") ? q(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ta(d, e) && (a[e] = d[e])
        }
        return a
    };
    ja("Object.assign", function(a) {
        return a || wa
    }, "es6");
    ja("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.D = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.P),
                reject: g(this.m)
            }
        };
        b.prototype.P = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.T(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.O(g) : this.v(g)
            }
        };
        b.prototype.O = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.da(h, g) : this.v(g)
        };
        b.prototype.m = function(g) {
            this.A(2, g)
        };
        b.prototype.v = function(g) {
            this.A(1, g)
        };
        b.prototype.A = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.R();
            this.H()
        };
        b.prototype.R = function() {
            var g = this;
            e(function() {
                if (g.N()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.N =
            function() {
                if (this.D) return !1;
                var g = fa.CustomEvent,
                    h = fa.Event,
                    k = fa.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.H = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.T = function(g) {
            var h = this.l();
            g.fa(h.resolve, h.reject)
        };
        b.prototype.da = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(w, x) {
                return "function" == typeof w ? function(z) {
                    try {
                        l(w(z))
                    } catch (F) {
                        m(F)
                    }
                } : x
            }
            var l, m, t = new b(function(w, x) {
                l = w;
                m = x
            });
            this.fa(k(g, l), k(h, m));
            return t
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.fa = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.D = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = r(g), m = l.next(); !m.done; m = l.next()) d(m.value).fa(h, k)
            })
        };
        b.all = function(g) {
            var h = r(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function t(z) {
                    return function(F) {
                        w[z] = F;
                        x--;
                        0 == x && l(w)
                    }
                }
                var w = [],
                    x = 0;
                do w.push(void 0), x++, d(k.value).fa(t(w.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    ja("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    ja("Set", function(a) {
        function b(c) {
            this.h = new p.Map;
            if (c) {
                c = r(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(r([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return q(this.h, "values").call(this.h)
        };
        b.prototype.keys = q(b.prototype,
            "values");
        b.prototype[q(p.Symbol, "iterator")] = q(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    ja("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    ja("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var v = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = v, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba] || (a[Ba] = ++Ca)
    }
    var Ba = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ca = 0;

    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ea(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Fa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Fa = Da : Fa = Ea;
        return Fa.apply(null, arguments)
    }

    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ha(a) {
        var b = ["__uspapi"],
            c = v;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function Ia(a) {
        return a
    };
    var Ja = (new Date).getTime();
    var Ka;

    function La(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ma(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Na(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Oa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Pa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Qa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ra(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Sa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ta(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ua(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    };

    function Va(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Wa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Xa(a, b) {
        return null !== a && b in a
    }

    function Ya(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var Za;

    function $a() {
        if (void 0 === Za) {
            var a = null,
                b = v.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    })
                } catch (c) {
                    v.console && v.console.error(c.message)
                }
                Za = a
            } else Za = a
        }
        return Za
    };

    function ab(a, b) {
        this.i = a === bb && b || "";
        this.h = cb
    }
    var cb = {},
        bb = {};

    function db(a, b) {
        this.h = b === eb ? a : ""
    }

    function fb(a, b) {
        a = gb.exec(hb(a).toString());
        var c = a[3] || "";
        return ib(a[1] + jb("?", a[2] || "", b) + jb("#", c, void 0))
    }
    db.prototype.toString = function() {
        return this.h + ""
    };

    function hb(a) {
        return a instanceof db && a.constructor === db ? a.h : "type_error:TrustedResourceUrl"
    }
    var gb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        eb = {};

    function ib(a) {
        var b = $a();
        a = b ? b.createScriptURL(a) : a;
        return new db(a, eb)
    }

    function jb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function kb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function lb(a, b) {
        var c = 0;
        a = kb(String(a)).split(".");
        b = kb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = mb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || mb(0 == f[2].length, 0 == g[2].length) || mb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function mb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var nb;
    a: {
        var ob = v.navigator;
        if (ob) {
            var pb = ob.userAgent;
            if (pb) {
                nb = pb;
                break a
            }
        }
        nb = ""
    }

    function y(a) {
        return -1 != nb.indexOf(a)
    }

    function qb(a) {
        for (var b = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function rb() {
        return y("Trident") || y("MSIE")
    }

    function sb() {
        return (y("Chrome") || y("CriOS")) && !y("Edge")
    }

    function tb() {
        function a(e) {
            e = Sa(e, d);
            return c[e] || ""
        }
        var b = nb;
        if (rb()) return ub(b);
        b = qb(b);
        var c = {};
        b.forEach(function(e) {
            c[e[0]] = e[1]
        });
        var d = Ga(Xa, c);
        return y("Opera") ? a(["Version", "Opera"]) : y("Edge") ? a(["Edge"]) : y("Edg/") ? a(["Edg"]) : sb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    }

    function ub(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
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
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };
    var vb = {};

    function wb(a, b, c) {
        this.h = c === vb ? a : ""
    }
    wb.prototype.toString = function() {
        return this.h.toString()
    };

    function xb(a) {
        return a instanceof wb && a.constructor === wb ? a.h : "type_error:SafeHtml"
    }

    function yb(a) {
        var b = $a();
        a = b ? b.createHTML(a) : a;
        return new wb(a, null, vb)
    }
    var zb = new wb(v.trustedTypes && v.trustedTypes.emptyHTML || "", 0, vb);
    var Ab = Ma(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = xb(zb);
        return !b.parentElement
    });

    function Bb(a, b) {
        if (Ab())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = xb(b)
    };

    function Cb(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Db(a) {
        Db[" "](a);
        return a
    }
    Db[" "] = function() {};
    var Eb = rb();
    !y("Android") || sb();
    sb();
    !y("Safari") || sb();
    var Fb = {},
        Gb = null;

    function Hb(a) {
        var b;
        void 0 === b && (b = 0);
        if (!Gb) {
            Gb = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Fb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Gb[h] && (Gb[h] = g)
                }
            }
        }
        b = Fb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = g + k + l + h
        }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var Ib = "function" === typeof Uint8Array;

    function Jb(a, b, c) {
        return "object" === typeof a ? Ib && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Kb(a, b, c) : b(a)
    }

    function Kb(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = Array(a.length), e = 0; e < a.length; e++) {
                var f = a[e];
                null != f && (d[e] = Jb(f, b, c))
            }
            Array.isArray(a) && a.ib && Lb(d);
            return d
        }
        d = {};
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = Jb(f, b, c)));
        return d
    }

    function Mb(a) {
        return Kb(a, function(b) {
            return "number" === typeof b ? isFinite(b) ? b : String(b) : b
        }, function(b) {
            return Hb(b)
        })
    }
    var Nb = {
        ib: {
            value: !0,
            configurable: !0
        }
    };

    function Lb(a) {
        Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Nb);
        return a
    }
    var Ob;
    var Pb;

    function Qb(a, b) {
        Pb = b;
        a = new a(b);
        Pb = null;
        return a
    };

    function A(a, b, c) {
        var d = Pb;
        Pb = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.l = d ? 0 : -1;
        this.h = null;
        this.i = a;
        a: {
            d = this.i.length;a = d - 1;
            if (d && (d = this.i[a], !(null === d || "object" != typeof d || Array.isArray(d) || Ib && d instanceof Uint8Array))) {
                this.m = a - this.l;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.l), this.j = null) : this.m = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++) a = c[b], a < this.m ? (a += this.l, (d = this.i[a]) ? Lb(d) : this.i[a] = Rb) : (Sb(this), (d = this.j[a]) ? Lb(d) : this.j[a] = Rb)
    }
    var Rb = Object.freeze(Lb([]));

    function Sb(a) {
        var b = a.m + a.l;
        a.i[b] || (a.j = a.i[b] = {})
    }

    function B(a, b) {
        if (-1 === b) return null;
        if (b < a.m) {
            b += a.l;
            var c = a.i[b];
            return c !== Rb ? c : a.i[b] = Lb([])
        }
        if (a.j) return c = a.j[b], c !== Rb ? c : a.j[b] = Lb([])
    }

    function Tb(a, b) {
        a = B(a, b);
        return null == a ? a : !!a
    }

    function C(a, b, c) {
        a = B(a, b);
        return null == a ? c : a
    }

    function Ub(a, b, c) {
        c = void 0 === c ? !1 : c;
        a = Tb(a, b);
        return null == a ? c : a
    }

    function Vb(a, b, c) {
        c = void 0 === c ? 0 : c;
        a = B(a, b);
        a = null == a ? a : +a;
        return null == a ? c : a
    }

    function E(a, b, c) {
        b < a.m ? a.i[b + a.l] = c : (Sb(a), a.j[b] = c);
        return a
    }

    function Wb(a, b, c) {
        0 !== c ? E(a, b, c) : E(a, b, void 0);
        return a
    }

    function Xb(a, b, c, d) {
        (c = Yb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), E(a, c, void 0));
        return E(a, b, d)
    }

    function Yb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != B(a, e) && (0 !== c && E(a, c, void 0), c = e)
        }
        return c
    }

    function G(a, b, c) {
        if (-1 === c) return null;
        a.h || (a.h = {});
        if (!a.h[c]) {
            var d = B(a, c);
            d && (a.h[c] = new b(d))
        }
        return a.h[c]
    }

    function H(a, b, c) {
        a.h || (a.h = {});
        if (!a.h[c]) {
            for (var d = B(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.h[c] = e
        }
        return a.h[c]
    }

    function Zb(a, b, c) {
        a.h || (a.h = {});
        c = c || [];
        for (var d = Lb([]), e = 0; e < c.length; e++) d[e] = $b(c[e], !1);
        a.h[b] = c;
        return E(a, b, d)
    }
    A.prototype.toJSON = function() {
        var a = $b(this, !1);
        return Ob ? a : Mb(a)
    };

    function $b(a, b) {
        if (a.h)
            for (var c in a.h)
                if (Object.prototype.hasOwnProperty.call(a.h, c)) {
                    var d = a.h[c];
                    if (Array.isArray(d))
                        for (var e = 0; e < d.length; e++) d[e] && $b(d[e], b);
                    else d && $b(d, b)
                }
        return a.i
    }

    function ac(a) {
        Ob = !0;
        try {
            return JSON.stringify(a.toJSON(), bc)
        } finally {
            Ob = !1
        }
    }

    function bc(a, b) {
        switch (typeof b) {
            case "number":
                return isFinite(b) ? b : String(b);
            case "object":
                if (Ib && null != b && b instanceof Uint8Array) return Hb(b)
        }
        return b
    }

    function cc(a, b, c) {
        return Yb(a, b) === c ? c : -1
    }

    function I(a, b, c) {
        return C(a, b, void 0 === c ? "" : c)
    }

    function dc(a, b, c) {
        return C(a, cc(a, c, b), 0)
    }

    function ec(a, b, c, d) {
        return G(a, b, cc(a, d, c))
    };

    function fc(a) {
        A.call(this, a, -1, gc)
    }
    u(fc, A);

    function hc(a) {
        A.call(this, a)
    }
    u(hc, A);
    var gc = [2, 3];
    var J = {},
        ic = (J.google_ad_channel = !0, J.google_ad_client = !0, J.google_ad_host = !0, J.google_ad_host_channel = !0, J.google_adtest = !0, J.google_tag_for_child_directed_treatment = !0, J.google_tag_for_under_age_of_consent = !0, J.google_tag_partner = !0, J.google_restrict_data_processing = !0, J.google_page_url = !0, J.google_debug_params = !0, J.google_adbreak_test = !0, J.google_ad_frequency_hint = !0, J.google_admob_interstitial_slot = !0, J.google_admob_rewarded_slot = !0, J.google_max_ad_content_rating = !0, J);
    var jc = {};

    function kc() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var lc;

    function mc() {
        var a, b;
        if (void 0 === lc) try {
            lc = null !== (b = null === (a = kc()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null
        } catch (c) {
            lc = null, console.log(c)
        }
        return lc
    };

    function nc() {}

    function oc(a) {
        this.h = a
    }
    u(oc, nc);
    oc.prototype.toString = function() {
        return this.h.toString()
    };

    function pc(a) {
        var b, c = null === (b = mc()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new oc(null !== c && void 0 !== c ? c : a, jc)
    }

    function qc(a) {
        if (a instanceof oc) return a.h;
        throw Error("");
    };

    function rc(a) {
        return a instanceof nc ? qc(a) : hb(a)
    };

    function sc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function tc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function vc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function wc(a) {
        this.h = a || v.document || document
    }
    wc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function xc() {
        return !yc() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }

    function yc() {
        return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    };
    var zc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ac = /#|$/;

    function Bc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Db(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Cc(a, b) {
        var c = a.createElement("script");
        c.src = rc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        var e = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]");
        (d = e ? e.nonce || e.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Dc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Ec(a, b) {
        if (!Fc() && !Gc()) {
            var c = Math.random();
            if (c < b) return c = Hc(v), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Hc(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function Ic(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Jc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Gc = Ma(function() {
        return Ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Kc) || 1E-4 > Math.random()
    });

    function Lc(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function Mc(a, b, c) {
        a = Gc() ? null : Math.floor(1E3 * Hc(a));
        var d;
        if (d = null != a && b) a: {
            var e = String(a);
            try {
                if (b) {
                    b.setItem(c, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? a : null
    }
    var Fc = Ma(function() {
        return Kc("MSIE")
    });

    function Kc(a) {
        return -1 != nb.indexOf(a)
    }
    var Nc = /^([0-9.]+)px$/,
        Oc = /^(-?[0-9.]{1,30})$/;

    function Pc(a) {
        return Oc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function K(a) {
        return (a = Nc.exec(a)) ? +a[1] : null
    }

    function Qc(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var Rc = Ma(function() {
        return xc() ? 2 : yc() ? 1 : 0
    });

    function Sc(a) {
        Ic({
            display: "none"
        }, function(b, c) {
            a.style.setProperty(c, b, "important")
        })
    }
    var Tc = [];

    function Uc() {
        var a = Tc;
        Tc = [];
        a = r(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function Vc(a, b) {
        b = void 0 === b ? window.document : b;
        0 != a.length && b.head && a.forEach(function(c) {
            if (c) {
                var d = b;
                d = void 0 === d ? window.document : d;
                if (c && d.head) {
                    var e = document.createElement("meta");
                    d.head.appendChild(e);
                    e.httpEquiv = "origin-trial";
                    e.content = c
                }
            }
        })
    }

    function Wc(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function Xc(a) {
        var b = Yc;
        "complete" === b.readyState || "interactive" === b.readyState ? (Tc.push(a), 1 == Tc.length && (p.Promise ? p.Promise.resolve().then(Uc) : window.setImmediate ? setImmediate(Uc) : setTimeout(Uc, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function Zc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        if (c) {
            var e = function(f) {
                c && c(f);
                tc(d, "load", e);
                tc(d, "error", e)
            };
            sc(d, "load", e);
            sc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function $c(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Ic(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        ad(c)
    }

    function ad(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Zc(b, a, null)
    };
    var bd = null;
    var Yc = document,
        L = window;
    var cd = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function dd(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function ed(a) {
        a = void 0 === a ? v : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function fd(a) {
        return (a = a || ed()) ? Bc(a.master) ? a.master : null : null
    };

    function gd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function hd(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function id(a) {
        var b = void 0 === b ? 1 : b;
        a = fd(ed(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function jd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var kd = !!window.google_async_iframe_id,
        ld = kd && window.parent || window;

    function md() {
        if (kd && !Bc(ld)) {
            var a = "." + Yc.domain;
            try {
                for (; 2 < a.split(".").length && !Bc(ld);) Yc.domain = a = a.substr(a.indexOf(".") + 1), ld = window.parent
            } catch (b) {}
            Bc(ld) || (ld = window)
        }
        return ld
    }
    var nd = RegExp("(^| )adsbygoogle($| )");

    function od() {
        var a = void 0 === a ? L : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function pd(a) {
        a = a.top;
        return Bc(a) ? a : null
    }

    function qd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var rd = null;

    function sd(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        v.google_logging_queue || (c = !0, v.google_logging_queue = []);
        v.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == rd) {
                rd = !1;
                try {
                    var d = pd(v);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (rd = !0);
                    v.localStorage.getItem("google_logging") && (rd = !0)
                } catch (e) {}
            }
            a = rd
        }
        a && (d = v.document, a = new ab(bb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = ib(a instanceof ab && a.constructor === ab && a.h === cb ? a.i : "type_error:Const"), Cc(d, a))
    };

    function ud(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        sc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function vd() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function wd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function xd(a, b, c, d, e) {
        var f = [];
        Ic(a, function(g, h) {
            (g = yd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function yd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(yd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(xd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function zd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Ad(a) - c.length;
        if (0 > d) return "";
        a.h.sort(function(m, t) {
            return m - t
        });
        c = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = xd(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.j;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Ad(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function Bd(a, b, c, d, e, f) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof vd) var g = c;
            else g = new vd, Ic(c, function(k, l) {
                var m = g,
                    t = m.l++;
                k = wd(l, k);
                m.h.push(t);
                m.i[t] = k
            });
            var h = zd(g, a.i, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? Zc(v, h, void 0 === f ? null : f) : Zc(v, h, null))
        } catch (k) {}
    };
    var Cd = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function Dd() {
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
        this.floatingAdsStacking = new Ed
    }

    function Fd(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Ed) : a.google_reactive_ads_global_state = new Dd;
        return a.google_reactive_ads_global_state
    }

    function Ed() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Gd(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function M(a) {
        return Gd(a).clientWidth
    };

    function Hd(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Id(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Jd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Kd(a, b) {
        this.h = a;
        this.i = b
    }

    function Ld(a, b, c) {
        this.url = a;
        this.K = b;
        this.Ja = !!c;
        this.depth = null
    };
    var Md = null;

    function Nd() {
        if (null === Md) {
            Md = "";
            try {
                var a = "";
                try {
                    a = v.top.location.hash
                } catch (c) {
                    a = v.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Md = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Md
    };

    function Od() {
        var a = v.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Pd() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Qd(a, b) {
        var c = Pd() || Od();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Rd = v.performance,
        Sd = !!(Rd && Rd.mark && Rd.measure && Rd.clearMarks),
        Td = Ma(function() {
            var a;
            if (a = Sd) a = Nd(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Ud() {
        var a = Vd;
        this.events = [];
        this.i = a || v;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.h = Td() || (null != b ? b : 1 > Math.random())
    }

    function Wd(a) {
        a && Rd && Td() && (Rd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Rd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Ud.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new Qd(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Rd && Td() && Rd.mark(b);
        return a
    };
    Ud.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (Pd() || Od()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Rd && Td() && Rd.mark(b);
            !this.h || 2048 < this.events.length || this.events.push(a)
        }
    };

    function Xd() {
        var a = Yd;
        this.m = Zd;
        this.i = null;
        this.l = this.I;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = Xd.prototype;
    n.Ra = function(a) {
        this.l = a
    };
    n.qa = function(a) {
        this.i = a
    };
    n.Sa = function(a) {
        this.j = a
    };
    n.la = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                Wd(d), b = this.l(a, new Hd(h, {
                    message: $d(h)
                }), void 0, c)
            } catch (k) {
                this.I(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Ma = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.la(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    n.I = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new vd;
            f.h.push(1);
            f.i[1] = wd("context", a);
            Id(b) || (b = new Hd(b, {
                message: $d(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = wd("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (uc) {}
            if (d) try {
                d(h)
            } catch (uc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = v;
            b = [];
            g = null;
            do {
                var k = d;
                if (Bc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new Ld(l || "", k));
                try {
                    d = k.parent
                } catch (uc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = v;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var t = b[m];
                    t.url || (t.url = k.location.ancestorOrigins[m - 1] || "", t.Ja = !0)
                }
            var w = new Ld(v.location.href, v, !1);
            k = null;
            var x = b.length - 1;
            for (t = x; 0 <= t; --t) {
                var z = b[t];
                !k && Jd.test(z.url) && (k = z);
                if (z.url && !z.Ja) {
                    w = z;
                    break
                }
            }
            z = null;
            var F = b.length && b[x].url;
            0 != w.depth && F && (z = b[x]);
            var D = new Kd(w, z);
            if (D.i) {
                var ea = D.i.url || "";
                f.h.push(4);
                f.i[4] = wd("top", ea)
            }
            var Aa = {
                url: D.h.url || ""
            };
            if (D.h.url) {
                var td = D.h.url.match(zc),
                    Kf = td[1],
                    Lf = td[3],
                    Mf = td[4];
                w = "";
                Kf && (w += Kf + ":");
                Lf && (w += "//", w += Lf, Mf && (w += ":" + Mf));
                var Nf = w
            } else Nf = "";
            Aa = [Aa, {
                url: Nf
            }];
            f.h.push(5);
            f.i[5] = Aa;
            Bd(this.m, e, f, this.j, c)
        } catch (uc) {
            try {
                Bd(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: $d(uc),
                    url: D && D.h.url
                }, this.j, c)
            } catch (lo) {}
        }
        return !0
    };

    function $d(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };

    function N(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, N) : this.stack = Error().stack || ""
    }
    u(N, Error);

    function ae(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (0 === c.length) return pc(a[0]);
        d = [a[0]];
        for (var e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return pc(d.join(""))
    };
    var be = la(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function ce() {
        this.h = null;
        this.j = !1;
        this.l = Math.random();
        this.i = this.I;
        this.m = null
    }
    n = ce.prototype;
    n.qa = function(a) {
        this.h = a
    };
    n.Sa = function(a) {
        this.j = a
    };
    n.Ra = function(a) {
        this.i = a
    };
    n.I = function(a, b, c, d, e) {
        if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        Id(b) || (b = new Hd(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        v.google_js_errors = v.google_js_errors || [];
        v.google_js_errors.push(b);
        if (!v.error_rep_loaded) {
            a = ae(be);
            var f;
            Cc(v.document, null != (f = this.m) ? f : ib(rc(a).toString()));
            v.error_rep_loaded = !0
        }
        return !1
    };
    n.la = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.i(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    n.Ma = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.la(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var Zd, de, Vd = md(),
        Yd = new Ud;

    function ee(a) {
        null != a && (Vd.google_measure_js_timing = a);
        Vd.google_measure_js_timing || (a = Yd, a.h = !1, a.events != a.i.google_js_reporting_queue && (Td() && Oa(a.events, Wd), a.events.length = 0))
    }
    Zd = new function() {
        var a = void 0 === a ? L : a;
        this.i = "http:" === a.location.protocol ? "http:" : "https:";
        this.h = Math.random()
    };
    "number" !== typeof Vd.google_srt && (Vd.google_srt = Math.random());
    var fe = Zd,
        ge = Vd.google_srt;
    0 <= ge && 1 >= ge && (fe.h = ge);
    de = new Xd;
    de.qa(function() {});
    de.Sa(!0);
    "complete" == Vd.document.readyState ? ee() : Yd.h && sc(Vd, "load", function() {
        ee()
    });

    function he(a, b, c) {
        return de.la(a, b, c)
    }

    function ie(a, b) {
        return de.Ma(a, b, void 0, void 0)
    }

    function je(a, b, c) {
        Bd(Zd, a, b, !0, c, void 0)
    }

    function ke(a) {
        return function(b) {
            de.I(a, b instanceof Error ? b : Error(b), void 0, void 0)
        }
    }

    function le(a, b, c, d) {
        var e;
        Id(b) ? e = b.msg || $d(b.error) : e = $d(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Hd ? b.error : b, c.pbr || (c.pbr = !0, de.I(a, b, .1, d, "puberror")), !1) : de.I(a, b, c, d)
    };
    Eb || !y("Safari") || sb();

    function O(a) {
        A.call(this, a, -1, me)
    }
    u(O, A);
    O.prototype.getId = function() {
        return B(this, 3)
    };
    var me = [4];

    function ne(a) {
        A.call(this, a)
    }
    u(ne, A);

    function oe(a) {
        A.call(this, a)
    }
    u(oe, A);

    function pe(a) {
        A.call(this, a)
    }
    u(pe, A);
    pe.prototype.setLocation = function(a) {
        return E(this, 1, a)
    };

    function qe(a) {
        A.call(this, a, -1, re)
    }
    u(qe, A);
    var re = [6, 7, 9, 10, 11];

    function se(a) {
        A.call(this, a)
    }
    u(se, A);

    function te(a) {
        A.call(this, a)
    }
    u(te, A);

    function ue(a) {
        A.call(this, a, -1, ve)
    }
    u(ue, A);
    var ve = [2, 8],
        we = [3, 4, 5],
        xe = [6, 7];

    function ye(a) {
        A.call(this, a, -1, ze)
    }
    u(ye, A);
    var ze = [4];

    function Ae(a) {
        A.call(this, a)
    }
    u(Ae, A);

    function Be(a) {
        A.call(this, a, -1, Ce)
    }
    u(Be, A);
    var Ce = [5],
        De = [1, 2, 3, 6, 7];

    function Ee(a) {
        A.call(this, a, -1, Fe)
    }
    u(Ee, A);
    Ee.prototype.getId = function() {
        return C(this, 1, 0)
    };
    Ee.prototype.aa = function() {
        return C(this, 7, 0)
    };
    var Fe = [2];

    function Ge(a) {
        A.call(this, a, -1, He)
    }
    u(Ge, A);
    Ge.prototype.aa = function() {
        return C(this, 5, 0)
    };
    var He = [2];

    function Ie(a) {
        A.call(this, a, -1, Je)
    }
    u(Ie, A);

    function Ke(a) {
        A.call(this, a, -1, Le)
    }
    u(Ke, A);
    Ke.prototype.aa = function() {
        return C(this, 1, 0)
    };

    function Me(a) {
        A.call(this, a)
    }
    u(Me, A);
    var Je = [1, 4, 2, 3],
        Le = [2];

    function Ne(a) {
        A.call(this, a)
    }
    u(Ne, A);
    var Oe = [13, 14];

    function P(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Pe(a) {
        a = P(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Da: !0,
            tb: b,
            na: a.ablation_viewport_offset
        } : null
    }

    function Qe(a, b) {
        a = P(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function Re(a, b) {
        a = P(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Se(a) {
        P(L).allow_second_reactive_tag = a
    };

    function Te(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Ue(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Ue(a) {
        var b = "";
        gd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function Ve(a) {
        return null !== a && void 0 !== a
    }

    function We(a, b) {
        if (!b(a)) throw Error(String(a));
    };

    function Xe(a) {
        return "string" === typeof a
    }

    function Ye(a) {
        return void 0 === a
    };
    var Ze;
    Ze = {
        yb: 0,
        Va: 3,
        Wa: 4,
        Xa: 5
    };
    var $e = Ze.Va,
        af = Ze.Wa,
        bf = Ze.Xa;

    function cf(a) {
        return null != a ? !a : a
    }

    function df(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function ef(a, b) {
        var c = H(a, ue, 2);
        if (!c.length) return ff(a, b);
        a = C(a, 1, 0);
        if (1 === a) return cf(ef(c[0], b));
        c = Qa(c, function(d) {
            return function() {
                return ef(d, b)
            }
        });
        switch (a) {
            case 2:
                return df(c, !1);
            case 3:
                return df(c, !0)
        }
    }

    function ff(a, b) {
        var c = Yb(a, we);
        a: {
            switch (c) {
                case $e:
                    var d = dc(a, 3, we);
                    break a;
                case af:
                    d = dc(a, 4, we);
                    break a;
                case bf:
                    d = dc(a, 5, we);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ma(B(a, 8)))
            } catch (f) {
                return
            }
            b = C(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = I(a, cc(a, xe, 7), void 0);
            else a: {
                switch (c) {
                    case af:
                        a = Vb(a, cc(a, xe, 6), void 0);
                        break a;
                    case bf:
                        a = I(a, cc(a, xe, 7), void 0);
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === lb(String(e),
                    a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return Xe(a) && Xe(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === lb(String(e), a);
                    case 11:
                        return null != e && 1 === lb(String(e), a)
                }
            }
        }
    }

    function gf(a, b) {
        return !a || !(!b || !ef(a, b))
    };

    function hf(a, b) {
        this.h = a;
        this.i = b
    }

    function jf(a) {
        return null != a.h ? a.h.value : null
    }

    function kf(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    hf.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof hf ? a : lf(a)) : this
    };

    function mf(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function lf(a) {
        return new hf({
            value: a
        }, null)
    }

    function nf(a) {
        return new hf(null, a)
    }

    function of (a) {
        try {
            return lf(a())
        } catch (b) {
            return nf(b)
        }
    };

    function Q(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function pf(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    var qf = new Q(1084),
        rf = new Q(1082),
        sf = new pf(62, .001),
        tf = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        uf = new pf(1077),
        vf = new Q(316),
        wf = new Q(313),
        xf = new Q(369),
        yf = new Q(1026),
        zf = new Q(1089),
        Af = new Q(1053),
        Bf = new pf(1046),
        Cf = new Q(218),
        Df = new Q(216),
        Ef = new Q(217),
        Ff = new Q(1002),
        Gf = new Q(233),
        Hf = new Q(232),
        If = new Q(227),
        Jf = new Q(208),
        Of = new Q(282),
        Pf = new Q(1086),
        Qf = new pf(1079, 5),
        Rf = new Q(251),
        Sf = new Q(1059, !0),
        Tf = new Q(1088),
        Uf = new Q(203),
        Vf = new Q(241),
        Wf = new Q(84),
        Xf = new pf(1929,
            50),
        Yf = new pf(1905),
        Zf = new Q(240),
        $f = new Q(390641437, !0),
        ag = new Q(1928),
        bg = new Q(1941),
        cg = new Q(370946349),
        dg = new Q(379841917),
        eg = new Q(393546021),
        fg = new pf(1935);

    function R(a) {
        if (a.pa && a.hasOwnProperty("pa")) return a.pa;
        var b = new a;
        return a.pa = b
    };

    function gg() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function() {}
    }

    function S(a) {
        return R(gg).h(a.h, a.defaultValue)
    }

    function hg(a) {
        return R(gg).i(a.h, a.defaultValue)
    }

    function ig() {
        return R(gg).j(tf.h, tf.defaultValue)
    };
    var jg = null;

    function kg(a) {
        for (var b = v, c = 0, d = b, e = 0; b && b != b.parent;)
            if (b = b.parent, e++, Bc(b)) d = b, c = e;
            else if (a) break;
        return {
            K: d,
            level: c
        }
    };

    function lg() {
        this.S = {}
    }

    function mg() {
        if (ng) return ng;
        var a = fd() || md(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? ng = b : a.google_persistent_state_async = ng = new lg
    }

    function og(a) {
        return pg[a] || "google_ps_" + a
    }

    function qg(a, b, c) {
        b = og(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var ng = null,
        rg = {},
        pg = (rg[8] = "google_prev_ad_formats_by_region", rg[9] = "google_prev_ad_slotnames_by_region", rg);

    function sg(a) {
        A.call(this, a)
    }
    u(sg, A);

    function tg(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? of (function() {
            return Qb(sg, c ? JSON.parse(c) : null)
        }) : lf(null)
    };

    function ug(a) {
        A.call(this, a)
    }
    u(ug, A);

    function vg(a) {
        var b = new ug;
        return E(b, 5, a)
    };

    function wg(a) {
        this.h = a || {
            cookie: ""
        }
    }
    wg.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Ab;
            d = c.Bb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.jb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    wg.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = kb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    wg.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    wg.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = kb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            jb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function T() {
        this.v = this.v;
        this.D = this.D
    }
    T.prototype.v = !1;
    T.prototype.j = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function xg(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function yg(a, b) {
        b = void 0 === b ? 500 : b;
        T.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.H = 0;
        this.A = b;
        this.l = null
    }
    u(yg, T);
    yg.prototype.j = function() {
        this.m = {};
        this.l && (tc(this.h, "message", this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        T.prototype.j.call(this)
    };

    function zg(a) {
        return "function" === typeof a.h.__tcfapi || null != Ag(a)
    }
    yg.prototype.addEventListener = function(a) {
        function b(f, g) {
            clearTimeout(e);
            f ? (c = f, c.internalErrorState = xg(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        }
        var c = {},
            d = Na(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.A && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.A));
        try {
            Bg(this, "addEventListener", b)
        } catch (f) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
                e = 0), d()
        }
    };
    yg.prototype.removeEventListener = function(a) {
        a && a.listenerId && Bg(this, "removeEventListener", null, a.listenerId)
    };

    function Bg(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (Ag(a)) {
            Cg(a);
            var e = ++a.H;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Ag(a) {
        if (a.i) return a.i;
        a.i = Qc(a.h, "__tcfapiLocator");
        return a.i
    }

    function Cg(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, sc(a.h, "message", a.l))
    };

    function Dg(a) {
        var b = a.K,
            c = a.Ta,
            d = a.$a;
        a = Eg({
            K: b,
            ja: a.ja,
            ha: void 0 === a.ha ? !1 : a.ha,
            ia: void 0 === a.ia ? !1 : a.ia
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Fg(b, c).then(function(e) {
            return e.map(Gg)
        }).then(function(e) {
            return e.map(function(f) {
                return Hg(b, f)
            })
        }).then(d)
    }

    function Eg(a) {
        var b = a.K,
            c = a.ja,
            d = void 0 === a.ha ? !1 : a.ha;
        if (!(a = !(void 0 === a.ia ? 0 : a.ia) && zg(new yg(b)))) {
            if (d = !d) {
                if (c) {
                    c = tg(b);
                    if (null == c.h) de.I(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != B(c, 1)) b: switch (c = B(c, 1), c) {
                        case 1:
                            c = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                    } else c = !1;
                    c = !c
                }
                d = c
            }
            a = d
        }
        if (!a) return Hg(b, vg(!0));
        c = mg();
        return (c = qg(c, 24, void 0)) ? Hg(b, Gg(c)) : nf(Error("tcunav"))
    }

    function Fg(a, b) {
        return p.Promise.race([Ig(), Jg(a, b)])
    }

    function Ig() {
        return (new p.Promise(function(a) {
            var b = mg();
            a = {
                resolve: a
            };
            var c = qg(b, 25, []);
            c.push(a);
            b.S[og(25)] = c
        })).then(Kg)
    }

    function Jg(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, nf(Error("tcto")))
        })
    }

    function Kg(a) {
        return a ? lf(a) : nf(Error("tcnull"))
    }

    function Gg(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = xg(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                            void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && ("DE" === a.publisherCC || "CH" === a.publisherCC) ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return vg(a)
    }

    function Hg(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Tb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? lf(b) : nf(Error("unav"))
    };
    var Lg = void 0;

    function Mg() {
        We(Lg, Ve);
        return Lg
    }

    function Ng(a) {
        We(Lg, Ye);
        Lg = a
    };

    function Og(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? null : d;
        return Pg(a, c, function(e) {
            return Ra(H(e, hc, 2), function(f) {
                return B(f, 1) === b
            })
        }) ? !0 : 1 === b ? Qg(c, d) : !1
    }

    function Qg(a, b) {
        return b ? 13 === Yb(b, Oe) ? Ub(ec(b, se, 13, Oe), 1) : 14 === Yb(b, Oe) && "" !== a && I(b, 7) === a ? Ub(G(ec(b, te, 14, Oe), se, 2), 1) : !1 : !1
    }

    function Rg(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = pd(a) || a;
        return Sg(d, b) ? !0 : Pg(a, c, function(e) {
            return Ra(B(e, 3), function(f) {
                return f === b
            })
        })
    }

    function Tg(a) {
        return Pg(v, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function Sg(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ua(a.split(","), b.toString())
    }

    function Pg(a, b, c) {
        a = pd(a) || a;
        var d = Ug(a);
        b && (b = qd(String(b)));
        return Wa(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function Ug(a) {
        a = Vg(a);
        var b = {};
        gd(a, function(c, d) {
            try {
                var e = new fc(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function Vg(a) {
        return S(rf) ? (a = Eg({
            K: a,
            ja: Mg()
        }), null != a.h ? (Wg("ok"), a = Xg(a.h.value)) : (Wg(a.i.message), a = {}), a) : Xg(a.localStorage)
    }

    function Xg(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Va(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function Wg(a) {
        S(qf) && je("abg_adsensesettings_lserr", {
            s: a,
            g: S(rf),
            c: Mg(),
            r: .01
        }, .01)
    };

    function Yg(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function Zg(a) {
        var b = L.document;
        if (b.currentScript) return Yg(b.currentScript, a);
        b = r(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === Yg(c.value, a)) return 0;
        return 1
    };

    function $g(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[$e] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return Og(L, Number(g))
        }, c[24] = function(g) {
            return Rg(L, Number(g))
        }, c[61] = function() {
            return Ub(b, 6)
        }, c), f[af] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (m) {
                h = null
            }
            var k = Number(g);
            g = window;
            k = void 0 === k ? 0 : k;
            k = 0 != k ? "google_experiment_mod" + k : "google_experiment_mod";
            var l = Lc(h, k);
            h = null === l ? Mc(g, h, k) : l;
            return null !== h && void 0 !== h ? h : void 0
        }, d), f[bf] = (e[6] = function() {
            return I(b, 15)
        }, e), f
    };

    function ah() {
        var a = {};
        this.h = (a[$e] = {}, a[af] = {}, a[bf] = {}, a)
    };
    var bh = /^true$/.test("false");

    function ch(a, b) {
        switch (b) {
            case 1:
                return dc(a, 1, De);
            case 2:
                return dc(a, 2, De);
            case 3:
                return dc(a, 3, De);
            case 6:
                return dc(a, 6, De);
            default:
                return null
        }
    }

    function dh(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Ub(a, 1);
            case 7:
                return I(a, 3);
            case 2:
                return Vb(a, 2);
            case 3:
                return I(a, 3);
            case 6:
                return B(a, 4);
            default:
                return null
        }
    }
    var eh = Ma(function() {
        if (!bh) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function fh(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        var e = eh();
        if (null != e[b]) return e[b];
        b = gh(d)[b];
        if (!b) return c;
        b = new Be(b);
        b = hh(b);
        a = dh(b, a);
        return null != a ? a : c
    }

    function hh(a) {
        var b = R(ah).h;
        if (b) {
            var c = Ta(H(a, Ae, 5), function(d) {
                return gf(G(d, ue, 1), b)
            });
            if (c) return G(c, ye, 2)
        }
        return G(a, ye, 4)
    }

    function ih() {
        this.h = {};
        this.i = []
    }

    function jh(a, b, c) {
        return !!fh(1, a, void 0 === b ? !1 : b, c)
    }

    function kh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(fh(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function lh(a, b, c) {
        return fh(3, a, void 0 === b ? "" : b, c)
    }

    function mh(a, b, c) {
        b = void 0 === b ? [] : b;
        return fh(6, a, b, c)
    }

    function gh(a) {
        return R(ih).h[a] || (R(ih).h[a] = {})
    }

    function nh(a, b) {
        var c = gh(b);
        Ic(a, function(d, e) {
            return c[e] = d
        })
    }

    function oh(a, b) {
        var c = gh(b);
        Oa(a, function(d) {
            var e = Yb(d, De);
            (e = ch(d, e)) && (c[e] = d.toJSON())
        })
    }

    function ph(a, b) {
        var c = gh(b);
        Oa(a, function(d) {
            var e = new Be(d),
                f = Yb(e, De);
            (e = ch(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function qh() {
        return Qa(q(Object, "keys").call(Object, R(ih).h), function(a) {
            return Number(a)
        })
    }

    function rh(a) {
        Ua(R(ih).i, a) || nh(gh(4), a)
    };

    function U(a) {
        this.methodName = a
    }
    var sh = new U(1),
        th = new U(16),
        uh = new U(15),
        vh = new U(2),
        wh = new U(3),
        xh = new U(4),
        yh = new U(5),
        zh = new U(6),
        Ah = new U(7),
        Bh = new U(8),
        Ch = new U(9),
        Dh = new U(10),
        Eh = new U(11),
        Fh = new U(12),
        Gh = new U(13),
        Hh = new U(14);

    function V(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function Ih(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function Jh(a) {
        V(yh, jh, a);
        V(zh, kh, a);
        V(Ah, lh, a);
        V(Bh, mh, a);
        V(Gh, ph, a);
        V(uh, rh, a)
    }

    function Kh(a) {
        V(xh, function(b) {
            R(ah).h = b
        }, a);
        V(Ch, function(b, c) {
            var d = R(ah);
            d.h[$e][b] || (d.h[$e][b] = c)
        }, a);
        V(Dh, function(b, c) {
            var d = R(ah);
            d.h[af][b] || (d.h[af][b] = c)
        }, a);
        V(Eh, function(b, c) {
            var d = R(ah);
            d.h[bf][b] || (d.h[bf][b] = c)
        }, a);
        V(Hh, function(b) {
            for (var c = R(ah), d = r([$e, af, bf]), e = d.next(); !e.done; e = d.next()) e = e.value, q(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function Lh(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Mh(a) {
        a = void 0 === a ? v : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Nh() {
        this.l = function() {};
        this.j = function() {};
        this.i = function() {};
        this.h = function() {
            return []
        }
    }

    function Oh(a, b, c) {
        a.l = Ih(sh, b, function() {});
        a.i = function(d) {
            Ih(vh, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return Ih(wh, b, function() {
                return []
            })(c)
        };
        a.j = function(d) {
            Ih(th, b, function() {})(d, c)
        }
    };

    function Ph(a, b) {
        try {
            var c = a.split(".");
            a = v;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function Qh() {
        var a = {};
        this[$e] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Ua(R(Nh).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = Ph(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!v.document.querySelector(b)
            } catch (c) {}
        }, a);
        a = {};
        this[af] =
            (a[3] = function() {
                return Rc()
            }, a[6] = function(b) {
                b = Ph(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = v;
                b = void 0 === b ? "" : b;
                c = void 0 === c ? window : c;
                b = (c = (c = c.location.href.match(zc)[3] || null) ? decodeURI(c) : c) ? Jc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
        a = {};
        this[bf] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = Ph(b, "string");
            return void 0 !== b ? b : void 0
        }, a)
    };

    function Rh(a) {
        A.call(this, a, -1, Sh)
    }
    u(Rh, A);

    function Th(a, b) {
        a.h || (a.h = {});
        var c = b ? $b(b, !1) : b;
        a.h[1] = b;
        return E(a, 1, c)
    }

    function Uh(a, b) {
        return Zb(a, 2, b)
    }

    function Vh(a, b) {
        return E(a, 4, Lb(b || []))
    }

    function Wh(a, b) {
        return Zb(a, 5, b)
    }

    function Xh(a) {
        A.call(this, a)
    }
    u(Xh, A);
    Xh.prototype.aa = function() {
        return C(this, 1, 0)
    };

    function Yh(a, b) {
        return Wb(a, 1, b)
    }

    function Zh(a, b) {
        return Wb(a, 2, b)
    }

    function $h(a) {
        A.call(this, a)
    }
    u($h, A);
    var Sh = [2, 4, 5],
        ai = [1, 2];

    function bi(a) {
        return function() {
            return Hc(window) <= a
        }
    }

    function ci(a, b) {
        if (window.fetch) fetch(a, {
            method: "POST",
            body: b,
            keepalive: 64536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    }

    function di(a, b, c) {
        c = void 0 === c ? ci : c;
        this.h = a;
        this.j = void 0 === b ? "https://pagead2.googlesyndication.com/pagead/ping" : b;
        this.i = c
    };

    function ei() {
        di.apply(this, arguments)
    }
    u(ei, di);

    function fi(a, b) {
        try {
            a.h() && a.i(a.j + "?e=1", '[[[{"4":' + ac(b()) + "}]]]")
        } catch (c) {}
    };

    function gi(a) {
        A.call(this, a)
    }
    u(gi, A);
    gi.prototype.getTagSessionCorrelator = function() {
        return C(this, 2, 0)
    };

    function hi(a) {
        var b = new gi,
            c = ii;
        b.h || (b.h = {});
        var d = a ? $b(a, !1) : a;
        b.h[4] = a;
        return Xb(b, 4, c, d)
    }
    var ii = [4, 5];

    function ji(a) {
        var b = void 0 === b ? new ei(Ma(bi(0 < a ? 1 / a : 0))) : b;
        this.j = a;
        this.i = b;
        this.h = []
    }

    function ki(a, b, c, d, e) {
        b = Zh(Yh(new Xh, b), c);
        d = Uh(Th(Wh(Vh(new Rh, d), e), b), a.h);
        var f = hi(d);
        fi(a.i, function() {
            var g = Wb(f, 1, Date.now());
            var h = Wc(window);
            g = Wb(g, 2, h);
            return Wb(g, 6, a.j)
        });
        a.h.push(b);
        100 < a.h.length && a.h.shift()
    };
    var li = [12, 13, 20];

    function mi() {}
    mi.prototype.init = function(a, b, c, d) {
        var e = this;
        c = void 0 === c ? {} : c;
        var f = void 0 === c.Ia ? !1 : c.Ia,
            g = void 0 === c.kb ? {} : c.kb;
        c = void 0 === c.nb ? [] : c.nb;
        d = void 0 === d ? null : d;
        this.j = a;
        this.v = {};
        this.D = f;
        this.l = g;
        a = {};
        this.h = (a[b] = [], a[4] = [], a);
        this.i = {};
        (b = Nd()) && Oa(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.i[h] = !0)
        });
        Oa(c, function(h) {
            e.i[h] = !0
        });
        this.m = d;
        return this
    };

    function ni(a, b, c) {
        if (a.v[b]) return .001 >= Math.random() && $c({
            b: c,
            dp: b
        }, "tagging_dupdiv"), !0;
        a.v[b] = !0;
        return !1
    }

    function oi(a, b, c) {
        var d = [],
            e = pi(a.j, b);
        if (9 !== b && ni(a, b, c) || !e.length) {
            var f;
            null == (f = a.m) || ki(f, b, c, d, []);
            return d
        }
        var g = Ua(li, b),
            h = [];
        Oa(e, function(l) {
            var m = new $h;
            if (l = qi(a, l, c, m)) {
                0 !== Yb(m, ai) && h.push(m);
                m = l.getId();
                d.push(m);
                ri(a, m, g ? 4 : c);
                var t = H(l, Be, 2);
                t && (g ? Oa(qh(), function(w) {
                    return oh(t, w)
                }) : oh(t, c))
            }
        });
        var k;
        null == (k = a.m) || ki(k, b, c, d, h);
        return d
    }

    function ri(a, b, c) {
        a.h[c] || (a.h[c] = []);
        a = a.h[c];
        Ua(a, b) ? $c({
            eids: JSON.stringify(a),
            dup: b
        }, "gpt_dupeid") : a.push(b)
    }

    function si(a, b) {
        a.j.push.apply(a.j, ma(Pa(Qa(b, function(c) {
            return new Ke(c)
        }), function(c) {
            return !Ua(li, c.aa())
        })))
    }

    function qi(a, b, c, d) {
        var e = R(ah).h;
        if (!gf(G(b, ue, 3), e)) return null;
        var f = H(b, Ee, 2),
            g = f.length * C(b, 1, 0),
            h = C(b, 6, 0);
        if (h) {
            Xb(d, 1, ai, h);
            g = e[af];
            switch (c) {
                case 2:
                    var k = g[8];
                    break;
                case 1:
                    k = g[7]
            }
            c = void 0;
            if (k) try {
                c = k(h), Wb(d, 3, c)
            } catch (l) {}
            return (b = ti(b, c)) ? ui(a, [b], 1) : null
        }
        if (h = C(b, 10, 0)) {
            Xb(d, 2, ai, h);
            g = null;
            switch (c) {
                case 1:
                    g = e[af][9];
                    break;
                case 2:
                    g = e[af][10];
                    break;
                default:
                    return null
            }
            c = g ? g(String(h)) : void 0;
            if (void 0 === c && 1 === C(b, 11, 0)) return null;
            void 0 !== c && Wb(d, 3, c);
            return (b = ti(b, c)) ? ui(a, [b], 1) :
                null
        }
        d = e ? Pa(f, function(l) {
            return gf(G(l, ue, 3), e)
        }) : f;
        return d.length ? (b = C(b, 4, 0)) ? vi(a, b, g, d) : ui(a, d, g / 1E3) : null
    }

    function vi(a, b, c, d) {
        var e = null != a.l[b] ? a.l[b] : 1E3;
        if (0 >= e) return null;
        d = ui(a, d, c / e);
        a.l[b] = d ? 0 : e - c;
        return d
    }

    function ui(a, b, c) {
        var d = a.i,
            e = Sa(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.D ? null : Ec(b, c)
    }

    function wi(a, b) {
        V(sh, function(c) {
            a.i[c] = !0
        }, b);
        V(vh, function(c, d) {
            return oi(a, c, d)
        }, b);
        V(wh, function(c) {
            return (a.h[c] || []).concat(a.h[4])
        }, b);
        V(Fh, function(c) {
            return si(a, c)
        }, b);
        V(th, function(c, d) {
            return ri(a, c, d)
        }, b)
    }

    function pi(a, b) {
        return (a = Sa(a, function(c) {
            return c.aa() == b
        })) && H(a, Ge, 2) || []
    }

    function ti(a, b) {
        var c = H(a, Ee, 2),
            d = c.length,
            e = C(a, 1, 0);
        a = C(a, 8, 0);
        b = void 0 !== b ? b : Math.floor(1E3 * Hc(window));
        var f = (b - a) % d;
        if (b < a || b - a - f >= d * e - 1) return null;
        c = c[f];
        d = R(ah).h;
        return !c || d && !gf(G(c, ue, 3), d) ? null : c
    };

    function xi() {
        this.h = function() {}
    }

    function yi(a) {
        R(xi).h(a)
    };
    var zi, Ai;

    function Bi(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? Mh() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new ji(null != (Ai = null == (zi = G(a, Me, 5)) ? void 0 : C(zi, 2, 0)) ? Ai : 0) : f;
        d.hasOwnProperty("init-done") ? (Ih(Fh, d)(Qa(H(a, Ke, 2), function(g) {
            return g.toJSON()
        })), Ih(Gh, d)(Qa(H(a, Be, 1), function(g) {
            return g.toJSON()
        }), e), b && Ih(Hh, d)(b), Ci(d, e)) : (wi(R(mi).init(H(a, Ke, 2), e, c, f), d), Jh(d), Kh(d), Lh(d), Ci(d, e), oh(H(a, Be, 1), e), bh = bh || !(!c || !c.gb), yi(R(Qh)), b && yi(b))
    }

    function Ci(a, b) {
        a = void 0 === a ? Mh() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        Oh(R(Nh), c, d);
        Di(a, b);
        R(xi).h = Ih(Hh, a);
        R(gg).l()
    }

    function Di(a, b) {
        var c = R(gg);
        c.h = function(d, e) {
            return Ih(yh, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return Ih(zh, a, function() {
                return 0
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Ih(Ah, a, function() {
                return ""
            })(d, e, b)
        };
        c.m = function(d, e) {
            return Ih(Bh, a, function() {
                return []
            })(d, e, b)
        };
        c.l = function() {
            Ih(uh, a)(b)
        }
    };

    function Ei(a, b, c) {
        var d = P(a);
        if (d.plle) Ci(Mh(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == Lc(d, "goog_pem_mod") && Mc(a, d, "goog_pem_mod");
            d = G(b, Ie, 12);
            e = Ub(b, 9);
            Bi(d, $g(c, b), {
                Ia: e && !!a.google_disable_experiments,
                gb: e
            }, Mh(a));
            if (c = I(b, 15)) c = Number(c), R(Nh).l(c);
            if (b = I(b, 10)) b = Number(b), R(Nh).j(b);
            R(Nh).i(12);
            R(Nh).i(10);
            a = pd(a) || a;
            Te(a.location, "google_mc_lab") && R(Nh).j(44738307)
        }
    };

    function Fi(a, b) {
        a.qa(function(c) {
            c.shv = String(b);
            c.mjsv = "m202109080101";
            var d = R(Nh).h();
            var e = P(v);
            e.eids || (e.eids = []);
            (d = d.concat(e.eids).join(",")) && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
        })
    };

    function Gi(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };

    function Hi() {
        this.i = new Ii(this);
        this.h = 0
    }
    Hi.prototype.resolve = function(a) {
        Ji(this);
        this.h = 1;
        this.l = a;
        Ki(this.i)
    };
    Hi.prototype.reject = function(a) {
        Ji(this);
        this.h = 2;
        this.j = a;
        Ki(this.i)
    };

    function Ji(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function Ii(a) {
        this.h = a
    }
    Ii.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        Ki(this)
    };

    function Ki(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Li() {
        this.h = {};
        this.i = {}
    }
    Li.prototype.set = function(a, b) {
        var c = Mi(a);
        this.h[c] = b;
        this.i[c] = a
    };
    Li.prototype.get = function(a, b) {
        a = Mi(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    Li.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function Mi(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    };

    function Ni(a) {
        this.h = a.slice(0)
    }
    Ni.prototype.apply = function(a) {
        return new Ni(a(this.h.slice(0)))
    };
    Ni.prototype.get = function(a) {
        return this.h[a]
    };
    Ni.prototype.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new Ni(b)
    };

    function Oi(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Pi(a) {
        this.h = new Li;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    Pi.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    Pi.prototype.contains = function(a) {
        return void 0 !== this.h.h[Mi(a)]
    };

    function Qi() {
        this.h = new Li
    }
    Qi.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new Pi, this.h.set(a, c));
        c.add(b)
    };

    function Ri(a) {
        var b = void 0 === a.Ea ? void 0 : a.Ea,
            c = void 0 === a.fb ? void 0 : a.fb,
            d = void 0 === a.Oa ? void 0 : a.Oa;
        this.h = void 0 === a.Za ? void 0 : a.Za;
        this.l = new Ni(b || []);
        this.j = d;
        this.i = c
    };

    function Si(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            V: "a",
            $: Ti(c)
        });
        null != a.h && b.push({
            V: "as",
            $: a.h
        });
        null != a.i && b.push({
            V: "i",
            $: String(a.i)
        });
        null != a.j && b.push({
            V: "rp",
            $: String(a.j)
        });
        b.sort(function(d, e) {
            return d.V.localeCompare(e.V)
        });
        b.unshift({
            V: "t",
            $: "aa"
        });
        return b
    }

    function Ti(a) {
        a = a.h.slice(0).map(Ui);
        a = JSON.stringify(a);
        return Jc(a)
    }

    function Ui(a) {
        var b = {};
        null != B(a, 7) && (b.q = B(a, 7));
        null != B(a, 2) && (b.o = B(a, 2));
        null != B(a, 5) && (b.p = B(a, 5));
        return b
    };

    function Vi(a, b) {
        this.Ga = a;
        this.Na = b
    }

    function Wi(a) {
        var b = [].slice.call(arguments).filter(La(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ga || []);
            d = q(Object, "assign").call(Object, d, e.Na)
        });
        return new Vi(c, d)
    }

    function Xi(a) {
        switch (a) {
            case 1:
                return new Vi(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Vi(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Vi(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Vi(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Yi(a) {
        if (null == a) a = null;
        else {
            var b = Si(a);
            a = [];
            b = r(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.$);
                a.push(c.V + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new Vi(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var Zi = {},
        $i = new Vi(["google-auto-placed"], (Zi.google_reactive_ad_format = 40, Zi.google_tag_origin = "qs", Zi));

    function aj(a) {
        A.call(this, a)
    }
    u(aj, A);
    aj.prototype.getName = function() {
        return B(this, 4)
    };

    function bj(a) {
        A.call(this, a)
    }
    u(bj, A);

    function cj(a) {
        A.call(this, a)
    }
    u(cj, A);

    function dj(a) {
        A.call(this, a)
    }
    u(dj, A);
    var ej = [1, 2, 3];

    function fj(a) {
        A.call(this, a, -1, gj)
    }
    u(fj, A);

    function hj(a) {
        A.call(this, a)
    }
    u(hj, A);

    function ij(a) {
        A.call(this, a)
    }
    u(ij, A);
    var gj = [1],
        jj = [1, 2];

    function kj(a) {
        A.call(this, a, -1, lj)
    }
    u(kj, A);

    function mj(a) {
        A.call(this, a)
    }
    u(mj, A);

    function nj(a) {
        A.call(this, a, -1, oj)
    }
    u(nj, A);

    function pj(a) {
        A.call(this, a)
    }
    u(pj, A);

    function qj(a) {
        A.call(this, a)
    }
    u(qj, A);

    function rj(a) {
        A.call(this, a)
    }
    u(rj, A);
    var lj = [1, 2, 5, 7],
        oj = [2, 5, 6, 11];

    function sj(a) {
        A.call(this, a)
    }
    u(sj, A);

    function tj(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function uj(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        tj(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function vj(a, b, c) {
        function d(f) {
            f = wj(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = wj(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: xj(a.previousSibling, e),
                    ga: function(f) {
                        return xj(f.previousSibling, e)
                    },
                    ka: 0
                };
            case 2:
                return {
                    init: xj(a.lastChild, e),
                    ga: function(f) {
                        return xj(f.previousSibling, e)
                    },
                    ka: 0
                };
            case 3:
                return {
                    init: xj(a.nextSibling, d),
                    ga: function(f) {
                        return xj(f.nextSibling, d)
                    },
                    ka: 3
                };
            case 1:
                return {
                    init: xj(a.firstChild, d),
                    ga: function(f) {
                        return xj(f.nextSibling, d)
                    },
                    ka: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function wj(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function xj(a, b) {
        return a && b(a) ? a : null
    };
    var yj = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function zj(a, b) {
        do {
            var c = Dc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Aj(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = K(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Bj(a, b) {
        return !((Oc.test(b.google_ad_width) || Nc.test(a.style.width)) && (Oc.test(b.google_ad_height) || Nc.test(a.style.height)))
    }

    function Cj(a, b) {
        return (a = Dj(a, b)) ? a.y : 0
    }

    function Dj(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function Ej(a) {
        var b = 0,
            c;
        for (c in yj) - 1 != a.indexOf(c) && (b |= yj[c]);
        return b
    }

    function Fj(a, b, c, d, e) {
        if (a.top != a) return pd(a) ? 3 : 16;
        if (!(488 > M(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = M(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = M(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Dc(b, a)) && (e = K(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Gj(a, b, c, d) {
        var e = Fj(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || zj(c, b) ? Hj(b) ? a = !0 : (b = M(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Ij(a, b, c) {
        a = a.style;
        "rtl" == b ? S(Rf) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : S(Rf) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
    }

    function Jj(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Dc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Kj(a, b) {
        for (var c = 0; 100 > c && b.parentElement; ++c) {
            for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                var f = d[e];
                if (f != b && Jj(a, f)) return
            }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto"
        }
    }

    function Lj(a, b, c) {
        a = Dj(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Mj(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Dc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Ij(b, c, "0px");
            b.style.width = M(a) + "px";
            if (0 !== Lj(a, b, c)) {
                Ij(b, c, "0px");
                var d = Lj(a, b, c);
                Ij(b, c, -1 * d + "px");
                a = Lj(a, b, c);
                0 !== a && a !== d && Ij(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    }

    function Hj(a) {
        return S(Gf) || a.location && "#bffwroe2etoq" == a.location.hash
    };

    function W(a, b) {
        this.l = a;
        this.j = b
    }
    W.prototype.minWidth = function() {
        return this.l
    };
    W.prototype.height = function() {
        return this.j
    };
    W.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    W.prototype.i = function() {};

    function Nj(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Dc(a, b)) && e[c] && d(e[c]) || null
    }

    function Oj(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Pj(a, b, c, d) {
        var e = a && Qj(c, b),
            f = Rj(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Sj(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Qj(a, b) {
        return Cj(a, b) < Gd(b).clientHeight - 100
    }

    function Tj(a, b) {
        var c = Nj(b, a, "height", K);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Nj(b, a, "height", K);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && K(b.style.height)) && (c = Math.min(c, d)), (d = Nj(b, a, "maxHeight", K)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Rj(a, b) {
        var c = 0 == jd(a);
        return b && c ? Math.max(250, 2 * Gd(a).clientHeight / 3) : 250
    };

    function Uj(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Cb(d.zb);
            a[e] = d.value
        }
    };

    function Vj(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function Wj(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (g) {}
        if (!c.length) return [];
        b = c;
        c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d
        } else b = [];
        b = Xj(a, b);
        "number" === typeof a.i && (c = a.i, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.j) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = Yj(b[d]);
                var f = a.j;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    Vj.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function Xj(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function Yj(a) {
        var b = [];
        Oi(a.getElementsByTagName("p"), function(c) {
            100 <= Zj(c) && b.push(c)
        });
        return b
    }

    function Zj(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Oi(a.childNodes, function(c) {
            b += Zj(c)
        });
        return b
    }

    function ak(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function bk(a) {
        if (!a) return null;
        var b = B(a, 7);
        if (B(a, 1) || a.getId() || 0 < B(a, 4).length) {
            var c = a.getId(),
                d = B(a, 1),
                e = B(a, 4);
            b = B(a, 2);
            var f = B(a, 5);
            a = ck(B(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + ak(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + ak(e[c]);
            b = (e = g) ? new Vj(e, b, f, a) : null
        } else b = b ? new Vj(b, B(a, 2), B(a, 5), ck(B(a, 6))) : null;
        return b
    }
    var dk = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function ck(a) {
        return null == a ? a : dk[a]
    }
    var ek = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function fk(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function gk(a) {
        a = fk(a);
        return a.optimization = a.optimization || {}
    };

    function hk(a) {
        switch (B(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = G(a, O, 1), null == b ? b = null : (a = B(a, 2), b = null == a ? null : new Ri({
                    Ea: [b],
                    Oa: a
                }));
                return null != b ? lf(b) : nf(Error("Missing dimension when creating placement id"));
            case 3:
                return nf(Error("Missing dimension when creating placement id"));
            default:
                return nf(Error("Invalid type: " + B(a, 8)))
        }
    };

    function ik(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function jk(a, b) {
        this.i = a;
        this.h = b
    }

    function kk(a, b) {
        var c = new Qi,
            d = new Pi;
        b.forEach(function(e) {
            if (ec(e, bj, 1, ej)) {
                e = ec(e, bj, 1, ej);
                if (G(e, ne, 1) && G(G(e, ne, 1), O, 1) && G(e, ne, 2) && G(G(e, ne, 2), O, 1)) {
                    var f = lk(a, G(G(e, ne, 1), O, 1)),
                        g = lk(a, G(G(e, ne, 2), O, 1));
                    if (f && g)
                        for (f = r(ik({
                                anchor: f,
                                position: B(G(e, ne, 1), 2)
                            }, {
                                anchor: g,
                                position: B(G(e, ne, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(za(g.anchor), g.position)
                }
                G(e, ne, 3) && G(G(e, ne, 3), O, 1) && (f = lk(a, G(G(e, ne, 3), O, 1))) && c.set(za(f), B(G(e, ne, 3), 2))
            } else ec(e, cj, 2, ej) ? mk(a, ec(e, cj, 2, ej), c) : ec(e,
                dj, 3, ej) && nk(a, ec(e, dj, 3, ej), d)
        });
        return new jk(c, d)
    }

    function mk(a, b, c) {
        G(b, O, 1) && (a = ok(a, G(b, O, 1))) && a.forEach(function(d) {
            d = za(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function nk(a, b, c) {
        G(b, O, 1) && (a = ok(a, G(b, O, 1))) && a.forEach(function(d) {
            c.add(za(d))
        })
    }

    function lk(a, b) {
        return (a = ok(a, b)) && 0 < a.length ? a[0] : null
    }

    function ok(a, b) {
        return (b = bk(b)) ? Wj(b, a) : null
    };

    function pk(a, b) {
        if (!a) return !1;
        a = Dc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function qk(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function rk(a) {
        return !!a.nextSibling || !!a.parentNode && rk(a.parentNode)
    };

    function sk(a, b) {
        return a && null != B(a, 4) && b[B(G(a, pe, 4), 2)] ? !1 : !0
    }

    function tk(a) {
        var b = {};
        a && B(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function uk(a, b, c, d, e) {
        this.h = a;
        this.A = b;
        this.j = c;
        this.m = e || null;
        this.v = (this.D = d) ? kk(a.document, H(d, aj, 5)) : kk(a.document, []);
        this.i = 0;
        this.l = !1
    }

    function vk(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = H(a.j, qe, 1);
        a.i = 0;
        var d = tk(a.D);
        try {
            var e = a.h.localStorage.getItem("google_ama_settings");
            var f = e ? Qb(sj, e ? JSON.parse(e) : null) : null
        } catch (m) {
            f = null
        }
        if (null !== f && Ub(f, 2, !1)) return fk(a.h).eatf = !0, sd(7, [!0, 0, !1]), !0;
        f = new Pi([2]);
        for (e = 0; e < c.length; e++) {
            var g = a;
            var h = c[e],
                k = e,
                l = b;
            if (G(h, pe, 4) && f.contains(B(G(h, pe, 4), 1)) && 1 === B(h, 8) && sk(h, d)) {
                g.i++;
                if (h = wk(g, h, l, d)) l = fk(g.h), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++,
                    l.placed.push({
                        index: k,
                        element: h.ea
                    }), sd(7, [!1, g.i, !0]);
                g = h
            } else g = null;
            if (g) return !0
        }
        sd(7, [!1, a.i, !1]);
        return !1
    }

    function wk(a, b, c, d) {
        if (!sk(b, d) || 1 != B(b, 8)) return null;
        d = G(b, O, 1);
        if (!d) return null;
        d = bk(d);
        if (!d) return null;
        d = Wj(d, a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = B(b, 2);
        e = ek[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = pk(qk(d), f);
                        break a;
                    case 3:
                        f = pk(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = pk(g ? 1 == g.nodeType ? g : qk(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !rk(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !tj(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.v;
            f = B(b, 2);
            g =
                za(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(za(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(za(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (c) return null;
        c = G(b, oe, 3);
        f = {};
        c && (f.Ua = B(c, 1), f.Fa = B(c, 2), f.ab = !!Tb(c, 3));
        c = G(b, pe, 4) && B(G(b, pe, 4), 2) ? B(G(b, pe, 4), 2) : null;
        c = Xi(c);
        g = null == B(b, 12) ? null : B(b, 12);
        g = null == g ? null : new Vi(null, {
            google_ml_rank: g
        });
        b = xk(a, b);
        b = Wi(a.m, c, g, b);
        c = a.h;
        a = a.A;
        var h = c.document,
            k = f.ab || !1;
        g = vc((new wc(h)).h,
            "DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.lb && Uj(k, f.lb);
        h = vc((new wc(h)).h, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Ua && (k.marginTop = f.Ua);
        f.Fa && (k.marginBottom = f.Fa);
        f.Ya && Uj(k, f.Ya);
        g.appendChild(h);
        f = {
            oa: g,
            ea: h
        };
        f.ea.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ga) f.oa.className = h.join(" ");
        h = f.ea;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel",
            g.join("+"));
        a: {
            try {
                var m = f.oa;
                var t = void 0 === t ? 0 : t;
                if (S(wf)) {
                    t = void 0 === t ? 0 : t;
                    var w = vj(d, e, t);
                    if (w.init) {
                        var x = w.init;
                        for (d = x; d = w.ga(d);) x = d;
                        var z = {
                            anchor: x,
                            position: w.ka
                        }
                    } else z = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = t;
                    uj(m, z.anchor, z.position)
                } else uj(m, d, e);
                b: {
                    var F = f.ea;F.setAttribute("data-adsbygoogle-status", "reserved");F.className += " adsbygoogle-noablate";m = {
                        element: F
                    };
                    var D = b && b.Na;
                    if (F.hasAttribute("data-pub-vars")) {
                        try {
                            D = JSON.parse(F.getAttribute("data-pub-vars"))
                        } catch (ea) {
                            break b
                        }
                        F.removeAttribute("data-pub-vars")
                    }
                    D &&
                    (m.params = D);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (ea) {
                (F = f.oa) && F.parentNode && (D = F.parentNode, D.removeChild(F), tj(D) && (D.style.display = D.getAttribute("data-init-display") || "none"));
                F = !1;
                break a
            }
            F = !0
        }
        return F ? f : null
    }

    function xk(a, b) {
        return jf(mf(hk(b).map(Yi), function(c) {
            fk(a.h).exception = c
        }))
    };

    function yk(a) {
        if (S(vf)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Qb(kj, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function zk(a) {
        this.exception = a
    }

    function Ak(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    Ak.prototype.start = function() {
        this.l()
    };
    Ak.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    vk(this.h, !0);
                    Bk(this);
                    break;
                default:
                    vk(this.h, !1) ? Bk(this) : this.j.setTimeout(Fa(this.l, this), 100)
            }
        } catch (a) {
            Bk(this, a)
        }
    };

    function Bk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            fk(e.h);
            H(e.j, qe, 1);
            d.call(c, new zk(b))
        } catch (f) {
            a.i.reject(f)
        }
    };

    function Ck(a) {
        A.call(this, a, -1, Dk)
    }
    u(Ck, A);
    var Dk = [6];

    function Ek(a) {
        A.call(this, a)
    }
    u(Ek, A);

    function Fk(a) {
        A.call(this, a)
    }
    u(Fk, A);

    function Gk(a) {
        A.call(this, a)
    }
    u(Gk, A);

    function Hk(a) {
        a = (new wg(a)).get("FCCDCF", "");
        try {
            return a ? Qb(Ek, a ? JSON.parse(a) : null) : null
        } catch (b) {
            return null
        }
    }

    function Ik(a) {
        return (a = Hk(a)) ? G(a, Fk, 4) : null
    };

    function Jk(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var e = vc(d.h, "IFRAME");
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = "__uspapiLocator";
                    c.body.appendChild(e)
                } else a.setTimeout(b, 5)
        }
        var c = a.document,
            d = a ? new wc(9 == a.nodeType ? a : a.ownerDocument || a.document) : Ka || (Ka = new wc);
        b()
    };

    function Kk(a) {
        this.h = a;
        this.i = a.document;
        this.j = (a = (a = Hk(this.i)) ? G(a, Gk, 5) || null : null) ? B(a, 2) : null;
        (a = Ik(this.i)) && null != B(a, 1) && B(a, 1);
        (a = Ik(this.i)) && null != B(a, 2) && B(a, 2)
    }

    function Lk() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new Kk(a), Mk(a))
    }

    function Mk(a) {
        !a.j || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Jk(a.h), Ha(function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.l.apply(a, ma(c))
        }))
    }
    Kk.prototype.l = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.j
        }, !0)
    };

    function Nk(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function Ok(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function Pk(a, b) {
        a = Ok(Nk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Jc(a),
            d = Qk(a);
        return q(b, "find").call(b, function(e) {
            var f = null != B(e, 7) ? B(G(e, pj, 7), 1) : B(e, 1);
            e = null != B(e, 7) ? B(G(e, pj, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function Qk(a) {
        for (var b = {};;) {
            b[Jc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Rk = {},
        Sk = (Rk.google_ad_channel = !0, Rk.google_ad_host = !0, Rk);

    function Tk(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        je("ama", b, .01)
    }

    function Uk(a) {
        var b = {};
        Ic(Sk, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Vk(a) {
        a = G(a, mj, 3);
        return !a || B(a, 1) <= Date.now() ? !1 : !0
    }

    function Wk(a) {
        return (a = yk(a)) ? Vk(a) ? a : null : null
    }

    function Xk(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            Tk(a, {
                lserr: 1
            })
        }
    };

    function Yk(a) {
        Tk(a, {
            atf: 1
        })
    }

    function Zk(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Tk(a, {
            atf: 0
        })
    };

    function $k() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function al() {
        var a = new $k;
        this.promise = a.promise;
        this.resolve = a.resolve
    }

    function bl(a) {
        v.google_llp || (v.google_llp = {});
        var b = v.google_llp;
        b[7] || (b[7] = new al, a && a());
        return b[7]
    }

    function cl(a) {
        return bl(function() {
            Cc(v.document, a)
        }).promise
    };

    function dl(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function el(a) {
        if (S(zf)) return !1;
        var b = Rg(v, 12, a.google_ad_client);
        a = "google_ad_host" in a;
        var c = .5 > Math.random(),
            d = Te(v.location, "google_ads_preview");
        return b && !a && c || d
    }

    function fl(a) {
        if (v.google_apltlad || v.top != v || !a.google_ad_client) return null;
        var b = el(a);
        v.google_apltlad = !0;
        var c = dl(a.google_ad_client),
            d = c.enable_page_level_ads;
        Ic(a, function(e, f) {
            ic[f] && "google_ad_client" !== f && (d[f] = e)
        });
        if (b) d.google_ad_channel = "AutoInsertAutoAdCode";
        else if (d.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) d.google_ad_section = a.google_ad_section || a.google_ad_region;
        return c
    }

    function gl(a) {
        return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function hl(a, b) {
        this.h = v;
        this.j = a;
        this.i = b
    }

    function il(a) {
        Dg({
            K: a.h,
            ja: a.i,
            Ta: 50,
            $a: function(b) {
                return jl(a, b)
            }
        })
    }

    function jl(a, b) {
        mf(kf(b, function(c) {
            kl("ok");
            ll(a.h, a.j, c)
        }), function(c) {
            return kl(c.message)
        })
    }

    function kl(a) {
        je("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function ll(a, b, c) {
        if (!P(L).ama_ran_on_page) {
            var d = Wk(c);
            if (d) {
                if (null != B(d, 24)) {
                    c = gk(a);
                    c.availableAbg = !0;
                    var e, f;
                    c.ablationFromStorage = !!(null == (e = G(d, fj, 24)) ? 0 : null == (f = G(e, hj, 3)) ? 0 : ec(f, ij, 2, jj))
                }
                if (gl(b) && (e = Pk(a, H(d, nj, 7)), !e || !Tb(e, 8))) return;
                P(L).ama_ran_on_page = !0;
                if ((e = G(d, qj, 13)) && 1 === B(e, 1)) {
                    var g = 0,
                        h = G(e, rj, 6);
                    h && B(h, 3) && (g = B(h, 3) || 0);
                    Re(a, g)
                } else if (null == (g = G(d, fj, 24)) ? 0 : null == (h = G(g, hj, 3)) ? 0 : ec(h, ij, 2, jj)) gk(a).ablatingThisPageview = !0, Re(a, 1);
                sd(3, [d.toJSON()]);
                var k = b.google_ad_client ||
                    "";
                b = Uk(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
                var l = Wi($i, new Vi(null, b));
                he(782, function() {
                    var m = l;
                    try {
                        var t = Pk(a, H(d, nj, 7)),
                            w;
                        if (w = t) a: {
                            var x;
                            if (x = B(t, 2))
                                for (var z = 0; z < x.length; z++)
                                    if (1 == x[z]) {
                                        w = !0;
                                        break a
                                    }
                            w = !1
                        }
                        if (w) {
                            if (B(t, 4)) {
                                w = {};
                                var F = new Vi(null, (w.google_package = B(t, 4), w));
                                m = Wi(m, F)
                            }
                            var D = new uk(a, k, d, t, m),
                                ea = new Hi;
                            (new Ak(a, D, ea)).start();
                            ea.i.then(Ga(Yk, a), Ga(Zk, a))
                        }
                    } catch (Aa) {
                        Tk(a, {
                            atf: -1
                        })
                    }
                })
            } else Xk(a, c)
        }
    };

    function X(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        W.call(this, a, b);
        this.ba = c;
        this.hb = d
    }
    u(X, W);
    X.prototype.ma = function() {
        return this.ba
    };
    X.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function ml(a) {
        return function(b) {
            return !!(b.ba & a)
        }
    };
    var nl = Db("script");

    function ol(a, b, c, d, e, f, g, h, k, l, m, t) {
        this.v = a;
        this.T = b;
        this.ba = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.P = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.H = void 0 === h ? null : h;
        this.N = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.O = void 0 === t ? null : t;
        this.R = this.A = this.D = null
    }
    ol.prototype.size = function() {
        return this.T
    };

    function pl(a, b, c) {
        null != a.ba && (c.google_responsive_formats = a.ba);
        null != a.P && (c.google_safe_for_responsive_override = a.P);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.H && (c.gfwroml = a.H);
        null != a.N && (c.gfwromr = a.N);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.O && (c.gfwroz = a.O);
        null != a.D && (c.gml = a.D);
        null != a.A && (c.gmr = a.A);
        null != a.R && (c.gzi = a.R);
        b = md();
        b = pd(b) || b;
        Te(b.location, "google_responsive_dummy_ad") &&
            (Ua([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + nl + ">window.top.postMessage('" + a + "', '*');\n          </" + nl + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
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
    var ql = {},
        rl = (ql.image_stacked = 1 / 1.91, ql.image_sidebyside = 1 / 3.82, ql.mobile_banner_image_sidebyside = 1 / 3.82, ql.pub_control_image_stacked = 1 / 1.91, ql.pub_control_image_sidebyside = 1 / 3.82, ql.pub_control_image_card_stacked = 1 / 1.91, ql.pub_control_image_card_sidebyside = 1 / 3.74, ql.pub_control_text = 0, ql.pub_control_text_card = 0, ql),
        sl = {},
        tl = (sl.image_stacked = 80, sl.image_sidebyside = 0, sl.mobile_banner_image_sidebyside = 0, sl.pub_control_image_stacked = 80, sl.pub_control_image_sidebyside = 0, sl.pub_control_image_card_stacked =
            85, sl.pub_control_image_card_sidebyside = 0, sl.pub_control_text = 80, sl.pub_control_text_card = 80, sl),
        ul = {},
        vl = (ul.pub_control_image_stacked = 100, ul.pub_control_image_sidebyside = 200, ul.pub_control_image_card_stacked = 150, ul.pub_control_image_card_sidebyside = 250, ul.pub_control_text = 100, ul.pub_control_text_card = 150, ul);

    function wl(a) {
        var b = 0;
        a.L && b++;
        a.F && b++;
        a.G && b++;
        if (3 > b) return {
            J: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.L.split(",");
        var c = a.G.split(",");
        a = a.F.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            J: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            J: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (isNaN(g) || 0 === g) return {
                J: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {
                J: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            G: d,
            F: e,
            La: b
        }
    }

    function xl(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var yl = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function zl(a, b) {
        W.call(this, a, b)
    }
    u(zl, W);
    zl.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Al(a, b) {
        Bl(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new ol(9, new zl(a, Math.floor(a * b.google_phwr)));
        var c = xc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * rl.mobile_banner_image_sidebyside + tl.mobile_banner_image_sidebyside) + 96), a = {
            Y: a,
            W: c,
            F: 1,
            G: 12,
            L: "mobile_banner_image_sidebyside"
        }) : (a = xl(a), a = {
            Y: a.width,
            W: a.height,
            F: 1,
            G: 13,
            L: "image_sidebyside"
        }) : (a = xl(a), a = {
            Y: a.width,
            W: a.height,
            F: 4,
            G: 2,
            L: "image_stacked"
        });
        Cl(b, a);
        return new ol(9, new zl(a.Y, a.W))
    }

    function Dl(a, b) {
        Bl(a, b);
        var c = wl({
            G: b.google_content_recommendation_rows_num,
            F: b.google_content_recommendation_columns_num,
            L: b.google_content_recommendation_ui_type
        });
        if (c.J) a = {
            Y: 0,
            W: 0,
            F: 0,
            G: 0,
            L: "image_stacked",
            J: c.J
        };
        else {
            var d = 2 === c.La.length && 468 <= a ? 1 : 0;
            var e = c.La[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = vl[e];
            for (var g = c.F[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.G[d];
            d = Math.floor(((a - 8 * f - 8) / f * rl[e] + tl[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    ra: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    ra: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = a.ra ? {
                Y: 0,
                W: 0,
                F: 0,
                G: 0,
                L: e,
                J: a.ra
            } : {
                Y: a.width,
                W: a.height,
                F: f,
                G: c,
                L: e
            }
        }
        if (a.J) throw new N(a.J);
        Cl(b, a);
        return new ol(9, new zl(a.Y, a.W))
    }

    function Bl(a, b) {
        if (0 >= a) throw new N("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Cl(a, b) {
        a.google_content_recommendation_ui_type = b.L;
        a.google_content_recommendation_columns_num = b.F;
        a.google_content_recommendation_rows_num = b.G
    };

    function El(a, b) {
        W.call(this, a, b)
    }
    u(El, W);
    El.prototype.h = function() {
        return this.minWidth()
    };
    El.prototype.i = function(a, b, c) {
        Mj(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var Fl = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Gl(a, b) {
        W.call(this, a, b)
    }
    u(Gl, W);
    Gl.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function Hl(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = Fj(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g;
            else if (g = M(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (Kj(b, c), Mj(b, c), a = g)
        }
        if (250 > a) throw new N("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" +
                f);
            return new ol(11, new W(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new N("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new N("Invalid height: height=" + f);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new N("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new ol(11, new W(a, f))
        }
        d = Fl[f];
        if (!d) throw new N("Invalid data-ad-layout value: " + f);
        c = Qj(c, b);
        b = M(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new ol(11, "in-article" == f ? new Gl(a, b) : new W(a, b))
    };

    function Il(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Jl(a, b) {
        for (var c = Kl.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var Y = [new X(970, 90, 2), new X(728, 90, 2), new X(468, 60, 2), new X(336, 280, 1), new X(320, 100, 2), new X(320, 50, 2), new X(300, 600, 4), new X(300, 250, 1), new X(250, 250, 1), new X(234, 60, 2), new X(200, 200, 1), new X(180, 150, 1), new X(160, 600, 4), new X(125, 125, 1), new X(120, 600, 4), new X(120, 240, 4), new X(120, 120, 1, !0)],
        Kl = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];

    function Ll(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            B: a,
            C: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || Ml(b) || e.google_ad_resize ? (488 > M(c) && (Hj(c) || S(Ff)) && Kj(c, d), b = Gj(a, c, d, e), c = !0 !== b ? {
            B: a,
            C: b
        } : {
            B: M(c) || a,
            C: !0
        }) : c = {
            B: a,
            C: 2
        };
        b = c.C;
        return !0 !== b ? {
            B: a,
            C: b
        } : d.parentElement ? {
            B: c.B,
            C: b
        } : {
            B: a,
            C: b
        }
    }

    function Nl(a, b, c, d, e) {
        var f = he(247, function() {
                return Ll(a, b, c, d, e)
            }),
            g = f.B;
        f = f.C;
        var h = !0 === f,
            k = K(d.style.width),
            l = K(d.style.height),
            m = Ol(g, b, c, d, e, h);
        g = m.X;
        h = m.U;
        var t = m.ma;
        m = m.Ka;
        var w = Pl(b, t),
            x, z = (x = Nj(d, c, "marginLeft", K)) ? x + "px" : "",
            F = (x = Nj(d, c, "marginRight", K)) ? x + "px" : "";
        x = Nj(d, c, "zIndex") || "";
        return new ol(w, g, t, null, m, f, h, z, F, l, k, x)
    }

    function Ml(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Ol(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, M(c)) ? 4 : 3 : Ej(b);
        var g = !1,
            h = !1;
        if (488 > M(c)) {
            var k = zj(d, c);
            var l = Qj(d, c);
            g = !l && k;
            h = l && k
        }
        l = 488 > M(c);
        var m = [Oj(a), ml(b)];
        Hj(c) || m.push(Pj(l, c, d, h));
        null != e.google_max_responsive_height && m.push(Sj(e.google_max_responsive_height));
        var t = [function(x) {
            return !x.hb
        }];
        !g && !h || Hj(c) || (g = Tj(c, d), t.push(Sj(g)));
        var w = l && !f && 3 === b && Ql(c) ? new X(a, Math.floor(a / 1.2), 1) : Jl(Il(m), Il(t));
        if (!w) throw new N("No slot size for availableWidth=" + a);
        l = he(248, function() {
            var x;
            a: if (f) {
                if (e.gfwrnh && (x = K(e.gfwrnh))) {
                    x = {
                        X: new El(a, x),
                        U: !0
                    };
                    break a
                }
                x = a / 1.2;
                if (Hj(c)) var z = x;
                else {
                    z = Math;
                    var F = z.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var D = Infinity;
                    else {
                        D = d;
                        var ea = Infinity;
                        do {
                            var Aa = Nj(D, c, "height", K);
                            Aa && (ea = Math.min(ea, Aa));
                            (Aa = Nj(D, c, "maxHeight", K)) && (ea = Math.min(ea, Aa))
                        } while ((D = D.parentElement) && "HTML" != D.tagName);
                        D = ea
                    }
                    z = F.call(z, x, D);
                    if (z < .5 * x || 100 > z) z = x
                }
                S(Of) && !Qj(d, c) && (z = Math.max(z, .5 * Gd(c).clientHeight));
                x = {
                    X: new El(a, Math.floor(z)),
                    U: z < x ? 102 : !0
                }
            } else x = {
                X: w,
                U: 100
            };
            return x
        });
        g = l.X;
        l = l.U;
        return "in-article" === e.google_ad_layout && Rl(c) ? {
            X: Sl(a, c, d, g, e),
            U: !1,
            ma: b,
            Ka: k
        } : {
            X: g,
            U: l,
            ma: b,
            Ka: k
        }
    }

    function Pl(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function Sl(a, b, c, d, e) {
        var f = e.google_ad_height || Nj(c, b, "height", K);
        b = Hl(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new X(b.minWidth(), b.height(), 1) : d
    }

    function Rl(a) {
        return S(If) || a.location && "#hffwroe2etoq" == a.location.hash
    }

    function Ql(a) {
        return S(Hf) || a.location && "#affwroe2etoq" == a.location.hash
    };

    function Tl(a, b, c, d, e) {
        var f;
        (f = M(b)) ? 488 > M(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Mj(b, c), f = {
            B: f,
            C: !0
        }) : f = {
            B: a,
            C: 5
        } : f = {
            B: a,
            C: 4
        }: f = {
            B: a,
            C: 10
        };
        var g = f;
        f = g.B;
        g = g.C;
        if (!0 !== g || a == f) return new ol(12, new W(a, d), null, null, !0, g, 100);
        a = Ol(f, "auto", b, c, e, !0);
        return new ol(1, a.X, a.ma, 2, !0, g, a.U)
    };

    function Ul(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = r(yl), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Ml(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = S(Jf) || S(If) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (Vl(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return Vl(b), 1
    }

    function Wl(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Nj(b, d, "width", K) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = Xl(a, e, b, c, d)) ? f : Nl(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        pl(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function Xl(a, b, c, d, e) {
        var f = d.google_ad_height || Nj(c, e, "height", K);
        switch (a) {
            case 5:
                return f = he(247, function() {
                    return Ll(b, d.google_ad_format, e, c, d)
                }), a = f.B, f = f.C, !0 === f && b != a && Mj(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Al(a, d);
            case 9:
                return Dl(b, d);
            case 8:
                return Hl(b, e, c, f, d);
            case 10:
                return Tl(b, e, c, f, d)
        }
    }

    function Vl(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function Yl(a, b) {
        var c = pd(b);
        if (c) {
            c = M(c);
            var d = Dc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var Zl = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        $l = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
        am = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        bm = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        cm = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
        dm = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
            "/show_ads_impl_with_ama", ".js"
        ]),
        em = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
        fm = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]),
        gm = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);

    function hm(a) {
        var b = a.ob;
        return a.bb || ("dev" === b ? "dev" : "")
    };
    var im = {},
        jm = (im.google_ad_modifications = !0, im.google_analytics_domain_name = !0, im.google_analytics_uacct = !0, im.google_pause_ad_requests = !0, im.google_user_agent_client_hint = !0, im);

    function km(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function lm(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function mm(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function Z(a) {
        this.l = [];
        this.i = a || window;
        this.h = 0;
        this.j = null;
        this.m = 0
    }
    var nm;
    n = Z.prototype;
    n.cb = function(a, b) {
        0 != this.h || 0 != this.l.length || b && b != window ? this.Ha(a, b) : (this.h = 2, this.Qa(new om(a, window)))
    };
    n.Ha = function(a, b) {
        this.l.push(new om(a, b || this.i));
        pm(this)
    };
    n.mb = function(a) {
        this.h = 1;
        if (a) {
            var b = ie(188, Fa(this.Pa, this, !0));
            this.j = this.i.setTimeout(b, a)
        }
    };
    n.Pa = function(a) {
        a && ++this.m;
        1 == this.h && (null != this.j && (this.i.clearTimeout(this.j), this.j = null), this.h = 0);
        pm(this)
    };
    n.ub = function() {
        return !(!window || !Array)
    };
    n.eb = function() {
        return this.m
    };

    function pm(a) {
        var b = ie(189, Fa(a.vb, a));
        a.i.setTimeout(b, 0)
    }
    n.vb = function() {
        if (0 == this.h && this.l.length) {
            var a = this.l.shift();
            this.h = 2;
            var b = ie(190, Fa(this.Qa, this, a));
            a.K.setTimeout(b, 0);
            pm(this)
        }
    };
    n.Qa = function(a) {
        this.h = 0;
        a.h()
    };

    function qm(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function rm() {
        if (nm && qm(nm)) return nm;
        if (S(Tf)) var a = kg(!1).K;
        else jg || (jg = kg(!0).K), a = jg;
        var b = a.google_jobrunner;
        return b && ("object" === typeof b || "function" === typeof b) && qm(b) && hd(b.nq) && hd(b.nqa) && hd(b.al) && hd(b.rl) ? nm = b : a.google_jobrunner = nm = new Z(a)
    }

    function sm(a, b) {
        rm().nq(a, b)
    }

    function tm(a, b) {
        rm().nqa(a, b)
    }
    Z.prototype.nq = Z.prototype.cb;
    Z.prototype.nqa = Z.prototype.Ha;
    Z.prototype.al = Z.prototype.mb;
    Z.prototype.rl = Z.prototype.Pa;
    Z.prototype.sz = Z.prototype.ub;
    Z.prototype.tc = Z.prototype.eb;

    function om(a, b) {
        this.h = a;
        this.K = b
    };
    var um = "undefined" === typeof sttc ? void 0 : sttc;

    function vm(a) {
        try {
            return We(a, Xe), new Ne(JSON.parse(a))
        } catch (b) {
            de.I(838, b instanceof Error ? b : Error(String(b)), void 0, function(c) {
                c.jspb = String(a)
            })
        }
        return new Ne
    };
    var wm = ["AwfG8hAcHnPa/kJ1Co0EvG/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr//PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AysVDPGQTLD/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
    ];

    function xm() {
        var a = L.document;
        a = void 0 === a ? window.document : a;
        Vc(wm, a)
    };
    var ym = ["A2YAd4xOntTGygIDjApOTtXOgVI3IWsd5OnOGq3RbRkIQwyqYWNl1JGRAcvtm6VOHDj4n07T/J19VqLuJn3MmQ8AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A2c5Ux+hivdkLh/KbZUGr6f7SCR0mZrBVfPJ+/OuDVHNwiYv+Lo83b9z5qL8sod78bQl0pSLtbvRWURo+xRl7AIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
        "AzNJ4sd3tVurolpdvWYZ4cmP9Po7RJhEHSqmC3pgxW9fFVZvchhtcMUgHAs97npxMD1jhXHO8s6q6Wy1MMLxKgEAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
    ];

    function zm() {
        var a = L.document;
        a = void 0 === a ? window.document : a;
        Vc(ym, a)
    };

    function Am(a, b, c) {
        var d = window;
        return function() {
            var e = Pd(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (Pd() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function Bm(a, b) {
        return Am(a, b, function(c, d) {
            (new ce).I(c, d)
        })
    };

    function Cm(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Dm(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Em() {
        var a = new p.Set;
        try {
            if ("undefined" === typeof googletag || !googletag.pubads) return a;
            for (var b = googletag.pubads(), c = r(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId())
        } catch (e) {}
        return a
    }

    function Fm(a) {
        a = a.id;
        return null != a && (Em().has(a) || q(a, "startsWith").call(a, "google_ads_iframe_") || q(a, "startsWith").call(a, "aswift"))
    }

    function Gm(a, b, c) {
        if (!a.sources) return !1;
        var d = hg(Xf);
        switch (Hm(a)) {
            case 2:
                var e = Im(a);
                if (e) return c.some(function(g) {
                    return Jm(e, g, d)
                });
            case 1:
                var f = Km(a);
                if (f) return b.some(function(g) {
                    return Jm(f, g, d)
                })
        }
        return !1
    }

    function Hm(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Km(a) {
        return Lm(a, function(b) {
            return b.currentRect
        })
    }

    function Im(a) {
        return Lm(a, function(b) {
            return b.previousRect
        })
    }

    function Lm(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Mm() {
        T.call(this);
        this.i = this.h = this.P = this.O = this.H = 0;
        this.za = this.wa = Number.NEGATIVE_INFINITY;
        this.sa = this.ua = this.va = this.xa = this.Ca = this.m = this.Ba = this.T = 0;
        this.ta = !1;
        this.R = this.N = this.A = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Aa = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.ya = !1;
        this.da = function() {}
    }
    u(Mm, T);

    function Nm() {
        var a = new Mm;
        if (S(Uf) && !window.google_plmetrics && window.PerformanceObserver) {
            window.google_plmetrics = !0;
            for (var b = r(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, Om(a).observe({
                type: c,
                buffered: !S(Zf)
            });
            Pm(a)
        }
    }

    function Om(a) {
        a.l || (a.l = new PerformanceObserver(Bm(640, function(b) {
            var c = Qm !== window.scrollX || Rm !== window.scrollY ? [] : Sm,
                d = Tm();
            b = r(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput && (!S(Vf) || .01 < e.value)) {
                        f.H += Number(e.value);
                        Number(e.value) > f.O && (f.O = Number(e.value));
                        f.P += 1;
                        var g = Gm(e, c, d);
                        g && (f.m += e.value, f.xa++);
                        if (5E3 < e.startTime - f.wa || 1E3 < e.startTime - f.za) f.wa = e.startTime, f.h = 0, f.i = 0;
                        f.za = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.T && (f.T = f.h, f.Ca = f.i, f.Ba = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.va = Math.floor(e.renderTime || e.loadTime);
                    a.ua = e.size;
                    break;
                case "first-input":
                    a.sa = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ta = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.A += e, a.N = Math.max(a.N, e), a.R += 1
            }
        })));
        return a.l
    }

    function Pm(a) {
        var b = Bm(641, function() {
                var f = document;
                2 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Um(a)
            }),
            c = Bm(641, function() {
                return void Um(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        var d = hg(Yf),
            e;
        0 < d && (e = setTimeout(c, 1E3 * d));
        a.da = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Om(a).disconnect();
            e && clearTimeout(e)
        }
    }
    Mm.prototype.j = function() {
        T.prototype.j.call(this);
        this.da()
    };

    function Um(a) {
        if (!a.ya) {
            a.ya = !0;
            Om(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Dm("cls", a.H), b += Dm("mls", a.O), b += Cm("nls", a.P), window.LayoutShiftAttribution && (b += Dm("cas", a.m), b += Cm("nas", a.xa)), b += Dm("wls", a.T), b += Dm("tls", a.Ba), window.LayoutShiftAttribution && (b += Dm("was", a.Ca)));
            window.LargestContentfulPaint && (b += Cm("lcp", a.va), b += Cm("lcps", a.ua));
            window.PerformanceEventTiming && a.ta && (b += Cm("fid", a.sa));
            window.PerformanceLongTaskTiming &&
                (b += Cm("cbt", a.A), b += Cm("mbt", a.N), b += Cm("nlt", a.R));
            for (var c = 0, d = r(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Fm(e.value) && c++;
            b += Cm("nif", c);
            b += Cm("ifi", jd(window));
            c = R(Nh).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (v === v.top ? 1 : 0);
            b += a.Aa ? "&qqid=" + encodeURIComponent(a.Aa) : Cm("pvsid", Wc(v));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.v || (a.v = !0, a.j())
        }
    }

    function Jm(a, b, c) {
        if (0 === c) return !0;
        var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= d || 0 >= a ? !1 : 100 * d * a / ((b.right - b.left) * (b.bottom - b.top)) >= c
    }

    function Tm() {
        var a = [].concat(ma(document.getElementsByTagName("iframe"))).filter(Fm),
            b = [].concat(ma(Em())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Qm = window.scrollX;
        Rm = window.scrollY;
        return Sm = [].concat(ma(a), ma(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Qm = void 0,
        Rm = void 0,
        Sm = [];

    function Vm(a) {
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }

    function Wm() {
        var a = void 0 === a ? window : a;
        if (!Vm(a) && S(ag) || Vm(a) && S(bg)) {
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        }
        return !1
    }
    var Xm = {
        issuerOrigin: "https://attestation.android.com",
        issuancePath: "/att/i",
        redemptionPath: "/att/r",
        shouldRedeemToken: function() {
            return Wm()
        },
        shouldRequestToken: function() {
            return Wm()
        }
    };
    var Ym = ["A88otRz1Fd3Nt567e2IYshC18LL3KGVXpVJW9oTCId4RYaygt23pbb4JqrbdIO/bwZPWEmRjBIRBu/bZbDR7Pg4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A0gCLbXCcL0R1Oc8tFPDs0G4Elz17w3zHp+Zst66+D17veE2o7fUcPsA114QtSTRqfVJLMeTSdeWOom0CcyCsgYAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "A9RQ+LxFazAousxUwSCzaihJjHLO1UyjQp0teZKHl7WdbVjPDfHSKMd6D/ZI5MTjqClFycbl70EFd7cBJWXqKQEAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6WKeWsdn1Ct+ZPqS9NCxxaiBoQ7wdTkK2/gE69Yu0gfBKJfo1gOvgkGmf5/xaIajT/RUb9AbnF1FsSZ47cCcQcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "A04ZCu7yjrHgwQJK5ISHhH1DSg0qqowEay3n70KO6wV3D2Mj+OX3Kw20aSMitzgdG1xfrN7sOJV/dZIk+RvCzA4AAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
    ];

    function Zm(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        T.call(this);
        S($f) || S(dg) || $m();
        this.i = c;
        this.h = [];
        S(eg) ? Wm() && this.h.push(Xm) : this.h = b || [Xm];
        if (document.hasTrustToken && !S(cg) && !Array.isArray(window.goog_tt_state)) {
            var d = an(this);
            Object.defineProperty(window, "goog_tt_state", {
                configurable: !1,
                get: function() {
                    return d.slice()
                }
            })
        }
    }
    u(Zm, T);

    function $m() {
        var a = void 0 === a ? window.document : a;
        Vc(Ym, a)
    }

    function bn(a, b) {
        return a || ".google.ch" === b || "function" === typeof L.__tcfapi
    }

    function an(a) {
        return a.h.map(function(b) {
            return {
                issuerOrigin: b.issuerOrigin,
                state: S(dg) && !a.i ? 12 : 1
            }
        })
    }

    function cn(a, b) {
        var c = q(window.goog_tt_state, "find").call(window.goog_tt_state, function(d) {
            return d.issuerOrigin === a
        });
        c && (c.state = b)
    }

    function dn() {
        var a = window.goog_tt_state;
        return Array.isArray(a) && a.some(function(b) {
            return 1 != b.state
        })
    }

    function en(a) {
        var b = a.issuerOrigin + a.redemptionPath,
            c = {
                keepalive: !0,
                redirect: "follow",
                method: "get",
                trustToken: {
                    type: "token-redemption",
                    issuer: a.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        cn(a.issuerOrigin, 2);
        return window.fetch(b, c).then(function(d) {
            if (!d.ok) throw Error(d.status + ": Network response was not ok!");
            cn(a.issuerOrigin, 6)
        }).catch(function(d) {
            d && "NoModificationAllowedError" === d.name ? cn(a.issuerOrigin, 6) : cn(a.issuerOrigin, 5)
        })
    }

    function fn(a, b) {
        var c = a.issuerOrigin + a.issuancePath;
        cn(a.issuerOrigin, 8);
        return window.fetch(c, {
            trustToken: {
                type: "token-request"
            }
        }).then(function(d) {
            if (!d.ok) throw Error(d.status + ": Network response was not ok!");
            cn(a.issuerOrigin, 10);
            if (b) return en(a)
        }).catch(function(d) {
            if (d && "NoModificationAllowedError" === d.name) {
                if (cn(a.issuerOrigin, 10), b) return en(a)
            } else cn(a.issuerOrigin, 9)
        })
    }

    function gn() {
        cn(Xm.issuerOrigin, 13);
        return document.hasTrustToken(Xm.issuerOrigin).then(function(a) {
            return a ? en(Xm) : fn(Xm, !0)
        })
    }

    function hn(a) {
        if (document.hasTrustToken && !S(cg) && (!S(dg) || a.i)) {
            if (dn()) return window.goog_tt_promise;
            var b = [];
            S(eg) ? Wm() && b.push(gn()) : a.h.forEach(function(c) {
                cn(c.issuerOrigin, 13);
                var d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken();
                if (d || e) {
                    var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                        if (g) {
                            if (d) return en(c)
                        } else {
                            if (e) return fn(c, d);
                            cn(c.issuerOrigin, 3)
                        }
                    });
                    b.push(f)
                } else cn(c.issuerOrigin, 7)
            });
            if (p.Promise && p.Promise.all) return a = p.Promise.all(b), "object" != typeof window.goog_tt_promise &&
                Object.defineProperty(window, "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }), a
        }
    };
    var jn = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function kn() {
        return L.navigator && L.navigator.userAgentData && "function" === typeof L.navigator.userAgentData.getHighEntropyValues ? L.navigator.userAgentData.getHighEntropyValues(jn).then(function(a) {
            var b = new Ck;
            b = E(b, 1, a.platform);
            b = E(b, 2, a.platformVersion);
            b = E(b, 3, a.architecture);
            b = E(b, 4, a.model);
            b = E(b, 5, a.uaFullVersion);
            return E(b, 9, a.bitness)
        }) : null
    };

    function ln(a, b) {
        b.google_ad_host || (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute("content"))
    }

    function mn(a, b, c) {
        L.google_sa_impl && !L.document.getElementById("google_shimpl") && (L.google_sa_queue = null, L.google_sl_win = null, L.google_sa_impl = null);
        L.google_sa_queue || (L.google_sa_queue = [], L.google_sl_win = L, L.google_process_slots = ie(215, function() {
            return nn(L)
        }), a = on(void 0 === c ? "" : c, a, b), Cc(L.document, a).id = "google_shimpl")
    }

    function nn(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || je("shimpl", {
            t: "no_fn"
        });
        "function" === typeof c && he(216, c);
        b.length && a.setTimeout(ie(215, function() {
            return nn(a)
        }), 0)
    }

    function pn(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function on(a, b, c) {
        var d = Math.random() < hg(Bf) ? ib(rc(b.qb).toString()) : null;
        b = Ub(c, 4) ? b.pb : b.rb;
        d = d ? d : ib(rc(b).toString());
        b = {};
        a: {
            if (Ub(c, 4)) {
                if (c = a || qn()) {
                    var e = {};
                    c = (e.client = c, e.plah = L.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        rn(c, b);
        a: {
            if (c = hg(uf))
                if (a = a || qn()) {
                    e = {};
                    a = (e.client = a, e.plah = L.location.host, e.eid = "" + c, e.ama_t = "adsense", e);
                    break a
                }
            a = {}
        }
        rn(a, b);
        rn(ig() ? {
            bust: ig()
        } : {}, b);
        return fb(d, b)
    }

    function rn(a, b) {
        Ic(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function qn() {
        if (L.google_ad_client) return L.google_ad_client;
        var a = P(L).head_tag_slot_vars;
        if (a && a.google_ad_client) return a.google_ad_client;
        if (a = L.document.querySelector(".adsbygoogle[data-ad-client]")) return a.getAttribute("data-ad-client");
        b: {
            a = L.document.getElementsByTagName("script");
            var b = L.navigator && L.navigator.userAgent || "";b = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(b) ||
            /i(phone|pad|pod)/i.test(b) && /applewebkit/i.test(b) && !/version|safari/i.test(b) && !od() ? km : lm;
            for (var c = a.length - 1; 0 <= c; c--) {
                var d = a[c];
                if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = b(d))) {
                    a = d;
                    break b
                }
            }
            a = null
        }
        if (a) {
            b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            for (c = {}; d = b.exec(a);) c[d[1]] = mm(d[2]);
            a = c.google_ad_client ? c.google_ad_client : ""
        } else a = "";
        return a ? a : ""
    }

    function sn(a) {
        if (!bd) a: {
            for (var b = [v.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (l) {}
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    bd = h;
                    break a
                }
            } catch (l) {}
            bd = null
        }
        if (bd) return null;
        c = vc(document, "IFRAME");
        c.id = "google_esf";
        c.name = "google_esf";
        a = a.xb;
        if (a instanceof nc) {
            var k;
            h = qc(a);
            a = (null === (k = kc()) || void 0 === k ? 0 : k.isScriptURL(h)) ? TrustedScriptURL.prototype.toString.apply(h) : h
        } else a = hb(a).toString();
        c.src = a;
        c.style.display = "none";
        return c
    }

    function tn(a, b, c, d) {
        un(a, b, c, d, function(e, f) {
            var g = e.document;
            e = void 0;
            for (var h = 0; !e || g.getElementById(e + "_anchor");) e = "aswift_" + h++;
            h = Number(f.google_ad_width || 0);
            var k = Number(f.google_ad_height || 0),
                l = f.ds || "";
            l && (l += q(l, "endsWith").call(l, ";") ? "" : ";");
            if (S(Sf)) f = vc(document, "INS"), f.id = e + "_anchor", Gi(f, h, k), f.style.display = "block", g = vc(document, "INS"), g.id = e + "_expand", Gi(g, h, k), g.style.display = "inline-table", g.appendChild(f), c.appendChild(g);
            else {
                var m = "";
                m = void 0 === m ? "" : m;
                h = "border:none;height:" +
                    k + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (h + "px;background-color:transparent;");
                h = ['<ins id="' + (e + '_expand"'), ' style="display:inline-table;' + h + (void 0 === l ? "" : l) + '"', m ? ' data-ad-slot="' + m + '">' : ">", '<ins id="' + (e + '_anchor" style="display:block;') + h + '">', "</ins></ins>"].join("");
                16 == f.google_reactive_ad_format || f.rss ? (f = g.createElement("div"), g = yb(h), Bb(f, g), c.appendChild(f.firstChild)) : (f = yb(h), Bb(c, f))
            }
            return e
        })
    }

    function un(a, b, c, d, e) {
        var f = e(a, b);
        vn(a, c, b);
        c = Ja;
        e = (new Date).getTime();
        b.google_lrv = I(d, 2);
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        b.dninfo = b.google_loader_used;
        c = (d = !!a.document.getElementById(f + "_anchor")) ? sm : tm;
        b.dninfo += "_" + d;
        var g = {
            pubWin: a,
            iframeWin: null,
            vars: b
        };
        pn(a, function() {
            b.dninfo += "_" + !!a.document.getElementById(f + "_anchor");
            var h = a.google_sa_impl(g);
            h && h.catch && h.catch(ke(911))
        }, c)
    }

    function vn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !cd[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Jc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var t = k[m];
                            if (t.nodeName && t.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === t) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var w = a.parent;
                for (e = 0; w && w !== a && 25 > e; ++e) {
                    var x = w.frames;
                    for (d = 0; d < x.length; ++d)
                        if (a === x[d]) {
                            b.push(d);
                            break
                        }
                    a = w;
                    w = a.parent
                }
            } catch (z) {}
            c.google_ad_dom_fingerprint = Jc(h + b.join()).toString()
        }
    }

    function wn() {
        var a = pd(v);
        a && (a = Fd(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function xn(a) {
        (S($f) || S(dg)) && $m();
        S(dg) && bn(Mg(), I(a, 8)) || ie(779, function() {
            var b = new Zm(function() {}, null, !0);
            0 < hg(fg) ? L.google_trust_token_operation_promise = hn(b) : hn(b)
        })();
        a = kn();
        null != a && a.then(function(b) {
            L.google_user_agent_client_hint = ac(b)
        });
        zm();
        xm()
    };

    function yn(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function zn(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            var d = c.search(Ac),
                e;
            b: {
                for (e = 0; 0 <= (e = c.indexOf("client", e)) && e < d;) {
                    var f = c.charCodeAt(e - 1);
                    if (38 == f || 63 == f)
                        if (f = c.charCodeAt(e + 6), !f || 61 == f || 38 == f || 35 == f) break b;
                    e += 7
                }
                e = -1
            }
            if (0 > e) c = null;
            else {
                f = c.indexOf("&", e);
                if (0 > f || f > d) f = d;
                e += 7;
                c = decodeURIComponent(c.substr(e, f - e).replace(/\+/g, " "))
            }
            c && (b.google_ad_client = yn("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) f = a[d], /data-/.test(f.name) && (e = kb(f.name.replace("data-matched-content",
            "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), b.hasOwnProperty(e) || (f = yn(e, f.value), null !== f && (b[e] = f)))
    }

    function An(a) {
        if (a = ed(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Bn(a, b, c, d) {
        zn(a, b);
        if (c.document && c.document.body && !Ul(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Yl(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!cd[e + "x" + g];
                var h = f;
                if (e) {
                    var k = dd(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new N("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = Nl(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                pl(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || Nj(a, c, "width", K) || b.google_ad_width || 0;
        f = Ga(Nl, e, "auto", c, a, b, !1, !0);
        g = pd(c) || c;
        h = b.google_ad_client;
        d = g.location && "#ftptohbh" === g.location.hash ? 2 : Te(g.location, "google_responsive_slot_preview") || S(Ef) ? 1 : S(Cf) ? 2 : Og(g, 1, h, d) ? 1 : 0;
        if (g = 0 !== d) b: if (!(488 > M(c) || S(Df)) || b.google_reactive_ad_format || Ul(c, b) || Bj(a, b)) g = !1;
            else {
                for (g = a; g; g = g.parentElement) {
                    h =
                        Dc(g, c);
                    if (!h) {
                        b.gfwrnwer = 18;
                        g = !1;
                        break b
                    }
                    if (!Ua(["static", "relative"], h.position)) {
                        b.gfwrnwer = 17;
                        g = !1;
                        break b
                    }
                }
                if (!S(Df) && (g = Fj(c, a, e, .3, b), !0 !== g)) {
                    b.gfwrnwer = g;
                    g = !1;
                    break b
                }
                g = c.top == c ? !0 : !1
            }
        g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, pl(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, d.ds && (b.ds = d.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1;
        if (e = Ul(c, b)) Wl(e, a, b, c, d);
        else {
            if (Bj(a, b)) {
                if (d = Dc(a, c)) a.style.width =
                    d.width, a.style.height = d.height, Aj(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = An(c)
            } else Aj(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Wl(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Gj(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Cn(a, b) {
        b = void 0 === b ? 500 : b;
        T.call(this);
        this.i = a;
        this.Ta = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    u(Cn, T);
    Cn.prototype.j = function() {
        this.m = {};
        this.l && (tc(this.i, "message", this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        T.prototype.j.call(this)
    };

    function Dn(a) {
        T.call(this);
        this.i = a;
        this.h = null;
        this.l = !1
    }
    u(Dn, T);
    var En = null,
        Fn = [],
        Gn = new p.Map,
        Hn = -1;

    function In(a) {
        return nd.test(a.className) && "done" != a.dataset.adsbygoogleStatus
    }

    function Jn(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Kn(a, b, c)
    }

    function Kn(a, b, c) {
        var d = window,
            e = md();
        e.google_spfd || (e.google_spfd = Bn);
        (e = b.google_reactive_ads_config) || Bn(a, b, d, c);
        ln(d, b);
        if (!Ln(a, b, d)) {
            e || (d.google_lpabyc = Cj(a, d) + Nj(a, d, "height", K));
            if (e) {
                e = e.page_level_pubvars || {};
                if (P(L).page_contains_reactive_tag && !P(L).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Se(!1);
                        return
                    }
                    throw new N("Only one 'enable_page_level_ads' allowed per page.");
                }
                P(L).page_contains_reactive_tag = !0;
                Se(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = id(d);
            gd(jm, function(f, g) {
                b[g] =
                    b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (P(L).first_tag_on_page || 0);
            he(164, function() {
                tn(d, b, a, c)
            })
        }
    }

    function Ln(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Pe(c);
        if (f && f.Da && "on" != b.google_adtest && !e) {
            e = Cj(a, c);
            var g = Gd(c).clientHeight;
            if (!f.na || f.na && ((0 == g ? null : e / g) || 0) >= f.na) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = za(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.tb && (null !== Pc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Pc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Dc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (v.console && v.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Mn(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (In(e) && "reserved" != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d
        }
        return null
    }

    function Nn(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    On(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function Pn() {
        var a = vc(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Sc(a);
        return a
    }

    function Qn(a, b) {
        var c = {};
        gd(Cd, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = Pn();
        Yc.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!P(L).pause_ad_requests;
        Jn(d, e, b)
    }

    function Rn(a, b) {
        function c() {
            return Qn(a, b)
        }
        Fd(v).wasPlaTagProcessed = !0;
        var d = v.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = Na(ie(191, c));
            sc(d, "DOMContentLoaded", e);
            (new v.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function On(a, b, c) {
        var d = {};
        he(165, function() {
            Sn(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Tn(a) {
        delete a.google_checked_head;
        Ic(a, function(b, c) {
            ic[c] || (delete a[c], v.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function Un(a, b) {
        var c = L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = P(window);
            if (d.head_tag_slot_vars) throw new N("Only one AdSense head tag supported per page. The second tag is ignored.");
            var e = {};
            zn(c, e);
            Tn(e);
            var f = Ya(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            L.adsbygoogle || (L.adsbygoogle = []);
            d = L.adsbygoogle;
            d.loaded ? d.push(c) : d.splice(0, 0, c);
            var g;
            e.google_adbreak_test || (null == (g = ec(b, se, 13, Oe)) ? 0 : Ub(g, 3)) && S(Pf) ? Vn(f, a) : ud(function() {
                Vn(f, a)
            })
        }
    }

    function Wn(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function Sn(a, b, c, d) {
        if (null == a) throw new N("push() called with no parameters.");
        Xn(a, I(d, 7), I(d, 2));
        var e = Wn(a);
        if (0 !== e) null == En ? (Yn(a), Fn.push(a)) : 3 === e ? he(787, function() {
            En.handleAdConfig(a)
        }) : En.handleAdBreak(a).catch(ke(730));
        else {
            Ja = (new Date).getTime();
            mn(c, d, Zn(a));
            $n();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        c = !0;
                        break a
                    }
                    throw new N("'google_ad_client' is missing from the tag config.");
                }
                c = !1
            }
            if (c) ao(a, d, b);
            else if ((c = a.params) && gd(c, function(g, h) {
                    b[h] =
                        g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                c = bo(a.element);
                zn(c, b);
                e = P(v).head_tag_slot_vars || {};
                Ic(e, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (c.hasAttribute("data-require-head") && !P(v).head_tag_slot_vars) throw new N("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new N("Ad client is missing from the slot.");
                b.google_apsail = Tg(b.google_ad_client);
                var f = (e = 0 === (P(L).first_tag_on_page || 0) && fl(b)) && gl(e);
                e && !f && (ao(e, d), P(L).skip_next_reactive_tag = !0);
                0 === (P(L).first_tag_on_page || 0) && (P(L).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!P(L).pause_ad_requests;
                Jn(c, b, d);
                e && f && co(e)
            }
        }
    }
    var eo = !1;

    function Xn(a, b, c) {
        S(Af) && !eo && (eo = !0, (a = Zn(a)) || (a = qn()), je("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, 1))
    }

    function Zn(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function $n() {
        if (S(xf)) {
            var a = Pe(L);
            if (!(a = a && a.Da)) {
                try {
                    var b = L.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? yk(b) : null;
                a = !(b && Vk(b) && b)
            }
            a || Re(L, 1)
        }
    }

    function co(a) {
        Xc(function() {
            Fd(v).wasPlaTagProcessed || v.adsbygoogle && v.adsbygoogle.push(a)
        })
    }

    function ao(a, b, c) {
        P(L).skip_next_reactive_tag ? P(L).skip_next_reactive_tag = !1 : (0 === (P(L).first_tag_on_page || 0) && (P(L).first_tag_on_page = 1), c && a.tag_partner && (Qe(v, a.tag_partner), Qe(c, a.tag_partner)), c = Ub(b, 6), P(L).ama_ran_on_page || il(new hl(a, c)), Rn(a, b))
    }

    function bo(a) {
        if (a) {
            if (!In(a) && (a.id ? a = Mn(a.id) : a = null, !a)) throw new N("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new N("'element' is not a good DOM element.");
        } else if (a = Mn(), !a) throw new N("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function fo() {
        var a = new yg(L),
            b = new Cn(L),
            c = new Dn(L),
            d = L.__cmp ? 1 : 0;
        a = zg(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = Qc(b.i, "__uspapiLocator"), b = b.h), f = null != b);
        c.l || (c.h || (c.i.googlefc ? c.h = c.i : c.h = Qc(c.i, "googlefcPresent")), c.l = !0);
        je("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.h ? 1 : 0,
            ptt: 9
        }, hg(sf))
    }

    function go(a) {
        mg().S[og(26)] = !!Number(a)
    }

    function ho(a) {
        Number(a) ? P(L).pause_ad_requests = !0 : (P(L).pause_ad_requests = !1, a = function() {
            if (!P(L).pause_ad_requests) {
                var b = md(),
                    c = md();
                try {
                    if (Yc.createEvent) {
                        var d = Yc.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (hd(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (hd(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1
                        });
                        b.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, v.setTimeout(a, 0), v.setTimeout(a, 1E3))
    }

    function io(a) {
        je("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        L._gfp_a_ = a
    }

    function jo(a) {
        hd(a) && window.setTimeout(a, 0)
    }

    function Vn(a, b) {
        (aa = cl(fb(ib(rc(b.sb).toString()), ig() ? {
            bust: ig()
        } : {})).then(function(c) {
            null == En && (c.init(a), En = c, ko())
        }).catch(ke(723)), q(aa, "finally")).call(aa, function() {
            Fn.length = 0;
            je("slotcar", {
                event: "api_ld",
                time: Date.now() - Ja,
                time_pr: Date.now() - Hn
            })
        })
    }

    function ko() {
        for (var a = r(q(Gn, "keys").call(Gn)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Gn.get(b); - 1 !== c && (v.clearTimeout(c), Gn.delete(b))
        }
        a = {};
        for (b = 0; b < Fn.length; a = {
                ca: a.ca,
                Z: a.Z
            }, b++) Gn.has(b) || (a.Z = Fn[b], a.ca = Wn(a.Z), he(723, function(d) {
            return function() {
                3 === d.ca ? En.handleAdConfig(d.Z) : 2 === d.ca && En.handleAdBreakBeforeReady(d.Z).catch(ke(730))
            }
        }(a)))
    }

    function Yn(a) {
        var b = Fn.length;
        if (2 === Wn(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === Hn && (Hn = Date.now());
            var c = v.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), Gn.set(b, -1), je("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * hg(Qf));
            Gn.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        de.Ra(le);
        he(166, function() {
            var e = vm(b);
            Fi(de, I(e, 2));
            Ng(Ub(e, 6));
            d();
            sd(16, [1, e.toJSON()]);
            var f = fd(ed(L)) || L,
                g = hm({
                    bb: a,
                    ob: I(e, 2)
                }),
                h = c(g, e);
            Ei(f, e, null === L.document.currentScript ? 1 : Zg(h.wb));
            if ((!rb() || 0 <= lb(tb(), 11)) && (null == (L.Prototype || {}).Version || !S(yf))) {
                ee(S(Wf));
                xn(e);
                Lk();
                try {
                    Nm()
                } catch (t) {}
                wn();
                Un(h, e);
                f = window;
                g = f.adsbygoogle;
                if (!g || !g.loaded) {
                    hg(sf) && fo();
                    var k = {
                        push: function(t) {
                            On(t, h, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: go
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: ho
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: io
                        }), Object.defineProperty(k, "onload", {
                            set: jo
                        })
                    } catch (t) {}
                    if (g)
                        for (var l = r(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== g[m] && (k[m] = g[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Nn(g, h, e);
                    f.adsbygoogle = k;
                    g && (k.onload = g.onload);
                    (f = sn(h)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("m202109080101", um, function(a, b) {
        var c = 2012 <
            C(b, 1, 0) ? "_fy" + C(b, 1, 0) : "";
        I(b, 3);
        var d = I(b, 3).replace(/^\//, "");
        b = I(b, 2);
        var e = a ? ae(Zl, a, c) : ae($l, b, d, c),
            f = ae(am, b, d);
        return {
            sb: e,
            rb: a ? ae(bm, a, c) : ae(cm, b, d, c),
            pb: a ? ae(dm, a, c) : ae(em, b, d, c),
            qb: a ? ae(fm, a, c) : ae(gm, b, d, c),
            xb: f,
            wb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20210908\",\"\/r20190131\",null,[],null,null,null,null,null,[],[[[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1010,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1074,null,null,[1]],[1059,null,null,[1]],[230,null,null,[1]],[1931,null,null,[1]],[377431981,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[390641437,null,null,[1]]],[[10,[[1000,[[31062430,[[1084,null,null,[1]],[1082,null,null,[1]]],[4,null,6,null,null,null,null,[\"31062309\"]]],[31062431,[[1084,null,null,[1]],[1082,null,null,[1]]],[4,null,6,null,null,null,null,[\"31062310\"]]]]],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]],[44750676,[[null,1072,null,[null,0.5]],[290,null,null,[1]]]],[44750677,[[null,1072,null,[null,0.75]],[290,null,null,[1]]]],[44750678,[[null,1072,null,[null,0.9]],[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[1,[[44750099],[44750100,[[null,1072,null,[null,0.75]]]],[44750101,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,100],[1,[[44750102],[44750103,[[null,1072,null,[null,0.75]]]],[44750104,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,120],[1,[[44750105],[44750106,[[null,1072,null,[null,0.75]]]],[44750107,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,140],[1,[[44750344],[44750345,[[1089,null,null,[1]]]]]],[1,[[44750572],[44750573,[[1033,null,null,[1]]]],[44750574,[[1033,null,null,[1]]]],[44750575,[[1033,null,null,[1]]]],[44750576,[[1033,null,null,[1]]]],[44750577,[[1033,null,null,[1]]]]]],[250,[[44747620],[44747621,[[1084,null,null,[1]],[1082,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[50,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[100,[[31062518],[31062519,[[1088,null,null,[1]]]]]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.01]]]]]],[45,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]],[5,[[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31062229]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]],[50,[[44750532],[44750533,[[1952,null,null,[1]]]]]]]],[20,[[50,[[31062093],[31062094,[[380025941,null,null,[1]]]]],null,null,null,null,null,201,null,102],[50,[[31062311],[31062312,[[1950,null,null,[1]]]]],null,null,null,null,null,null,null,108]]],[13,[[10,[[44748388],[44748389,[[1947,null,null,[1]]]]]],[10,[[44748390],[44748391]]],[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"31061691\"]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31062296]],[6,null,null,6,null,1,null,[\"performance.navigation.type\"]]],[1000,[[31062297]],[6,null,null,6,null,0,null,[\"performance.navigation.type\"]]],[1000,[[31062298]],[6,null,null,6,null,2,null,[\"performance.navigation.type\"]]],[1000,[[31062299]],[6,null,null,6,null,255,null,[\"performance.navigation.type\"]]],[1000,[[31062300]],[1,[[4,null,8,null,null,null,null,[\"performance.navigation.type\"]]]]]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,360245595,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[100,[[31062491],[31062492,[[393546021,null,null,[1]]]]]],[10,[[31062524],[31062525,[[null,360245595,null,[null,200]],[379841917,null,null,[1]],[null,1935,null,[null,200]]]],[31062526,[[null,360245595,null,[null,500]],[379841917,null,null,[1]],[null,1935,null,[null,500]]]]]],[50,[[44748552],[44748553,[[1948,null,null,[1]]]]]],[50,[[44749369],[44749371,[[1940,null,null,[1]]]]]]]]],null,null,[0.001,\"1000\"]],[]]");