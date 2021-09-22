function doSomethingAsync(v,cb) {
   setTimeout(function(){
      cb(v);
   },1000);
}

var th = gimmeFutureVal(4);

// later
th(function(val){ console.log("A:",val); });

// much later
setTimeout(function(){
   th(function(val){ console.log("B:",val); });
},2000);

// a long time later
setTimeout(function(){
   th(function(val){ console.log("C:",val); });
},3000);