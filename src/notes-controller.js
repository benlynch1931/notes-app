let originalCreateFormDiv = document.getElementById('createFormDiv').innerHTML;
let noteListView = new NoteListView();
let notes = new Notes();
let appDiv = document.getElementById('app');

function updateNotesList() {
  appDiv.innerHTML = noteListView.buildHTML(notes);
}

(function startingWebpage() {
  notes.addNote("'Ruby sucks' - Mace");
  notes.addNote("'Ruby is cool' - Ben");
  window.location.hash = 'homepage';
  updateNotesList()
})(this);


window.addEventListener('hashchange', toWhere);

function toWhere() {
  if(location.hash === '#homepage') {
    homePage()
  } else {
    viewNote()
  }
}

function homePage(newNote = null) {
  if(newNote !== null) {
    notes.addNote(document.getElementById('createNoteText').value);
  }
  document.getElementById('createFormDiv').innerHTML = originalCreateFormDiv;
  document.getElementById('preview').innerHTML = "";
  updateNotesList()
}

function viewNote() {
  noteID = getNoteID();
  let noteView = new SingleNoteView(notes.noteList[noteID-1]);
  document.getElementById('preview').innerHTML = noteView.buildHTML();
  document.getElementById('createFormDiv').innerHTML = "<form id='returnHome' action='#homepage'><input id='returnHomeSubmit' type='submit' value='Home'></form>"
  // eventSetup('returnHome');
}

function getNoteID() {
  return location.hash.split('')[location.hash.length - 1];
}



document.getElementById('createForm').addEventListener('submit', function createNoteForm(e) {
  e.preventDefault();
  document.getElementById('createFormDiv').innerHTML = "";
  document.getElementById('preview').innerHTML = "<form id='createNote'><ul><li><textarea id='createNoteText' name='note' placeholder='Enter new note: '></textarea></li><li><input id='createNoteSubmit' type='submit' value='Add Note'></form>";
  eventSetup('createNote', 1)
})

// function eventSetup(elementID, newNote = null) {
//   document.getElementById(elementID).addEventListener('submit', function(e) {
//     e.preventDefault();
//     if(newNote !== null) {
//       notes.addNote(document.getElementById('createNoteText').value);
//     }
//     document.getElementById('createFormDiv').innerHTML = originalCreateFormDiv;
//     document.getElementById('preview').innerHTML = "";
//     updateNotesList()
//   })
// }
//
//
// function eventSetupToCreateNote() {
//   document.getElementById('createNote').addEventListener('submit', function createNote(e) {
//     e.preventDefault();
//     notes.addNote(document.getElementById('createNoteText').value);
//     document.getElementById('createFormDiv').innerHTML = originalCreateFormDiv;
//     document.getElementById('preview').innerHTML = "";
//     updateNotesList()
//   })
// }
//
// function eventSetupToReturnHome() {
//   document.getElementById('returnHome').addEventListener('submit', function returnHome(e) {
//     e.preventDefault();
//     document.getElementById('createFormDiv').innerHTML = originalCreateFormDiv;
//     document.getElementById('preview').innerHTML = "";
//     updateNotesList()
//   })
// }
