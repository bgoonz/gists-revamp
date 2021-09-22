(function(){
	var
	rAF = (window.requestAnimationFrame || window.msRequestAnimationFrame ||
		window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
		window.oRequestAnimationFrame),
	cAF = (window.cancelAnimationFrame ||
		window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
		window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
		window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
		window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame),
	rEAF = (window.requestEachAnimationFrame || window.msRequestEachAnimationFrame ||
		window.mozRequestEachAnimationFrame || window.webkitRequestEachAnimationFrame ||
		window.oRequestEachAnimationFrame),
	cEAF = (window.cancelEachAnimationFrame ||
		window.msCancelEachAnimationFrame || window.msCancelRequestEachAnimationFrame ||
		window.mozCancelEachAnimationFrame || window.mozCancelRequestEachAnimationFrame ||
		window.webkitCancelEachAnimationFrame || window.webkitCancelRequestEachAnimationFrame ||
		window.oCancelEachAnimationFrame || window.oCancelRequestEachAnimationFrame),

		q_ids = {}
	;

	function qID(){
		var id;
		do {
			id = Math.floor(Math.random() * 1E9);
		} while (id in q_ids);
		return id;
	}

	if (rAF && !rEAF) {
		window.requestEachAnimationFrame = function(fn) {
			var qid = qID();
			q_ids[qid] = rAF(function do_rAF(){
				q_ids[qid] = rAF(do_rAF);
				fn.apply(window,arguments);
			});
			return qid;
		};
	}
	if (cAF && !cEAF) {
		window.cancelEachAnimationFrame = function(qid) {
			if (qid in q_ids) {
				cAF(q_ids[qid]);
				delete q_ids[qid];
			}
		};
	}
})();