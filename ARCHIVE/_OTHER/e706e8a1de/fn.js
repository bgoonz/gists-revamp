function from12to24(time) {
  var parser = /^(\d+):(\d+)((?:a|p)m)?$/;
  var [, hours, minutes, ampm = "am"] = time.match(parser);
  hours = Number(hours);
  minutes = Number(minutes);
  hours = (hours % 12) + (ampm === "pm" ? 12 : 0);
  return `${zeroPad(hours)}:${zeroPad(minutes)}`;
}

function from24to12(time) {
  var parser = /^(\d+):(\d+)$/;
  var [, hours, minutes] = time.match(parser),
    ampm;
  hours = Number(hours);
  minutes = Number(minutes);
  ampm = hours > 11 ? "pm" : "am";
  hours = ((hours + 11) % 12) + 1;
  return `${zeroPad(hours)}:${zeroPad(minutes)}${ampm}`;
}

function zeroPad(num) {
  return (num < 10 ? "0" : "") + num;
}
