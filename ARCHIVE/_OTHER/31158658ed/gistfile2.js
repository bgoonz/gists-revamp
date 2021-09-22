function xhrcall() {
  return promise(function (P) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "some.tld/something");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) P.fulfill(xhr.responseText);
    };
    xhr.send();
  });
}

xhrcall().then(function (P) {
  alert(P.value);
});
