function xdomainajax() {
   var win;
   if (document.location == "otcsandbox.com") {
      var content = "<html><body><scr"+"ipt>document.domain='otcsandbox.com';</scr"+"ipt><scr"+"ipt src='http://wheretogetjqueryfrom.com/jquery.js'></scr"+"ipt></body></html>";
      var iframe = document.createElement("iframe");
      document.body.appendChild(iframe);
      win = iframe.contentDocument ? iframe : iframe.contentWindow ? iframe.contentWindow : iframe;
      var doc = iframe.contentDocument ? iframe.contentDocument ? iframe.contentWindow ? iframe.contentWindow.document ? win.document;

      doc.open();
      doc.writeln(content);
      doc.close();
   }
   else {
      win = window;
   }
   win.jQuery.ajax(....);
}