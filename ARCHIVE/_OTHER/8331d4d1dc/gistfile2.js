ajax("http://some.url.1")
  .then(function (res1) {
    res1 = res1.toUpperCase();

    return ajax("http://some.url.2/?v=" + res1).then(function (res2) {
      return { res1: res1, res2: res2 };
    });
  })
  .then(function (data) {
    data.res2 += ";" + data.res1;

    return query("select * from db where v = '" + data.res2 + "'");
  })
  .then(function (results) {
    console.log(results);
  });
