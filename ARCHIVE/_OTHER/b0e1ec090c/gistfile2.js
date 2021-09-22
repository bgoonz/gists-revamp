var Mod = (function makeSingleton() {
  // module definition

  return {
    // public API
    getFresh: makeSingleton,
  };
})();

var Mod2 = Mod.getFresh();
