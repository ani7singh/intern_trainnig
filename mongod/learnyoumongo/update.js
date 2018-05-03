var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, function(connect_err, db) {
    if (connect_err) throw connect_err;
    var database = db.db(process.argv[2]);
    var docs = database.collection('users');
    
    docs.update({
          username: 'tinatime'
          }, {
            $set: {
              age: 40
            }
        },function(err){
    if(err) throw err;
    db.close();
    })
});