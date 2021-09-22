// *****************
// FPO apply/unapply
// *****************

function lowercase(v) {               // regular parameter
   return v.toLowerCase();
}

function uppercase({ v }) {           // object destructured parameter
   return v.toUpperCase();
}

FPO.map( {fn: FPO.apply( {fn: lowercase} ), arr: words} );
// ["now","is","the","time"]

FPO.std.map( FPO.unapply( {fn: uppercase, props:["v"]} ), words );
// ["NOW","IS","THE","TIME"]