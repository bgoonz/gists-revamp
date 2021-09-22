var time24,
  time12,
  totalTests = 0,
  passCount = 0,
  hr12 = 12,
  ampm = "am";

for (var hr24 = 0; hr24 <= 23; hr24++) {
  for (var min = 0; min <= 59; min++) {
    time12 = `${zeroPad(hr12)}:${zeroPad(min)}${ampm}`;
    time24 = `${zeroPad(hr24)}:${zeroPad(min)}`;

    if (time12 !== from24to12(time24)) {
      console.log("Failure (24to12):", time24);
    } else passCount++;
    if (time24 !== from12to24(time12)) {
      console.log("Failure (12to24):", time12);
    } else passCount++;

    totalTests += 2;
  }

  hr12++;
  if (ampm === "am" && hr12 === 12) {
    ampm = "pm";
  }
  if (hr12 > 12) {
    hr12 = 1;
  }
}

console.log(`${passCount} / ${totalTests} tests passed.`);
