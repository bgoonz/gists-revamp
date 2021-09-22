Today, I had a [brief conversation](https://twitter.com/pamelafox/status/301762664500174848) on Twitter with [Pamela Fox](http://twitter.com/pamelafox) (from Coursera). My comments were sparked by this tweet and its linked blog post:

> Wrote up a blog post on how we warn Coursera users when they are on un-supported browsers via a top banner: http://blog.pamelafox.org/2013/02/warning-users-on-older-browsers.html

I mentioned to her my recent talk ["Browser Versions Are Dead"](https://speakerdeck.com/getify/browser-versions-are-dead-v2) (which btw I hope will have video up soon!), where I advocate abandoning an obsession with browser versions (and vendors!) and embracing, among other things, [feature testing](https://speakerdeck.com/getify/browser-versions-are-dead-v2?slide=12).

She responded, in part, with:

> There'd be too many things to check for (and stuff that can't be sniffed easily, like performance) and the tests would take time.

When I pushed back, claiming that feature tests could be practical and performant, she said:

> Hm. How do you feature test for performance in a performant way?

This is actually a great question. And thus, the point of this gist: to address that question in a full enough fashion which Twitter itself cannot accomodate.

First, I'm thrilled that performance itself is a feature for Coursera. That's actually wonderful news. A lot of us have been clammoring for years trying to get companies, sites, apps to consider performance a first-class citizen and not just an item low on the check-list of production readiness.

I confess I don't know much about Coursera from a technical implementation stand point, only the general sales pitch stuff. BUT, I am left to imagine from this tweet that they have a certain feature X that, implemented one way, will work suitably only in certain browsers with enough performance oomphf, and that in older browsers (discovered through browser/UA sniffing I guess), they either omit the feature, or implement it differently to get around the performance concerns.

There's also implied in her tweets that there's a fear that "too many" feature tests on a page might slow the page down. And finally, we can see a concern about the practicality of feature-testing most if not everything.

So, allow me to just share my take on these concerns. These are just opinions and suggestions, not binding facts or harsh criticisms.

---

I fully recognize [not everything can be feature tested](https://github.com/Modernizr/Modernizr/wiki/Undetectables). But, most things CAN be. And for everything we can be feature-testing for, I think we should be. For the stuff which we can't feature test effectively, there's one of three options I find acceptable:

1. Avoid the thing altogether. (harsh, but...)
2. Don't care if the thing behaves differently, leave it to the platform/browser/user. (for instance, font smoothing)
3. Present the thing, and monitor how it behaves and if it's "successful" (for some definition of it), and if not, switch (live, in page, right away) to an alternative.

I'd say this: if you can't deal with either #2 or #3, or some clever combination thereof, then #1 is how you should handle it. Put another way, if it can't be feature-tested, and it's mission critical to you how/if it works, you shouldn't be using it. That's it.

What do we do then, if #1 leaves us stuck? We immediately file bugs or send emails detailing that concern to the browser vendors and to the spec bodies, insisting on a proper feature test for what we need. Is this messy and difficult? Yes. But it's absolutely necessary to move our platform forward. That's part of taking ownership of this web platform we invest so much time into.

So, more to Pamela's concerns directly.

How do you feature test for everything? Well, [Modernizr](http://modernizr.com) does a fantastic job of removing most of that effort from what you have to think about. In addition, there are many lists of feature-tests, like [this one](http://kangax.github.com/cft/) from [@kangax](http://twitter.com/kangax), or [this one](http://diveintohtml5.info/everything.html) from [@diveintomark--dead acct](http://twitter.com/diveintomarkl).

Let me reiterate: I think you _should_ be feature-testing for anything which you consider to be mission-critical to your application. Making assumptions about things which "should work" in the environment you're in MIGHT not bite you now. But there's almost a guarantee it'll bite you at some point. Don't set landmines for yourself. Feature test.

But will that slow everything down if we feature-test on every single page-load?

Never make a claim about how fast something is in JS without jsPerf'ing it. We all know that. So... [Modernizr jsPerf](http://jsperf.com/modernizr/5). (fair warning, I'm not entirely sure how reliable this test is. I found it from someone else). But... ~30 ops/sec (on my browser) means it takes about 33ms to run the entire suite of Modernizr tests. And there's a good chance you don't actually need to do all of those for your site. Is 33ms worth it? I say so. The huge number of sites on the web using Modernizr also says so.

Besides, why do you need to do that test suite on every single page load? Why not do the tests on the first page load, then store the results in LocalStorage (assuming it was feature-detected for!), and use the results of the test on subsequent loads?

What about Pamela's most important question: "how do I feature detect for performance?"

Here's the first place I'd start: stop thinking about feature-detection as necessarily an all-or-nothing, all-at-once, at the beginning sort of thing. Maybe feature-detection, at least as it relates to performance, means you should have code in your page which monitors the performance as something is done, and if it's greater than some threshold, you have the code switch to using a different approach?

For example, do an animation the normal way, but monitor the framerate (using requestAnimationFrame). If the device/browser/etc combo they're using has an unacceptable (to you) framerate, don't do the animation any more, or do it another way.

Or, time how long it takes between when a user clicks a checkbox and the table re-sorts itself. If that's taking too long, simply hide the re-sorting feature.

Another example, one of my favorites for discussion about where to render templates: monitor how long it takes to render new pages in browser using your favorite JS template engine. If it's too slow, start having the server do template rendering (monitor that speed too, just to be sure). Or, if network loads are taking too long, start batching more of them together.

Hopefully, you get the idea. You don't have to feature-test for how fast something will be up-front, just monitor it while it happens, and adjust as you go.

The point is, performance is measurable and monitorable, and therefore performance-as-a-feature is definitely feature-detectable. You just have to be willing and motivated to do it.

---

The alternative:

> It's more practical for us to say "right, okay, you're in IE6, and we know it sucks, so we'll warn you in case you don't know."

Sure, that IS demonstrably easier. And it makes you feel better inside, by shifting the blame to the browser and the user. But I think that sort of mentality is actively harming the progress of the web.

Maybe we can be bold enough to start trying to think differently?
