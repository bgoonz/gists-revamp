async function racePromisesPool([ ...prs ] = []) {
   var raceWon = false;
   var prListeners = prs.map(function listen(pr,idx){
      return pr.then(function t(v){
         if (!raceWon) {
            raceWon = true;
            prs.splice(idx,1);  // remove the promise from the pool since it won the race
            return v;
         }
      });
   });
   return [ prs, await Promise.race(prListeners) ];
}