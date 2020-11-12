class NoteList {
  // not all browsers use private field members yet...
  #noteList;

  constructor() {
    this.#noteList = [];
  }

  get listed() {
    return this.#noteList;
  }

  getNoteByID(id) {
    return this.#noteList[id - 1];
  }

  addNote(message) {
    this.#noteList.push(new SingleNote(message))
  }
}
