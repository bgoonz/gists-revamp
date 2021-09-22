// [Update: this now works!]

var doQuery = function() {
	// fetch total
	function fetchTotal(done){
		count.exec(done.errfcb); // <-- Look ma, no code!
	}
	
	// fetch items
	function fetchItems(done){
		query.exec(done.errfcb); // <-- Look ma, no code!
	}
	
	// transform the data to prepare it for `sendResponse()`
	function prepareData(total, items){
		return {
			total: total,
			items: items.map(function(i) {
				return {
					name: req.list.getDocumentName(i, true) || '(' + i.id + ')',
					id: i.id
				};
			})
		};
	}
	
	// behold, the elegant beauty of clean async flow-control
	ASQ()
	// fetch total and items in parallel
	.gate(
		fetchTotal,
		fetchItems
	)
	// prepare data
	.val(prepareData)
	// now, send the transformed data along
	.val(sendResponse)
	// handle any errors that propagate up to here
	.or(sendError);
}
