var foo = (function(){
   var running = 0;
   
   return function(x) {
      return (running += (x||0));
   }
   
})();

foo();   // 0
foo(3);  // 3
foo(4);  // 7
foo(5);  // 12