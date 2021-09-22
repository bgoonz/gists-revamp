// stripped down version just detecting IE
(function (global) {
  global._isIE = false;
  try {
    var div = document.createElement("div");
    div.innerHTML = "<!--[if IE]><i></i><![endif]-->";
    global._isIE = div.getElementsByTagName("i").length > 0;
  } catch (err) {}
})(window);
