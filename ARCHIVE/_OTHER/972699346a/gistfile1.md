# IDEA: WordPress Plugin for Improving Leaving Code in Comments

It's always quite a struggle to keep people doing it correctly on CSS-Tricks, so I'd love if there was a plugin to make it more foolproof.

The overall idea: make it so if you use `<code>` tags, it will come out perfectly.

---

## 1) Automatically escape code that isn't escaped

```
<code><h3>whatever</h3></code>
```

becomes

```
<code>&lt;h3>Whatever&lt;/h3></code>
```

## 2) NOT escape code that is already escaped

```
<code>&lt;h3>Whatever&lt;/h3></code>
```

stays

```
<code>&lt;h3>Whatever&lt;/h3></code>
```

## 3) Automatically wrap code that has a line break in it in `<pre>` tags if it isn't already

```
<code><ul>
<li></code>
```

becomes

```
<pre><code><ul>
</li><code></pre>
```

## 4) Make sure there isn't a line break as the first or last character in the code block

```
<pre><code>
<ul>
  <li>
</code></pre>
```

becomes

```
<pre><code><ul>
  </li><code></pre>
```

## 5) Make sure no tags go unclosed

```
<code>
   <h1>Example
```

becomes

```
<code>
   <h1>Example</h1>
</code>
```
