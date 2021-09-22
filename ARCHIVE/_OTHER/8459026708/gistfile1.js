var doQuery = function() {
	count.exec(function(err, total) {
		
		if (err) return sendError('database error', err);
		
		query.exec(function(err, items) {
			
			if (err) return sendError('database error', err);
			
			sendResponse({
				total: total,
				items: items.map(function(i) {
					return {
						name: req.list.getDocumentName(i, true) || '(' + i.id + ')',
						id: i.id
					};
				})
			});
			
		});
		
	});
}
