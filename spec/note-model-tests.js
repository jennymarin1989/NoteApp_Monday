
  function testInputText(){
    var note = new Note("note 2");
    describe("new note");
    it("is initialize with a note (truth test)");
    expect.isTrue(note.text === "note 1");
  };
  testInputText();

  function testReturnText(){
    var note = new Note("Test note");
    describe("new note");
    it("is initialize with a note (equality test)");
    expect.isEqual("Test note", note.text)
  };
  testReturnText();
