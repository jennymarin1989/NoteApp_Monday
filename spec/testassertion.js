

  var expect = {

    isTrue: function(paramToCheck) {
      if(!paramToCheck) {
        throw new Error (`Please check your code ${paramToCheck} is not true`);
      } else {
        console.log("Test passed! Easy Peasy!!");
      }
    },

    isEqual: function(paramToCheck, beEqual){
      if (Array.isArray(paramToCheck)) {
        if (!Array.isArray(beEqual)) {
          throw new Error (`${paramToCheck} is an array but expected to equal ${beEqual}`)
        } else if (paramToCheck.length !== beEqual.length) {
          throw new Error (`The arrays are different lengths`)
        } else {
          for (var i = 0; i < paramToCheck.length; i++) {
            if (paramToCheck[i] !== beEqual[i]) {
              throw Error (`${paramToCheck[i]} does not equal ${beEqual[i]}`)
            }
          }
        }
        console.log("%cTest passed! Easy Peasy!!", "color: green; font-size: 15px;");
      } else {
        if(paramToCheck !== beEqual){
          throw new Error (`Try Again!${beEqual} does not equal ${paramToCheck}`)
        } else {
          console.log("%cTest passed! Easy Peasy!!", "color: green; font-size: 15px;");
        }
      }
    }
  }

  var describe = function(string){
    console.log("-------" + string + "-------");
  };

  var it = function(string){
    beforeEach();
    console.log("  " + string );
  };

  var beforeEach = function(callback) {
    if (callback) {
        callback();
    }
  };
