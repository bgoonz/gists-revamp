Popups and window methods
=========================

A popup window is one of the oldest methods to show additional document to user.

Basically, you just run:

    window.open('https://javascript.info/')

…And it will open a new window with given URL. Most modern browsers are configured to open url in new tabs instead of separate windows.

Popups exist from really ancient times. The initial idea was to show another content without closing the main window. As of now, there are other ways to do that: we can load content dynamically with [fetch](info:fetch) and show it in a dynamically generated `<div>`. So, popups is not something we use everyday.

Also, popups are tricky on mobile devices, that don’t show multiple windows simultaneously.

Still, there are tasks where popups are still used, e.g. for OAuth authorization (login with Google/Facebook/…), because:

1.  A popup is a separate window which has its own independent JavaScript environment. So opening a popup from a third-party, non-trusted site is safe.
2.  It’s very easy to open a popup.
3.  A popup can navigate (change URL) and send messages to the opener window.

Popup blocking
--------------

In the past, evil sites abused popups a lot. A bad page could open tons of popup windows with ads. So now most browsers try to block popups and protect the user.

**Most browsers block popups if they are called outside of user-triggered event handlers like `onclick`.**

For example:

    // popup blocked
    window.open('https://javascript.info');

    // popup allowed
    button.onclick = () => {
      window.open('https://javascript.info');
    };

This way users are somewhat protected from unwanted popups, but the functionality is not disabled totally.

What if the popup opens from `onclick`, but after `setTimeout`? That’s a bit tricky.

Try this code:

`js run // open after 3 seconds setTimeout(() => window.open('http://google.com'), 3000);`

The popup opens in Chrome, but gets blocked in Firefox.

…If we decrease the delay, the popup works in Firefox too:

`js run // open after 1 seconds setTimeout(() => window.open('http://google.com'), 1000);`

The difference is that Firefox treats a timeout of 2000ms or less are acceptable, but after it – removes the “trust”, assuming that now it’s “outside of the user action”. So the first one is blocked, and the second one is not.

window.open
-----------

The syntax to open a popup is: `window.open(url, name, params)`:

url  
An URL to load into the new window.

name  
A name of the new window. Each window has a `window.name`, and here we can specify which window to use for the popup. If there’s already a window with such name – the given URL opens in it, otherwise a new window is opened.

params  
The configuration string for the new window. It contains settings, delimited by a comma. There must be no spaces in params, for instance: `width=200,height=100`.

Settings for `params`:

-   Position:
    -   `left/top` (numeric) – coordinates of the window top-left corner on the screen. There is a limitation: a new window cannot be positioned offscreen.
    -   `width/height` (numeric) – width and height of a new window. There is a limit on minimal width/height, so it’s impossible to create an invisible window.
-   Window features:
    -   `menubar` (yes/no) – shows or hides the browser menu on the new window.
    -   `toolbar` (yes/no) – shows or hides the browser navigation bar (back, forward, reload etc) on the new window.
    -   `location` (yes/no) – shows or hides the URL field in the new window. FF and IE don’t allow to hide it by default.
    -   `status` (yes/no) – shows or hides the status bar. Again, most browsers force it to show.
    -   `resizable` (yes/no) – allows to disable the resize for the new window. Not recommended.
    -   `scrollbars` (yes/no) – allows to disable the scrollbars for the new window. Not recommended.

