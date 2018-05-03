function duckCount() {
    var a= Array.prototype.slice.call(arguments).filter(function(arg) {
          return Object.prototype.hasOwnProperty.call(arg, 'quack');
      }).length;
      return a;
  }
 //console.log(duckCount());
 module.exports = duckCount
