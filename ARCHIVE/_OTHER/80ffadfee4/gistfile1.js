function DualEventers() {
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

	function eventer() {
		function addEventListener(e,handler) {
			if (handlers.local) {
				handlers.local[e] = handlers.local[e] || [];
				handlers.local[e].push(handler);
			}
		}
		
		function postMessage(data) {
			data = { data: data };
			schedule(function notifyRemote(){
				if (typeof handlers.remoteEventer.onmessage == "function") {
					try { handlers.remoteEventer.onmessage(data); } catch (e) { }
				}
				
				handlers.remote.message.forEach( function processHandler(h){
					try { h(data); } catch (e) { }
				} );
			});
		}
				
		var handlers = this,
			publicAPI = {
				onmessage: null,
				addEventListener: addEventListener,
				postMessage: postMessage
			}
		;
		
		return publicAPI;
	}

	var e1, e2,
		h1 = {
			local: { message: [] }
		},
		h2 = {
			local: { message: [] }
		}
	;
	
	// wire the duals' handlers together
	h1.remote = h2.local;
	h2.remote = h1.local;
	
	// create the dual eventers
	e1 = eventer.call(h1);
	e2 = eventer.call(h2);
	
	h1.remoteEventer = e2;
	h2.remoteEventer = e1;

	return [e1,e2];
}