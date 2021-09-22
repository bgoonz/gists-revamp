/*

   Extracted out of MEAN Stack app.
   
   Very simple, crude example of making a call to MongoDB  using the NPM module, mongodb.  
   
   Simply gets all fields (fname, lname, age) for all records in a sample collection, collection1, in the sample db, hellomeandb, and console.logs them to the terminal screen.
   
   Reqs: mongod instance must be running on default port of 27017 with some records to show.
   
*/

var mongoModule = require('mongodb');
var dbServer = new mongoModule.Server('localhost', 27017);//27017 is default port for mongo
var mongoDb = new mongoModule.Db('hellomeandb', dbServer);

mongoDb.open(function(err, theDb){
  if (err){
    console.log('error opening db');
    return;
  }

  theDb.collection('collection1', function(err, theCollection){
    theCollection.find().toArray(function(err, theDocs){
      if (theDocs){
         console.log(theDocs.length + " records:");
         theDocs.forEach(function(elem){
            console.log(elem.fname + " " + elem.lname + " is " + elem.age + " years old!");
         });
      }
      else{
         console.log("no records to display");
      }
      theDb.close();//must be within callback, else, trouble.
    });
   });
});
