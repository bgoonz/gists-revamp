$("#parent").on("click","> .child",function(evt){
	var $elem = $(evt.target);
	
	// the problem: $elem here could be `.child` (like I want), or
	// it could be `.grandchild`, which I don't want.
	// so: how I can succinctly ensure a reference to `.child`?
	
	// there's this, but yuck:
	$elem = ($elem.parent(".child").length ? $elem.parent(".child") : $elem);
	
	// or...?
});