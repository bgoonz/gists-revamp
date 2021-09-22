function logMsgs() {
  var args = [].slice.call(arguments);
  var elem = document.getElementById("messages");
  elem.innerHTML += "<p>" + args.join(" ; ") + "</p>";
}

window.onerror = function (err) {
  logMsgs("onerror", err.message || err);
  return true;
};

window.addEventListener("error", function (evt) {
  logMsgs("addEL-1", evt.type, evt.message);
});

window.addEventListener("error", function (evt) {
  logMsgs("addEL-2", evt.type, evt.message);
});
