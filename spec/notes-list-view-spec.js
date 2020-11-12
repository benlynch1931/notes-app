( () => {

  // test.that('It is an instance of a NoteListView', () => {
  //   let viewNoteList = new NoteListView();
  //   expect.toBeAnInstanceOf(viewNoteList, NoteListView);
  // })

  test.that("buildHTML() returns empty <ul> to an empty list", () => {
    let notes = new NoteList();
    expect.toEqual(NoteListView.buildHTML(notes), '<ul></ul>');
  })

  test.that("buildHTML() returns 1 element <ul> to 1 element list", () => {
    let notes = new NoteList();
    notes.addNote("Mace's note!");
    expect.toEqual(NoteListView.buildHTML(notes), "<ul><li><a id='note1' href='#notes/1'>Mace's note!</a></li></ul>");
  })

  test.that("buildHTML() returns multiple element <ul> to multi-element list", () => {
    let notes = new NoteList();
    notes.addNote("Mace's note!");
    notes.addNote("Ben's note!");
    notes.addNote("Mr. Gill's note!");
    expect.toEqual(NoteListView.buildHTML(notes), "<ul><li><a id='note1' href='#notes/1'>Mace's note!</a></li><li><a id='note2' href='#notes/2'>Ben's note!</a></li><li><a id='note3' href='#notes/3'>Mr. Gill's note!</a></li></ul>");
  })

})(this);
