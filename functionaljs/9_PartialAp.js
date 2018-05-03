var slice = Array.prototype.slice
    //console.log(slice);
function logger(namespace) {
 return function()
 {
    var args = slice.call(arguments);
   // console.log(arguments);
   //console.log([namespace]);
   console.log.apply(null,[namespace].concat(args));
 //  console.log(console.log);
    

 }
}
//var x=logger('hello');
//x('gf');
module.exports = logger
