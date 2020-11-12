class SingleNote {
  #message;

  constructor(message) {
    this.#message = message
  }

  get text() {
    return this.#message;
  }
}
