I fully recognize [not everything can be feature tested](https://github.com/Modernizr/Modernizr/wiki/Undetectables). But, most things CAN be. And for everything we can be feature-testing for, I think we should be. For the stuff which we can't feature test effectively, there's one of three options I find acceptable:

1. Avoid the thing altogether. (harsh, but...)
2. Don't care if the thing behaves differently, leave it to the platform/browser/user. (for instance, font smoothing)
3. Present the thing, and monitor how it behaves and if it's "successful" (for some definition of it), and if not, switch (live, in page, right away) to an alternative.

I'd say this: if you can't deal with either #2 or #3, or some clever combination thereof, then #1 is how you should handle it. Put another way, if it can't be feature-tested, and it's mission critical to you how/if it works, you shouldn't be using it. That's it.

What do we do then, if #1 leaves us stuck? We immediately file bugs or send emails detailing that concern to the browser vendors and to the spec bodies, insisting on a proper feature test for what we need. Is this messy and difficult? Yes. But it's absolutely necessary to move our platform forward. That's part of taking ownership of this web platform we invest so much time into.