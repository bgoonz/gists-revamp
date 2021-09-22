// run xhrcall, then delay 10 secs, then alert the xhr response

xhrcall()
.then(function(P){
   return delay(10)
      .then(P.value)
   ;
})
.then(function(P){
   alert(P.value);
});