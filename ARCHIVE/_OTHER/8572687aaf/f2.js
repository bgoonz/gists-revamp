// better, and more promise like... :)
// but, still "serial"... :(
$.ajax({
  url: "http://codepen.io/chriscoyier/pen/b2ad8b9a336845dd7b11d4bed34f4256.html",
}).done(function (resp) {
  // This HTML needs to be there first
  $("body").append(resp.responseText);

  // Because this script is going to do something with it.
  $.getScript(
    "http://codepen.io/chriscoyier/pen/cee78be969f36ddb01de3d74fd46b451.js"
  );
});
