// Pseudo-Classical "Reuse"
function Foo(){}
Foo.prototype.reuseMe1 = function() { return 10; };

function Bar(){}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.reuseMe2 = function() { return 100; };

var x1 = new Bar(), x2 = new Bar(), x3 = new Bar();

x1.reuseMe1() + x2.reuseMe1() + x3.reuseMe1();  // 30
x1.reuseMe2() + x2.reuseMe2() + x3.reuseMe2();  // 300