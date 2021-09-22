var max_id = [42,13,21,6,512,0,6,23].reduce(function(m,v){
   return v > m ? v : m;
},0);

// ***************

var max_id = 0;
[42,13,21,6,512,0,6,23].forEach(function(v){
   max_id = v > max_id ? v : max_id;
});