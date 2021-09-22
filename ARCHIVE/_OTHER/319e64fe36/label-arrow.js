// Doesn't throw an error, but doesn't return an object
const getObj = () => {
  a: 1;
};
console.log(getObj()); //=> val 'undefined' : void

// Reason: It looks like an arrow function returning an object, but it isn't.
//         It's an arrow function with a function body (containing a labeled
//         statement) that returns nothing.
const getObj = () => {
  // <- Start function body
  // <- A label to use when break/continue; e.g. break a;
  a: 1; // <- Just a noop expression-statement, not doing anything.
  // <- No return, meaning it implicitly returns `undefined`.
}; // <- End function body

// Note: Function body looks like a block statement, but it's not the same. A
//       block statement would have returned the `1` value, but regular function
//       bodies do not have implicit return.

// To actually return an object, turn into an expression instead of function body
const getObj = () => ({ a: 1 });
console.log(getObj());
//=> val { a : 1 } : { a: int }
