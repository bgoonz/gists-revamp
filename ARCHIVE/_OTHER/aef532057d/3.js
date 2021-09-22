var a = new cancelToken();
var b = new AbortController();
var c = new AbortController();
var d = new AbortController();
var e = signalAll([a.signal, b.signal, c.signal, d.signal]);

e.pr.catch(() => {
  console.log("aborted!");
});

b.abort();
// aborted!
