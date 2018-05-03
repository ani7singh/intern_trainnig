var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];
  
var submittedUsers=([
    { id: 2 },
    { id: 4 },
    { id: 1 }
  ]);
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(submit){
        return goodUsers.some(function(good)
        {
            return good.id == submit.id;
        })
      })

    };
  }

 
    /*// => true
    
    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])*/

  module.exports = checkUsersValid

