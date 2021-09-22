// Even though the potentially offensive-performing code is
// outside the damn function, also in a far-future timer, it still
// blocks the UI thread for the 10+ seconds! WTF!?!?!?!?!?!?!?!

function makeEntries() {
  var entries = [];

  // populate some huge list of entries somehow

  var html = "<option>" + entries.join("</option><option>") + "</option>";

  $("#selector").html(html); // UI thread blocking happens right here!
}

makeEntries();

setTimeout(function () {
  $("#selector").find("option").prop("selected", true);
}, 60000); // happen a full minute later, right!?
