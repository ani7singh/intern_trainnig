function operation(){
   // console.log("depends on nums it will call this function that much time ");
}
/*function repeat(operation,num)
{
    for(var i=0;i<num.length;i++)
    {
    operation();
    console.log("called num of time"+i)
    }
}*/
function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }

//console.log(repeat(operation,2));
module.exports = repeat