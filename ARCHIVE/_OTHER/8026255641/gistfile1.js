function foo() {
  // ...
  nonExistent();
  //
}

function bar() {
  try {
    foo();
  } catch (err) {
    err.message += "\nError caught in bar()"; // this part works
    throw err; // this part loses the "context" in V8, but not in all other engines
  }
}

bar(); // an uncaught exception is gonna bubble up to the browser/engine
// but what will its context be? from inside bar() or inside foo()?
