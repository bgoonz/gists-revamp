/*

   Extracted out of MEAN Stack app.
   
   Very simple, crude example of making a call to MongoDB  using the NPM module, mongodb.  
   
   Simply gets all fields (fname, lname, age) for all records in a sample collection, collection1, in the sample db, hellomeandb, and console.logs them to the terminal screen.
   
   Reqs: mongod instance must be running on default port of 27017 with some records to show.
   
*/

var mongoModule = require("mongodb");
var dbServer = new mongoModule.Server("localhost", 27017); //27017 is default port for mongo
var mongoDb = new mongoModule.Db("hellomeandb", dbServer);

var openDB = promisify(mongoDb.open);

// openDB()
// .then(
//   handleOpen,
//   handleError
// )
// .then(
//   handleCollection,
//   handleCollectionError
// )
// .then(
//   handleDocs,      // <-- oops, doesn't receive `theDb`
//   handleDocsError
// );

// http://github.com/getify/asynquence
// var ASQ = require("asynquence");
ASQ().runner(main);

// .......................................

function* main() {
  try {
    var theDb = yield openDB();
  } catch (err) {
    return handleError(err);
  }

  try {
    var theCollection = yield handleOpen(theDb);
  } catch (err) {
    return handleCollectionError(err);
  }

  try {
    var theDocs = yield handleCollection(theCollection);
  } catch (err) {
    return handleDocsError(theDb, err);
  }

  handleDocs(theDb, theDocs);
}

function handleOpen(theDb) {
  var getCollection = promisify(theDb.collection);

  return getCollection("collection1");
}

function handleCollection(theCollection) {
  var collectionArray = promisify(theCollection.find().toArray);

  return collectionArray();
}

function handleDocs(theDB, theDocs) {
  console.log(`${theDocs.length} records:`);
  theDocs.forEach(function eacher({ fname, lname, age }) {
    console.log(`${fname} ${lname} is ${age} years old!`);
  });

  theDb.close();
}

function handleError(err) {
  console.log("error opening db");
}

function handleCollectionError(err) {
  // ..
}

function handleDocsError(theDb, err) {
  console.log("no records to display");
  theDb.close();
}

function promisfy(fn) {
  return function wrapped(...args) {
    return new Promise(function executor(resolve, reject) {
      args.push(function callback(err, val) {
        if (err) reject(err);
        else resolve(val);
      });

      fn(...args);
    });
  };
}
