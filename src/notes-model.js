class SingleNote {
  #message;

  constructor(message) {
    this.#message = message
  }

  showNote() {
    return this.#message;
  }
}
