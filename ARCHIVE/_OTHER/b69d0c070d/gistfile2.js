function readfile(filename) {
   // thunkify the fs.readFile() function
   return fs.readFile.bind(fs,filename);
}

ASQ()
.runner(function*(){
  var contents = yield readfile("helloworld.txt");
  console.log(contents);
});

// vs.

// asynquencify the fs.readFile() function
var readfile = ASQ.wrap(fs.readFile);

ASQ()
.runner(function*(){
  var contents = yield readfile("helloworld.txt");
  console.log(contents);
});