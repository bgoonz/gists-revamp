var $ = function(fn) {
   setTimeout(fn,2000);
};

$.foo = "yay";
$(function(){
   alert($.foo);  // which $ am I looking at?
});
$.foo = "cool";


$ = function(fn) {
   alert("DOH!");
};
$.foo = "uhoh";