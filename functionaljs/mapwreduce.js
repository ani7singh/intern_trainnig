var arr = [1,20,30,4,5]
module.exports =function arrayMap(arr, fn) {
   return arr.reduce(function(acc,val)
    {
       acc.push(fn(val));
       return acc;
    },[]) 
}

  
var x=function double(item) {
    return item * 2
  }

//console.log(arrayMap(arr,x));