// fuller version with version detection (in this case, IE6)
(function(global){
   global._isIE = false;
   global._isIE6 = false;
   try {
      var div = document.createElement("div"),
          all = div.getElementsByTagName("i")
      ;
      div.innerHTML = "<!--[if IE]><i></i><![endif]--><!--[if IE 6]><i></i><![endif]-->";
      if (all[0]) global._isIE = true;
      if (all[1]) global._isIE6 = true;
   } catch(err) { }
})(window);