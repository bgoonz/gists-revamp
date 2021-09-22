Inaccurate "LABjs" results in listing:

1. **Avoid loading a JS file twice if the HTTP cache is missing** -- LABjs has the `AllowDuplicates` setting that you can set to `false` to prevent duplicate loading. Should work identically/reliably in all modern browsers. In fact, it's defaulted `true`, so by default it does this, but lets you opt-out if you want duplicates.
2. **Ability to define shortcuts or ids (not full urls) to JS files / groups** -- This is easily done with LABjs, it's just not a specific API. You can do `var my_scripts = { "s1": "http://some.url.1" }` and later `$LAB.script( my_scripts["s1"] )`. I don't think it's fair to compare syntactic sugar points between libraries, at least not in a way that, like this, makes it seem it's a "distinct lack of feature" as opposed to "less sugar for it".
3. **Ability to pre-define dependencies in the `<head>` or somewhere central** -- Same as (2) above, you can easily define dependencies list in arrays like `var my_scripts = [ "http://some.url.1", "http://some.url.2" ]` in the `<head>` as **centralized**, and then later use them like `$LAB.script( my_scripts )`. Again, LABjs doesn't have specific features for _dependency management_, because it's _just_ a script loader. But if you know your dependencies, you can absolutely declare them in a central location and use/reuse that list later. Also, LABjs has `$LAB.queueScript(..)` for incrementally building up a queue of dependencies (non-centralized) across various parts of the DOM, like how CMS's often do, and then the one centralized queue that's created can be executed with `runQueue()`.
4. **Ability to define priorities in loading queue** -- Same reasoning as (2) and (3). You absolutely can express "priority" (that is, which one you care about more) by specifying script(s) earlier in the chain (first-come, first-loaded). The fact that this isn't an explicit API configuration doesn't mean that the use-case isn't served (at least in the general base sense).
5. **Supports plugins/extensions** -- Same as (2), (3), and (4). There's no specific API for this, but LABjs is actually designed specifically so it can be built upon with extension. Lots and lots of people do it. Some "supporting API features" that _are_ included that help you do this include `noConflict()` and `sandbox()`.
6. The list of feature comparisons has a number of items which seem skewed to only one specific loader (or a small handful) with niche targeted behavior, which is kinda misleading when most other browsers don't support that feature. I think that strategy is a little bogus.

   BUT if that's the intent (to highlight "extra" API/behaviors on top of the normal core of "JS loading"), then I would like to see more of LABjs' specific niche behavior listed too:

   - script loading queues `queueScript(..)` and `queueWait(..)`, then `runQueue()`.
   - `noConflict()` and `sandbox()` for playing nicer in complex environments, allowing multiple versions of the library to coexist, sandboxing extensions, etc.
   - ahead-of-time configuration options, like `setGlobalDefaults(..)` and `setOptions(..)`.
   - control of use (or not) of XHR for local script loading (`UseLocalXHR` option)
   - `CacheBust` option for adding `?_=234233488954`-style randomly generated URL params to prevent caching
   - `Debug` mode along with the debug build of LABjs, which puts its loading behavior into "verbose" mode by logging all actions/steps to the console, so that you can easily troubleshoot loading issues if they occur.

More generally, several items in the "advanced comparisons" list are, IMO, well out of date. For example, no one should care about supporting FF3.5 anymore.

In fact, the items that call out different behavior between Chrome/IE/Safari vs. FF/Opera are totally moot now. Opera is now basically identical to Chrome. And the differences that used to exist between these browsers is pretty much irrelevant. The only possible exception is support of old IE. But even that isn't really a relevant comparison between loaders in 2014.

I think any references to, or implications of, such differences should be removed.
