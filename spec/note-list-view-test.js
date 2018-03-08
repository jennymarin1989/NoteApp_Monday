var note1 = new Note("My first Note");
var note2 = new Note("My second Note");
var list = new List();
var listview = new ListView(list);

  describe("create view", function(){
    it("check if there are notes in the list", function(){
      expect(listview.createView()).tobeEqual("<div>No notes have been added yet</div>");
    });
    it("creates html when there is only one note", function(){
        list.addNoteToList("My first note");
      expect((new ListView(list)).createView()).tobeEqual("<ul><li><div>My first note</div></li></ul>");
    });

    it("creates a html list from the list array", function(){
      list.addNoteToList("My first note");
      list.addNoteToList("My second note");
      expect((new ListView(list)).createView()).tobeEqual("<ul><li><div>My first note</div></li><li><div>My second note</div></li></ul>");
    });
  });
