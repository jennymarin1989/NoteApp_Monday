
  function testInputText(){
    var note = new Note("note 1");
    expect.isTrue(note.text === "note 1");
  };
  testInputText();

  function testReturnText(){
    var note = new Note("Test note");
    expect.isEqual("Test note", note.text)
  };
  testReturnText();
