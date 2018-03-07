var note1 = new Note("My first Note");
var note2 = new Note("My second Note");

listViewCreatesView();

function listViewCreatesView(){
  // var list = new List();
  var listview = new ListView(new List());
  describe("create view");
  it("returns a html of the note list");
  list.addNoteToList("My first Note");
  // list.addNoteToList("My second Note");
  expect.isEqual(listview.createView(), "<ul><li><div>My first note</div></li><li><div>My second note</div></li></ul>");
};
