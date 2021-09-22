// setup all the utilities to be used

var delay = (ms, cancel = new AbortController()) => {
  var pr = new Promise((res) => {
    var intv = setTimeout(res, ms);
    cancel.signal.addEventListener("abort", () => {
      clearTimeout(intv);
      res();
    });
  });
  pr.abort = () => cancel.abort();
  return pr;
};
var log = (msg) => IO(() => console.log(msg));
var wait = (ms) => IO(() => delay(ms));
var getCountdown =
  (idx = 3) =>
  () =>
    IO(async () => {
      await delay(500);
      return idx--;
    });
var bindEvent = (el, evtType, onEvt) =>
  IO(() => {
    el.addEventListener(evtType, onEvt, false);
  });
var unbindEvent = (el, evtType, onEvt) =>
  IO(() => {
    el.removeEventListener(evtType, onEvt, false);
  });
var onEscape = (handler) => (evt) => {
  if (evt.key == "Escape") {
    handler();
  }
};

function reportError(err) {
  if (typeof err._inspect == "function") {
    console.error(err._inspect());
  } else if (typeof err.toString == "function") {
    console.error(err.toString());
  } else {
    console.error("An unknown error was caught!");
  }
}
