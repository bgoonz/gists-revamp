var foobar = sandbox() {

   baz = function() { // NOTE: no `var` statement necessary
      console.log("awesome");
   };

   export baz; // borrowing this syntax from ES6 modules
};

console.log(foobar.baz); // defined
console.log(baz); // undefined