function *F() {
   // allocate some heavy resources
   
   try {
      yield 1;
      yield 2;
      yield 3;
   } finally {
     // cleanup those heavy resources
   }
}

for (var i of F()) {
   console.log(i);
   break;   // `return()` invoked here automatically,
            // which lets the `finally` run to cleanup
}
