var map = require('through2-map');
var http=require('http');
var port = process.argv[2];
var server = http.createServer((req, res) =>{ 
    if(req.method !== 'POST') return res.end('not post'); 
  //console.log(req);
 req.pipe(map(chunk =>{
      return chunk.toString().toUpperCase();
  })).pipe(res);
});
server.listen(port);
/*inStream.pipe(map(function (chunk) {  
    return chunk.toString().split('').reverse().join('')  
  })).pipe(outStream)  */


