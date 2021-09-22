function foo() {
  baz();
}

function bar() {
  baz();
}

function baz() {
  console.log(`baz() was called from: ${whereWasICalledFrom()}`);
}

function whereWasICalledFrom() {
  try {
    throw new Error("");
  } catch (err) {
    let stack = err.stack.toString();
    let lines = stack.match(/^(.+)$/gm);
    let callStackIdx = 0;
    for (let line of lines) {
      if (/^\s*at /.test(line)) {
        if (callStackIdx < 2) {
          callStackIdx++;
        } else {
          let [, functionName] = line.match(/^\s*at ([^\s]+)/);
          return functionName;
        }
      }
    }
  }
  return "(unknown)";
}

baz();
// baz() was called from: test.js:36:1

foo();
// baz() was called from: foo

bar();
// baz() was called from: bar
