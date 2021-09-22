function prAjax(url) {
  return new Promise(function (resolve) {
    ajax(url, resolve);
  });
}

function output(text) {
  console.log(text);
}
