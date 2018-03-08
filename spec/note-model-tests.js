    var note = new Note("note 1");
    describe("new note", function(){
      it("is initialize with a note (truth test)", function(){
        expect(note.text).tobeEqual("note 1");
      });
    });

    var note = new Note("Test note");
    describe("return text", function(){
      it("it returns the text of the note (equality test)", function(){
        expect(note.returnText()).tobeEqual("Test note");
      })  ;  
    });
