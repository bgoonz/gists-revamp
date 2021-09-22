var dom = ASQ.iterable(), data = ASQ.iterable();

document.addEventListener("DOMContentLoaded",dom.next,false);
ajax("some-url",data.next);

// setup main async flow-control
ASQ()
// wait for all setup tests to finish before we go on
.all( dom, data ) // or `.gate(..)`
.val(function(x,response){
    // do stuff with ajax `response`
})
.then(..)
.then(..)
..