There is also a number of less supported browser-specific features, which are usually not used. Check [window.open in MDN](https://developer.mozilla.org/en/DOM/window.open) for examples.

Example: a minimalistic window
------------------------------

Let’s open a window with minimal set of features, just to see which of them browser allows to disable:

\`\``js run let params =`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=0,height=0,left=-1000,top=-1000\`;

open(‘/’, ‘test’, params); \`\`\`

Here most “window features” are disabled and window is positioned offscreen. Run it and see what really happens. Most browsers “fix” odd things like zero `width/height` and offscreen `left/top`. For instance, Chrome open such a window with full width/height, so that it occupies the full screen.

Let’s add normal positioning options and reasonable `width`, `height`, `left`, `top` coordinates:

\`\``js run let params =`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=600,height=300,left=100,top=100\`;

open(‘/’, ‘test’, params); \`\`\`

Most browsers show the example above as required.

Rules for omitted settings:

-   If there is no 3rd argument in the `open` call, or it is empty, then the default window parameters are used.
-   If there is a string of params, but some `yes/no` features are omitted, then the omitted features assumed to have `no` value. So if you specify params, make sure you explicitly set all required features to yes.
-   If there is no `left/top` in params, then the browser tries to open a new window near the last opened window.
-   If there is no `width/height`, then the new window will be the same size as the last opened.

Accessing popup from window
---------------------------

The `open` call returns a reference to the new window. It can be used to manipulate it’s properties, change location and even more.

In this example, we generate popup content from JavaScript:

    let newWin = window.open("about:blank", "hello", "width=200,height=200");

    newWin.document.write("Hello, world!");

And here we modify the contents after loading:

\`\`\`js run let newWindow = open(‘/’, ‘example’, ‘width=300,height=300’) newWindow.focus();

alert(newWindow.location.href); // (\*) about:blank, loading hasn’t started yet

newWindow.onload = function() { let html = `<div style="font-size:30px">Welcome!</div>`; *!* newWindow.document.body.insertAdjacentHTML(‘afterbegin’, html); */!* }; \`\`\`

Please note: immediately after `window.open`, the new window isn’t loaded yet. That’s demonstrated by `alert` in line `(*)`. So we wait for `onload` to modify it. We could also use `DOMContentLoaded` handler for `newWin.document`.

\`\`\`warn header=“Same origin policy” Windows may freely access content of each other only if they come from the same origin (the same protocol://domain:port).

Otherwise, e.g. if the main window is from `site.com`, and the popup from `gmail.com`, that’s impossible for user safety reasons. For the details, see chapter <a href="info:cross-window-communication" class="uri">info:cross-window-communication</a>. \`\`\`

Accessing window from popup
---------------------------

A popup may access the “opener” window as well using `window.opener` reference. It is `null` for all windows except popups.

If you run the code below, it replaces the opener (current) window content with “Test”:

\`\`\`js run let newWin = window.open(“about:blank”, “hello”, “width=200,height=200”);

newWin.document.write( "

&lt;p&gt;window.opener.document.body.innerHTML = ‘Test’&lt;/script&gt;" ); \`\`\`&lt;/p&gt; &lt;p&gt;So the connection between the windows is bidirectional: the main window and the popup have a reference to each other.&lt;/p&gt; &lt;h2 id="closing-a-popup"&gt;Closing a popup&lt;/h2&gt; &lt;p&gt;To close a window: &lt;code&gt;win.close()&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;To check if a window is closed: &lt;code&gt;win.closed&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Technically, the &lt;code&gt;close()&lt;/code&gt; method is available for any &lt;code&gt;window&lt;/code&gt;, but &lt;code&gt;window.close()&lt;/code&gt; is ignored by most browsers if &lt;code&gt;window&lt;/code&gt; is not created with &lt;code&gt;window.open()&lt;/code&gt;. So it’ll only work on a popup.&lt;/p&gt; &lt;p&gt;The &lt;code&gt;closed&lt;/code&gt; property is &lt;code&gt;true&lt;/code&gt; if the window is closed. That’s useful to check if the popup (or the main window) is still open or not. A user can close it anytime, and our code should take that possibility into account.&lt;/p&gt; &lt;p&gt;This code loads and then closes the window:&lt;/p&gt; &lt;p&gt;\`\`\`js run let newWindow = open(‘/’, ‘example’, ‘width=300,height=300’);&lt;/p&gt; &lt;p&gt;newWindow.onload = function() { newWindow.close(); alert(newWindow.closed); // true }; \`\`\`&lt;/p&gt; &lt;h2 id="moving-and-resizing"&gt;Moving and resizing&lt;/h2&gt; &lt;p&gt;There are methods to move/resize a window:&lt;/p&gt; &lt;dl&gt; &lt;dt&gt;&lt;code&gt;win.moveBy(x,y)&lt;/code&gt;&lt;/dt&gt; &lt;dd&gt;Move the window relative to current position &lt;code&gt;x&lt;/code&gt; pixels to the right and &lt;code&gt;y&lt;/code&gt; pixels down. Negative values are allowed (to move left/up). &lt;/dd&gt; &lt;dt&gt;&lt;code&gt;win.moveTo(x,y)&lt;/code&gt;&lt;/dt&gt; &lt;dd&gt;Move the window to coordinates &lt;code&gt;(x,y)&lt;/code&gt; on the screen. &lt;/dd&gt; &lt;dt&gt;&lt;code&gt;win.resizeBy(width,height)&lt;/code&gt;&lt;/dt&gt; &lt;dd&gt;Resize the window by given &lt;code&gt;width/height&lt;/code&gt; relative to the current size. Negative values are allowed. &lt;/dd&gt; &lt;dt&gt;&lt;code&gt;win.resizeTo(width,height)&lt;/code&gt;&lt;/dt&gt; &lt;dd&gt;Resize the window to the given size. &lt;/dd&gt; &lt;/dl&gt; &lt;p&gt;There’s also &lt;code&gt;window.onresize&lt;/code&gt; event.&lt;/p&gt; &lt;p&gt;&lt;code&gt;warn header="Only popups" To prevent abuse, the browser usually blocks these methods. They only work reliably on popups that we opened, that have no additional tabs.&lt;/code&gt;&lt;/p&gt; &lt;p&gt;\`\`\`warn header=“No minification/maximization” JavaScript has no way to minify or maximize a window. These OS-level functions are hidden from Frontend-developers.&lt;/p&gt; &lt;p&gt;Move/resize methods do not work for maximized/minimized windows. \`\`\`&lt;/p&gt; &lt;h2 id="scrolling-a-window"&gt;Scrolling a window&lt;/h2&gt; &lt;p&gt;We already talked about scrolling a window in the chapter &lt;a href="info:size-and-scroll-window" class="uri"&gt;info:size-and-scroll-window&lt;/a&gt;.&lt;/p&gt; &lt;dl&gt; &lt;dt&gt;&lt;code&gt;win.scrollBy(x,y)&lt;/code&gt;&lt;/dt&gt; &lt;dd&gt;Scroll the window &lt;code&gt;x&lt;/code&gt; pixels right and &lt;code&gt;y&lt;/code&gt; down relative the current scroll. Negative values are allowed. &lt;/dd&gt; &lt;dt&gt;&lt;code&gt;win.scrollTo(x,y)&lt;/code&gt;&lt;/dt&gt; &lt;dd&gt;Scroll the window to the given coordinates &lt;code&gt;(x,y)&lt;/code&gt;. &lt;/dd&gt; &lt;dt&gt;&lt;code&gt;elem.scrollIntoView(top = true)&lt;/code&gt;&lt;/dt&gt; &lt;dd&gt;Scroll the window to make &lt;code&gt;elem&lt;/code&gt; show up at the top (the default) or at the bottom for &lt;code&gt;elem.scrollIntoView(false)&lt;/code&gt;. &lt;/dd&gt; &lt;/dl&gt; &lt;p&gt;There’s also &lt;code&gt;window.onscroll&lt;/code&gt; event.&lt;/p&gt; &lt;h2 id="focusblur-on-a-window"&gt;Focus/blur on a window&lt;/h2&gt; &lt;p&gt;Theoretically, there are &lt;code&gt;window.focus()&lt;/code&gt; and &lt;code&gt;window.blur()&lt;/code&gt; methods to focus/unfocus on a window. And there are also &lt;code&gt;focus/blur&lt;/code&gt; events that allow to catch the moment when the visitor focuses on a window and switches elsewhere.&lt;/p&gt; &lt;p&gt;Although, in practice they are severely limited, because in the past evil pages abused them.&lt;/p&gt; &lt;p&gt;For instance, look at this code:&lt;/p&gt; &lt;p&gt;&lt;code&gt;js run window.onblur = () =&gt; window.focus();&lt;/code&gt;&lt;/p&gt; &lt;p&gt;When a user attempts to switch out of the window (&lt;code&gt;window.onblur&lt;/code&gt;), it brings the window back into focus. The intention is to “lock” the user within the &lt;code&gt;window&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;So browsers had to introduce many limitations to forbid the code like that and protect the user from ads and evils pages. They depend on the browser.&lt;/p&gt; &lt;p&gt;For instance, a mobile browser usually ignores &lt;code&gt;window.focus()&lt;/code&gt; completely. Also focusing doesn’t work when a popup opens in a separate tab rather than a new window.&lt;/p&gt; &lt;p&gt;Still, there are some use cases when such calls do work and can be useful.&lt;/p&gt; &lt;p&gt;For instance:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;When we open a popup, it’s might be a good idea to run a &lt;code&gt;newWindow.focus()&lt;/code&gt; on it. Just in case, for some OS/browser combinations it ensures that the user is in the new window now.&lt;/li&gt; &lt;li&gt;If we want to track when a visitor actually uses our web-app, we can track &lt;code&gt;window.onfocus/onblur&lt;/code&gt;. That allows us to suspend/resume in-page activities, animations etc. But please note that the &lt;code&gt;blur&lt;/code&gt; event means that the visitor switched out from the window, but they still may observe it. The window is in the background, but still may be visible.&lt;/li&gt; &lt;/ul&gt; &lt;h2 id="summary"&gt;Summary&lt;/h2&gt; &lt;p&gt;Popup windows are used rarely, as there are alternatives: loading and displaying information in-page, or in iframe.&lt;/p&gt; &lt;p&gt;If we’re going to open a popup, a good practice is to inform the user about it. An “opening window” icon near a link or button would allow the visitor to survive the focus shift and keep both windows in mind.&lt;/p&gt; &lt;ul&gt; &lt;li&gt;A popup can be opened by the &lt;code&gt;open(url, name, params)&lt;/code&gt; call. It returns the reference to the newly opened window.&lt;/li&gt; &lt;li&gt;Browsers block &lt;code&gt;open&lt;/code&gt; calls from the code outside of user actions. Usually a notification appears, so that a user may allow them.&lt;/li&gt; &lt;li&gt;Browsers open a new tab by default, but if sizes are provided, then it’ll be a popup window.&lt;/li&gt; &lt;li&gt;The popup may access the opener window using the &lt;code&gt;window.opener&lt;/code&gt; property.&lt;/li&gt; &lt;li&gt;The main window and the popup can freely read and modify each other if they have the same origin. Otherwise, they can change location of each other and &lt;a href="info:cross-window-communication"&gt;exchange messages&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;To close the popup: use &lt;code&gt;close()&lt;/code&gt; call. Also the user may close them (just like any other windows). The &lt;code&gt;window.closed&lt;/code&gt; is &lt;code&gt;true&lt;/code&gt; after that.&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Methods &lt;code&gt;focus()&lt;/code&gt; and &lt;code&gt;blur()&lt;/code&gt; allow to focus/unfocus a window. But they don’t work all the time.&lt;/li&gt; &lt;li&gt;Events &lt;code&gt;focus&lt;/code&gt; and &lt;code&gt;blur&lt;/code&gt; allow to track switching in and out of the window. But please note that a window may still be visible even in the background state, after &lt;code&gt;blur&lt;/code&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;/body&gt; &lt;/html&gt;
