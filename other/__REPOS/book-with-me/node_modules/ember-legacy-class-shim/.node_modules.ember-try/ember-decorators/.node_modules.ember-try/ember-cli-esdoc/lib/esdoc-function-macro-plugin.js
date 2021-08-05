exports.onHandleDocs = function(ev) {
  for (let doc of ev.data.docs) {
    if (!doc.unknown) continue;

    for (let tag of doc.unknown) {
      if (tag.tagName === '@function') {
        doc.kind = 'function';

        break;
      }
    }
  }
};
