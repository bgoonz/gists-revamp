var crypto, path, ca, default_cert, certs, file, files, fs, https, httpsServer;

crypto = require("crypto");
path = require("path");
http = require("http");
https = require("https");
http_proxy = require("http-proxy");
fs = require("fs");

files = ["EssentialSSLCA_2.crt", "ComodoUTNSGCCA.crt", "UTNAddTrustSGCCA.crt", "AddTrustExternalCARoot.crt"];

ca = (function() {
  var _i, _len, _results;
  _results = [];
  for (_i = 0, _len = files.length; _i < _len; _i++) {
    file = files[_i];
    _results.push(fs.readFileSync(path.join("/root", "ssl-certs", file)));
  }
  return _results;
})();

default_cert = {
  key:  fs.readFileSync(path.join("/root", "ssl-certs", "my.key")),
  cert: fs.readFileSync(path.join("/root", "ssl-certs", "my.crt")),
  ca: ca // must have `ca` added here!
};

certs = {
  "mydomain.com": crypto.createCredentials(default_cert).context,
  "myotherdomain.com": crypto.createCredentials({
    key:  fs.readFileSync(path.join("/root", "ssl-certs", "myother.key")),
    cert: fs.readFileSync(path.join("/root", "ssl-certs", "myother.crt")),
    ca: ca // must have `ca` added here!
  }).context
};

options = {
  https: {
    SNICallback: function(hostname) {
      if (hostname) {
        if (hostname.match(/myotherdomain\.com$/)) return certs["myotherdomain.com"];
      }
      return certs["mydomain.com"];
    },
    ca: ca,
    key: default_cert.key,
    cert: default_cert.cert
  },
  hostnameOnly: true,
  router: {}
};

httpsServer = http_proxy.createServer(options).listen(443);