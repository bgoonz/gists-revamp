// alternate way to do version "a" of the example, using
// the `either/or` pattern. In this way, the event being
// listened for effectively does the routing to different
// handlers accordingly.


var socket = io.connect(...);

function login(u,p) {
   socket
   .either("login_successful", UI.build)
   .or("login_failed", Error.handle)

   socket.emit("login",{u:u,p:p});
}

UI = {
   build: function(data) {
      // build out the UI now that we're logged in
   }
};

Error = {
   handle: function(data) {
      // display the error in a growl notice, for instance
   }
}