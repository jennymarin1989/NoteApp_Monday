
  var note1 = new Note("My first note");
  var note2 = new Note("My second note");
  var list;

  beforeEach(function() {
    list = new List();
  });


    describe("new list", function(){
        it("initialize with a empty list", function(){
          expect(list.notes.length).tobeEqual(0);
        });
    });

    describe("add note to list", function(){
      it("Adds a note to the list", function(){
        list.addNoteToList("My first note");
        expect(list.notes[0].text).tobeEqual("My first note");
      });
    });

    describe("get all notes", function(){
      it("returns an array of all notes", function(){
        list.notes.push(note1);
        list.notes.push(note2);
        expect(list.getAllNotes()).tobeEqual([note1, note2]);
      });
    });
