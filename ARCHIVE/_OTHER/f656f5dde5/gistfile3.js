function foo() {
	return "(function(){ return bar; })";
}

var bar = 1;

(function(){
	var bar = 2;
	console.log( eval( foo() )() ); // 2! but inline eval :(
})();