class SingleNote {
  #message;

  constructor(message) {
    this.#message = message
  }

  showMessage() {
    return this.#message;
  }
}
