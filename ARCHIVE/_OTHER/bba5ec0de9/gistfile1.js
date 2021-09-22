// Inspired by/adapted from: https://gist.github.com/totherik/4fb1784f008815ac82e1

var http = require("http");
var ASQ = require("asynquence-contrib"); // bring in ASQ + optional contrib plugins


var server, source;
 
server = http.createServer();
server.setTimeout(30000);
server.listen(8000);


// setup reactive listeners
source = ASQ.react(function setup(next,registerTeardown){
    server.addListener("request",next);
    server.addListener("close",this.stop);
    
    registerTeardown(function(){
       server.removeListener("request",next); 
       server.removeListener("close",source.stop);
    });
});


// subscription
source
.then(function onNext(done,req,res){
    req.setEncoding("utf8");
    res.setHeader("Content-Type","text/html");
    
    var body = "", collector;
    
    // setup reactive listeners
    collector = ASQ.react(function setup(next,registerTeardown){
        next.onStream(req); // listen for standard stream events
        req.on("end",onEnd);
        req.resume(); // is this needed?
        
        registerTeardown(function(){
            next.unStream(req); // undo standard stream events
            req.removeListener("end",onEnd);
        });
    });
    
    // subscription
    collector
    .val(onNext)
    .or(onError);

    
    function onNext(x){
        if (x instanceof Error) throw x;
        body += x;
    }
    
    function onEnd() {
        res.statusCode = 200;
        res.end(" .. ");
        collector.stop();
        done();
    }
    
    function onError(e) {
        res.statusCode = 500;
        res.end();
        collector.stop();
        done.fail(e);
    }
})
.then(function onComplete(){
    console.log("complete");
})
.or(function onError(e){
   console.error(e); 
});


process.on("SIGINT",source.stop);
