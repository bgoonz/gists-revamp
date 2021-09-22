Let's take a look at a new kind of function, called a "generator" in ES6:

```js
function* foo() {
  yield 1;
  yield 2;
  yield bar();
}

function bar() {
  return 3;
}

var it = foo();

it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
```

Notice the `function *foo` syntax, which is the declaration syntax for these new generators.

When you call `foo()`, you're actually not calling the `*foo()` generator, you're just creating an iterator to control `*foo()`. By contrast, `bar()` is is just a normal function so the `bar()` call is a plain function call.

However, if `bar()` was instead another generator, and the call was `yield *bar()`, we'd be delegating iteration control to the `*bar()` generator:

```js
function* foo() {
  yield 1;
  yield 2;
  yield* bar();
}

function* bar() {
  return 3;
}

var it = foo();

it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:undefined, done:true }
```

The `return 3` from `*bar()` sets `3` as the result of the `yield *bar()` expression, but since now the iteration control doesn't receive any `yield`ed out value, you'll notice that we get `{ value:undefined, done:true }`, as opposed to `{ value:3, done:false }` from before.
