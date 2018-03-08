  function Test(subject){
    this.subject = subject;
  }
  Test.prototype = {

    tobeTrue: function() {
      if(this.subject !== true) {
        throw new Error (`Please check your code ${this.subject} is not true`);
      } else {
        console.log("Test passed! Easy Peasy!!");
      }
    },

    tobeEqual: function(expectation){
      if (Array.isArray(this.subject)) {
        if (!Array.isArray(expectation)) {
          throw new Error (`${this.subject} is an array but expected to equal ${expectation}`)
        } else if (this.subject.length !== expectation.length) {
          throw new Error (`The arrays are different lengths`)
        } else {
          for (var i = 0; i < this.subject.length; i++) {
            if (this.subject[i] !== expectation[i]) {
              throw Error (`${this.subject[i]} does not equal ${expectation[i]}`)
            }
          }
        }
        console.log("%cTest passed! Easy Peasy!!", "color: green; font-size: 15px;");
      } else {
        if(this.subject !== expectation){
          throw new Error (`Try Again!${expectation} does not equal ${this.subject}`)
        } else {
          console.log("%cTest passed! Easy Peasy!!", "color: green; font-size: 15px;");
        }
      }
    }
  }


  var expect = function(subject){
    return new Test(subject);
  }

  var describe = function(string, callback){
    console.log("-------" + string + "-------");
    callback();
  };

  var it = function(string, callback){
    beforeEach(beforeEachFunction);
    console.log("  " + string );
    callback();
  };

 var beforeEachFunction;

  var beforeEach = function(callback) {
    beforeEachFunction = callback;
    if (callback) {
        callback();
    }
  };
