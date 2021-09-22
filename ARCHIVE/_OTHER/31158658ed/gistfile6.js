// include: jQuery

function listenTo(whichElem) {
   return promise(function(P){
      $(whichElem).click(function(){P.fulfill(this);});
   });
}

listenTo("a")
.then(function(P){
   var elem = P.value;
   alert(elem.href);
});