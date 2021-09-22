function doSync(msg) {
  return promise(msg); // empty/immediate promise, for chaining
}

function doAsync(secs) {
  return delay(secs);
}

doSync("starting...")
  .then(function (P) {
    alert(P.value);
    return doAsync(3);
  })
  .then(function (P) {
    alert("...all done!");
  });
