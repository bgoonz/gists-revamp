bcrypt.js
=========

Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ [bcrypt](https://npmjs.org/package/bcrypt) binding on node.js and also working in the browser.

[![build static](https://travis-ci.org/dcodeIO/bcrypt.js.svg?branch=master)](https://travis-ci.org/dcodeIO/bcrypt.js) [![](https://img.shields.io/npm/v/bcryptjs.svg)](https://npmjs.org/package/bcryptjs) [![](https://img.shields.io/npm/dm/bcryptjs.svg)](https://npmjs.org/package/bcryptjs) [![donate ❤](https://img.shields.io/badge/donate-❤-ff2244.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=dcode%40dcode.io&item_name=Open%20Source%20Software%20Donation&item_number=dcodeIO%2Fbcrypt.js)

Security considerations
-----------------------

Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power. ([see](http://en.wikipedia.org/wiki/Bcrypt))

While bcrypt.js is compatible to the C++ bcrypt binding, it is written in pure JavaScript and thus slower ([about 30%](https://github.com/dcodeIO/bcrypt.js/wiki/Benchmark)), effectively reducing the number of iterations that can be processed in an equal time span.

The maximum input length is 72 bytes (note that UTF8 encoded characters use up to 4 bytes) and the length of generated hashes is 60 characters.

Usage
-----

The library is compatible with CommonJS and AMD loaders and is exposed globally as `dcodeIO.bcrypt` if neither is available.

### node.js

On node.js, the inbuilt [crypto module](http://nodejs.org/api/crypto.html)’s randomBytes interface is used to obtain secure random numbers.

`npm install bcryptjs`

    var bcrypt = require('bcryptjs');
    ...

### Browser

In the browser, bcrypt.js relies on [Web Crypto API](http://www.w3.org/TR/WebCryptoAPI)’s getRandomValues interface to obtain secure random numbers. If no cryptographically secure source of randomness is available, you may specify one through [bcrypt.setRandomFallback](https://github.com/dcodeIO/bcrypt.js#setrandomfallbackrandom).

    var bcrypt = dcodeIO.bcrypt;
    ...

or

    require.config({
        paths: { "bcrypt": "/path/to/bcrypt.js" }
    });
    require(["bcrypt"], function(bcrypt) {
        ...
    });

Usage - Sync
------------

To hash a password:

    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0/\/", salt);
    // Store hash in your password DB.

To check a password:

    // Load hash from your password DB.
    bcrypt.compareSync("B4c0/\/", hash); // true
    bcrypt.compareSync("not_bacon", hash); // false

Auto-gen a salt and hash:

    var hash = bcrypt.hashSync('bacon', 8);

Usage - Async
-------------

To hash a password:

    var bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("B4c0/\/", salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });

To check a password:

    // Load hash from your password DB.
    bcrypt.compare("B4c0/\/", hash, function(err, res) {
        // res === true
    });
    bcrypt.compare("not_bacon", hash, function(err, res) {
        // res === false
    });

    // As of bcryptjs 2.4.0, compare returns a promise if callback is omitted:
    bcrypt.compare("B4c0/\/", hash).then((res) => {
        // res === true
    });

Auto-gen a salt and hash:

    bcrypt.hash('bacon', 8, function(err, hash) {
    });

**Note:** Under the hood, asynchronisation splits a crypto operation into small chunks. After the completion of a chunk, the execution of the next chunk is placed on the back of [JS event loop queue](https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop), thus efficiently sharing the computational resources with the other operations in the queue.

API
---

### setRandomFallback(random)

Sets the pseudo random number generator to use as a fallback if neither node’s `crypto` module nor the Web Crypto API is available. Please note: It is highly important that the PRNG used is cryptographically secure and that it is seeded properly!

<table style="width:98%;"><colgroup><col style="width: 34%" /><col style="width: 34%" /><col style="width: 30%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>random</td><td><em>function(number):!Array.&lt;number&gt;</em></td><td>Function taking the number of bytes to generate as its sole argument, returning the corresponding array of cryptographically secure random byte values.</td></tr><tr class="even"><td><strong><span class="citation" data-cites="see">@see</span></strong></td><td></td><td>http://nodejs.org/api/crypto.html</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="see">@see</span></strong></td><td></td><td>http://www.w3.org/TR/WebCryptoAPI/</td></tr></tbody></table>

**Hint:** You might use [isaac.js](https://github.com/rubycon/isaac.js) as a CSPRNG but you still have to make sure to seed it properly.

### genSaltSync(rounds=, seed\_length=)

Synchronously generates a salt.

<table><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>rounds</td><td><em>number</em></td><td>Number of rounds to use, defaults to 10 if omitted</td></tr><tr class="even"><td>seed_length</td><td><em>number</em></td><td>Not supported.</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="returns">@returns</span></strong></td><td><em>string</em></td><td>Resulting salt</td></tr><tr class="even"><td><strong><span class="citation" data-cites="throws">@throws</span></strong></td><td><em>Error</em></td><td>If a random fallback is required but not set</td></tr></tbody></table>

### genSalt(rounds=, seed\_length=, callback)

Asynchronously generates a salt.

<table style="width:98%;"><colgroup><col style="width: 34%" /><col style="width: 34%" /><col style="width: 30%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>rounds</td><td><em>number | function(Error, string=)</em></td><td>Number of rounds to use, defaults to 10 if omitted</td></tr><tr class="even"><td>seed_length</td><td><em>number | function(Error, string=)</em></td><td>Not supported.</td></tr><tr class="odd"><td>callback</td><td><em>function(Error, string=)</em></td><td>Callback receiving the error, if any, and the resulting salt</td></tr><tr class="even"><td><strong><span class="citation" data-cites="returns">@returns</span></strong></td><td><em>Promise</em></td><td>If <code>callback</code> has been omitted</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="throws">@throws</span></strong></td><td><em>Error</em></td><td>If <code>callback</code> is present but not a function</td></tr></tbody></table>

### hashSync(s, salt=)

Synchronously generates a hash for the given string.

<table><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>s</td><td><em>string</em></td><td>String to hash</td></tr><tr class="even"><td>salt</td><td><em>number | string</em></td><td>Salt length to generate or salt to use, default to 10</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="returns">@returns</span></strong></td><td><em>string</em></td><td>Resulting hash</td></tr></tbody></table>

### hash(s, salt, callback, progressCallback=)

Asynchronously generates a hash for the given string.

<table style="width:98%;"><colgroup><col style="width: 34%" /><col style="width: 34%" /><col style="width: 30%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>s</td><td><em>string</em></td><td>String to hash</td></tr><tr class="even"><td>salt</td><td><em>number | string</em></td><td>Salt length to generate or salt to use</td></tr><tr class="odd"><td>callback</td><td><em>function(Error, string=)</em></td><td>Callback receiving the error, if any, and the resulting hash</td></tr><tr class="even"><td>progressCallback</td><td><em>function(number)</em></td><td>Callback successively called with the percentage of rounds completed (0.0 - 1.0), maximally once per <code>MAX_EXECUTION_TIME = 100</code> ms.</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="returns">@returns</span></strong></td><td><em>Promise</em></td><td>If <code>callback</code> has been omitted</td></tr><tr class="even"><td><strong><span class="citation" data-cites="throws">@throws</span></strong></td><td><em>Error</em></td><td>If <code>callback</code> is present but not a function</td></tr></tbody></table>

### compareSync(s, hash)

Synchronously tests a string against a hash.

<table><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>s</td><td><em>string</em></td><td>String to compare</td></tr><tr class="even"><td>hash</td><td><em>string</em></td><td>Hash to test against</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="returns">@returns</span></strong></td><td><em>boolean</em></td><td>true if matching, otherwise false</td></tr><tr class="even"><td><strong><span class="citation" data-cites="throws">@throws</span></strong></td><td><em>Error</em></td><td>If an argument is illegal</td></tr></tbody></table>

### compare(s, hash, callback, progressCallback=)

Asynchronously compares the given data against the given hash.

<table style="width:98%;"><colgroup><col style="width: 34%" /><col style="width: 34%" /><col style="width: 30%" /></colgroup><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>s</td><td><em>string</em></td><td>Data to compare</td></tr><tr class="even"><td>hash</td><td><em>string</em></td><td>Data to be compared to</td></tr><tr class="odd"><td>callback</td><td><em>function(Error, boolean)</em></td><td>Callback receiving the error, if any, otherwise the result</td></tr><tr class="even"><td>progressCallback</td><td><em>function(number)</em></td><td>Callback successively called with the percentage of rounds completed (0.0 - 1.0), maximally once per <code>MAX_EXECUTION_TIME = 100</code> ms.</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="returns">@returns</span></strong></td><td><em>Promise</em></td><td>If <code>callback</code> has been omitted</td></tr><tr class="even"><td><strong><span class="citation" data-cites="throws">@throws</span></strong></td><td><em>Error</em></td><td>If <code>callback</code> is present but not a function</td></tr></tbody></table>

### getRounds(hash)

Gets the number of rounds used to encrypt the specified hash.

<table><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>hash</td><td><em>string</em></td><td>Hash to extract the used number of rounds from</td></tr><tr class="even"><td><strong><span class="citation" data-cites="returns">@returns</span></strong></td><td><em>number</em></td><td>Number of rounds used</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="throws">@throws</span></strong></td><td><em>Error</em></td><td>If <code>hash</code> is not a string</td></tr></tbody></table>

### getSalt(hash)

Gets the salt portion from a hash. Does not validate the hash.

<table><thead><tr class="header"><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>hash</td><td><em>string</em></td><td>Hash to extract the salt from</td></tr><tr class="even"><td><strong><span class="citation" data-cites="returns">@returns</span></strong></td><td><em>string</em></td><td>Extracted salt part</td></tr><tr class="odd"><td><strong><span class="citation" data-cites="throws">@throws</span></strong></td><td><em>Error</em></td><td>If <code>hash</code> is not a string or otherwise invalid</td></tr></tbody></table>

Command line
------------

`Usage: bcrypt <input> [salt]`

If the input has spaces inside, simply surround it with quotes.

Downloads
---------

-   [Distributions](https://github.com/dcodeIO/bcrypt.js/tree/master/dist)
-   [ZIP-Archive](https://github.com/dcodeIO/bcrypt.js/archive/master.zip)
-   [Tarball](https://github.com/dcodeIO/bcrypt.js/tarball/master)

Credits
-------

Based on work started by Shane Girish at [bcrypt-nodejs](https://github.com/shaneGirish/bcrypt-nodejs) (MIT-licensed), which is itself based on [javascript-bcrypt](http://code.google.com/p/javascript-bcrypt/) (New BSD-licensed).

License
-------

New-BSD / MIT ([see](https://github.com/dcodeIO/bcrypt.js/blob/master/LICENSE))
