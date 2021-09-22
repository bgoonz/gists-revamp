sandbox (JSON) { // explicitly list everything to import from the outer scope

   var foobar = "baz"; // scoped to this sandbox
   baz = "foobar"; // still scoped to this sandbox, not auto-global.

   console.log(JSON); // available!

   console.log(window); // not available because not imported

   console.log(this); // undefined
}

console.log(baz); // undefined