$("#foo").click(function (e) {
  if (e.clientX) {
    // native mouse click
  } else {
    // triggered mouse click
  }
});
