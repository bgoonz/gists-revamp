// [Update: even way better, this now works]

var doQuery = function () {
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
  var sq = ASQ();

  // fetch total and items in parallel
  count.exec(sq.errfcb());
  query.exec(sq.errfcb());

  sq
    // prepare data
    .val(prepareData)
    // now, send the transformed data along
    .val(sendResponse)
    // handle any errors that propagate up to here
    .or(sendError);
};
