require = (function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      var l = (n[o] = { exports: {} });
      t[o][0].call(
        l.exports,
        function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    jsynth: [
      function (require, module, exports) {
        module.exports = function (context, fn, bufSize) {
          if (typeof context === "function") {
            fn = context;
            context = new webkitAudioContext();
          }
          if (!bufSize) bufSize = 4096;
          var self = context.createScriptProcessor(bufSize, 1, 1);
          self.fn = fn;
          var tt = 0;
          var ii = 0;
          const rate = context.sampleRate;
          self.i = self.t = 0;
          window._SAMPLERATE = self.sampleRate = self.rate = context.sampleRate;
          self.duration = Infinity;
          self.recording = false;
          self.onaudioprocess = function (e) {
            var output = e.outputBuffer.getChannelData(0),
              input = e.inputBuffer.getChannelData(0);
            self.tick(output, input);
          };
          self.tick = function (output, input) {
            for (var i = 0; i < output.length; i += 1) {
              tt = ii / rate;
              ii = ii + 1;
              output[i] = self.fn(tt, ii, input[i]);
            }
            return output;
          };
          self.stop = function () {
            self.disconnect();
            self.playing = false;
            if (self.recording) {
            }
          };
          self.play = function (opts) {
            if (self.playing) return;
            self.connect(self.context.destination);
            self.playing = true;
            return;
          };
          self.record = function () {};
          self.reset = function () {
            self.i = self.t = 0;
          };
          self.createSample = function (duration) {
            self.reset();
            var buffer = self.context.createBuffer(
              1,
              duration,
              self.context.sampleRate
            );
            var blob = buffer.getChannelData(0);
            self.tick(blob);
            return buffer;
          };
          return self;
        };
        function mergeArgs(opts, args) {
          Object.keys(opts || {}).forEach(function (key) {
            args[key] = opts[key];
          });
          return Object.keys(args).reduce(function (acc, key) {
            var dash = key.length === 1 ? "-" : "--";
            return acc.concat(dash + key, args[key]);
          }, []);
        }
        function signed(n) {
          if (isNaN(n)) return 0;
          var b = Math.pow(2, 15);
          return n > 0
            ? Math.min(b - 1, Math.floor(b * n - 1))
            : Math.max(-b, Math.ceil(b * n - 1));
        }
      },
      {},
    ],
  },
  {},
  []
);
require = (function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      var l = (n[o] = { exports: {} });
      t[o][0].call(
        l.exports,
        function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    1: [
      function (require, module, exports) {
        module.exports = function (pts) {
          return function (t) {
            for (var a = pts; a.length > 1; a = b) {
              for (var i = 0, b = [], j; i < a.length - 1; i++) {
                for (b[i] = [], j = 1; j < a[i].length; j++) {
                  b[i][j] = a[i][j] * (1 - t) + a[i + 1][j] * t;
                }
              }
            }
            return a[0][1];
          };
        };
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        var amod = require("./amod.js");
        var tnorm = require("normalize-time");
        module.exports = function (pts, durs) {
          pts = pts.map(amod);
          var t = 0;
          var totalDuration = durs.reduce(function (e, i) {
            return e + i;
          }, 0);
          var tdNormFN = tnorm(t, totalDuration);
          var s = 0;
          var end = t + totalDuration;
          var durFNS = durs.map(function (e, i) {
            var x = tnorm(t + s, e);
            s += e;
            return x;
          });
          var dp = 0;
          var durpercent = durs.map(function (e, i) {
            var x = e / totalDuration + dp;
            dp += e / totalDuration;
            return x;
          });
          var tn,
            n,
            i,
            v = 0,
            fn = 0;
          var envelope = function (t) {
            tn = tdNormFN(t);
            if (0 > tn || tn > 1) return 0;
            fn = durpercent.reduce(function (p, e, i, d) {
              return (d[i - 1] || 0) <= tn && tn <= e ? i : p;
            }, 0);
            v = pts[fn](durFNS[fn](t));
            return v;
          };
          return envelope;
          function xenvelope(t, sustain) {
            tn = tdNormFN(t);
            if (0 >= tn || tn >= 1) return 0;
            if (tn > durpercent[fn]) fn = fn + 1 > pts.length - 1 ? 0 : fn + 1;
            v = pts[fn](durFNS[fn](t));
            return v;
          }
        };
      },
      { "./amod.js": 1, "normalize-time": 3 },
    ],
    3: [
      function (require, module, exports) {
        module.exports = function (start, dur, min, max) {
          if (!min) min = 0;
          if (!max) max = 1;
          var end = start + dur;
          var d = end - start;
          var r = max - min;
          return function (time) {
            x = min + ((time - start) * r) / d;
            if (x > 1) {
              if (time < end)
                x = Number("." + x.toString().split(".").join(""));
            }
            return x;
          };
        };
      },
      {},
    ],
    jmod: [
      function (require, module, exports) {
        var nvelope = require("nvelope");
        module.exports = function (params) {
          var envelope = nvelope(params.curves, params.durations);
          var sustain, cutoff;
          if (params.sustain) {
            if (
              Object.prototype.toString.call(params.sustain) ===
              "[object Object]"
            ) {
              console.log("ehll;");
              var dur = params.sustain.durations.reduce(function (e, i) {
                return e + i;
              }, 0);
              var env = nvelope(
                params.sustain.curves,
                params.sustain.durations
              );
              var diff = undefined;
              sustain = function (t) {
                if (diff === undefined) diff = Math.abs(t);
                t = t - diff;
                return env(t % dur);
              };
            } else if (Array.isArray(params.sustain)) {
              var td = params.durations.reduce(function (e, i) {
                return e + i;
              }, 0);
              var xd = params.durations.slice(
                params.sustain[0],
                params.sustain[0] + params.sustain.length
              );
              var sd = xd.reduce(function (e, i) {
                return e + i;
              }, 0);
              var start = params.durations
                .slice(0, params.sustain[0])
                .reduce(function (e, i) {
                  return e + i;
                }, 0);
              var diff = undefined;
              sustain = function (t) {
                if (t < start) return envelope(t);
                else {
                  if (diff === undefined) diff = Math.abs(t);
                  t = t - diff;
                  return envelope(start + (t % sd));
                }
              };
            } else if (!isNaN(params.sustain)) {
              sustain = function () {
                return params.sustain;
              };
            }
          }
          return { envelope: envelope, sustain: sustain };
        };
      },
      { nvelope: 2 },
    ],
  },
  {},
  []
);
require = (function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      var l = (n[o] = { exports: {} });
      t[o][0].call(
        l.exports,
        function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    1: [
      function (require, module, exports) {
        function EventEmitter() {
          this._events = this._events || {};
          this._maxListeners = this._maxListeners || undefined;
        }
        module.exports = EventEmitter;
        EventEmitter.EventEmitter = EventEmitter;
        EventEmitter.prototype._events = undefined;
        EventEmitter.prototype._maxListeners = undefined;
        EventEmitter.defaultMaxListeners = 10;
        EventEmitter.prototype.setMaxListeners = function (n) {
          if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
          this._maxListeners = n;
          return this;
        };
        EventEmitter.prototype.emit = function (type) {
          var er, handler, len, args, i, listeners;
          if (!this._events) this._events = {};
          if (type === "error") {
            if (
              !this._events.error ||
              (isObject(this._events.error) && !this._events.error.length)
            ) {
              er = arguments[1];
              if (er instanceof Error) {
                throw er;
              }
              throw TypeError('Uncaught, unspecified "error" event.');
            }
          }
          handler = this._events[type];
          if (isUndefined(handler)) return false;
          if (isFunction(handler)) {
            switch (arguments.length) {
              case 1:
                handler.call(this);
                break;
              case 2:
                handler.call(this, arguments[1]);
                break;
              case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
              default:
                len = arguments.length;
                args = new Array(len - 1);
                for (i = 1; i < len; i++) args[i - 1] = arguments[i];
                handler.apply(this, args);
            }
          } else if (isObject(handler)) {
            len = arguments.length;
            args = new Array(len - 1);
            for (i = 1; i < len; i++) args[i - 1] = arguments[i];
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++) listeners[i].apply(this, args);
          }
          return true;
        };
        EventEmitter.prototype.addListener = function (type, listener) {
          var m;
          if (!isFunction(listener))
            throw TypeError("listener must be a function");
          if (!this._events) this._events = {};
          if (this._events.newListener)
            this.emit(
              "newListener",
              type,
              isFunction(listener.listener) ? listener.listener : listener
            );
          if (!this._events[type]) this._events[type] = listener;
          else if (isObject(this._events[type]))
            this._events[type].push(listener);
          else this._events[type] = [this._events[type], listener];
          if (isObject(this._events[type]) && !this._events[type].warned) {
            var m;
            if (!isUndefined(this._maxListeners)) {
              m = this._maxListeners;
            } else {
              m = EventEmitter.defaultMaxListeners;
            }
            if (m && m > 0 && this._events[type].length > m) {
              this._events[type].warned = true;
              console.error(
                "(node) warning: possible EventEmitter memory " +
                  "leak detected. %d listeners added. " +
                  "Use emitter.setMaxListeners() to increase limit.",
                this._events[type].length
              );
              if (typeof console.trace === "function") {
                console.trace();
              }
            }
          }
          return this;
        };
        EventEmitter.prototype.on = EventEmitter.prototype.addListener;
        EventEmitter.prototype.once = function (type, listener) {
          if (!isFunction(listener))
            throw TypeError("listener must be a function");
          var fired = false;
          function g() {
            this.removeListener(type, g);
            if (!fired) {
              fired = true;
              listener.apply(this, arguments);
            }
          }
          g.listener = listener;
          this.on(type, g);
          return this;
        };
        EventEmitter.prototype.removeListener = function (type, listener) {
          var list, position, length, i;
          if (!isFunction(listener))
            throw TypeError("listener must be a function");
          if (!this._events || !this._events[type]) return this;
          list = this._events[type];
          length = list.length;
          position = -1;
          if (
            list === listener ||
            (isFunction(list.listener) && list.listener === listener)
          ) {
            delete this._events[type];
            if (this._events.removeListener)
              this.emit("removeListener", type, listener);
          } else if (isObject(list)) {
            for (i = length; i-- > 0; ) {
              if (
                list[i] === listener ||
                (list[i].listener && list[i].listener === listener)
              ) {
                position = i;
                break;
              }
            }
            if (position < 0) return this;
            if (list.length === 1) {
              list.length = 0;
              delete this._events[type];
            } else {
              list.splice(position, 1);
            }
            if (this._events.removeListener)
              this.emit("removeListener", type, listener);
          }
          return this;
        };
        EventEmitter.prototype.removeAllListeners = function (type) {
          var key, listeners;
          if (!this._events) return this;
          if (!this._events.removeListener) {
            if (arguments.length === 0) this._events = {};
            else if (this._events[type]) delete this._events[type];
            return this;
          }
          if (arguments.length === 0) {
            for (key in this._events) {
              if (key === "removeListener") continue;
              this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
          }
          listeners = this._events[type];
          if (isFunction(listeners)) {
            this.removeListener(type, listeners);
          } else {
            while (listeners.length)
              this.removeListener(type, listeners[listeners.length - 1]);
          }
          delete this._events[type];
          return this;
        };
        EventEmitter.prototype.listeners = function (type) {
          var ret;
          if (!this._events || !this._events[type]) ret = [];
          else if (isFunction(this._events[type])) ret = [this._events[type]];
          else ret = this._events[type].slice();
          return ret;
        };
        EventEmitter.listenerCount = function (emitter, type) {
          var ret;
          if (!emitter._events || !emitter._events[type]) ret = 0;
          else if (isFunction(emitter._events[type])) ret = 1;
          else ret = emitter._events[type].length;
          return ret;
        };
        function isFunction(arg) {
          return typeof arg === "function";
        }
        function isNumber(arg) {
          return typeof arg === "number";
        }
        function isObject(arg) {
          return typeof arg === "object" && arg !== null;
        }
        function isUndefined(arg) {
          return arg === void 0;
        }
      },
      {},
    ],
    "jsynth-sync": [
      function (require, module, exports) {
        var emitter = require("events").EventEmitter;
        module.exports = sync;
        var $ = module.exports;
        function sync(bpm, sampleRate) {
          if (!(this instanceof sync)) return new sync(bpm, sampleRate);
          this.bpm = bpm;
          this.beatsPerSecond = bpm / 60;
          this.sampleRate = sampleRate;
          this.spb = Math.round(sampleRate / this.beatsPerSecond);
          this.s = 0;
          this.t = 0;
          this.index = [];
          this.beatIndex = new Array();
        }
        $.prototype.clearAll = function (bpm, samplerate) {
          this.index = this.index.map(function () {
            return undefined;
          });
        };
        $.prototype.tick = function (t, i) {
          ++this.s;
          for (var n = 0; n < this.index.length; n++) {
            if (this.index[n]) this.index[n](t, i, this.s);
          }
        };
        $.prototype.off = function (i) {
          this.index.splice(i, 1, undefined);
        };
        $.prototype.on = function (beats, fn) {
          var i = Math.ceil(this.spb * beats);
          var l = this.index.length;
          var self = this;
          var off = function () {
            self.off(l);
          };
          var delta = 0;
          var skipNext = false;
          var skip = false;
          function swing(beat) {
            delta = Math.abs(Math.floor(self.spb * beat));
            skipNext = beat === 0 ? false : true;
          }
          var emit = new emitter();
          emit.on("stop", off);
          this.index.push(
            (function (b, fn, beats, off) {
              return function (t, a, f) {
                if (f % (i + delta) == 0) {
                  if (skip) {
                    skip = false;
                    return;
                  }
                  if (skipNext) {
                    skipNext = false;
                    skip = true;
                    if (delta >= i) {
                      skip = false;
                    }
                  }
                  fn.apply(fn, [t, ++b, off, swing]);
                  emit.emit("beat", b);
                }
              };
            })(0, fn, beats, off)
          );
          return emit;
        };
        function amilli(t) {
          return [Math.floor(t), (t % 1) * 1e3];
        }
      },
      { events: 1 },
    ],
  },
  {},
  []
);
require = (function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      var l = (n[o] = { exports: {} });
      t[o][0].call(
        l.exports,
        function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    oscillators: [
      function (require, module, exports) {
        var OZ = module.exports;
        var tau = Math.PI * 2;
        OZ.sine = sine;
        OZ.saw = saw;
        OZ.saw_i = saw_i;
        OZ.triangle = triangle;
        OZ.triangle_s = triangle_s;
        OZ.square = square;
        function sine(t, f) {
          return Math.sin(t * tau * f);
        }
        function saw(t, f) {
          var n = ((t % (1 / f)) * f) % 1;
          return -1 + 2 * n;
        }
        function saw_i(t, f) {
          var n = ((t % (1 / f)) * f) % 1;
          return 1 - 2 * n;
        }
        function triangle(t, f) {
          var n = ((t % (1 / f)) * f) % 1;
          return n < 0.5 ? -1 + 2 * (2 * n) : 1 - 2 * (2 * n);
        }
        function triangle_s(t, f) {
          var n = ((t % (1 / f)) * f) % 1;
          var s = Math.abs(Math.sin(t));
          return n < s ? -1 + 2 * (2 * (n / s)) : 1 - 2 * (2 * (n / s));
        }
        function square(t, f) {
          return ((t % (1 / f)) * f) % 1 > 0.5 ? 1 : -1;
        }
      },
      {},
    ],
  },
  {},
  []
);
require = (function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      var l = (n[o] = { exports: {} });
      t[o][0].call(
        l.exports,
        function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    1: [
      function (require, module, exports) {
        module.exports = function (obj, fn) {
          var f = function () {
            if (typeof fn !== "function") return;
            return fn.apply(obj, arguments);
          };
          function C() {}
          C.prototype = Object.getPrototypeOf(obj);
          f.__proto__ = new C();
          Object.getOwnPropertyNames(Function.prototype).forEach(function (
            key
          ) {
            if (f[key] === undefined) {
              f.__proto__[key] = Function.prototype[key];
            }
          });
          Object.getOwnPropertyNames(obj).forEach(function (key) {
            f[key] = obj[key];
          });
          return f;
        };
      },
      {},
    ],
    jdelay: [
      function (require, module, exports) {
        var funstance = require("funstance");
        module.exports = function (delay, feedback, mix, bufferSize) {
          var delay = Math.floor(delay);
          var feedback = feedback;
          var mix = mix;
          var bufferSize = bufferSize || delay * 2;
          if (bufferSize < delay * 2) bufferSize = delay * 2;
          var d = new Delay(delay, feedback, mix, bufferSize);
          var fn = funstance(d, Sample);
          return fn;
          function Delay(delay, feedback, mix, bufferSize) {
            this.feedback = feedback;
            this.mix = mix;
            this.delay = delay;
            this.buffer = new Float32Array(bufferSize);
            this.writeOffset = 0;
            this.endPoint = this.delay * 2;
            this.readOffset = this.delay + 1;
            this.readZero = 0;
          }
          function Sample(sample, _delay, feedback, mix) {
            var s = sample;
            if (feedback) this.feedback = feedback;
            if (mix) this.mix = mix;
            if (_delay && _delay !== this.delay) {
              _delay = Math.max(0, Math.floor(_delay));
              if (_delay * 2 > this.buffer.length) {
                var nb = new Float32Array(_delay * 2);
                nb.set(this.buffer, 0);
                this.buffer = nb;
              }
              this.delay = _delay;
              this.endPoint = this.delay * 2;
            }
            if (this.readOffset >= this.endPoint) this.readOffset = 0;
            s = this.buffer[this.readOffset];
            var write = sample + s * this.feedback;
            this.buffer[this.writeOffset] = write;
            this.writeOffset++;
            this.readOffset++;
            if (this.writeOffset >= this.endPoint) this.writeOffset = 0;
            return (sample + s) * this.mix;
          }
        };
      },
      { funstance: 1 },
    ],
  },
  {},
  []
);
master = new webkitAudioContext();
jsynth = require("jsynth");
nvelope = require("jmod");
sync = require("jsynth-sync");
oz = require("oscillators");
jdelay = require("jdelay");
sine = oz.sine;
saw = oz.saw;
sr = master.sampleRate;
bf = 444;
delay = jdelay(
  Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
  0.767,
  0.367
);
delay2 = jdelay(Math.floor(sr * (60 / 72) * 2, 0.99, 0.867));
attack = [
  [0, -0.5],
  [0, 6],
  [1, 2],
];
release = [
  [1, 2],
  [1, 0],
  [1, 0],
];
durations = [0.05, 0.2];
zamod = {};
zamod.curves = [attack, release];
zamod.durations = durations;
generators = [];
generators0 = [];
generators1 = [];
generators2 = [];
timer = sync(72 / 3, 44100);
t = timer.on(1 / 16, function (ti, b) {
  var zod = zamod;
  zod.durations[0] = 0.02;
  zod.durations[1] = 0.07;
  var mod = nvelope(zod);
  var synth = function (t) {
    return (
      (oz.sine(t, 888 * 2 * (16 - (b % 12))) +
        oz.sine(t, 0.667 * Math.pow(888 * 2, 5 / 12) * (16 - (b % 12)))) *
      mod.envelope(t - ti)
    );
  };
  if (b % 12) {
    generators.push(synth);
    if (b > 2) generators.shift();
  }
});
t0 = timer.on(2, function (ti, b) {
  var mod = nvelope(zamod);
  var synth = function (t) {
    return sine(t, 888) * mod.envelope(t - ti);
  };
  generators0.push(synth);
  if (b > 2) generators0.shift();
});
t1 = timer.on(2, function (ti, b) {
  var zod = zamod;
  zod.durations[0] = 0.2;
  zod.durations[1] = 60 / 72 / 3 - 0.2;
  var mod = nvelope(zod);
  var synth = function (t) {
    return oz.square(t, 222) * mod.envelope(t - ti);
  };
  generators1.push(synth);
  if (b > 2) generators1.shift();
});
t2 = timer.on(1 / 4, function (ti, b) {
  var mod = nvelope(zamod);
  var fqs = [
    444,
    (444 * 3) / 2,
    444,
    (444 / 3) * 2,
    444,
    (444 * 2) / 3,
    (444 * 3) / 2,
    444 * 2,
    444 * 2,
    444 * 4,
  ];
  var f = fqs[b % fqs.length];
  if (!(b % 16) % 3) f *= 2;
  var synth = function (t) {
    return saw(t, f) * mod.envelope(t - ti);
  };
  generators2.push(synth);
  if (b > 2) generators2.shift();
});
synth = function (t) {
  timer.tick.call(timer, t);
  var s = 0;
  s += generators.reduce(function (p, e, i, d) {
    return p + e(t);
  }, 0);
  s += generators0.reduce(function (p, e, i, d) {
    return p + e(t);
  }, 0);
  s += generators1.reduce(function (p, e, i, d) {
    return p + e(t);
  }, 0);
  s += generators2.reduce(function (p, e, i, d) {
    return p + e(t);
  }, 0);
  return delay(s);
};
dsp = jsynth(master, synth);
dsp.connect(master.destination);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 8,
    0.767,
    0.367
  );
}, 116408);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 32,
    0.767,
    0.367
  );
}, 126041);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 3,
    0.767,
    0.367
  );
}, 129910);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.367
  );
}, 151438);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 3,
    0.767,
    0.367
  );
}, 164597);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.367
  );
}, 172243);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.367
  );
}, 181128);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.367
  );
}, 196162);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2,
    0.767,
    0.367
  );
}, 211233);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2 / 2,
    0.767,
    0.367
  );
}, 221393);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2 / 2,
    0.767,
    0.667
  );
}, 236627);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.667
  );
}, 251123);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2 / 2,
    0.767,
    0.667
  );
}, 261533);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.667
  );
}, 716381);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.167
  );
}, 730901);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.167
  );
}, 736639);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2,
    0.767,
    0.167
  );
}, 831451);
setTimeout(function () {
  synth = function (t) {
    timer.tick.call(timer, t);
    var s = 0;
    t += Math.floor((sr * 60) / 72 / 3) / 4;
    s += generators.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators0.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators1.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators2.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    return delay(s);
  };
}, 847395);
setTimeout(function () {
  synth = function (t) {
    timer.tick.call(timer, t);
    var s = 0;
    t += Math.floor((sr * 60) / 72 / 3) / 2;
    s += generators.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators0.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators1.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators2.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    return delay(s);
  };
}, 850080);
setTimeout(function () {
  synth = function (t) {
    timer.tick.call(timer, t);
    var s = 0;
    t += Math.floor((sr * 60) / 72 / 3) / 8;
    s += generators.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators0.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators1.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    s += generators2.reduce(function (p, e, i, d) {
      return p + e(t);
    }, 0);
    return delay(s);
  };
}, 869729);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2,
    0.767,
    0.567
  );
}, 875988);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.567
  );
}, 881536);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.567
  );
}, 886894);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.567
  );
}, 896578);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.567
  );
}, 901185);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.567
  );
}, 906414);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.567
  );
}, 911835);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.567
  );
}, 916556);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2,
    0.767,
    0.567
  );
}, 921245);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.567
  );
}, 926017);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.567
  );
}, 1026036);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.767
  );
}, 1041826);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.967
  );
}, 1055356);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.767
  );
}, 1059150);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.567
  );
}, 1070844);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2,
    0.767,
    0.567
  );
}, 1090867);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.767,
    0.567
  );
}, 1111697);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.967
  );
}, 1119729);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.567
  );
}, 1141039);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.567
  );
}, 1155965);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.967
  );
}, 1201360);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 2,
    0.867,
    0.967
  );
}, 1210935);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 2,
    0.867,
    0.567
  );
}, 1213676);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 2,
    0.867,
    0.567
  );
}, 1216519);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 2,
    0.867,
    0.567
  );
}, 1321098);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.867,
    0.567
  );
}, 1328152);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.867,
    0.267
  );
}, 1341292);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.867,
    0.267
  );
}, 1349335);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.867,
    0.467
  );
}, 1360526);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.667,
    0.567
  );
}, 2621140);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72,
    0.667,
    0.967
  );
}, 2634785);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 2,
    0.667,
    0.967
  );
}, 2639258);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 8,
    0.667,
    0.967
  );
}, 2646422);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 8,
    0.367,
    0.967
  );
}, 2649106);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 8,
    0.167,
    0.967
  );
}, 2652110);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.167,
    0.967
  );
}, 2666662);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.167,
    1.467
  );
}, 2682974);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.167,
    1.167
  );
}, 2691692);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.267,
    1.167
  );
}, 2766731);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 3) + (sr * 60) / 72 / 16,
    0.267,
    1.167
  );
}, 2792353);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 3) + (sr * 60) / 72 / 3 / 16,
    0.267,
    1.167
  );
}, 2802327);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 6) + (sr * 60) / 72 / 16,
    0.267,
    1.167
  );
}, 2807215);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 4) + (sr * 60) / 72 / 16,
    0.267,
    1.167
  );
}, 2813039);
setTimeout(function () {
  delay = jdelay(
    Math.floor(sr * (60 / 72)) + (sr * 60) / 72 / 16,
    0.267,
    1.167
  );
}, 2818053);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.267,
    1.167
  );
}, 2921185);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.667,
    1.167 / 2
  );
}, 3001275);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2,
    0.767,
    0.45
  );
}, 3041507);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.867,
    0.75
  );
}, 3110844);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.167,
    0.95
  );
}, 3126141);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.967,
    0.95
  );
}, 3138640);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.767,
    0.95
  );
}, 3200983);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2 / 2,
    0.167,
    0.25
  );
}, 3236736);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.002,
    0.95
  );
}, 3281288);
setTimeout(function () {
  delay =
    jdelay(
      Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
      0.002,
      0.95
    ) * 10;
}, 3287365);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.002,
    0.95
  );
}, 3293607);
setTimeout(function () {
  delay =
    jdelay(
      Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
      0.002,
      0.95
    ) * 10;
}, 3295817);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.002,
    0.95
  );
}, 3304753);
setTimeout(function () {
  delay =
    jdelay(
      Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
      0.002,
      0.95
    ) * 10;
}, 3306839);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.002,
    0.95
  );
}, 3312273);
setTimeout(function () {
  delay =
    jdelay(
      Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
      0.002,
      0.95
    ) * 10;
}, 3315078);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.002,
    0.95
  );
}, 3319272);
setTimeout(function () {
  delay =
    jdelay(
      Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
      0.002,
      0.95
    ) * 2;
}, 3321520);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.002,
    0.95
  );
}, 3346662);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 10,
    0.002,
    0.95
  );
}, 3359163);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 8,
    0.002,
    0.95
  );
}, 3366457);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 8,
    0.902,
    0.95
  );
}, 3380512);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 4,
    0.902,
    0.75
  );
}, 3392159);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 6,
    0.902,
    0.75
  );
}, 3403652);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + ((sr * 60) / 72 / 16) * 2,
    0.902,
    0.75
  );
}, 3427486);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 64,
    0.302,
    0.75
  );
}, 3462208);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 128,
    0.302,
    0.75
  );
}, 3477472);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 128,
    0.602,
    0.75
  );
}, 3497001);
setTimeout(function () {
  delay = jdelay(
    Math.floor(sr * (60 / 72)) + (sr * 60) / 72 / 16 / 128,
    0.602,
    0.75
  );
}, 3515565);
setTimeout(function () {
  delay = jdelay(
    Math.floor(sr * (60 / 72) * 2) + (sr * 60) / 72 / 16 / 128,
    0.602,
    0.75
  );
}, 3568885);
setTimeout(function () {
  delay = jdelay(
    Math.floor(sr * (60 / 72)) + (sr * 60) / 72 / 16 / 128,
    0.602,
    0.75
  );
}, 3587226);
setTimeout(function () {
  delay = jdelay(Math.floor(sr * (60 / 72)) + (sr * 60) / 72 / 16, 0.602, 0.75);
}, 3596601);
setTimeout(function () {
  delay = jdelay(
    Math.floor(sr * (60 / 72)) + (sr * 60) / 72 / 16 / 2,
    0.602,
    0.75
  );
}, 3607600);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 4) + (sr * 60) / 72 / 16,
    0.602,
    0.75
  );
}, 3665859);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 4) + ((sr * 60) / 72 / 16) * 2,
    0.602,
    0.75
  );
}, 3672040);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 4) + ((sr * 60) / 72 / 16) * 3,
    0.602,
    0.75
  );
}, 3678522);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 4) + (sr * 60) / 72 / 3,
    0.602,
    0.75
  );
}, 3681722);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 4) + (sr * 60) / 72 / 3 / 16,
    0.602,
    0.75
  );
}, 3690513);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 4) + (sr * 60) / 72 / 3 / 2,
    0.602,
    0.75
  );
}, 3694389);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 4) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3698096);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3699274);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 3) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3705564);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 6) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3711570);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3772156);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3777034);
setTimeout(function () {
  delay = jdelay(
    Math.floor((((sr * (60 / 72)) / 1.5) * 3) / 2) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3781169);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3802329);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3835949);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3867373);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3) + (sr * 60) / 72 / 3 / 2 / 2,
    0.602,
    0.75
  );
}, 3904745);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.602,
    0.55
  );
}, 3954902);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2 / 2,
    0.602,
    0.55
  );
}, 3980012);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.702,
    0.65
  );
}, 3980519);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.702,
    0.65
  );
}, 3980544);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.702,
    0.65
  );
}, 3980573);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16 / 2,
    0.702,
    0.65
  );
}, 3998546);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999047);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999078);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999108);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999139);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999169);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999203);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999245);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999263);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999292);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999330);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999353);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999384);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 3999425);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.702,
    0.95
  );
}, 4042806);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3) + (sr * 60) / 72 / 3 / 2 / 2,
    0.502,
    0.55
  );
}, 4066072);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3) + (sr * 60) / 72 / 3 / 2 / 2,
    0.502,
    0.95
  );
}, 4086134);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3 / 3) + (sr * 60) / 72 / 3 / 2 / 2,
    0.502,
    0.95
  );
}, 4097219);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3) + (sr * 60) / 72 / 3,
    0.502,
    0.95
  );
}, 4132282);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3) + (sr * 60) / 72 / 3,
    0.902,
    0.75
  );
}, 4182556);
setTimeout(function () {
  delay = function (s) {
    return s;
  };
}, 9027243);
setTimeout(function () {
  delay = function (s) {
    return 0;
  };
}, 64982111);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 1.5 / 3) + (sr * 60) / 72 / 3,
    0.902,
    0.75
  );
}, 65088399);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.902,
    0.75
  );
}, 65149133);
setTimeout(function () {
  delay = function () {
    return 0;
  };
}, 103717234);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.902,
    0.75
  );
}, 103724679);
setTimeout(function () {
  delay = function (s) {
    return 0;
  };
}, 106932706);
setTimeout(function () {
  delay = jdelay(
    Math.floor((sr * (60 / 72)) / 2) + (sr * 60) / 72 / 16,
    0.902,
    0.75
  );
}, 175027323);
setTimeout(function () {
  dsp.connect(master.destination);
}, 175041554);
