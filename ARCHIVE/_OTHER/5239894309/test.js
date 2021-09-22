var a = { b: [1, [ 2, { c: true }, 3 ], 4], d: { e: [5,6] }};

deepMerge(a,{ b: true });
JSON.stringify(a);                        // {"b":[1,[2,{"c":true},3],4],"d":{"e":[5,6]}}

deepMerge(a,{ b: [,[,{f:7},100]] });
JSON.stringify(a);                        // {"b":[1,[2,{"c":true,"f":7},3],4],"d":{"e":[5,6]}}

deepMerge(a,{ d: { g: true, e: [,8,9] }});
JSON.stringify(a);                        // "{"b":[1,[2,{"c":true,"f":7},3],4],"d":{"e":[5,6,9],"g":true}}"
