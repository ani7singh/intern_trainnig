var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var p_first_name = process.argv[2];
var p_last_name = process.argv[3];
var p_doc = { firstName: p_first_name, lastName: p_last_name};

MongoClient.connect(url, function(connect_err, db) {
    if (connect_err) throw connect_err;
    var database = db.db('learnyoumongo');
    var docs = database.collection('docs');

    docs.insert(p_doc, function(insert_err, data) {
        if (insert_err) throw insert_err
        console.log(JSON.stringify(p_doc));
        db.close();
      })
  });


