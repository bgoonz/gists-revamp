// un-commented `run(..)`:

function run(it) {
  return Promise.resolve().then(function handleNext(value) {
    var next = it.next(value);

    return (function handleResult(next) {
      if (next.done) {
        return next.value;
      } else {
        return Promise.resolve(next.value).then(
          handleNext,
          function handleErr(err) {
            return Promise.resolve(it.throw(err)).then(handleResult);
          }
        );
      }
    })(next);
  });
}
