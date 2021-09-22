# Monads and Friends...

Over the last 24-48 hours, I've fielded quite a flurry of tweets related to a couple of threads I posted recently. Upon reflection on the feedback, especially the negative stuff, I decided to write this blog post to clarify a few things about my background on the topic, what I was trying to say, what I've done so far, and what I'm hoping to do (and learn!) in the future.

It's a bit of a lengthy read, but if you find you've got the time, I hope you'll read it.

To be clear, the feedback has been on a broad spectrum. A lot of it was actually quite positive, people thanking me and appreciating my continued efforts to try to make dev topics approachable. As a matter of fact, over the years, I've received boat loads of such positive feedback, and I'm tremendously grateful that I've had a helpful impact on so many lives.

But some of it veered decidedly the other direction. I'm deliberately not linking to it, because I don't want to either amplify or gang up on those folks. I'm offended and hurt by a lot of what was said, but that's on me to bear because of my willingness to put myself and my learning processes out there for everyone to see. You have to take the bad with the good, sadly!

## What was all the noise about?

Here are two threads I posted to try, in part, to present some of the ideas around the topic of monads, as I currently understand them, in a way that I was hoping non-FP, non-monad-aware JS developers might resonate with:

* https://twitter.com/getify/status/1283113651470307333

* https://twitter.com/getify/status/1283132504078274560

It's important to note that the goal was **not** to present a formal, comprehensive dissertation on the topic. It was more like marketing with a light bit of information transmission.

If you compare the like/RT metadata on just the first tweet in each of those threads, you'll see that the first thread got all the attention (good and bad!), while the second one went relatively unnoticed. That's regrettable, since the second thread was where I had already addressed things that were the target of at least some of the complaints from the first thread; those folks either didn't see the second thread, didn't think it was sufficient, or didn't care.

If I could do it again, I would have combined these two tweet threads into a single blog post. But alas!

## Some Background

Briefly, if you're not aware of who I am: I've been writing code for almost 30 years. Almost 20 of that has been focused on JS. I learned a variety of other languages along the way, but my knowledge of all of them pales in comparison to what I know, and am still learning, about JS. My context is almost exclusively JS, and has been for almost as long as I can remember.

I tried to learn FP concepts many times over the last 15-20 years, but failed repeatedly. I tried books, blogs, countless conference talks, even podcasts. I just failed.

As I try to analyze why I failed, I believe it's because I cannot seem to resonate with the typical approaches to teaching/explaining FP, which lead heavily with terminology, mathematical notation, and a lot of abstract theory. I would characterize those typical approaches as formal and top-down. And it's clear that I wasn't smart enough or capable enough to learn it that way. I really did try, though. Many, many times.

In late 2016, I decided to change all that, finally. I decided to learn FP a different way, from the ground-up. I would learn FP entirely in the context of JS, and find a way to marry the purity and power of FP with the broad appeal of common JS development patterns.

I called the eventual approach that emerged, "Functional-Light". Not "light" as in easy or intro (or "wrong", as my detractors would say), but "light" as in as biased toward pragmatic balance, embracing the mixture of FP and non-FP side by side, and ultimately choosing the best way to code a certain task regardless of whether that was fully FP, no FP, or somewhere in between.

