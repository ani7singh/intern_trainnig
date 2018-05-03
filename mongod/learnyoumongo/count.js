var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, function(connect_err, db) {
    if (connect_err) throw connect_err;
    var database = db.db('learnyoumongo');
    var parrots = database.collection('parrots');
    
    parrots.count({
        age: {$gt: +process.argv[2]}
    },
     function(err,count){
         if(err) throw err;
         console.log(count);
         db.close();
     })
 });
 