var ch = chan();

go(function* () {
  yield put(ch, 5);
  ch.close();
});

go(function* () {
  yield take(timeout(1000));
  console.log(yield take(ch));
});
