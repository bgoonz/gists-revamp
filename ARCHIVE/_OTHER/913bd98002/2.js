// "+field" -> sort by 'field' ASC
// "-field" -> sort by 'field' DESC
// default: "+" (ASC)
function multiFieldSorter(fields = []) {
   return function sortBy(o1,o2) {
      for (let field of fields) {
         let dir = field.charAt(0) == "-" ? 1 : -1;
         field = field.substr(1);

         if (o1[field] < o2[field]) {
            return dir;
         }
         else if (o1[field] > o2[field]) {
            return -1 * dir;
         }
      }
      return 0;
   };
}
