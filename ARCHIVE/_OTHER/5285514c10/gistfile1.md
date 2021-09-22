I hereby propose this form of `let` usage as the next best option, since the clearly better `let (foo = 42) { ... }` let-block-statement syntax is [dead](https://twitter.com/littlecalculist/status/318728098545811458) and [not coming to ES6](https://twitter.com/littlecalculist/status/318726015432159233):

```js
/*let*/ { let foo = 42;

   // your code that uses `foo`

}
```

Yes, you need to put a comment on the line, and use the white-space as I've shown, so you get as close to a `let`-block semantic as possible. Yes, you should use the naked blocks even if you are already using them inside `if` or `for` blocks.

Oh, and btw, if you want to use `let` **right** now (and not wait for ES6), check out [BlockScoper.ify()](https://github.com/getify/BlockScoper.js).