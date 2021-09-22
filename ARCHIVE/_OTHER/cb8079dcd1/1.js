function waitForEvent(elem,evtName) {
   return new Promise(function c(resolve){
      elem.addEventListener(evtName,function onEvent(evt){
         elem.removeEventListener(evtName,onEvent,false);
         resolve(evt);
      },false);
   });
}