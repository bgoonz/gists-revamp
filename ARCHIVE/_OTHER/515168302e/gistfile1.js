var zlib = require("zlib");

// down inside your request "end" event handler:
var tmp;
var str =
  "now is the time for all good men to come to the aid of their country.";
var headers = { "Content-Type": "text/plain" };

function compressionCB(err, data) {
  if (!err) {
    headers["Content-Encoding"] = tmp[1];
    res.writeHead(200, headers);
    res.end(data);
  } else {
    res.writeHead(200, headers);
    res.end(str);
  }
}

if (
  req.headers["accept-encoding"] &&
  (tmp = req.headers["accept-encoding"].match(/\b(gzip|deflate)\b/))
) {
  if (tmp[1] == "gzip") {
    zlib.gzip(str, compressionCB);
  } else {
    zlib.deflate(str, compressionCB);
  }
} else {
  res.writeHead(200, headers);
  res.end(str);
}
