main();

// *******************************************

async function main() {
  // pull file responses ASAP and print them out as they arrive
  for await (let text of loadFiles([
    "https://url.tld/file1",
    "https://url.tld/file2",
    "https://url.tld/file3",
  ])) {
    console.log(text);
  }
}

async function* loadFiles(files) {
  var pool = files.map(getFile);

  while (pool.length > 0) {
    // get the next-ready promise from the pool
    let nextResponse;
    [pool, nextResponse] = await racePromisesPool(pool);

    // push response out through iterator
    yield nextResponse;
  }
}

function getFile(file) {
  return new Promise(function c(resolve) {
    ajax(file, resolve);
  });
}
