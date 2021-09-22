// [Update: this is the "old" way now, which sucks. see the next 2 files in this gist]

var doQuery = function () {
  // fetch total
  function fetchTotal(done) {
    count.exec(function (err, total) {
      // note: `return` here does nothing for asynquence, only
      // exits the function early. :)
      if (err) return done.fail("database error", err);

      done(total); // pass along `total` as a value-message
    });
  }

  // fetch items
  function fetchItems(done) {
    query.exec(function (err, items) {
      // note: `return` here does nothing for asynquence, only
      // exits the function early. :)
      if (err) return done.fail("database error", err);

      done(items); // pass along `items` as value-message
    });
  }

  // transform the data to prepare it for `sendResponse()`
  function prepareData(total, items) {
    return {
      total: total,
      items: items.map(function (i) {
        return {
          name: req.list.getDocumentName(i, true) || "(" + i.id + ")",
          id: i.id,
        };
      }),
    };
  }

  // behold, the elegant beauty of clean async flow-control
  ASQ()
    // fetch total and items in parallel
    .gate(fetchTotal, fetchItems)
    // prepare data
    .val(prepareData)
    // now, send the transformed data along
    .val(sendResponse)
    // handle any errors that propagate up to here
    .or(sendError);
};
