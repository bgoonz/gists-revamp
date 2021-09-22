# ES Proposal: `Reflect.supports(..)`

The proposed `Reflect.supports(..)` API gives direct feature-detects for ES7+ features which otherwise are hard/impossible to detect.

The primary reason for testing for such features is to be able to decide conditionally if you want to load the native ES?? form of some library/script/module for the "newest" browsers, or if you want to load its (quite potentially slower) transpiled (or alternate, for non-transpilable features) form for "older" browsers.

## Examples of Troublesome FTs

* Tail-Call Optimization (ES6 feature) -- no direct/practical way to test for this optimization. If there are ever others like it in ES7+, it would great to be able to directly query if support is present.
* Other "modes" beyond `"use strict";` -- I know these are pretty unlikely, but if there ever is such a thing, would be nice to be able to test for it.
* Syntax extensions (ES6 arrows, spread, etc; ES7 async/await, metaproperties like `function.callee`; etc) -- right now, to test if an engine supports a new syntax like arrows, one has to essentially do:

   ```js
   try { eval("(()=>{})"); supports.arrow = true; } catch(e){}
   ```

* ES6 modules -- since `import` and `export` aren't allowed outside a module, you can't really test to see if they're supported unless you're already in a module. My guess is that even `eval(..)` wouldn't work here?
* ES6 function name inference -- some of these are possible/practical to test, but it seems others are harder.
* Other possible ES7+ features (like do-expressions, macros, operator overloading) -- My guess is some of these might work inside `eval(..)`, but it's hard to know for sure.

## API

I suggest a single method added to `Reflect`, called `supports(..)`. It strictly returns `true` or `false`. If an argument is not of a valid type (listed below), a `TypeError` is thrown.

The `supports(..)` method takes one or more arguments, each one being one of these two forms:

1. `string`: a snippet of code to compile (but not run!) to test if the engine supports that syntax. Static errors (such as those specified by strict mode) would not necessarily be included. The difference/improvement from the `eval(..)` approach is you don't need the clutter of the `try..catch`, nor do you need it to run the code in question, only attempt to compile it. So, `Reflect.supports(..)` should be faster.

   ```js
   var arrowSupported = Reflect.supports("(()=>{})");
   ```
   
2. `Symbol`: a pre-defined symbol for each feature, such as `Symbol.arrowFunction` or `Reflect.arrowFunction`.

   ```js
   var arrowSupported = Reflect.supports( Symbol.arrowFunction );
   ```
   
Of course, either of these API variations would be minimally acceptable without necessarily having to do the other.