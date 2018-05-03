var express = require('express');
var app = express();
var stylus =require('stylus');
var port = process.argv[2];

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(port);