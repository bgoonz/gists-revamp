
// promise() comes from: http://gist.github.com/311586

// show possible "error" handling

function xhrcall(){
   return promise(function(P){
      var xhr = new XMLHttpRequest();
      xhr.open("GET","/");
      xhr.onreadystatechange = function(){
         if (xhr.readyState == 4) {
            if (xhr.responseText.match(/success/)) P.fulfill(xhr.responseText);
            else P.reject(xhr.responseText);
         }
      });
      xhr.send();
   });
}

xhrcall()
.then(function(P){
   alert("success:"+P.value);
})
.broken(function(P){
   alert("failure:"+P.value);
});

