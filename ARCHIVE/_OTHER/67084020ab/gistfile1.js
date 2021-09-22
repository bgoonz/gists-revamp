function test_jQuery() { jQuery(""); }   
function success_jQuery() { alert("jQuery is loaded!");    
  
var successfully_loaded = false;   
function loadOrFallback(scripts,idx) {   
   function testAndFallback() {   
      clearTimeout(fallback_timeout);   
      if (successfully_loaded) return; // already loaded successfully, so just bail   
      try {   
         scripts[idx].test();   
         successfully_loaded = true; // won't execute if the previous "test" fails   
         scripts[idx].success();   
      } catch(err) {   
         if (idx < scripts.length-1) loadOrFallback(scripts,idx+1);   
      }   
   }   
  
   if (idx == null) idx = 0;   
   $LAB.script(scripts[idx].src).wait(testAndFallback);   
   var fallback_timeout = setTimeout(testAndFallback,10*1000); // only wait 10 seconds   
}

loadOrFallback([   
   {src:"http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js", test:test_jQuery, success:success_jQuery),   
   {src:"/local/jquery-1.4.min.js", test:test_jQuery, success:success_jQuery}   
]);   
