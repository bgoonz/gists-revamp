In old-school web architecture (pre SPA's), we created a server-side session with an ID, then set a cookie with that session ID, so that each new page-request included the session-ID in it (to resume the session).

In new-school web archicture, where we do SPA's and we ditched cookies in favor of sessionStorage/localStorage, now we've lost a key part of that interaction paradigm: the session-ID can be stored in sessionStorage and used by the SPA to render session-aware pages, and we can even send that session-ID along with any subsequent Ajax/WebSockets messages to the server... BUT we cannot, currently, have that sessionStorage-stored session-ID automatically transmitted with each normal page request.

This means that the initial page-response from the server, even in the case where someone has a valid session, must be session-unaware, and the SPA code on the client side must update the page with session-aware info "later", since the session-ID on the client wasn't provided with the initial HTTP request like a session-cookie would have been.

------------

Soft proposal:

```
HTTP Response Header (or <meta> value)

Register-Session-ID: sessID
```

When that's sent out with a user's first visit to a page, the browser then registers the provided value ("sessID" in this case) as the name of a property in the browser's `sessionStorage` which it should automatically pull out the value (if any) of, to transmit with any subsequent page requests to the server. This HTTP Response Header setting would persist "forever" until another response header changed the value (setting it to "" to unregister it, for instance).

Then, if somewhere in that page's code, it does:

```js
sessionStorage.set("sessID","23kml2r2-aniwpkmsd-li24t-35n");
```

That value will be stored in `sessionStorage` as normal, but be available for auto-transmission with subsequent requests.

Alternatively, the server could provide the session ID *value* along with the registered property name, as:

```
HTTP Response Header (or <meta> value)

Register-Session-ID: sessID=23kml2r2-aniwpkmsd-li24t-35n
```

Since the value is actually stored in `sessionStorage`, it automatically "expires" when that tab session dies, so no extra "expiration" semantics need to be introduced.

On each subsequent page request (even XHR calls), if there's a `sessionStorage` entry for the previously-registered property name ("sessID", in this case), pull out that value (the user's session ID, ostensibly), and include it in an HTTP Request Header, as so:

```
HTTP Request Header

Session-ID: 23kml2r2-aniwpkmsd-li24t-35n
```

These headers would strictly be SOP and not CORS. That is, only requests to the hosting page's same protocol/hostname/port would be sent this `Session-ID` HTTP Request Header. This will prevent unintended session ID leakage, and prevent adding complexity to CORS header authorizations, etc.



In this way, SPAs utilizing `sessionStorage` to save session ID's will still be able to have the server respond with session-aware response content on the initial page, thereby hopefully speeding up how quickly a user can be shown session-aware content upon page request.

It also simplifies Ajax/WebSockets communication by not requiring them to manually send such session ID's, as they will automatically be added as a Request Header.
