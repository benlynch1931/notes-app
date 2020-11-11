( () => {

  test.that('it instantiates the class', () => {

    singleView = new SingleNoteView("testNote");
    expect.toBeAnInstanceOf(singleView, SingleNoteView)
  });

  test.that('it returns a <p> with the note', () => {

    singleView = new SingleNoteView("testNote");
    expect.toEqual(singleView.buildHTML(), '<p>testNote</p>')
  })
})(this);
