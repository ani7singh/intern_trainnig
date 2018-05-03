var mongo = require('mongodb').MongoClient;
var age = process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, dbase) {
    
  if(err) throw err;

   var database = dbase.db('learnyoumongo');

   //console.log(database);
   var parrots = database.collection('parrots');
    //console.log(parrots);
    parrots.find({
        age: {$gt: +age}},
        { projection:{_id: 0} }
      ).toArray(function(err, documents) {
        if(err) throw err;
        console.log(documents);
        dbase.close();
      })
});
