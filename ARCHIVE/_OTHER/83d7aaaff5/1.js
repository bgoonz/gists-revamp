// https://medium.com/@alexgolec/google-interview-questions-deconstructed-the-knights-dialer-f780d516f029

function nearby(number) {
  return number === 0
    ? [4, 6]
    : number == 1
    ? [6, 8]
    : number == 2
    ? [7, 9]
    : number == 3
    ? [4, 8]
    : number == 4
    ? [3, 9, 0]
    : number == 6
    ? [1, 7, 0]
    : number == 7
    ? [2, 6]
    : number == 8
    ? [1, 3]
    : number == 9
    ? [2, 4]
    : [];
}

var countPaths = memoize(countPaths);

function memoize(fn) {
  var cache = {};
  return function memoized(start, length) {
    if (!cache[`${start}:${length}`]) {
      cache[`${start}:${length}`] = fn(start, length);
    }
    return cache[`${start}:${length}`];
  };
}

function countPaths(startDigit, hopCount = 0) {
  if (hopCount == 0) return 1;
  var pathCount = 0;
  for (let digit of nearby(startDigit)) {
    pathCount += countPaths(digit, hopCount - 1);
  }
  return pathCount;
}

function countPaths2(startDigit, hopCount = 0) {
  if (hopCount == 0) return 1;
  var priorPathCounts = Array(10).fill(1);
  var pathCounts;
  var hops = 1;
  while (hops <= hopCount) {
    pathCounts = Array(10).fill(0);
    hops++;
    for (let digit = 0; digit <= 9; digit++) {
      for (let n of nearby(digit)) {
        pathCounts[digit] += priorPathCounts[n];
      }
    }
    priorPathCounts = pathCounts;
  }
  return pathCounts[startDigit];
}

countPaths(1, 50); // 894498933328314400
countPaths2(1, 50); // 894498933328314400
