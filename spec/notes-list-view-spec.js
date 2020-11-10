( () => {

  test.that('It is an instance of a NoteListView', () => {
    let viewNotes = new NoteListView();
    expect.toBeAnInstanceOf(viewNotes, NoteListView);
  })

  test.that("buildHTML() returns empty <ul> to an empty list", () => {
    let viewNotes = new NoteListView();
    let notes = new Notes();
    expect.toEqual(viewNotes.buildHTML(notes), '<ul></ul>');
  })

  test.that("buildHTML() returns 1 element <ul> to 1 element list", () => {
    let viewNotes = new NoteListView();
    let notes = new Notes();
    notes.addNote("Mace's note!");
    expect.toEqual(viewNotes.buildHTML(notes), "<ul><li><a class=`note1` href=''>Mace's note!</div></li></ul>");
  })

  test.that("buildHTML() returns multiple element <ul> to multi-element list", () => {
    let viewNotes = new NoteListView();
    let notes = new Notes();
    notes.addNote("Mace's note!");
    notes.addNote("Ben's note!");
    notes.addNote("Mr. Gill's note!");
    expect.toEqual(viewNotes.buildHTML(notes), "<ul><li><a class=`note1` href=''>Mace's note!</a></li><li><a class=`note2` href=''>Ben's note!</a></li><li><a class=`note3` href=''>Mr. Gill's note!</a></li></ul>");
  })

})(this);
