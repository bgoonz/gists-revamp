EventEmitter.prototype.either = function (evt, cb) {
  var self = this,
    orAPI = { or: bindHandler },
    handlers = {};

  function bindHandler(evt, cb) {
    if (!handlers || handlers[evt]) return;

    handlers[evt] = function () {
      for (var e in handlers) {
        self.removeListener(e, handlers[e]);
      }
      handlers = null;
      cb.apply(self, arguments);
    };

    self.on(evt, handlers[evt]);

    return orAPI;
  }

  return bindHandler(evt, cb);
};
