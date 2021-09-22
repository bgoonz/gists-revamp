// the old way :/

$.ajax({
  url: "http://codepen.io/chriscoyier/pen/b2ad8b9a336845dd7b11d4bed34f4256.html",
  complete: function(resp) {
    
    // This HTML needs to be there first
    $("body").append(resp.responseText);
    
    // Because this script is going to do something with it.
    $.getScript("http://codepen.io/chriscoyier/pen/cee78be969f36ddb01de3d74fd46b451.js");
    
    // But that feels like it could be faster because why not do both requests right away but execute in order (or whatever).
  }
});