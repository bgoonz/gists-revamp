function replaceAll(str, re, replacement) {
  if (re.global) {
    return str.replace(re, replacement);
  } else {
    // do we need to "patch" the replacement function to pass correct arguments?
    if (typeof replacement == "function") {
      let fn = replacement;
      replacement = function replacer(...args) {
        // patch `offset` to correct position from whole string
        args[args.length - 2] += processed.length;
        // patch "whole string"
        args[args.length - 1] = str;
        return fn(...args);
      };
    }
    let match;
    let processed = "";
    let stillToProcess = str;
    do {
      // preserve lastIndex in case this is a /y sticky regex
      let reLastIdx = re.lastIndex;

      // check to see if there's any replacement to be made?
      // NOTE: for a /y sticky regex, `lastIndex` WILL BE changed
      match = stillToProcess.match(re);
      if (match) {
        // restore lastIndex in case this is a /y sticky regex
        re.lastIndex = reLastIdx;

        // perform the replacement
        let s = stillToProcess.replace(re, replacement);

        // where would the virtual `lastIndex`` be if this were a global regex?
        let lastIndex = match.index + match[0].length;
        // move newly-replaced chunk into processed accumulator
        processed += s.slice(0, lastIndex);
        // remove newly-replaced chunk from what's left still to process
        stillToProcess = s.slice(lastIndex);

        // fix `lastIndex` if it's a /y sticky regex
        if (re.sticky) {
          re.lastIndex = 0;
        }
      }
    } while (match);

    // anything left at the end of the string?
    if (stillToProcess.length > 0) {
      processed += stillToProcess;
    }

    return processed;
  }
}
