// if you leave everything returning promises, but use asynquence

ASQ()
  .promise(get("/api/google/sheets/resources"))
  .val(JSON.parse)
  .promise(handlebar.bind(null, "#template", "#output"))
  .promise(pourover)
  .promise(linkify)
  .or(function (err) {
    console.error(err);
  });
