function foo(
  // destructure with default setting
  {
    options: { remove = true, enable = false, instance = {} } = {},
    log: { warn = true, error = true } = {},
  }
) {
  // restructure
  let opts = {
    options: { remove, enable, instance },
    log: { warn, error },
  };

  console.log(opts);
}

foo({
  options: {
    remove: true,
    enable: false,
    instance: {},
  },
  log: {
    warn: true,
    error: true,
  },
});
