var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/search', function(req, res){
    var query= req.query;
    res.send(query)
   // res.send(JSON.stringify(query))
   }) 
app.listen(process.argv[2]);