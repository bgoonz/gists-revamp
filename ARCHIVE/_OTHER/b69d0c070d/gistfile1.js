function readfile(filename) {
  // thunkify the fs.readFile() function
  return fs.readFile.bind(fs, filename);
}

ASQ()
  .thunk(readfile("helloworld.txt"))
  .val(function (contents) {
    console.log(contents);
  });

// vs.

function readfile(filename) {
  // promisify the fs.readFile() function
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, contents) {
      if (err) reject(err);
      else resolve(contents);
    });
  });
}

ASQ()
  .seq(readfile("helloworld.txt"))
  .val(function (contents) {
    console.log(contents);
  });

// vs.

// asynquencify the fs.readFile() function
var readfile = ASQ.wrap(fs.readFile);

ASQ()
  .seq(readfile("helloworld.txt"))
  .val(function (contents) {
    console.log(contents);
  });
