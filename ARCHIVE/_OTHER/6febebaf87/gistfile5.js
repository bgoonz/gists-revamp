function test(size) {
  function fillTable(depth) {
    var i, j, k, len;

    for (i = 0; i < depth; i++) {
      len = table.length;
      for (j = 0; j < Math.max(len, 1); j++) {
        if (len == 0) table.push([]);
        table.push(table[j].slice());
        table[j].push(true);
        table[table.length - 1].push(false);
      }
    }
  }

  var table = [],
    obj = {},
    i,
    order,
    res,
    letters = "abcdefghijklmnopqrstuvwxyz".split("");
  for (i = 0; i < size; i++) {
    (function (i) {
      Object.defineProperty(obj, letters[i], {
        get: function () {
          order += (order != "" ? "," : "") + letters[i];
          return this.values[i];
        },
      });
    })(i);
  }

  fillTable(size);

  for (i = 0; i < table.length; i++) {
    obj.values = table[i];

    console.log("---------------------------------");
    console.log(table[i].join(","));

    // *************
    order = "";
    res = obj.a ? obj.b : obj.c ? obj.d : obj.e;
    console.log("a ? b : c ? d : e => " + res + " (" + order + ")");

    // *************
    order = "";
    res = (obj.a ? obj.b : obj.c) ? obj.d : obj.e;
    console.log("(a ? b : c) ? d : e => " + res + " (" + order + ")");

    // *************
    order = "";
    res = obj.a ? obj.b : obj.c ? obj.d : obj.e;
    console.log("a ? b : (c ? d : e) => " + res + " (" + order + ")");
  }
}

test(5);
