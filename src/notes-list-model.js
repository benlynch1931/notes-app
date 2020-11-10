class Notes {

  constructor() {
    this.noteList = [];
  }

  getNotes() {
    return this.noteList;
  }

  addNote(message) {
    this.noteList.push(new SingleNote(message))
  }
}
