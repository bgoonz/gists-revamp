ASQ()
  .then(
    // these 3 run "in succession"
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
    alert("All tasks are complete, and that took ~600ms!");
  });
