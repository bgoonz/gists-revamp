// this file is loaded and run on http://something.tld/index.html

function make_jsonp_call(url) {
   var script = document.createElement("script");
   script.src = url;
   script.type = "text/javascript";
   document.getElementsByTagName("head")[0].appendChild(script);
}

function api_done(resp) {
   alert(resp.msg);
}

function get_auth(auth) {
   var token_2 = auth.token_2;

   // not only do we have token_2 by way of the auth parameter,
   // but token_1 is stored in a browser cookie now. together,
   // these two tokens will authorize our API call.

   make_jsonp_call("http://another.tld/api.php?token_2="+token_2+"&callback=api_done");
}


make_jsonp_call("http://another.tld/auth.php?key=987654321&callback=get_auth");

