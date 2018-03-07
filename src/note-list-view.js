(function(exports){

  function ListView(notelist){
    this.view = this.createView();
    this.notelist = notelist;
  }

  ListView.prototype.createView = function() {
    var string = "<ul>";
    console.log(this.notelist);
    var listArray = this.notelist.getAllNotes();


  };

  exports.ListView = ListView;

})(this);
