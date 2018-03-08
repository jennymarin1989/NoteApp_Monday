
  var note1 = new Note("My first note");
  var note2 = new Note("My second note");
  var list;

  beforeEach(function() {
    list = new List();
  });

  emptyListArray();
  getAllNotes();
  AddNoteinList();


  function emptyListArray(){
    describe("new list");
    it("initialize with a empty list");
    expect.isTrue(list.notes.length === 0);
  };

  function AddNoteinList(){
    describe("add note to list");
    it("Adds a note to the list");
    list.addNoteToList("My first note");
    expect.isEqual(list.notes[0].text, "My first note");
  };

  function getAllNotes(){
    describe("get all notes");
    it("returns an array of all notes");
    list.notes.push(note1);
    list.notes.push(note2);
    expect.isEqual(list.getAllNotes(), [note1, note2])

  }
