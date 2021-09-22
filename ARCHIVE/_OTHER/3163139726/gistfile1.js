[] == 0
+[] === 0
++[] === 1  // sorta, though this is invalid js syntax, so...

[[]][0] === []
++[[]][0] === 1
++[[]][+[]] === 1  // yay! wtf!

// FYI: this comes from John Resig explaining here:
// http://news.ycombinator.com/item?id=1154338