var FOO = new (function() {
  this.a = "Hello";

  this.something = function() {
    alert(this.a);     // referenced via "this"
  }; 
})();

FOO.something();