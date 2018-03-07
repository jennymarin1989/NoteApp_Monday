var note1 = new Note("My first Note");
var note2 = new Note("My second Note");

listViewCreatesView();

function listViewCreatesView(){
  
  var list = new List();
  var listview = new ListView(list);

  describe("create view");
    it("check if there are notes in the list");
    expect.isEqual(listview.createView(), "<div>No notes have been added yet</div>");

    it("creates html when there is only one note")
    list.addNoteToList("My first note");
    expect.isEqual(listview.createView(), "<ul><li><div>My first note</div></li></ul>");

    it("creates a html list from the list array");
    list.addNoteToList("My second note");
    expect.isEqual(listview.createView(), "<ul><li><div>My first note</div></li><li><div>My second note</div></li></ul>");
};
