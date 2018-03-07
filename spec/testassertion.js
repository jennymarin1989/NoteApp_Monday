
  var expect = {

    isTrue: function(paramToCheck) {
      if(!paramToCheck) {
        throw new Error (`Please check your code ${paramToCheck} is not true`);
      } else {
        console.log("Easy Peasy!!");
      }
    },

    isEqual: function(beEqual, paramToCheck){
      if(beEqual !== paramToCheck){
        throw new Error (`Try Again!${beEqual} is not equal to ${paramToCheck}`)
      } else {
        console.log("Easy Peasy!!");
      }
    }
  }

  var describe = function(string){
    console.log("-------" + string + "-------");
  };

  var it = function(string){
    console.log("  " + string );
  }
