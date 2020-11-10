class Notes {

  constructor() {
    this.noteList = []
  }

  getNotes() {
    // logs array
  }

  addNote(message) {
    this.noteList.push(new SingleNote(message))
  }
}
