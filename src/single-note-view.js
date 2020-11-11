class SingleNoteView {

  constructor(note) {
    this.note = note;
  }

  buildHTML() {
    return `<p>${this.note.showNote()}</p>`;
  }
}
