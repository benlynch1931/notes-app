let noteListView = new NoteListView();
let notes = new Notes();
notes.addNote("'Ruby sucks' - Mace");
notes.addNote("'Ruby is cool' - Ben");
let noteListHTML = noteListView.buildHTML(notes);

let appDiv = document.getElementById('app');

appDiv.innerHTML = noteListHTML;


function viewNote(noteID) {
  console.log("I FOUND THE FUNCTION!")
  let noteView = new SingleNoteView(notes.noteList[noteID-1]);
  let previewDiv = document.getElementById('preview');
  previewDiv.innerHTML = noteView.buildHTML();
}
