//console.log(process.argv);

/*var proc=process.argv.length;
var result=0;
for(var i=2;i<proc;i++)
{
      result+=Number(process.argv[i]);
}
console.log(result);*/
/*alternate solution*/
var proc=process.argv;
proc=proc.slice(2);
var result=proc.reduce((acc,val) => +acc + +val);
console.log(result);