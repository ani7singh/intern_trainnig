var path=require('path');
var mymodule = require('./module');
//var mydir=process.argv[2];

var directory=process.argv[2];
var filterExtension=process.argv[3];
var callback =((err,list) => {
    
    if (err) throw err;

    for(var i = 0; i < list.length; i++)
        console.log(list[i])
});

mymodule(directory, filterExtension, callback);