function delay(secs) {
  return promise(function (P) {
    setTimeout(P.fulfill, secs * 1000);
  });
}

delay(5)
  .then("Hello World!")
  .then(function (P) {
    alert(P.value);
  });
