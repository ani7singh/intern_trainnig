var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
   var result={};

  function reduce(inputWords) {
    var word=inputWords[0];
   // inputWords.reduce((wordsTotal,word) => {
    var length = inputWords.length;
      if(length > 0)
      {
        if (!result[word]) {
          result[word] = 1;
        } else {
          result[word]++;
        }
        
    //    console.log(word,result);
        reduce(inputWords.slice(1));
      }

      return result;
     

      
  //  },null);
      
     
  }
/*function reduce(arr, fn, initial) {
   
  }*/
  console.log(reduce(inputWords));
 // module.exports = reduce

