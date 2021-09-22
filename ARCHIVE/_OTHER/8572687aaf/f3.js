// IF "cee78be969f36ddb01de3d74fd46b451.js" had a function
// in it to call when you wanted it to apply, like `myScriptBegin()`,
// instead of automatically causing side effects on the page
// when it finishes loading, then you can do them in parallel.

// here's how you do THAT with asynquence:

ASQ()
  // in asynquence, a gate is two or more things happening in
  // parallel, and we have to wait for both to finish (in either
  // order) before we move on
  .gate(
    // one thing in parallel
    function (done) {
      $.ajax({
        url: "http://codepen.io/chriscoyier/pen/b2ad8b9a336845dd7b11d4bed34f4256.html",
      }).then(done, done.fail);
    },
    function (done) {
      $.getScript(
        "http://codepen.io/chriscoyier/pen/cee78be969f36ddb01de3d74fd46b451.js"
      ).then(done, done.fail);
    }
  )
  // this step will wait for the previous gate to finish before it goes on
  .val(function (resp) {
    // This HTML needs to be there first
    $("body").append(resp.responseText);

    // Because this script is going to do something with it.
    myScriptBegin(); // this is the function in your script that activates the page
  })
  .or(function (err) {
    console.log("Oops, something broke: " + err);
  });
