// The semantics of THIS script loader are to preload all the
// specified script URLs in parallel, but start executing as soon as possible,
// maintaining the overall execution order as specified. This differs from
// the one above in that it doesn't wait for all to finish before starting
// execution.
// 
// In addition, if any param to loadScripts() is an array, the URLs in that
// array are treated as siblings and can be executed in any order, meaning
// they won't block each other. Kind of like a sub-grouping where ASAP 
// execution order is OK.
//
// Finally, this script loader stops executing subsequent scripts if any
// script fails to load.
//
// NOTE: multiple calls to loadScripts() create separate "groups" of
// scripts that will operate independently and NOT affect other groups.

function loadScripts() {
    // TODO:
    // The capability of this proposed implementation to respond
    // to a script loading error by preventing subsequent script
    // executions is based on some assumptions that are unconfirmed
    // as of yet. It's not clear if `dependencies` is sensitive to
    // a script resulting in a load failure or not. Moreover, will
    // `dependencies` be sensitive to compile-time or run-time errors
    // in a matching script and thus not proceed to execute?

    var dependencies;
    
    // start loading the scripts
    Array.prototype.slice.call(arguments)
    .forEach(function(src,subgroupIdx){
        if (!Array.isArray(src)) src = [src];
        src.forEach(function(url){
            var link = document.createElement("link");
            link.rel = "subresource";
            link.href = url;
            document.head.appendChild(link);

            var script = document.createElement("script");
            // only the script(s) beyond the *first* subgroup
            // depend on script(s)
            if (subgroupIdx > 0) {
                script.dependencies = dependencies;
            }
            script.src = url;
            document.head.appendChild(script);

            // TODO: unclear if this is necessary or not. Will `dependencies`
            // automatically prevent a script from running if one of the
            // dependencies in question results in a load-error, or do we
            // need to handle it manually as shown here?

            // script error so we can pause/abort?
            script.addEventListener("error",function(){
                // find all subsequent scripts that are waiting on the current
                // subgroup's scripts
                var waitingScripts = document.querySelectorAll(
                    'script[src="' + src.join('"], script[src="') + '"]'
                );

                // (temporarily) pause all of the waiting scripts...
                waitingScripts.forEach(function(script){
                    // ...by forcing an impossible `dependencies` value, for now
                    // TODO: would this actually work?
                    script.dependencies += ', script[src="http://nonexistant.tld"]';
                });
            });
        });

        // save dependencies for next subgroup to depend on
        dependencies = 'script[src="' + src.join('"], script[src="') + '"]';
    });
}

// NOTE: these two groups of scripts will load independently

// will preload these in parallel as a group
loadScripts(
    "a.js",     // executes "a.js" first ASAP
    "b.js"      // then executes "b.js"
);

// will preload these in parallel as a group
loadScripts(
    "c.js",             // executes "c.js" first ASAP
    ["d.js","e.js"],    // then subgroup executes "d.js" or "e.js" in either order
    "f.js"              // then executes "f.js"
);
