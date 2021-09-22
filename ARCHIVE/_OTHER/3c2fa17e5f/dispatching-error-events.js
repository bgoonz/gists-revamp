var dispatchErrorEvent = (function IIFE() {
  var createErrorEvent;

  try {
    try {
      new ErrorEvent("error", {});
      createErrorEvent = function createErrorEvent(err) {
        return new ErrorEvent("error", {
          error: err,
          message: err.message || "general error event",
        });
      };
      return dispatchError;
    } catch (err) {}

    var x = document.createEvent("Event");
    x.initEvent("error", false, false);
    createErrorEvent = function createErrorEvent(err) {
      var e = document.createEvent("Event");
      e.initEvent("error", false, false);
      e.message = err.message || "general error event";
      return e;
    };
    return dispatchError;
  } catch (err) {}
  return Function.prototype; // no-op

  function dispatchError(err) {
    window.dispatchEvent(createErrorEvent(err));
  }
})();
