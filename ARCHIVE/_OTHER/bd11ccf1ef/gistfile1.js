/*
Just an update for posterity:
  These bugs have been fixed by implementations and all 6 of these examples
  work fine in current Chrome, Firefox, and Safari (checked on May 24, 2018).
*/


Promise.reject(42).then(null,null).then(null,function(reason){
   console.log("reason:" + reason);
}); // reason:42

Promise.reject(42).then(5,null).then(null,function(reason){
   console.log("reason:" + reason);
}); // reason:42

Promise.reject(42).then(null,5).then(null,function(reason){
   console.log("reason:" + reason);
}); // TypeError: number is not a function

// *************

Promise.resolve(42).then(null,null).then(function(msg){
   console.log("msg:" + msg);
},null); // msg:42

Promise.resolve(42).then(null,5).then(function(msg){
   console.log("msg:" + msg);
},null); // msg:42

Promise.resolve(42).then(5,null).then(function(msg){
   console.log("msg:" + msg);
},null); // (nothing printed)