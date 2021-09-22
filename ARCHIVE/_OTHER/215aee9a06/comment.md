This is a *sample* sentence to **test Markdown** in the comments of a WordPress blog with Jetpack Markdown enabled for comments.

```
<h1 id="test">This is a code block</h1>

<head>
  <script>alert("Anything goes in here");</script>
  <meta>because it just should just be escaped anyway</meta>
</head>

<?php echo "hopefully WordPress doesn't strip anything"; ?>

<span>Even for anon/low-privileged users (non admins)</span>
```

Hopefully this fenced code block comes out wrapped in `<pre>` and `<code>` tags.

Single-backticked `<code>` should allow anything also, since it escapes, like this `<script>alert("hi");</script>`