I wrote a whole book called [*Functional-Light JavaScript*](https://github.com/getify/Functional-Light-JS), which has sold nearly 10,000 copies. I developed a [2-day long course on the topics](https://frontendmasters.com/courses/functional-javascript-v3/) (now at version 3!) which I've taught dozens of times to companies and which thousands of developers have watched online. I've given numerous conference and meetup talks on various selected topics from the book/course.

Along the way, I developed a friendship with, and mentorship-guidance from, [Brian Lonsdorf, aka @drboolean](https://twitter.com/drboolean). Brian is one of the smartest people I've ever met, but also one of the most patient, kind, empathetic people I've ever been privileged to call *friend*. He has given me hundreds and hundreds of hours of his time over the years now, fielding way too many questions and frustrations of mine. He agreed to tech edit my book, and [he even wrote the Foreword](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/foreword.md).

I would be underselling his impact on my journey if I didn't say that I owe nearly everything I know about FP to him. He's been my oracle. I've been fortuntate to get to know and learn from several others in the FP space who've provided guidance and vetting, as well. But Brian's efforts stand far above the crowd.

What I should point out is, I still don't consider myself a qualified or "certified" FP programmer. I know an awful lot of the foundations of FP, and I feel very comfortable in this space. But I am still very much a work in progress, as is my understanding of all of these things.

The book and the course both *end* at the topic of Monads. The book has a simple appendix that gives a brief overview. The course has a brief section on it near the end, without even any exercises. Back then, I only had a glancing level of understanding of monads, so I didn't get very deep into what I had to say about them.

My understanding of monads is today quite a bit richer than it was when I prepared that material. If I were re-writing it, I'd have a lot more to say, and say things somewhat differently. But I don't think what I said is wildly wrong, per se. It was just less evolved then than it is now.

In fact, back then I didn't think monads were particularly all that useful, at least not in my mission to bridge the gap between the broad and common world of JS development, and the narrow and often "elite" world of FP enlightenment. Monads seemed... too unapproachable, too academic. Cute toys, but not something I could seriously use for work. But still, I was intrigued by them.

## Fast Forward

Nearly four years on in my journey of learning FP, I recently rekindled some of my dormant curiosities around monads.

After reading a reddit thread about side effects, a few months ago, I [posted a gist](https://gist.github.com/getify/506882cb4926a6417d6dc7deff0f184c) of an experiment in creating an IO monad for JS. I had always heard that IO helped with managing (and deferring) side effects, but I didn't know how. I began reading various blog posts and experimenting in code.

I toyed with the idea for a few weeks, then reached out to consult my mentor, Brian. We spent another couple of weeks going back and forth, tweaking and refining the design. He got progressively more excited about the potential of it, and cheered me on to formalizing and releasing it. Eventually, a few weeks ago, I published this collection of monads as [Monio](https://github.com/getify/monio). I conceived and designed Monio, but as with everything else in my FP story, it really wouldn't exist if it weren't for Brian's overwhelming generosity and support.

And of course, along the way, I learned a whole bunch more about the ins and outs of monads, as well as some of the adjacent ideas in ADTs, Algebras, and Algebraic structures (those words are super scary to me, btw, but they're more accurate and complete).

I have big hopes for Monio. But this post isn't about Monio, so I'll just summarize that my goals are to, as with the rest of my functional-light practices, bridge the gap between people who don't use or understand monads, to the power of how monads can improve many of the things we JS developers often bang our heads against. I hope Monio is finally the monad approach in JS that opens it up to a broader audience (myself included!) that most of the other JS monad approaches have not.

In my efforts to try to call attention to Monio, I knew I would need to capture interest from my followers to the broader topic, not just of monads but the algebras stuff, too. So I set out to write those two tweet threads I linked to at the top.

## What I'm Not

Let's be clear before I proceed: just because I've written a book that touched on monads, and a course for the same, and written a monad library, that doesn't mean I think I'm an expert on them. Not even close.

I still have tons to learn.

I am aware of fields of study like "Category Theory" and "Type Theory", and that they are deep and rich topics. I kind of know how those apply to the discussion of FP and of monads (and adjacent behaviors). But I'm not steeped in that stuff. I find a lot of it to be too abstract.

But, I do think I have developed a bit of a foothold on the overall subject. I'm not completely lost. I think I'm starting to synthesize some of the words that Brian throws at me from the adjacent realms. A once dark and blurry picture for me is starting to have a bit of clarity.

And importantly, in my perspective on continual learning and teaching and the virtuous cycle between them, I simply cannot learn any more until I start explaining and putting out there what I know now. It's essential to the process of continued learning. I can't just go off as a silent monk and study for years and then come back fully enlightened. If I'm going to learn any of this, I'm going to have to help others learn it with me, as I go.

So... there's a ton about this I still don't know. But there's also I believe a lot of learning already behind me, and a decent foundation is settling in.

As I always remind people, all you can expect from me is my earnest attempt to explain what I know *so far*. I hope that's beneficial.

## Clarifying A Few Things

Along those two threads, I made several claims that ruffled feathers among the negative naysayers. Their conclusion was that I "don't know anything about the subject" and am "completely wrong". Others said I don't even have an "elementary level understanding", and would "fail a class" on it. Others said I was being "irresponsible" and "deliberately spreading false information".

I don't believe those claims to be fair or true. But I do think I can learn to more clearly communicate, as I indeed learn the subject itself more fully.

I asked Brian to help me sift through the negative feedback. As always, he patiently did. This blog post is my attempt to help set some of the record straight, thanks in large part to his help.

### "Monad"

The first thing I would like to address is my informal, and apparently too broad, use of the word "monad".

A monad, in the strictest sense, has a pretty narrow definition. It's based on 3 straight-forward "laws", which I'll get to in a minute. I used "monad" as a broader umbrella term to refer to a collection of related and adjacent ideas. I should probably have made it clearer that I didn't mean "all these things are monads", or that "all monads have all these things". I know those aren't true, and I never intended to suggest otherwise.

That said, many of these things are undeniably most commonly found on and around monads. I find it a bit disingenuous to suggest they "have nothing to do with monads", when they clearly do. They're most often illustrated in the same context as monads, and I've rarely seen these ideas brought up sans monad.

For example, the idea of "Foldable". This idea I illustrated with the Maybe monad, calling the `fold(fn1,fn2)` on a Maybe (as implemented in Monio). Another example is "Functor", with the `map(fn)` call.

These are part of the broader topic, and not specifically or exclusively about a monad. But a monad is a really convenient context to illustrate them. Many monads have these behaviors.

I don't think many in my audience will be interested in what `fold(..)` does outside the context of learning what a monad is. I know that many in the FP world would take issue with that assertion, but I think there's at least an obvious dotted line creating a clear mental connection. And I think by using the two together, I can draw upon some intuitions that may not be as effective with them separate.

So when my first thread said I was going to talk about "monads", and then I proceeded to *first* talk about adjacent behaviors like Functor, Foldable, Concatable (which, by the way, is apparently more formally Semigroup), most of the strict FP crowd objected vehemently, claiming that I was conflating the terms and mixing everything up.

I don't think most of my readers were helplessly confused. I think they appreciated the informality and the conceptual connection making. I think they got that my use of "monad" was a big picture concept to set the stage for both threads and a broader topic.

But I do want to clear the record that I know, and knew, that the thread was about more than just monads in the narrowest sense.

### Lawful

Speaking of the narrow definition of monads, the second thread was actually all about that. To quickly refrain here, a monad is a value that respects three specific laws, often illustrated by way of a method that goes alternately by the names `chain(..)`, `flatMap(..)`, or `bind(..)`.

In the thread, I first wanted to give some intuition to the name `flatMap(..)`, though I typically prefer the shorter `chain(..)`. Once I established that, I showed the 3 laws in terms of calls against a simple monad called `Just`.

**Note:** The `Just` monad I'm referring to is often an internal implementation detail of the `Maybe` monad in most libraries, rather than a standalone monad. In Monio, I preferred to have it be a standalone monad. I like how useful and easy it is to illustrate things (like the laws) with. In that sense, it serves the role of the "Identity" monad for me.

With the `Just(..)` function in Monio, this is how you create a monad instance:

```js
var three = Just(3);

three._inspect();  // Just(3)
```

So, here's the three laws:

1. "Left Identity" Law

   ```js
   f = v => Just(v);
   Just(3).chain(f) == f(3);  // true
   ```

2. "Right Identity" Law

	```js
	Just(3).chain(Just) == Just(3);  // true
	```

3. "Associativity" Law

	```js
	f = v => Just(v + 1);
	g = v => Just(v * 2);
	Just(3).chain(f).chain(g) ==
		Just(3).chain(v => f(v).chain(g));  // true
	```

In these code snippets, I'm only using a single value (`3`) here to illustrate, which in and of itself doesn't fully "prove" the laws; the laws have to hold for any value. Since `Just` is an "Identity" monad, if it does it for one value, it's going to do it for any value. I think the code illustrates the behavior that's expected of a monad.

Also note that I'm skipping the (typical) use of a unit function like `of(..)` here, because with `Just(..)`, in Monio, `Just(..)` gives the same result as `Just.of(..)`.

### Contract Law

I don't want to dive too fully into the laws, since the post you're reading is already quite long. But I want to clarify something I said in the second thread.

Consider this code:

```js
Just(3).chain(v => v);  // 3
```

I asserted that this usage was a *violation* of the third law, since the number `3` isn't a monad, and wouldn't have the `.chain(..)` method on it, so it would break. I was deliberately taking a bit of artistic license, and perhaps I shouldn't have. I was speaking informally (blaspheming!) about something that's consider sacred in its formality: the laws.

Here's what I meant: calling `chain(..)` with a function that does not return a monad of the same type is a failure to uphold the "contract" of how it's supposed to be used. `chain(..)` (and the laws!) expect that you do so, and if you don't, you're venturing into undefined territory, where things fall apart.

That's not a law violation in the formal sense. In a typed language, I don't suspect you could even do it, because the compiler would complain that your function isn't of the correct type. In JS, there's nothing the language does to enforce correct usage of the `chain(..)` method, so you can "violate" the contract of expected usage.

The point is, don't break the "contract": don't use the monad functions in ways they're not meant to be used, and in ways that don't fit the assumptions of the laws.

### Containers, and Burritos, and Onions, Oh My!

If you read enough about monads, you'll see all sorts of different colorful metaphors describing what they are. FP folks seem to hate metaphors for such mathematically precise topics, because any metaphor is (by definition) imprecise/incomplete.

I said in the first thread:

> A monad is a container around a value (like a number, string, or func) that gives that value special additional behavior it wouldn't have otherwise. For example, it helps that monad interact predictable with other monads.

I don't have any deeper meaning behind my use of the word "container", and I don't even really mean it as a metaphor. I simply mean that the monads I've interacted with typically take a value and surround it with some methods that offer it behavior. I went on to say:

> In that way, it's like a Collection or Data Structure.

By "data structure", I mean the same thing, that you are pairing value(s) with behavior(s), nothing more broad than that. My use of "container" and "data structure" struck many nerves.

Let me acknowledge their frustration. It's a fuzzy metaphor (as most are). It doesn't hold completely for every single monad ever. It isn't a comprehensive metaphor.

At the same time, a variety of monads I have worked with recently *are* "holding" a value, in an implementation sense if not a conceptual sense: `Just`, `Maybe`, `Either`, and `IO`, to name several.

I still like the genericism of the word "container", and [I'm not alone](https://twitter.com/drboolean/status/1283809343641542656). But it's certainly not meant to be a precise, prescriptive explanation of everything you need to understand. As with all metaphors, don't try to overstretch or over-apply its implications.

### Rubik

Let me even further muddy the waters by saying this: I actually think, if we're reaching for colorful metaphors, that I would describe monads (and the aforementioned accompanying adjacent space) as a **Rubik's Cube**. There's 54 stickers in 6 different colors on a classic cube, and you can turn it around and look at any of the 6 sides.

You can even twist the layers in three dimensions, moving the different smaller cubes around the bigger cube's matrix. The possible configurations of the cube is a huge number, but it's constrained by a set of "laws" that govern how the layers turn and how the pieces move with respect to each other.

That's what monads are to me, conceptually and experientially. I see lots of different aspects to monads (again, plus their adjacent space), and I see lots of ways we can twist and turn them around. And right now, I've only looked at a very tiny sliver of the overall possible cube space. Yet it doesn't take long to figure out the basics of how to twist stuff around!

### Semigroup And Functor

I mentioned this earlier, but want to call it out specifically. As shown in the first thread, the `concat(..)` method (from semigroup) can be implemented on/for a monad; the way it's implemented in several of the monads in Monio, it defers to the underlying `concat(..)` of the value (if any).

Consider (using Monio's `Just(..)` monad):

```js
var hello = Just("Hello");
var world = Just("World");
var HelloWorld = hello.concat(world);
HelloWorld._inspect();  // Just("HelloWorld");
```

Under the covers, the primitive string `"Hello"` had its `concat(..)` method called, with `"World"` as the argument. The result was `"HelloWorld"`, which was then wrapped back in a `Just`.

Not all monads have a `concat(..)` method. And not all usages of a method name `concat(..)` are necessarily adherent to the semigroup notion we're illustrating here. But if your monad does have it, and it does behave this way, it can be beneficial. It's even moreso beneficial in its deferral to an underlying `concat(..)` if the value held in your monad is another monad that is, itself, concatable.

**Note:** Though I'm talking about a specific concrete `concat(..)` method, since we can interact with it, the implied behavior actually comes from a type definition. More on that in a bit.

Also in the first thread, I showed off how JS arrays have a `map(..)` method that creates a new array with all the newly mapped values in it:

```js
var double = v => v * 2;
var nums = [ 10, 100, 1000 ];
nums.map(double);  // [ 20, 200, 2000 ]
```

And I used that as an intuition hook for how, when you have a monad with functor behavior, you can take its value and `map(..)` it to a new monad holding the new value.

For example, again using Monio's `Just(..)` to illustrate:

```js
var inc = v => v + 1;
var three = Just(3);
var four = three.map(inc);

four._inspect();  // Just(4)
```

The `map(..)` method, which is indicative of functor behavior, is not part of the strict definition of a monad. But the `chain(..)` call (or `flatMap(..)` or `bind(..)`) *is* a core requirement of any monad, and `map(..)` can be implemented with it (and `of(..)`). So, in essence, all monads are functors, even if all monads don't have `map(..)` itself. And in my experience, pretty often, `map(..)` is present on a monad.

There are indeed functors that aren't monads; JS's `Promise` is one. The JS `Promise` exposes a `then(..)` method instead of a `map(..)` (or `chain(..)`) method, but it does behave as a functor in creating a new promise from the returned value. But behaviorally, JS `Promise` violates other parts of the monad law requirements, so it's not a true monad.

Even though functor and monad *can* stand apart, it doesn't mean there's no connection between these two ideas; there's clearly a correlation in their most common usage. They're quite often paired together. In the kind of JS I'm often writing, I don't typically think explicitly about functors separately from monads. I use `Promise` a lot, but I don't find it helpful to label or describe it as a functor.

If you like thinking about functor separate from monad, that's fine. But I've found it super helpful to pair them together. My thread was trying to de-mystify monads a little bit by saying, "hey, if you've used array `map(..)`, you're already on your way to a monad". Let's just be clear that I didn't, and I'm not, saying that they are exactly the same. They're friends who can often be found playing together in the sandbox.

### Type vs Value (vs Interface)

Some amount of the consternation I caused was because I played too fast and loose with the notions of types and values, not separating them enough.

At times, we talk about the nature of a value, and at other times, we talk about the nature of a type. I am certain that some of this broader field of study benefits from treating these topics super separately and formally. But I would assert that in JS, which doesn't have custom type definitions, the lines are pretty blurry.

When I define a `Just(..)` function that makes an "instance" of the Just monad, and then talk about the fact that it has `chain(..)`, `map(..)`, and `ap(..)` methods on it, am I talking about the type or the value? Sorta both. I'm saying that monads of the "Just" type are, behaviorally, functors and applicatives (ie, the `ap(..)` method). But I'm also saying that an instance `m` of the "Just" type actually has these specific methods I can interact with.

A monad value that has a `chain(..)` method is a concrete instance of the monad type. That's why I've alluded to alternate names like `flatMap(..)` and `bind(..)`. The *type* says how the behavior is supposed to work, but doesn't require specific names. On the other hand, a concrete monad instance value you can interact with has chosen a specific implementation and given the behavior a specific method name.

Or when I said earlier, "all monads are functors". This is true at the value level, but not true at the type level. Monad and functor are separate types, and a single value can exhibit sufficient behavior to satisfy both.

I concede types and values are separate topics that have importance independent of each other. But for our purposes in JS, those distinctions are very blurry and don't matter as much.

Other than being aware that the method names may differ from implementation to implementation, I don't have much else to say or teach the JS developer about these distinctions, at this point. So expect they will be more interchangeable here than in the broader FP world, especially compared to languages with strong types like Haskell.

In fact, I like the word "interface" to describe the overlap/gray area: these different sorts of behaviors that an implementor of a monad (like the ones in Monio) can either choose to implement or not. "Interface" isn't a perfect term here, it has some baggage from OO. But I like what it generally communicates: a set of behavior that will be present and take this shape.

## Moving Forward

This has been a long post already, so I don't want to draw it out too much more. I wanted to close with a few statements about where I'm headed with my explorations (and sharing) of monads.

I said earlier that I am hoping Monio can grow into a useful tool for bringing monads (and related/adjacent behaviors) to a broader section of typical JS developers. I don't perceive the wider JS landscape to be super willing to embrace monads yet, but I am hoping I can be a small part of helping open that up.

My explorations on monads and their friends are part of an expanding corpus of FP understanding that surpasses what I covered in the book and course over the last 4 years. I suspect it may become part of a future sequel to the book and course, but time will tell.

In any case, I have a lot more to learn about monads and friends. I have a lot more to learn about explaining them both approachably and clearly. That will continue, as always, in the open. It'll be messy at times, but I hope by now you can see my heart and intent and will forgive me some of the churn.

If you got this far, thanks for reading!