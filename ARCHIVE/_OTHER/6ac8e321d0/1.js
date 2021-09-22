btn.addEventListener("send-btn",onSend);
send = CAF(send);
var prevSend = Promise.resolve();

function onSend(evt) {
   prevSend.finally(function f(){
     prevSend = send(
       CAF.timeout(1000,"send took too long."),
       { some: "data" }
     )
     .catch(console.log);
   });
}

function *send(signal,data){
   var res = yield fetch("/some/url",{
     body: JSON.stringify(data),
     signal
   });
   if (res.ok) {
     let resp = yield res.text();   // note: this call doesn't need a Promise.race() because CAF does it for you
     console.log(resp);
   }
}