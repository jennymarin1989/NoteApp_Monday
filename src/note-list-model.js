(function(exports){
  function List(){
    this.notes = new Array();
  };

  List.prototype.addNoteToList = function(newNote){
    this.notes.push(newNote)
    return this.notes
  };

  exports.List = List;

})(this);
