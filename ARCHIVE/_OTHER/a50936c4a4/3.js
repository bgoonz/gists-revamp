// ********************
// The "FP-objects" way
// ********************

function lowercase({ v }) {
  // <---- use parameter object destructuring
  return v.toLowerCase();
}

function uppercase({ v }) {
  // ditto
  return v.toUpperCase();
}

var f = FPO.map({ fn: uppercase }); // <---- look, named arguments!
f({ arr: words }); // currying still works!
// ["NOW","IS","THE","TIME"]

f({ arr: moreWords });
// ["THE","QUICK","BROWN","FOX"]

var p = FPO.map({ arr: words }); // <---- no more flipping! curry in whatever order you like!
p({ fn: lowercase });
// ["now","is","the","time"]

p({ fn: uppercase });
// ["NOW","IS","THE","TIME"]
