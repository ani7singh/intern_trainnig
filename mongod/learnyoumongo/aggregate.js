var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, function(connect_err, db) {
    if (connect_err) throw connect_err;
    var database = db.db('learnyoumongo');
    var prices = database.collection('prices');
prices.aggregate([
    { $match: { size: process.argv[2] }}
  , { $group: {
      _id: 'total' 
    , total: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if(err) throw err;
    if (!results.length) {
      throw new Error('No results found');
    }
   // console.log(results);
    var o = results[0].total;
    console.log(Number(o).toFixed(2))
    db.close()
    
   // var value = "1"
   // Number(value).toFixed(5)

  })
})