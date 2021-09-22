var val,
  i,
  j,
  counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

outer: for (i = 1e9; i < 1e10; i++) {
  // make it a string
  val = i + "";

  // reset counts
  counts[0] =
    counts[1] =
    counts[2] =
    counts[3] =
    counts[4] =
    counts[5] =
    counts[6] =
    counts[7] =
    counts[8] =
    counts[9] =
      0;

  // count all characters
  for (j = 0; j < val.length; j++) {
    counts[+val[j]]++;
  }

  for (j = 0; j < val.length; j++) {
    if (counts[j] != val[j]) {
      continue outer;
    }
  }

  console.log("answer: ", val);
}

console.log("done");
