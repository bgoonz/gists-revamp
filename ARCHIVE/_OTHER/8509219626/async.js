var transform = function (contents, doneTransform) {
  var authExpiry = 60 * 60 * 1000,
    authId = uuid.v4(),
    authKey = "file:auth:" + authId;

  redis.client.set(
    authKey,
    JSON.stringify({
      userId: req.user.id,
    })
  );
  redis.client.expire(authKey, authExpiry);

  // it was super simple to add a "map" contrib plugin:
  // https://github.com/getify/asynquence/commit/8ff21a2f5275911d645f4b0261be82b6cd758c04
  ASQ()
    .map(contents.files, function (file, done) {
      var lookupKey = "file:path:" + file.path;

      var sq = ASQ();

      // using a nested callback here is exactly the kind of thing
      // promises are meant to alleviate you from. asynquence is all
      // about making promises more palatable, and reducing nested
      // callbacks which lead to fragile "callback hell" inflexibility.
      // in the long run, promises (aka, asynquence sequences) will prove
      // to be more maintainable than callback counter-parts, because
      // sequences can easily have more steps (transformations, etc) added
      // to them later, whereas callbacks require deeper nesting.
      //
      // in fact, this is the primary reason 'asynquence' is better than
      // 'async', IMO, because it stresses the chained sequencing of promises
      // over one-off async tasks.

      // errfcb() provided by the "errfcb" contrib plugin:
      // https://github.com/getify/asynquence/commit/756c65d16930aa421faa855d685085920180fbea
      redis.client.get(lookupKey, sq.errfcb());

      // for instance, what if later, there was another asynchronous step you
      // needed to do here, before the `file` transformation could take place,
      // like another side look-up, etc? with the callback approach, you're
      // stuck either nesting, or refactoring. with asynquence sequences, just
      // insert a `then(..)` or `gate(..)` or whatever right here, and it "just
      // works". :)

      sq.val(function (fileId) {
        if (fileId) {
          // if we found a fileId, it is already in the cache.
          // convert it to a string and use it.
          fileId = fileId.toString();
        } else {
          // if we didn't, create a new id and cache the file details
          fileId = uuid.v4();
          redis.client.set("file:id:" + fileId, JSON.stringify(file));
          redis.client.set(lookupKey, fileId);
        }

        // rewrite the path of the file to {authId}/{fileId}
        file.path = authId + "/" + fileId;

        return file;
      }).pipe(done);
    })
    .val(function (files) {
      contents.files = files;
      doneTransform(contents);
    })
    .or(handleError);
};
