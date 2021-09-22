// This code has no blocking. Somehow, the `alert()` + `setTimeout()`
// causes it to unblock, and the list renders right away

function makeEntries() {
  var entries = [];

  // populate some huge list of entries somehow

  var html = "<option>" + entries.join("</option><option>") + "</option>";

  $("#selector").html(html); // no blocking here!

  alert("OK");

  // somehow alert() + setTimeout makes it not have any blocking above! WTF!?!?!
  setTimeout(function () {
    $("#selector").find("option").prop("selected", true);
  }, 60000); // happen a full minute later, right!?
}

makeEntries();
