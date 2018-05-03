var fs = require('fs');
var path = require('path');
//var ext=process.argv[3];
module.exports = function (directory, extension, callback) {
   // var extensionWithDot = "." + ext 
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);
        else {
            var extensionWithDot = "." + extension 
            list = list.filter(function (file) {
                if(path.extname(file) == (','+ extensionWithDot )) return true;
            })
            return callback(null, list);
        }
    })
}