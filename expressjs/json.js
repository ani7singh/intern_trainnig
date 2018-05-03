var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){
    var filename = process.argv[3];
    fs.readFile(filename, function (err, data) {
        var jsonFromFile = JSON.parse(data);
        res.json(jsonFromFile);
    })
})
app.listen(process.argv[2]);