Promise.lazyAll = async function lazyAll(iter) {
  var results = [];
  for await (let val of iter) {
    results.push(val);
  }
  return results;
};

(async function () {
  console.log(`results(1): ${await Promise.lazyAll([1, 2, 3])}`);
  console.log(`results(2): ${await Promise.lazyAll(foo())}`);
})();
// results(1): [1,2,3]
// results(2): [1,2,3]

// *****************

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function* foo() {
  for (let i = 1; i <= 3; i++) {
    await delay(i * 1000);
    yield i;
  }
}
