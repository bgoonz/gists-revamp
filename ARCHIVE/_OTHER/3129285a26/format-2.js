// alternate format, a little more "when"ish

function xhrcall(win,fail){
   var xhr = new XMLHttpRequest();
   xhr.open("GET","/");
   xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
         if (xhr.responseText.match(/success/)) win(xhr.responseText);
         else fail(xhr.responseText);
      }
   });
   xhr.send();
}

promise(function(P){
   xhrcall(P.fulfill,P.fail);
})
.then(function(P){
   alert("success:"+P.value);
})
.broken(function(P){
   alert("failure:"+P.value);
});
