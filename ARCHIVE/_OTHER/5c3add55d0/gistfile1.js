switch ("undefined") {
case typeof TemplateLiteral:
	TemplateLiteral = function(content,tag = "") {
		return Function.bind(null,"return " + tag + "`" + content + "`;");	
	};
	break;
}

var tmpl = "Hello ${me}";

(function(me){
	console.log( new TemplateLiteral(tmpl) );
})("World"); // want: "Hello World"