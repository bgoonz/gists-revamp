ASQ()
.then(function(done){ setTimeout(done,100); })
.all( // or .gate(..)
    // these 2 run "in parallel"
    function(done){ setTimeout(done,200); },
    function(done){ setTimeout(done,300); }
)
.then(function(){
    alert("All tasks are complete, and that took ~400ms!");
});