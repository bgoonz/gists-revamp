var p = makePromise();

emptyObjectProperties(p);

p.then(finished);

// NOTE: this test passes in Chrome