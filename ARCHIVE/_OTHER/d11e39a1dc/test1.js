var p = makePromise();

Object.freeze(p);

p.then(finished);

// NOTE: this test passes in Chrome, but also throws an error, which is bizarre.