// The semantics of THIS script loader are to preload all the
// specified script URLs in parallel, and wait until all are preloaded
// before executing them. They will execute strictly in request-order.
//
// NOTE: multiple calls to loadScripts() create separate "groups" of
// scripts that will operate independently and NOT affect other groups.

function loadScripts() {
    // TODO:
    // Unfortunately, this implementation doesn't actually match the
    // intended semantics. There's no logic here that prevents the first
    // script from executing until all the scripts have finished loading.
    // The end result is that here, the first script might run well
    // earlier than second script, which could create unfortunate side-
    // effects such as rendering part of something before rendering
    // the other part. The intended semantics keep the executions of
    // all scripts as close together as possible, to minimize such
    // noticeable gaps in execution.
    //
    // The current suggestion is to either hide the entire page while
    // these gaps might be happening (sort of a nuclear UX option), or
    // try to have this generalized script loader figure out what parts of
    // the page it would need to hide while leaving other unaffected
    // stuff visible. The former seems terribly unwanted, and the latter
    // seems basically impossible (for a general script loader agnostic of
    // what the scripts do which it loads).


    // start preloading the scripts
    Array.prototype.slice.call(arguments)
    .forEach(function(src,srcIdx){
        var link = document.createElement("link");
        link.rel = "subresource";
        link.href = src;
        document.head.appendChild(link);

        var script = document.createElement("script");
        if (srcIdx > 0) {
            script.dependencies = 'script[src="' + arguments[srcIdx-1] '"]';
        }
        script.src = src;
        document.head.appendChild(script);
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
