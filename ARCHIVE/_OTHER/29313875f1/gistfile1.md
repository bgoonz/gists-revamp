# ---- INTRO ----

# Quick sponsor mentions:

Enviornments for Humans - CSS Summit July 31 - August 2
csssummit.com

## Theme song

http://www.stillbreathing.co.uk/misc/shoptalktheme.mp3

## Guest

- We briefly introduce Guests, thank them for coming on the show, then…
- Have Guest tell us about who they are and what they do in their own words. Do their schpeil. "What have you guys been up to?" etc.

(Very quick, many Q's about this)
OOCSS - https://github.com/stubbornella/oocss/wiki

(Defer until later? Q about validation)
CSS Lint - http://csslint.net/

NOT THE "OTHER" NICOLE
Actress from MADtv and stuff.

Conversation we had about media queries that load different HTML (extend?)

Don't feed the trolls
http://www.stubbornella.org/content/2012/05/31/dont-feed-the-trolls/

## Uncle Dave's Joke Minute

## News N' Links

Matt Wilcox - http://dev.opera.com/articles/view/responsive-images-problem/
Jeff Appareti on logos - http://www.youtube.com/watch?v=fBLvn_WkDJ4
Front End Design Conference & Interlink

## Hot Drama

IE 7 Tax - http://www.bbc.co.uk/news/technology-18440979

# ---- START Q&A ----

## Shane Murphy

What are your thoughts on OOCSS? Isn't it almost a case of adding bloat to the HTML to avoid bloat in the CSS? Would it be better to re-use the CSS by adding extra selectors to the rule set in the style sheet rather than classes in the HTML? Or with the rise of preprocessors should we simply be moving onto using mixins and variables anyway?

## Bram de Haan

Is there going to be a book about OOCSS? This kind of fundamental thinking about CSS is a rare find and I would buy a book from her hand right away.

## Keyamoon

Is there anything wrong with adding 3, 4 or even more classes to one HTML element? I usually use classes for changing spacing, colors, floats, sizes, rounded corners, etc. And If I catch myself using the same set of classes on many HTML elements, I would make a new class/object and use @extend in SASS to inherit from that set of classes. I think it's a good way of finding a balance and finding out when to define a new object. What do you think about this approach?

## Will H

To wrap or not to wrap? Got into an code-ugment about whether it is ok to use a div wrapper vs just using the body tag to do the same? See this article - http://camendesign.com/code/developpeurs_sans_frontieres.

The context is a non-responsive site, that is centered with custom background image that needs to line up with some foreground elements and maintain centering even if page is too small and some box shadow on either side of the div.

Are div wrappers a thing of the past in html or html5? Or can we continue to use div wrappers with no shame?

# SPONSOR: Enviornments for Humans / Christopher Schmitt and Ari

http://environmentsforhumans.com/
http://csssummit.com

All three of us are speaking at it:
Dave = Fluid Media in Responsive Web Design
Chris = What We Don't Know (maybe)
Nicole = Essential Tools for UI Performance

## Matthew Lein

Given the ever-changing landscape of HTML5/CSS3/Hot Drama, what tools to you guys use to validate your code? And what methods—pre commit hooks, IDE integrated, copy/paste, _gasp_ command line?

## Chris Marquez

Let me say Nicole when I first saw your presentation video at Webstock 2011 conference entitled: Our (CSS) Best Practices Are Killing Us.

Link for that presentation:
http://www.stubbornella.org/content/2011/04/28/our-best-practices-are-killing-us/..

This was really a eye opener. At first I was like whatttt I don't know about that but I eventually came around.

Can you discuss about your opinions Scalable and Modular Architecture for CSS http://smacss.com/ and have you use them?

(Snook episode #1!!)

(( Leban Hyde had the same question ))

## Chandler Calvert

How do you know when to call yourself a professional when your a developer or a designer?

CHRIS: When you get paid for it / when you take it seriously

## Patrick Neal

AUDIO: http://www.recordmp3.org/qTwW.mp3
Hey guys – I was just looking for your opinions on position:values.

I find myself adding position: relative to many of my container divs in websites that I create. This is of course allows me use position: absolute in it’s child elements.

If someone were to use a reset.css and set the default position of all elements to relative as opposed to static, would there be any real drawbacks you would experience? Thanks.

# IF TIME

## Dennis Kardys

I've been adapting a lot of the OOCSS principles for responsive design, and continually struggle with the best way to control how grids adapt across breakpoints. For example, you might not want a unit that is 1/3 the width of a container (.size1of3) at one screensize to be 1/3 width at a different breakpoint.

So, I guess my question is: what is your preferred technique for managing responsive grids?

# OUT

GUESTS - How can they give you money / find you on internet?

Thanks for listening. Rate us in iTunes. Follow @shoptalkshow on Twitter.

shoptalkshow.com
