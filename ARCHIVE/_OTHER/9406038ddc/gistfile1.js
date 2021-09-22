(function(){
   if (window.vendor) return;
   var _browsers = ["chrome","opera","safari","firefox","ie"];
   for (var i=0; i<_browsers.length; i++) {
      if (_browsers[i] in window) {
         window.vendor = window[_browsers[i]];
         break;
      }
   }
})();