var http = require('http');
var bl=require('bl');
var url = process.argv.slice(2);
var count = 0;
//console.log(url);
//console.log(url.length);
var result=[];
function display(result)
{
   //console.log(result.length);
   for(var i=0;i<result.length;i++)
   console.log(result[i]);
   
    // result.map()
}
function httpurl(index){
http.get(url[index],(response)=>
{
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) { 
       if(err)
       {
           return console.error(err);
       }
       data = data.toString();
      // result.push(data);
      result[index] = data
      count++;
       if(count == 3)
       {
        display(result);
           //result.filter((e) => e);
       }
     
       //console.log(result.length);
    }))  

})
}
  for(var j=0;j<url.length;j++)
  {
    httpurl(j);
  }