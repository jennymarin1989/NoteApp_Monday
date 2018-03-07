(function(exports){

  function ListView(notelist){
    this.notelist = notelist;
    this.view = this.createView();
  }

  ListView.prototype.createView = function() {
    var string = "<ul>";
    var listArray = this.notelist.getAllNotes();
    for (var i = 0; i < listArray.length; i++) {
      string += `<li><div>${listArray[i].returnText()}</div></li>`;
    }
    string += "</ul>";
    return string;
  };

  exports.ListView = ListView;

})(this);
