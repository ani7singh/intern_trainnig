function logger(namespace) {

   return console.log.bind(null,namespace);
    }
    //modul
/* module.exports = function(namespace) {

console.log.bind(null,namespace);
}*/
//var x=logger('hello');
//x('gf');
module.exports = logger
  
