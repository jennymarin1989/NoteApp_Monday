(function(exports){
  function testInputText(){
    var note = new Note("Test note");
    if(note.text != "Test note"){
      throw new Error("This is not the text");
    } else {
      try {
        throw "Input text test passed"
      } catch(e) {
        alert(e)
      }
    }
  };
  testInputText();
})(this);

(function(exports){
  function testReturnText(){
    var note = new Note("Test note");
    if(note.returnText() != "Test note"){
      throw new Error("This is not the text");
    } else {
      try {
        throw "Return text test passed"
      } catch(e) {
        alert(e)
      }
    }
  };
  testReturnText();
})(this);
