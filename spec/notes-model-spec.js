( () => {

  test.that('The message is the same', () => {
    let note = new Note("I am with Mace!");
    expect.toEqual(note.showMessage(), "I am with Mace!");

  })
})(this);
