// handle the HTTP routing
function handleHTTP(req, res) {
  // handle file uploads
  if (req.url == "/upload") {
    // handle the CORS preflight request for the upload
    if (
      req.method.toLowerCase() == "options" &&
      req.headers["access-control-request-method"].toLowerCase() == "post"
    ) {
      res.writeHead(200, CORS_POST_HEADERS);
      res.end();
      return;
    }
    // are we doing a POST upload?
    else if (req.method.toLowerCase() == "post") {
      // add the CORS POST headers
      for (header in CORS_POST_HEADERS) {
        res.setHeader(header, CORS_POST_HEADERS[header]);
      }

      // parse a file upload
      var form = new formidable.IncomingForm();
      form.parse(req, function __form_parse_cb__(err, fields, files) {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end();
          console.log("upload err: " + JSON.stringify(err));
        } else {
          console.log(JSON.stringify(files));

          res.writeHead(200, { "Content-Type": "text/plain" });
          res.write("OK");
          res.end();
        }
      });
      return;
    }
    // otherwise, bail because we won't handle this kind of request!
    else {
      // add the CORS POST headers
      for (header in CORS_POST_HEADERS) {
        res.setHeader(header, CORS_POST_HEADERS[header]);
      }

      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end();
      return;
    }
  }
  return false;
}

require("http").createServer(handleHTTP).listen(80);
