
  function testInputText(){
    var note = new Note("note 1");
    describe("new note");
    it("is initialize with a note (truth test)");
    expect.isTrue(note.text === "note 1");
  };
  testInputText();

  function testReturnText(){
    var note = new Note("Test note");
    describe("return text");
    it("it returns the text of the note (equality test)");
    expect.isEqual("Test note", note.returnText());
  };
  testReturnText();
