function fizzbuzz() {
   for (let i = 1; i <= 100; i++) {
      let div3 = i % 3 == 0;
      let div5 = i % 5 == 0;
      if (div3 && div5) {
         console.log("FizzBuzz");
      }
      else if (div3) {
         console.log("Fizz");
      }
      else if (div5) {
         console.log("Buzz");
      }
      else {
         console.log(i);
      }
   }
}