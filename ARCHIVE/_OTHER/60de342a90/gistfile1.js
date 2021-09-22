var cycle, scheduling_queue,
	timer = (typeof setImmediate !== "undefined") ?
		function timer(fn) { return setImmediate(fn); } :
		setTimeout
;

// Note: using a queue instead of array for efficiency
function Queue() {
	var first, last, item;

	function Item(fn) {
		this.fn = fn;
		this.next = void 0;
	}

	return {
		add: function add(fn) {
			item = new Item(fn);
			if (last) {
				last.next = item;
			}
			else {
				first = item;
			}
			last = item;
			item = void 0;
		},
		drain: function drain() {
			var f = first;
			first = last = cycle = null;
			while (f) {
				f.fn();
				f = f.next;
			}
		}
	};
}

scheduling_queue = Queue();

function schedule(fn) {
	scheduling_queue.add(fn);
	if (!cycle) {
		cycle = timer(scheduling_queue.drain);
	}
}
