var p = makePromise();

invokeMethods(p);

p.then(finished);

// NOTE: this test passes in Chrome