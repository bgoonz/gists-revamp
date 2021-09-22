StatHatEmbed = new (function () {
  function d() {
    var a = document.getElementsByTagName("script");
    return a[a.length - 1];
  }
  function e(a, b) {
    var d = document.createElement("script"),
      c = "//www.stathat.com/embed/" + a + "/" + b.s1;
    b.dev && (c = "//localhost:8081/embed/" + a + "/" + b.s1);
    b.s2 && (c += "/" + b.s2);
    b.s3 && (c += "/" + b.s3);
    c += "?w=" + b.w + "&h=" + b.h + "&tf=" + b.tf;
    b.style && (c += "&style=" + b.style);
    b.dev && (c += "&dev=1");
    b.title && (c += "&title=" + b.title);
    d.src = c;
    d.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(d);
  }
  function f(a) {
    return [a.s1, a.s2, a.s3, a.w, a.h, a.tf, a.style].join("_");
  }
  this.render_graph = function (a) {
    DIV_ID = "statd_embed_graph_" + f(a);
    d().insertAdjacentHTML(
      "AfterEnd",
      "<div id='" + DIV_ID + "' style='display:none'></div>"
    );
    e("graph", a);
  };
  this.render_data = function (a) {
    DIV_ID = "statd_embed_data_" + f(a);
    d().insertAdjacentHTML(
      "AfterEnd",
      "<div id='" + DIV_ID + "' style='display:none'></div>"
    );
    e("data", a);
  };
  this.render_table = function (a) {
    DIV_ID = "statd_embed_table_" + f(a);
    d().insertAdjacentHTML(
      "AfterEnd",
      "<div id='" + DIV_ID + "' style='display:none'></div>"
    );
    e("table", a);
  };
  this.render_text = function (a) {
    DIV_ID = ["statd_embed_text", a.s1, a.u].join("_");
    d().insertAdjacentHTML(
      "AfterEnd",
      "<div id='" + DIV_ID + "' style='display:none'></div>"
    );
    e("text", a);
  };
  this.render = function (a) {
    a.tf || (a.tf = "week_compare");
    this.render_graph(a);
  };
})();
