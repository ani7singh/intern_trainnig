
function reduce(arr, fn, initial) {
  //  console.log(fn.toString());
	var length = arr.length;
	if(length > 1)
		return reduce(arr.slice(1, length), fn, fn(initial, arr[0]));
	return fn(initial, arr[0]);
}
//onsole.log(reduce(inputWords));
module.exports = reduce;

/*
  function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }
    
    module.exports = reduce
*/