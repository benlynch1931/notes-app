( () => {


  test.that('It is an instance of a Notes class', () => {
    let notes = new Notes;
    expect.toBeAnInstanceOf(notes, Notes);
  })

  test.that('It instantiates with an empty array', () => {
    let notes = new Notes();
    expect.toEqualEmpty(notes.noteList, Array)
  })

  test.that('It adds a note to the array', () => {
    let notes = new Notes();
    notes.addNote("New Note with Mace!");
    expect.toBeAnInstanceOf(notes.noteList[0], SingleNote);
    expect.toEqual(notes.noteList[0].showNote(), 'New Note with Mace!')
  })

})(this);
