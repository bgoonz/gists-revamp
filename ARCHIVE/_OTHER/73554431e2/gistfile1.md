## Tyler Pope
I've been doing front end web development for a few years. I'm in the process of building my first real web app. I am at the point in the project where it seems necessary to add user authentication. I am writing the app in PHP and am not using any frameworks. Since security is a big concern, I want to make sure I go about adding authentication correctly. I've been researching the best way to handle authentication and some have suggested to use pre-written scripts, while others have suggested using a framework. What should I do?

## Adam Davidson
I would like to lazy load images on my website to speed up performance, however I am concerned about the fallback issues. As the images are loaded in via JavaScript, users without JavaScript will get no images.

Also not sure if the images will get indexed by Google, as they would not be in the DOM initially.

Will putting the images in a &lt;noscript> tag solve this problem? What is your view on this?

## Halley Carleton
I am at that point in my relationship with JS where it has started to make sense. I've started working with modules and prototypes, but now I want to start unit testing. I understand the concept of unit testing, but actually testing a function that manipulates the DOM is still abstract to me. Do you know of any awesome web or print resources for learning unit testing in Javascript?

## Matt Griffin
AUDIO: http://mr.gg/shoptalk  (Fairly bad audio...)
My name's Matt Griffin, @GriffinArtworks on Twitter. I'm a front-end developer and I think my skills are pretty ninja. However, I have started to wonder if my JavaScript and PHP could do with some cleaning up. Everything I know I have learned from "just building websites" but with that style of learning, comes an urgency which often makes me feel like I may not have picked up on some of the finer points.

## Chris Davids
AUDIO:  http://www.recordmp3.org/dvlHu.mp3 (very long... probably easier to read?)
I found it interesting when Dave read out CSSComb's support for text editors (in show 042) where you laughed at intelliJidea.

I use their product on Windows while developing php/html/css/javascript web-apps & web sites. I mostly like the editor, find it powerful, especially php debugging set by step on the fly. Is there something I'm missing?

## Frank Apicella
I'm starting to take my sites performance more seriously and I'm having great success compressing and caching everything. Except when it comes to "defer parsing for javascript" for both internal and external resources. I've been reading up on it but since I don't know javascript that well I'm having a hard time implementing.Currently I enqueue the scripts in the footer (wordpress), but apparently thats not enough.

## Henrik Peszlen
Is there any good solution on how to run page specific javascript functions?
Currently I'm using inline script at the bottom of the page which inserts a page specific value to a function which in turn check the value with an IF-statement.
I've heard that inline javascript make the whole page uncacheable, not sure about this but in that case this is no solution that I want to be using. What are your thoughts and how do you solve this?

Simplified clarification:

```
pageload('page1');

function pageload(page) {
  if (page == 'page1') {
    page1();
  }
}
```

## August Skare
I have fallen in love in how easy CodeKit makes developing websites. But when I work with other people, often in Rails, they just use the terminal to compile the Sass. But I really miss the compiling + minifying of JavaScript, is there a way to do this without CodeKit.