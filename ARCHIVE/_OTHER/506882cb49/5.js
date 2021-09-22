// proofs for this IO monad

var f = v => IO.of(v);

// (1) left identity
console.log(
  IO.of(42).chain(f).run() === f(42).run()
);  // true

// (2) right identity
console.log(
  IO.of(42).chain(IO.of).run() === IO.of(42).run()
);  // true

// (3) associativity
console.log(
  IO.of(3).chain(v => IO.of(v * 7)).chain(v => IO.of(v * 2)).run() ===
  IO.of(3).chain(v => IO.of(v * 7).chain(v => IO.of(v * 2))).run()
);  // true


// and furthermore...

IO(v => `The value of v is: ${v}`)
.ap(
  IO.of(3)
  .map(v => v * 2)
  .chain(v => IO.of(v * 7))
)
.run();
// The value of v is: 42