// This code works fine in that the rendering of our big select list is quick

function makeEntries() {
  var entries = [];

  // populate some huge list of entries somehow

  var html = "<option>" + entries.join("</option><option>") + "</option>";

  $("#selector").html(html); // no blocking here!

  // $("#selector").find("option").prop("selected",true);
}
