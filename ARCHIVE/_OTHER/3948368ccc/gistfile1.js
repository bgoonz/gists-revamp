// LABjs.jquery.ready -- adds .ready() to $LAB api for wrapping a .wait() and a $(document).ready(...) together
// v0.0.1 (c) Kyle Simpson
// MIT License

(function(global){
	var oDOC = global.document;
	if (!global.$LAB || !global.jQuery) return; // only adapt LABjs if LABjs exists and jQuery is present

	function wrap_API(obj) {
		var ret = {
			setOptions:function(){
				return wrap_API(obj.setOptions.apply(this,arguments));
			},
			script:function(){
				return wrap_API(obj.script.apply(this,arguments));
			},
			wait:function(){
				return wrap_API(obj.wait.apply(this,arguments));
			},
			ready:function(fn){
				return wrap_API(obj.wait(function(){
					global.jQuery(oDOC).ready(fn);
				}));
			}
		};
		if (obj.setGlobalDefaults) ret.setGlobalDefaults = obj.setGlobalDefaults;
		ret.block = ret.wait;
		return ret;
	}
	global.$LAB = wrap_API(global.$LAB);
})(window);