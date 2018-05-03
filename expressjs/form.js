var express = require('express');
var app = express();//to create an app
var port = process.argv[2];
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
  console.log(req.body);
  res.end(req.body.str.split('').reverse().join(''));
});

app.listen(port);
