var onEvent = el => evtName => {
   var { pr, next } = getDeferred();

   el.addEventListener(evtName,handler,false);

   return eventStream();

   // ******************   

   async function *eventStream(){
      while (true) {
         yield pr;
      }
   }

   function handler(evt) {
      var f = next;
      ({ pr, next } = getDeferred());
      f(evt);
   }

   function getDeferred() {
      var next;
      var pr = new Promise(res => next = res);
      return { pr, next };
   }
};