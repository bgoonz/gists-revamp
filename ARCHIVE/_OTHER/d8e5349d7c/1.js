function logger(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1] && typeof values[i - 1] == "object") {
        if (values[i - 1] instanceof Error) {
          if (values[i - 1].stack) {
            str += values[i - 1].stack;
            continue;
          }
        } else {
          try {
            str += JSON.stringify(values[i - 1]);
            continue;
          } catch (err) {}
        }
      }
      str += values[i - 1];
    }
    str += strings[i];
  }
  console.log(str);
  return str;
}
