( () => {


  test.that('It is an instance of a NoteList class', () => {
    let notes = new NoteList;
    expect.toBeAnInstanceOf(notes, NoteList);
  })

  test.that('It instantiates with an empty array', () => {
    let notes = new NoteList();
    expect.toEqualEmpty(notes.listed, Array)
  })

  test.that('It adds a note to the array', () => {
    let notes = new NoteList();
    notes.addNote("New Note with Mace!");
    expect.toBeAnInstanceOf(notes.getNoteByID(1), SingleNote);
    expect.toEqual(notes.getNoteByID(1).text, 'New Note with Mace!')
  })

})(this);
