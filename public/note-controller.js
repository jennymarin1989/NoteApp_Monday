(function (exports){

  function NoteController(notelist){
    this.notelist = notelist;
    this.note = notelist.addNoteToList("Favourite drink: Mojito");
    this.view = new ListView(notelist);
  }

  NoteController.prototype.getHtml = function(){
    document.getElementById('app').innerHTML = this.view.createView();
  };

  exports.NoteController = NoteController;

})(this);

var notelist = new List();
var notecontroller = new NoteController(notelist);
notecontroller.getHtml();
