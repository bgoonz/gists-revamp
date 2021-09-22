# Parens And Performance

Years ago, some smart folks that worked on JS engines realized that not all JS that's loaded into a page/app initially is needed _right away_. They implemented JIT to optimize this situation.

JIT means Just-In-Time, which means essentially that the engine can defer processing (parsing, compiling) certain parts of a JS program until a later time, for example when the function in question is _actually_ needed. This deferral means the engine is freer to spend the important cycles right now on the code that's going to run right now. This is a really good thing for JS performance.

Some time later, some JS engine devs realized that they needed to get some _hints_ from the code as to which functions would run right away, and which ones wouldn't. In technical speak, these hints are called heuristics.

So they realized that one very common pattern for knowing that a function was going to run right away is if the first character before the `function` keyword was a `(`, because that usually means the function is an IIFE (immediately invoked function expression):

```js
(function IamAnIIFE() {
  // .. some code
})();
```

They need a hint at the beginning of the function, rather than waiting to find the `()` call operator at the end of it, because by they time they get there, they've either parsed or not.

One hidden complication is that if a function is going to be parsing-skipped for JIT reasons, it still has to sorta be parsed (so they know where the ending `}` is, for example), though it won't be deeply parsed. Later, the full parsing happens on that snippet when the JIT says it's ready to do so.

This sorta leads to some extra work, because there's like 125% of the time spent on overall parsing of that function (25% now, 100% later) rather than just 100% now. That's the tradeoff cost.

Even given this tradeoff, JS engine devs decided to avoid JIT and immediately parse functions if they are wrapped in `( )`, because the assumption is that this will only be the case in the function that is going to execute right away (have a trailing `()` call operator). In these cases, it's best to go ahead and parse it fully now.

Of course, they need smarter heuristics than just that, because this code is not an IIFE and definitely could (should?) be deferred with JIT:

```js
setTimeout(function IamNotAnIIFE() {
  /* .. */
}, 1000);
```

They also recognized that JS minifiers like Uglify don't use `( )` for IIFEs, they usually prefix with `!`, like `!function IamAnIIFE(){..}()`. So, the heuristics need to identify more than just `(` -- actually, all unary operators -- followed by `function`, but you get the idea.

The key take-away here is that they developed these heuristics **by surveying real code in real apps spread across the entire web.** They tested and found that by not-JIT-deferring (aka immediately parsing) such heuristically-identified functions, they would improve the overall speed of current, untouched applications executing in current browsers. In some cases, the speed up was quite noticeable. They rolled out these changes and they've been silently in play in all our apps for a long time.

## Modules

One wrinkle in this whole plan is that modern module packaging tools have for years had the entire code in a file wrapped in a function, but not looking like an IIFE, like:

```js
define("foobar", function IamNotAnIIFEButIWillRunRightAway() {
  // ..
});
```

Inside of `define(..)`, it's going to run that function right away, but it's not obvious syntactically that this is going to happen. So it's a miss on the heuristic.

Keep in mind that this practice of bundling and delivering code in that format has been around for many years, longer than the heuristics the JS engines identified to speed up apps by immediately executing certain functions. **They did not immediately parse such full-file function wrappers.**

You might wonder why they can't identify such patterns with better heuristics. It's really hard to do so, because any old function passed as a callback is not necessarily going to get immediately invoked. Also, what if that function is like megabytes worth of JS, because you've done the common thing and wrapped all 200 of your JS files into a single bundle.

The engine can't really know at that point if this function would be small or really huge. If it immediately parses a really huge function, it's likely it might lose all the benefits of having the capability to JIT in the first place.

**So understandably, they want to be conservative**. If they immediately execute all the code and have no JIT, **performance will probably suffer.**

## Second Guess

Some smart folks decided recently they'd try to second-guess the browser and trick the heuristic into faster parsing, by making their module-bundling tool automatically insert the `( )` around those wrapped functions. Like this:

```js
define("foobar", function IamNotAnIIFEButIWillRunRightAway() {
  // ..
});
```

Look closely. The only difference is the `( )` around the function. Everything else is the same. But that's enough to kick in the engine's heuristic and "force" it to immediately parse instead of JIT parse.

Various benchmarks have shown that this makes the contents of that file parse anywhere from a few milliseconds to 40ms faster.

In fact, someone else wrote another tool to automatically go wrap all (\*deliberately being vague/generalistic) your functions in `( )` even if you're not using one of those module bundling tools.

Yay, right!?!? Right? Look how clever we are, outsmarting the browser at its own game. Humans 1, Computers 0.

## Reality Check

You can proably guess that where I'm headed is to suggest this is a terrible idea. Let's take a step back and consider the cost.

### Brief History Lesson

First, do you recall from CSS the `!important` feature, which was added because CSS devs needed to force the engine to override its normal behavior? It was cheat, a hack, but it was effective and pragmatic and it let CSS devs ship "working" code. Today, most developers would tell you that `!important` is a wart on our history. It's terrible and should never be used. But we're stuck with it.

