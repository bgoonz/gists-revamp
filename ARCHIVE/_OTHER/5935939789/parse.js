console.log(data); // /* this is an example of how to use\n   whitespace and comments in your JSON\n   but still have it parseable */\n{\n   "name": "JSON.minify()",\n   "type": "javascript" // values: "javascript", "js"\n}

JSON.minify(data); // {"name":"JSON.minify()","type":"javascript"}

JSON.parse(JSON.stringify(data)); // { name: "JSON.minify()", type: "javascript" }