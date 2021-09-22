// The semantics of THIS script loader are to preload all the
// specified script URLs in parallel, and wait until all are preloaded
// before executing them. They will execute strictly in request-order.
//
// NOTE: multiple calls to loadScripts() create separate "groups" of
// scripts that will operate independently and NOT affect other groups.

function loadScripts() {
    function checkListeners() {
        // are all scripts done preloading?
        if (!listeners.some(function(listener){
            return (listeners[i].check !== true);
        })) {
            // execute all scripts now!
            listeners.forEach(function(listener){
                // marks the script as OK to execute now
                listener.script.fulfilled = true;
            });
        }
    }
    
    var listeners = [];
    
    // start preloading the scripts
    Array.prototype.slice.call(arguments)
    .forEach(function(src){
        var script = document.createElement("script");
        script.preload = true; // only proposed!
        script.src = src;
        document.head.appendChild(script);
        
        // set up script preload listener
        var listener = { script: script };
        listener.check = (function(){
            this.check = true; // overwrite the listener func with `true`
            checkListeners();
        }).bind(listener);
        listeners.push(listener);

        script.addEventListener("preload",listener.check); // only proposed!
    });
}

// NOTE: these two groups of scripts will load independently

// will preload these in parallel as a group
loadScripts(
    "a.js",     // executes "a.js" once both scripts are (pre)loaded
    "b.js"      // then executes "b.js"
);

// will preload these in parallel as a group
loadScripts(
    "c.js",     // executes "c.js" once all 4 scripts are (pre)loaded
    "d.js",     // then executes "d.js"
    "e.js",     // then executes "e.js"
    "f.js"      // then executes "f.js"
);
