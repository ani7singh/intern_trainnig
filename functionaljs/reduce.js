var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

  function countWords(inputWords) {
      var result={};
    inputWords.reduce((wordsTotal,word) => {
      
      if (!result[word]) {
        result[word] = 1;
      } else {
        result[word]++;
      }
     // return  word;
    },null);
     
     return result;
    }
/*function countWords(inputWords) {
    var result={};
    inputWords.reduce((acc,current,index,arr) => {
      
      if (!result[current]) {
        result[current] = 1;
      } else {
        result[current]++;
      }
     //  console.log(current);
    //   console.log(result[current]);
      return current;
    },null);
     
      return result;
    }*/
   //console.log(countWords(inputWords));
 module.exports = countWords
