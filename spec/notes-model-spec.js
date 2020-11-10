( () => {

  test.that('It is an instance of a class', () => {
    let note = new SingleNote("testNote");
    expect.toBeAnInstanceOf(note, SingleNote);
  })

  test.that('The message is the same', () => {
    let note = new SingleNote("I am with Mace!");
    expect.toEqual(note.showNote(), "I am with Mace!");
  })

})(this);
