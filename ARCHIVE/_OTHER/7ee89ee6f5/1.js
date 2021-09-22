async function main() {
   var btn = document.getElementById("my-button");
  
   // eventStream here is a native JS async iterator
   var eventStream = onEvent(btn)("click");
  
   // this is the key thing: we can use a `for-await..of` loop
   // to consume the async-iterator
   for await (let evt of eventStream) {
      console.log("click!");
   }
}

main();