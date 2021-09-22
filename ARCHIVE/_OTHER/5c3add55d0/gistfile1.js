if (typeof TemplateLiteral == "undefined") {
	TemplateLiteral = function(content,tag = "") {
		return Function.bind(null,"return " + tag + "`" + content + "`;");	
	};
}

var tmpl = "Hello ${me}";

(function(me){
	console.log( new TemplateLiteral(tmpl) );
})("World"); // want: "Hello World"