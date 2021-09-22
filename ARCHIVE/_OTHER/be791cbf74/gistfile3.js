// Even though the potentially offensive-performing code is deferred
// in a timeout for a full 60s later, the rendering of the select list still
// takes 10+ seconds and still blocks the UI thread. The timeout doesn't
// overlap the UI thread blocking, so starts AFTER the list is shown. WTF!?!?!

function makeEntries() {
  var entries = [];

  // populate some huge list of entries somehow

  var html = "<option>" + entries.join("</option><option>") + "</option>";

  $("#selector").html(html); // UI thread blocking happens right here!

  setTimeout(function () {
    $("#selector").find("option").prop("selected", true);
  }, 60000); // happen a full minute later, right!?
}

makeEntries();
