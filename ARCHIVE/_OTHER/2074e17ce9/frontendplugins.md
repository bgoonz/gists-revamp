# How WordPress Plugins Should Handle Front End Resources

> **This is a WORK IN PROGRESS** intended for fleshing out and feedback

It's very common for people to be unhappy with how a WordPress plugin adds front end resources to their site. If a plugin needs CSS, the plugin will add a `<link>` element to that CSS. If the plugin needs JavaScript, it will add a `<script>` to that JavaScript.

Plugins do this because it **works**. It's damn important for a WordPress plugin to **work**, even in adverse conditions. They rightfully want good ratings and little customer support.

But this comes at the cost of additional HTTP requests. In optimizing front end performance of a site, reducing the number of HTTP requests is a huge thing. Front end developers want to decide and control how front end resources are being handled, and WordPress plugins don't typically make this easy on them.

Here's an approach for plugin developers that can make everybody happy. The plugin still "just works" as well as it did before. But for people wanting to avoid those requests and deal with assets themselves, it allows that.


### If the plugin needs CSS...

- Default to including it in the `wp_head` hook.
- Have a setting to **not** include it there, then provide the required CSS. Perhaps in a `<textarea>` for easy selecting and copy-and-pasting for the developer to put it somewhere in their own project.


### If the plugin needs JavaScript...

- Default to including in the `wp_footer` hook.
- Have a setting to **not** include it there, then provide the required JavaScript. Perhaps in a `<textarea>` for easy selecting and copy-and-pasting for the developer to put it somewhere in their own project.


### It might look something like this:

![img](http://f.cl.ly/items/0I3c3H1P2e2r3g2B371L/Screen%20Shot%202014-09-29%20at%204.48.16%20PM.png)


### If the plugin needs images...

- Is it possible to not use images? If so, cool, do that.
- Can you use SVG? If so, cool, use inline `<svg>` where you can (e.g. you can use inline Data URI SVG in [add_menu_page](http://codex.wordpress.org/Function_Reference/add_menu_page)).
- If you need raster images (JPG, PNG, GIF), can you data URI them right into the code? 
- Always optimize images with tools like [SVGO](https://github.com/svg/svgo) for SVG or [ImageOptim](https://imageoptim.com/) for raster images.


### "Just use something to handle this for you!!"

There are plugins out there that concatinate assets for you. (examples: [MinQueue](https://wordpress.org/plugins/minqueue/) and [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)). I'm sure they do a pretty good job. But this shouldn't be the final answer. This isn't something automation is the perfect solution for in every case. What if they get the ordering wrong? What if you really need a particular as asset to load in a particular place? What happens on pages with a one-off script? Shouldn't it continue to use the presumably-well-cached script used on most other pages rather than make a new one?

A performance-focused developer can make the best decisions when it comes to what assets should be concatinated (and which shouldn't) for the best use of caching throughout the site.


### Feedback

- Is all this factually correct?
- Is there anything that can be explained better? Is the terminology correct?
- Can we make an example plugin that demonstrates these concepts?
