
var beforeEachFunctions;

  var expect = {

    isTrue: function(paramToCheck) {
      beforeEach(beforeEach.beforeEachFunctions);
      console.log("BeforeEach Functions: " + beforeEach.beforeEachFunctions)
      if(!paramToCheck) {
        throw new Error (`Please check your code ${paramToCheck} is not true`);
      } else {
        console.log("Test passed! Easy Peasy!!");
      }
    },

    isEqual: function(paramToCheck, beEqual){
      beforeEach();
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
        console.log("Easy Peasy!!");
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
    console.log("  " + string );
  };

  var beforeEach = function(callback) {
    beforeEachFunctions = callback;
    if (callback) {
      callback();
    }
  };
