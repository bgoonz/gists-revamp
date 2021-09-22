ASQ()
  .all(
    // or .gate(..)
    // these 3 run "in parallel"
    function (done) {
      setTimeout(done, 100);
    },
    function (done) {
      setTimeout(done, 200);
    },
    function (done) {
      setTimeout(done, 300);
    }
  )
  .then(function () {
    alert("All tasks are complete, and that only took ~300ms, not 600ms!");
  });
