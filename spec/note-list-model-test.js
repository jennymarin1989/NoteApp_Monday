
  function emptyListArray(){
    var list = new List();
    expect.isTrue(list.notes.length === 0);
  };
  emptyListArray();

  function AddNoteinList(){
    var list = new List();
    list.addNoteToList("My first note");
    expect.isTrue(list.notes.includes("My first note"));
  };
  AddNoteinList();

  
