var noop = function(){};
var setup = ASQ.iterable().then(noop);

document.addEventListener("DOMContentLoaded",setup.next,false);
ajax("some-url",function(response){
    // do stuff with ajax `response`
    setup.next();
});

// setup main async flow-control
ASQ( setup ) // wait for setup to complete before proceeding
.then(..)
.then(..)
..