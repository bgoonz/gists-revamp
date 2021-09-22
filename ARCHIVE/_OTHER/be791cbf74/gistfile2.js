// This code makes the rendering of the list extremely slow (like 10+ seconds)
// In fact, the entire UI thread is blocked while the list render occurs. :(

function makeEntries() {
  var entries = [];

  // populate some huge list of entries somehow

  var html = "<option>" + entries.join("</option><option>") + "</option>";

  $("#selector").html(html); // UI thread blocking happens right here!

  $("#selector").find("option").prop("selected", true);
}

makeEntries();
