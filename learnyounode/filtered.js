var fs= require('fs');
var path=require('path');
var mydir=process.argv[2];
var ext=process.argv[3];

fs.readdir(mydir,(err,list)=>{
    
    if (err) throw err;

    var extensionWithDot = "." + ext 
    list = list.filter(e => path.extname(e) == extensionWithDot)

    for(var i = 0; i < list.length; i++)
        console.log(list[i])
});

///working code
/*
var passed = []
     var extensionWithDot = "." + ext 
    if (err) throw err;
    for(var i = 0; i < list.length; i++){
        if(path.extname(list[i]) == extensionWithDot){
                passed.push(list[i])
        }
    }
    
    console.log(passed);
*/