var FOO = (function () {
  var a = "Hello";

  return {
    something: function () {
      alert(a); // referenced via closure
    },
  };
})();

FOO.something();
