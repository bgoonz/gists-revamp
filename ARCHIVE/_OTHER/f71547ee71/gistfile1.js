console.log("A");

var p1 = Promise.resolve("B");

setTimeout(function(){
  console.log("C");
},0);

p1.then(function(msg){
  console.log(msg);
});

// A
// B
// C