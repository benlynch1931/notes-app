( () => {

  test.that('It is an instance of a class', () => {
    let note = new Note("testNote");
    expect.toBeAnInstanceOf(note, Note);
  })

  test.that('The message is the same', () => {
    let note = new Note("I am with Mace!");
    expect.toEqual(note.showMessage(), "I am with Mace!");
  })

})(this);
