//var count=0;
function Spy(target, method) {
   //target.method('dfgd');
    var Originlfun=target[method];
   // console.log(typeof Originlfun)
   var result={
   count:0
   }
   target[method]=function()
   {
       result.count++;
      // console(count);
   //   console.log(target,arguments);
       return Originlfun.apply(target,arguments);   
   }
  //console.log(target[method])
   return result;
  }

var spy = Spy(console, 'error');
    //target.method('dfgd')
console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')
console.log(spy.count) 
module.exports = Spy
