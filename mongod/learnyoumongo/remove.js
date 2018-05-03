var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(connect_err, db) {
    if (connect_err) throw connect_err;
    var database = db.db(process.argv[2]);
    var docs = database.collection(process.argv[3]);
    
    docs.remove({
       "_id" : process.argv[4]
    },function(err){
        if(err) throw err;
        db.close();
    })
});
