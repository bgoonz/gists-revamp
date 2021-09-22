var foobar = sandbox() {

   baz = function() { // NOTE: no `var` statement necessary
      console.log("awesome");
   };

   return {
      baz: baz
   };
};

console.log(foobar.baz); // defined
console.log(baz); // undefined