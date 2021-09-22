class cancelToken {
  constructor(controller = new AbortController()) {
    this.controller = controller;
    this.signal = controller.signal;
    ({ pr: this.signal.pr, rej: this.rej } = signalPromise(this.signal));
    this.signal.pr.catch(() => {
      this.controller.abort();
      this.rej = this.signal = this.signal.pr = this.controller = null;
    });
  }

  abort() {
    this.rej();
  }
}

function signalPromise(signal) {
  if (signal.pr) {
    return {
      pr: signal.pr,
    };
  }
  var ret = {};
  ret.pr = new Promise((res, rej) => {
    signal.addEventListener("abort", rej, false);
    ret.rej = rej;
  });
  ret.pr.cleanup = () => {
    if (signal) {
      signal.removeEventListener("abort", ret.rej, false);
      signal = null;
    }
    if (ret) {
      ret = ret.pr = ret.pr.cleanup = ret.rej = null;
    }
  };
  ret.pr.catch(ret.pr.cleanup);
  return ret;
}

function signalRace(signals) {
  var token = new cancelToken();
  var prs = signals.map((signal) => signalPromise(signal).pr);
  var cleanups = prs.map((pr) => pr.cleanup);
  Promise.race(prs).catch(() => {
    if (token) {
      token.abort();
      token = null;
    }
    if (cleanups) {
      cleanups.forEach((fn) => fn());
      cleanups = null;
    }
  });
  prs = null;
  return token.signal;
}

function signalAll(signals) {
  var token = new cancelToken();
  var prs = signals.map((signal) => signalPromise(signal).pr);
  var cleanups = prs.map((pr) => pr.cleanup);
  Promise.all(prs.map((pr) => pr.catch((e) => e))).then(() => {
    if (token) {
      token.abort();
      token = null;
    }
    if (cleanups) {
      cleanups.forEach((fn) => fn());
      cleanups = null;
    }
  });
  prs = null;
  return token.signal;
}
