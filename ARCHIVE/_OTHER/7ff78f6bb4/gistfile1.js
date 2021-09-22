function foo() {
  try {
    return 42;
  } finally {
    // no `return ..` here, so no override
  }
}

function bar() {
  try {
    return 42;
  } finally {
    // override previous `return 42`
    return;
  }
}

foo(); // 42
bar(); // undefined
