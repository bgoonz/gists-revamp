// This code works fine and renders the list right away, no delay. WTF!?!?!?

function makeEntries() {
  var entries = [];

  // populate some huge list of entries somehow

  var html = "<option>" + entries.join("</option><option>") + "</option>";

  $("#selector").html(html); // no blocking here!

  setTimeout(function () {
    $("#selector").find("option"); // .prop("selected",true);
  }, 60000); // happen a full minute later, right!?
}

makeEntries();
