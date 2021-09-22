function* zipIterators(...its) {
  its = its.map((it) =>
    !it.next && it[Symbol.iterator] ? it[Symbol.iterator]() : it
  );
  while (its.length > 0) {
    let entry = [];
    let itsCopy = [...its];
    let it;
    while ((it = itsCopy.shift())) {
      its.shift();

      let res = it.next();
      if (!res.done) {
        entry.push(res.value);
        its.push(it);
      }
    }
    if (entry.length > 0) {
      yield entry;
    }
  }
}
