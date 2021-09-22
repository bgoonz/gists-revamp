function *foo() {
   var running = 0;

   while (true) {
      running += (yield running);
   }
}

var it = foo();

it.next();  // { value:0,  done:false }
it.next(3); // { value:3,  done:false }
it.next(4); // { value:7,  done:false }
it.next(5); // { value:12, done:false }