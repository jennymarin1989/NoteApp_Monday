
  var note1 = new Note("My first Note");
  var note2 = new Note("My second Note");

  emptyListArray();
  getAllNotes();
  AddNoteinList();

  function emptyListArray(){
    var list = new List();
    describe("new list");
    it("initialize with a empty list");
    expect.isTrue(list.notes.length === 0);
  };

  function AddNoteinList(){
    var list = new List();
    describe("add note to list");
    it("Adds a note to the list");
    list.addNoteToList("My first note");
    expect.isEqual(list.notes[0].text, "My first note");
  };

  function getAllNotes(){
    var list = new List ();
    describe("get all notes");
    it("returns an array of all notes");
    list.notes.push(note1);
    list.notes.push(note2);
    console.log(list.getAllNotes());
    console.log([note1, note2]);
    expect.isEqual(list.getAllNotes(), [note1, note2])

  }
