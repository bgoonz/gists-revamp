## Quick sponsor mentions
E4H

Typekit

## Theme song
http://www.stillbreathing.co.uk/misc/shoptalktheme.mp3


## Guest
- We briefly introduce Guests, thank them for coming on the show, then…
- Have Guest tell us about who they are and what they do in their own words. Do their schpeil. "What have you guys been up to?" etc.

Jed Schmidt
    Uniqlo
    Mobile web
    Japan
    BrooklynJS
    http://www.140byt.es/

## Drama?

## News N' Links

## Errs and Omissions


# Q & A

## Mark Salvatore
In spirit of keeping markup separate from style, separate from behavior, what are your thoughts on using the HTML5 data attribute as a selector for javascript, rather than the typical classname or id?

I was using prefixed classnames, like "js-className", to make it clear that this class was used only as a js hook and contains no styling. That works, but feels a bit hacky. The call has nothing to do with a css class so why create one?

Later, I began using the name attribute of elements as a hook. That feels better, but not all elements have a name attribute. And while this technique might be semantic in the context of an input tag, it stretches the purpose of the name attribute in other contexts, such as in an anchor. 

So maybe a better solution would be to use the HTML5 data attribute as a js hook? Something like, data-js-hook="submitButton", or perhaps go rogue and leave off the data prefix altogether? I like that better since the value "submitButton" isn't meant to be data.

Or going full circle, maybe the simplest and most sensible solution would be to continue using the ID attribute as a js hook, while being sure not to style those IDs.

## mack solomon
I work for a company and my main responsibility is taking a PSD and converting it into a fully responsive HTML + CSS template. Would Grunt be an appropriate addition to my workflow or is it geared towards JavaScript projects?

# Sponsor: E4H

## Ryan Burnette
AUDIO: http://bit.ly/1tAK1ae
I'm a web developer who builds a lot of custom sites for clients.

Depending upon the complexity and requirements of a particular design, my sites don't always deal with browser zoom too gracefully.

What are you guys' thoughts about supporting browser zoom? Do you have any advice on a good policy to give clients on what's covered as a bug if it doesn't look right when a user zooms?

## Joshua Smith
A while ago you guys were talking about learning web design and one of you ( I think it was Dave ) kind of laughed at w3schools.

Is there something wrong with that website? I always thought it was clean and clear.

# Sponsor: Typekit

## Jeff Lau (Low as in Allow)
AUDIO: http://www.recordmp3.org/kO3nE.mp3
I've been interested in Front-end JavaScript frameworks for a while, but I've never got around to learning any of them to any degree where I'm ready to really build an app with it. Recently I've been hearing about Derby and Meteor, which are filling this space to build an app from start to finish using the same API as a fullstack framework. 

I've been recently learning more about Meteor, but I'm wondering what are your thoughts on these frameworks. Do you think they are going to replace front-end javascript frameworks (angular, backbone, ember) + server side framework (rails, express, django) or do you think there's a reason this separation exists between front-end and back-end?

## Robert Khayat
I am wondering how jQuery Page Loaders actually work?

I know you can use window .load to wait until the page loads to do something, but most of the page loaders I see just show a gif until the page is loaded.

How can I utilize CSS animations (even svg at some point) on a page loader? Can Can you ask jQuery to paint a progress bar for each % of the website it has loaded? Would that slow down the loading?

My goal is to attach on load animations to the divs as well as a page loader.

## Harry Atkins
AUDIO: http://www.recordmp3.org/kONxI.mp3
Harry here from Paris. 
Really love the show, this is my first time asking a question. I was wondering if you guys had any suggestion on how to create a web form that advances on its own. It has multiple pages and advances when it's filled out without page reloads. Just wondering if you guys know any articles about it or the best way to dit? Best practices etc. Because I want to use it on a project and I'm interested in your opinions.

## James Kusachi (Coo-Sah-Chee)
I run a website (or many sites), that are located in many countries all over the world. We have the .com as our main entry point, then route to the regional site depending on the users Geo Location. 

My question is in regards to testing. Do you know of a good solution that allows me to test my sites from all over the world? 

I know of HIdeMyAss, and I know I can configure an ExitNode in TOR, but I wonder if theres anything better. Searching for proxies gets you more ads and popups than say, a lyrics website, so I wonder if theres quick go to!?

# OUT
GUESTS
  How can people give you money?
  One big shout-out to something you're loving this week.

Thanks for listening. Rate us in iTunes. Follow @shoptalkshow on Twitter.

shoptalkshow.com
