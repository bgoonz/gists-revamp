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
  function checkExecution() {
    if (abort) return;

    subgroups.some(function (subgroup, subgroupIdx) {
      if (!subgroup.done) {
        // the subgroup is done only if all scripts in it have run
        subgroup.done = !subgroup.some(function (listener) {
          return listeners[i].ran !== true;
        });

        // is the current group "done" and there's a subsequent
        // subgroup of scripts to signal?
        if (subgroup.done && subgroupIdx < subgroups.length - 1) {
          // signal all the scripts in the next subgroup
          // as ready to execute whenever they finish loading
          subgroups[subgroupIdx + 1].forEach(function (listener) {
            listener.script.fulfilled = true;
          });
        } else {
          return true; // break out of the loop
        }
      }
    });
  }

  var abort = false,
    subgroups = [];

  // start preloading the scripts
  Array.prototype.slice.call(arguments).forEach(function (src, subgroupIdx) {
    if (abort) return;

    var subgroup = [];
    subgroup.done = false;

    if (!Array.isArray(src)) src = [src];
    src.forEach(function (url) {
      var script = document.createElement("script");
      // only the script(s) beyond the *first* subgroup
      // need to defer execution
      if (subgroupIdx > 0) {
        script.preload = true; // only proposed!
      }
      script.src = url;
      document.head.appendChild(script);

      // set up script execution listener
      // NOTE: only need to save a script reference for scripts
      // we're actually preloading
      var listener = { script: subgroupIdx > 0 ? script : {} };
      listener.ran = function () {
        this.ran = true; // overwrite the listener func with `true`
        checkExecution();
      }.bind(listener);
      subgroup.push(listener);

      // NOTE: no need to listen for `preload` event for THIS
      // loader's semantics
      script.addEventListener("load", listener.ran);

      // script error so we can pause/abort?
      script.addEventListener("error", function () {
        abort = true;
      });
    });

    subgroups.push(subgroup);
  });
}

// NOTE: these two groups of scripts will load independently

// will preload these in parallel as a group
loadScripts(
  "a.js", // executes "a.js" first ASAP
  "b.js" // then executes "b.js"
);

// will preload these in parallel as a group
loadScripts(
  "c.js", // executes "c.js" first ASAP
  ["d.js", "e.js"], // then subgroup executes "d.js" or "e.js" in either order
  "f.js" // then executes "f.js"
);
