var http = require("http");
var ASQ = require("asynquence-contrib"); // bring in ASQ + optional contrib plugins

var server = http.createServer();
server.listen(8000);

ASQ.react(function (next) {
  server.on("request", next);
})
  .runner(function* (channel) {
    var req = channel.messages.shift();
    var res = channel.messages.shift();
    var user_id = parseUserId(req.url);
    var cart_id = parseCartId(req.url);
    try {
      // wait for all messages to resolve
      var resp_data = yield ASQ().all(
        // request all messages at once
        getUserProfile(user_id),
        getOrderHistory(user_id),
        getShoppingCart(user_id, cart_id)
      );
      var status = yield sendResponse(res, resp_data);
    } catch (err) {
      throw ASQ.messages(res, err);
    }
    yield registerStatus(user_id, status);
    logStatus(status);
  })
  .or(sendError);
