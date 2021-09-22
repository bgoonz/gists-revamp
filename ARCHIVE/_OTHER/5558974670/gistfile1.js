/*
Increasingly, sites are doing client-side rendering at page load time,
which is breaking the concept of being able to have a #hash on a URL
that auto-scrolls the page to make some element visible after page-load.

A perfect example of this is that most #hash URLs (as far as scrolling)
are broken on gist.github and github when viewed in recent Firefox.

This proposed "autoscroll" event will fire right before the browser
is about to do the auto-scroll after a page-load, and will include
a string value to the ID of the element it is planning to scroll to.
The event will fire even if the browser doesn't see the element in the
DOM yet.

A site/app can trap this event, and store a reference to which #id would
have been scrolled into view, and then later, when the site/app rendering
is complete, it can find the element in question and manually do the
scrolling.

This is more graceful than having to inspect the URL manually to find a
hash, which of course can be done (and forms the basis of the polyfill
shown below), but most sites never take that step. Hopefully, this event
will make it easier and more attractive for modern sites/apps to preserve
auto-scrolling with #hash'd URLs (where appropriate).
*/

// polyfill for `autoscroll` event
(function () {
  var old_fn;

  // fake the 'autoscroll' event, if necessary
  function doAutoscrollEvent() {
    var evt,
      hash = document.location.hash.replace(/^#/, "");

    if (hash !== "") {
      if (CustomEvent) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Event/CustomEvent
        evt = new CustomEvent("autoscroll");
        evt.targetID = hash;
      } else if (document.createEvent) {
        // https://developer.mozilla.org/en-US/docs/DOM/document.createEvent
        evt = document.createEvent("autoscroll");
        evt.targetID = hash;
      } else {
        // otherwise, just use an empty/fake event object
        evt = { targetID: hash };
      }

      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.dispatchEvent
      window.dispatchEvent(evt);
    }
  }

  // FT for whether the 'autoscroll' is not built-in?
  if (!("onautoscroll" in window)) {
    // standards, yay!?
    if (window.addEventListener) {
      window.addEventListener(
        "load",
        function __load__() {
          // unbind the event, for cleanliness sake
          window.removeEventListener("load", __load__, false);

          // fake the auto-scroll event
          doAutoscrollEvent();
        },
        false
      );
    }
    // legacy IE?
    else if (window.attachEvent) {
      // since we're in old IE, which has memory leak problems with
      // named functions, the lesser of two evils is to rely on
      // `arguments.callee` instead.
      window.attachEvent("onload", function () {
        // unbind the event, for cleanliness sake
        window.detachEvent("onload", arguments.callee);

        // fake the auto-scroll event
        doAutoscrollEvent();
      });
    }
    // old school busted
    else {
      old_fn = window.onload;
      window.onload = function () {
        if (old_fn) old_fn();
        old_fn = null;

        // fake the auto-scroll event
        doAutoscrollEvent();
      };
    }
  }
})();

// using the 'autoscroll' event
(function () {
  var scroll_id;

  // event fired on `window`, but could also be on `document`
  window.addEventListener(
    "autoscroll",
    function __autoscroll__(evt) {
      // unbind the event, for cleanliness sake
      window.removeEventListener("autoscroll", __autoscroll_false);

      // `evt.targetID` would be the string #hash value
      scroll_id = evt.targetID;

      // don't let the browser attempt the auto scrolling
      evt.preventDefault();
    },
    false
  );

  // later in the app
  if (scroll_id) {
    // Page.onrendered() is just pseudo-code for determining when
    // when client-side rendereing for the site/app is complete,
    // so the element is now visible to scroll to
    Page.onrendered(function () {
      // now find the element we were going to scroll to earlier
      var elem = document.getElementById(scroll_id);

      // and scroll it into view
      // https://developer.mozilla.org/en-US/docs/DOM/element.scrollIntoView
      if (elem) elem.scrollIntoView();
    });
  }
})();
