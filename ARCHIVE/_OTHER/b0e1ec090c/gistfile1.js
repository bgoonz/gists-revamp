(function assignHandler() {
  function handler(evt) {
    // ..
  }

  var elem = document.getElementById("foobar");
  if (elem) {
    elem.addEventListener("click", handler, false);
  } else {
    setTimeout(assignHandler, 100);
  }
})();
