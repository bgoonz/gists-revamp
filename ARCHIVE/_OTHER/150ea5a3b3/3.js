"use strict";

function computeViewportDimensions() {
   if (document.documentElement && document.documentElement.style && document.documentElement.style.setProperty) {
      document.documentElement.style.setProperty(
         "--vw-unit",
         (document.documentElement.clientWidth / 100).toFixed(1) + "px"
      );
      document.documentElement.style.setProperty(
         "--vh-unit",
         (document.documentElement.clientHeight / 100).toFixed(1) + "px"
      );
   }
}

(function listenForViewportChanges(){
   // keep the CSS vw-unit/vh-unit CSS variables updated as the viewport changes size (or orientation!)
   window.addEventListener("resize",computeViewportDimensions,false);

   // work-arounds for browsers that don't fire "resize" when the orientation changes
   // ref: https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange
   if (typeof window.screen != "undefined" && typeof window.screen.orientation != "undefined") {
      window.screen.orientation.addEventListener("change",computeViewportDimensions,false);
   }
   // ref: https://www.reddit.com/r/javascript/comments/lttxdy/js_workaround_for_fixing_how_css_vwvh_units_arent/gp61ghe/
   // ref: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
   else if (typeof window.matchMedia != "undefined") {
      var query = window.matchMedia("(orientation: landscape)");

      // handle variances in the event handling in various older browsers
      if (typeof query.addEventListener != "undefined") {
         query.addEventListener("change",computeViewportDimensions,false);
      }
      else if (typeof query.addListener != "undefined") {
         query.addListener(computeViewportDimensions);
      }
      else {
         query.onchange = computeViewportDimensions;
      }
   }
    
   // make sure nothing during HTML parsing invalidated the early
   // computation (from the <script> embed)
   //
   // has the DOM already loaded?
   if (document.readyState != "loading") {
      computeViewportDimensions();
   }
   // otherwise, assume we can listen for the future DOM-ready event
   else {
      document.addEventListener("DOMContentLoaded",computeViewportDimensions,false);
   }
})();