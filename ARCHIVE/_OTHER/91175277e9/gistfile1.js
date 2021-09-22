// For consistency sake, would expect:
//       1, 2, 3, 4, 5
// actually gets, confusingly:
//       1, 2, 4, 3, 5

var p = new Promise(function (resolve, reject) {
  resolve();
});

// ****************************************

console.log("1");

// .then callbacks resolve async, even if the promise is immediately fulfilled
// so that we normalize sync and async logic.
// ...
// So, we just think of "everything" as "async", right? No.
p.then(function () {
  // But Promise construction is sync, not async, which creates unexpected
  // sync in the middle of all this async.
  // ...
  //     :(
  var p2 = new Promise(function (resolve, reject) {
    console.log("4"); // "4" comes before "3", obviously </sarcasm>
    resolve();
  });

  console.log("3");

  return p2;
}).then(function () {
  console.log("5");
});

console.log("2");

// In other words, if "2" comes before "3", why doesn't "3" come before "4"?
// ...
// THAT is the seeming inconsistency.
