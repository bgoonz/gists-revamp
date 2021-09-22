function segmentArray(arr,segmentSize) {
   segmentSize = Math.max(1,Math.min(+segmentSize||0,arr.length));
   return Array.apply(null,{length:Math.ceil(arr.length / segmentSize)}).map(function(_,i){
      return arr.slice(i*segmentSize,(i+1)*segmentSize);
   });
}

// lift `serviceCall(..)`
function promiseServiceCall(v) {
    return new Promise(function(resolve,reject){
        serviceCall(v,function(err,r){
            if (err) reject(err);
            else resolve(r);
        });
    });
}

var fetchAll = function (allUrls) {
    // `all(..)` waits for all to succeed
    // note: use `any(..)` for allowing some failures
    return Promise.all(
        // break `allUrls` into batches
        segmentArray( allUrls, 5 )
        // turn each batch of URLs into a request
        .map(function mapper(arr){
            return promiseServiceCall({
                Action: 'UrlInfo',
                'UrlInfo.Shared.ResponseGroup': 'Rank',
                'UrlInfo.1.Url': arr[0],
                'UrlInfo.2.Url': arr[1],
                'UrlInfo.3.Url': arr[2],
                'UrlInfo.4.Url': arr[3],
                'UrlInfo.5.Url': arr[4]
            })
            // OPTIONAL: observation step
            .then(
                // observe success
                function addData(data){
                    console.log("..");
                    // propagate success
                    return data;
                },
                // observe error
                function error(err){
                    console.error(err);
                    // propagate error
                    throw err;
                }
            )
        })
    )
    // combine all the batch results
    .then(function combine(results){
        return results.reduce(function reducer(acc,curr){
            return acc.concat(curr);
        },[]);
    });
};