let originalCreateFormDiv = document.getElementById('createFormDiv').innerHTML;


let noteListView = new NoteListView();
let notes = new Notes();
notes.addNote("'Ruby sucks' - Mace");
notes.addNote("'Ruby is cool' - Ben");

let appDiv = document.getElementById('app');

function updateNotesList() {
  appDiv.innerHTML = noteListView.buildHTML(notes);
}

(function startingWebpage() {
  updateNotesList()
})(this);


function viewNote(noteID) {
  let noteView = new SingleNoteView(notes.noteList[noteID-1]);
  let previewDiv = document.getElementById('preview');
  previewDiv.innerHTML = noteView.buildHTML();
}


document.getElementById('createForm').addEventListener('submit', function createNoteForm(e) {
  e.preventDefault();
  document.getElementById('createFormDiv').innerHTML = "";
  document.getElementById('preview').innerHTML = "<form id='createNote'><ul><li><textarea id='createNoteText' name='note' placeholder='Enter new note: '></textarea></li><li><input id='createNoteSubmit' type='submit' value='Add Note'></form>";
  eventSetupToCreateNote()
})


function eventSetupToCreateNote() {
  document.getElementById('createNote').addEventListener('submit', function createNote(e) {
    e.preventDefault();
    notes.addNote(document.getElementById('createNoteText').value);
    document.getElementById('createFormDiv').innerHTML = originalCreateFormDiv;
    document.getElementById('preview').innerHTML = "";
    updateNotesList()
  })

}
