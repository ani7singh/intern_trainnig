var http=require('http');
var url=require('url');
var moment=require('moment');
var port=process.argv[2];
var server=http.createServer((req,res) =>{
    var{pathname,query}=url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //console.log(url.parse(req.url, true));

    if(pathname === '/api/parsetime')
    {
     var str= 
           { hour:moment(query.iso).hour(),
            minute:moment(query.iso).minute(),
            second:moment(query.iso).second()};
        
res.write(JSON.stringify(str));
//res.end();
    }
    else{
        var str= 
           { unixtime:+moment(query.iso).format('x')};
res.write(JSON.stringify(str));
//res.end();
      // console.log(moment(query.iso).millisecond());
    }
    res.end();
});
server.listen(port);