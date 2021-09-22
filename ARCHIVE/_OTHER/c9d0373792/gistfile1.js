function unique(arr) {
    var res = [];
    arr.forEach(function(cur){
        if (res.indexOf(cur) == -1) res.push(cur);
    });
    return res;
}

unique([1,5,4,3,1,6,3,4,8]); // [1,5,4,3,6,8]