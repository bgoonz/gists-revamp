// ok, so at the request of some in the community, here's a 
// more realistic usage for this pattern.
//
// Compare this version ("a") to the next one ("b"). This 
// version is probably the more traditional way such things
// are done. Basically, you create a single event handler
// that acts as a router by inspecting the data.


var socket = io.connect(...);

function login(u,p) {
   socket.once("login_status",function(data){
     if (data.err) Error.handle(data);
     else UI.build(data);
   });

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