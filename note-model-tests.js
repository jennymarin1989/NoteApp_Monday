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

(function(exports){
  function testListNotes(){
    var list = new List();
    if(list.notes.length != 0 ){
      throw new Error ("Note has not initialized correctly!");
    } else {
      try {
        throw "Array test passed"
      } catch(e){
        alert(e)
      }
    }
  };
  testListNotes();
})(this);
