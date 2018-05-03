var express = require('express');
var app = express();
var port = process.argv[2];
var str = require('crypto');

app.put('/message/:id', function (req, res) {
    //  console.log("Hello WOrld");
    var id = req.params.id;// given variable is then stored in req.params

    res.end(str.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex'))
})

app.listen(port);
