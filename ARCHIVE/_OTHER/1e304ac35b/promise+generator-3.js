var http = require("http");
var ASQ = require("asynquence-contrib"); // bring in ASQ + optional contrib plugins

var server = http.createServer();
server.listen(8000);

ASQ.react(function(next){
    server.on("request",next);
})
.runner(
	function*(channel){
		var req = channel.messages.shift();
		var res = channel.messages.shift();
		var user_id = parseUserId(req.url);
		var cart_id = parseCartId(req.url);
		try {
			// request all messages at once, then
			// store message promises in channel
			channel.messages.push(
			    getUserProfile(user_id).defer(),
			    getOrderHistory(user_id).defer(),
			    getShoppingCart(user_id,cart_id).defer()
			);
			// wait for all messages to resolve
			yield channel;
			var resp_data = channel.messages.slice(1);
			var status = yield sendResponse(res,resp_data);
		}
		catch (err) {
			throw ASQ.messages(res,err);
		}
		
		yield registerStatus(user_id,status);
		logStatus(status);
	},
	function*(channel){
		// get a copy of all messages from channel
		var msgs = channel.messages.slice();
		// empty channel messages
		channel.messages = [];

		do {
			yield* (function*(){
				var idx = msgs.length;

				// wait for message to complete (or error out),
				// then store completed message back in channel
				channel.messages[idx-1] = yield msgs.pop();
			})();
		} while (msgs.length);
	}
)
.or(sendError);