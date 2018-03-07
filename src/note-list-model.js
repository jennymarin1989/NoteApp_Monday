(function(exports){
  function List(){
    this.notes = new Array();
  };

  List.prototype.addNoteToList = function(noteString){
    this.notes.push(new Note(noteString));
    return this.notes;
  };

  List.prototype.getAllNotes = function() {
    return this.notes;
  };

  exports.List = List;

})(this);
