
  function emptyListArray(){
    var list = new List();
    describe("new list");
    it("initialize with a empty list");
    expect.isTrue(list.notes.length === 0);
  };
  emptyListArray();

  function AddNoteinList(){
    var list = new List();
    describe("add note to list");
    it("Adds a note to the list");
    list.addNoteToList("My first note");
    expect.isTrue(list.notes.includes("My first note"));
  };
  AddNoteinList();
