// Line2 initializes ability to test.
var test = new Asparagus();
var message = "A great new note! The best note ever!"
var note = new Note(message);

// No {} for function otherwise no return ability
// Testing that our tests work.
test.it('is an Asparagus', () =>
  test.expect(test).toBeAn(Asparagus)
);

test.it('is an instance of Note', () =>
  test.expect(note).toBeA(Note)
);

test.it('can return the message stored', () => 
  test.expect(note.showMessage()).toEqual(message)
);
