Howdy! We use [CodeMirror](http://codemirror.net/) as our editor on CodePen. We also use the [Emmet](https://github.com/emmetio/codemirror) add on for it. We love it. The users love it. It's also **very very big** at 831k (before compression and stuff).

I've been wanting to optimize it for a while, I've just struggled with it the few times I've tried, and think maybe one of you smart people might be able to do the job more efficiently.

Here's what our custom version of Emmet.js would be like:

- It would not include it's own copy of Lodash.js, it would just assume that's already available on the page.
- It would remove everything related to vendor prefixing that's built into Emmet. CodePen offers two prefixing solutions already that are a bit better fit.
- Remove all the CanIUse information. There is a ton of it in there, and I suspect it's related to the prefixing feature which we're wanting to remove anyway.

Then after that, ensure that everything works exactly as it did before. In the past I've had luck removing things, only to find I'd broken some specific tab trigger or something. [Here's](http://codepen.io/renwalker/pen/lijqs) a good collection of triggers that should all work.

[The repo](https://github.com/emmetio/codemirror) for it has an `index.html` demo, so that's a perfect testing ground for all this.

**I'd like to offer $500 for the job**, if anyone is up for it. But I'd rather not waste a bunch of people's time repeating work, so if you wanna try it, email me at chris@codepen.io so I can kinda coordinate.
