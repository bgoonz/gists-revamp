function hide() {
   var foobar = document.getElementById("foobar");
   foobar.className = "hidden";
   foobar.addEventListener("transitionend",do_hide,true);
   foobar.addEventListener("webkitTransitionEnd",do_hide,true);
}

function do_hide() {
   var foobar = document.getElementById("foobar");
   foobar.style.display = "none";
   foobar.removeEventListener("transitionend",do_hide,true);
   foobar.removeEventListener("webkitTransitionEnd",do_hide,true);
}

// ****************************************

// this is ugly!
function show_1() {
   var foobar = document.getElementById("foobar");
   foobar.style.display = "block";

   setTimeout(function(){
      foobar.className = ""; // remove 'hidden' class
   },50);
}

// BUT, is this actually better, or worse?
function show_2() {
   var foobar = document.getElementById("foobar");
   foobar.style.display = "block";

   requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        foobar.className = ""; // remove 'hidden' class
      });
   });
}