What about when JS devs were told, "always cache the length of an array before looping over it"... you know, for performance. Outsmart the engine, you're a human after all. The problem is, that advice worked so well that most everybody started doing it.

Eventually, browsers got smart and put in optimizations to automatically cache the length of the array in those cases where it would _actually_ help. Guess what effect that had? If you're manually caching the length of your arrays, you're actually doing duplicate work and your code goes (a teeny bit) slower now. Whoops.

Or what about the CSS "zero-z-transform" hack for "forcing" the rendering engine to use hardware acceleration on some animation (because it tricked it into thinking it was 3-d)? That turned out great, didn't it? We had to invent a whole new feature set to get away from that crap.

I call all these sorts of "just do it now" kinds of hacks: "betting against the future". You're saying, I'm clever and smart and I bet that I'll always be better than the computer at this thing. Guess what!? No, you won't. The computer will eventually do it better than you. It's always a terrible bet to wager against the future of computing technology.

### Predictions of Future Reality

Here's some predictions I have for where this `( )` hack is going to lead us.

1. More tools will start automatically doing this `( )` wrapping, meaning more and more deployed code will have them, meaning more and more functions will be parsed in immediate mode instead of JITing. In the short term, many people will perceive wins in performance, especially on mobile.
2. Over time, JS engines will start to realize that most code is being parsed immediately, and not much JITing is happening. They'll realize the heuristics need to change, to get back to a better balance. Either they'll remove the `( )` heuristic entirely, or make it more sophisticated, but either way, all of a sudden, all that code that used to be "forcing" the immediate parse no longer will.

   This shifting and chasing of heuristics is dangerous because it creates cult myths about performance that aren't actually true, and it actively makes it harder for the JS engines to really get the best performance for your applications. Cult myths and old code last for years and years beyond when they've been busted or made moot.

3. So, eventually, tools will adjust and chase after that moved goalpost.
4. Over time, blog posts will be written that tell developers that they should do the `( )` hack themselves (in the cases where the tools are incapable or unsuitable), just like we have posts from the Bluebird folks telling people that to become elite at JS programming performance, you should avoid closures and use objects, etc etc.
5. New developers/learners will not understand the nuance of balance that is required, to make the proper decisions on when to use `( )` wrapping and not. They'll probably do what we always seem to do: just do something absolutely and always.

   So when a dev sees that they have a function declaration like `function foo() { .. }`, they'll realize that they can't just wrap `( )` around it to "just make it run faster". So they'll refactor them to `let foo = (function foo() { .. });` style, meaning that effectively we'll be losing out on an important readability characteristic: function hoisting. All functions will have to be defined at the top before being used, instead of (as I prefer) definining functions at the bottom with executable code above.

6. Somewhere, someday, a JS teacher will have a student ask why we always put the `( )` around functions. They'll talk about how functions are much nicer in non-JavaScript languages. That teacher will have to re-count this whole ugly mess, and instead of enlightening students, that narrative will just confuse and frustrate learners.
7. Someday, the tide will shift and people will talk about the bad old days when we used to do stupid stuff like wrap `( )` around functions just so the engine runs faster. The facepalm cycle will be fully complete at that point.

## Alternatives

So, what's the alternative(s)? I can think of a few:

1. JS engine devs can admit that the heuristic is not sufficient as-is, in that there's all these major libraries that are currently still parsing slower than necessary. They'll quickly work on fixing that heuristic. In the meantime, they'll advise **against** people doing short term hacks.

   Once those fixes are in place, the need for this whole `( )` crap will go away, and tools should roll back and stop advertising the technique at all.

2. JS engine devs can admit that there's no way the heuristic can _really_ be smart enough, so they'll officially do away with the heuristic entirely. Instead they'll say that JS devs should make explicit code declarations for the engines to know whether to parse immediate or not. For example, rather than use implicit syntax, they should propose an explicit feature to TC39 like a `"parse immediate";` pragma (strict-mode like) that we can all agree on, learn, teach, and consistently apply.

   This is actually consistent with the same mindset that drove the proposals to move from implicit PTC (tail calls) to explicit STC (syntactic tail calls). If we want something (even performance oriented) for developers to participate in, let's be explicit about it and standardize it.

3. Developers can just ignore the current heuristic and tools can, too. Go on about your day business as usual. Let the engine keep doing what it does best, and stop trying to hack to bet against the future of their capabilities. The 3ms you might see saved in some artificial benchmark is not actually worth the real _cost_ as this plays out over time.

You can probably guess by now that I'd rather see #3, or some combo of #3 and #1.

Stop doing silly stuff for the sake of saving a few milliseconds. Code is about communication. We don't need any help adding extra clutter to it to make the communication worse. We actively need to eschew all this premature optimization fascination that's become popular of late.
