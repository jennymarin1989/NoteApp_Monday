(function(exports){

  function ListView(notelist){
    this.notelist = notelist;
    this.view = this.createView();
  }

  ListView.prototype.createView = function() {
    var string = "<ul>";
    var listArray = this.notelist.getAllNotes();

    if(listArray.length === 0){
      return string = "<div>No notes have been added yet</div>"
    }

    for (var i = 0; i < listArray.length; i++) {
      string += `<li><div>${listArray[i].returnText()}</div></li>`;
    }
    string += "</ul>";
    return string;
  };

  exports.ListView = ListView;

})(this);
