let noteList = new NoteList();
const notesDiv = document.getElementById('notes');
const ADDNOTE = "<form id='createNote' action='#homepage'><ul><li><textarea id='createNoteText' name='note' placeholder='Enter new note: '></textarea></li><li><input id='createNoteSubmit' type='submit' value='Add Note'></li></ul></form>"
const RETURNHOME = "<form id='returnHome' action='/'><input id='returnHomeSubmit' type='submit' value='Home'></form>";
const CREATEFORM = "<form id='createForm' action='#notes/create'><input id='createFormSubmit' type=\"submit\" value=\"Create\"></form>"

function updateNotesList() {
  previousHash = window.location.hash
  notesDiv.innerHTML = NoteListView.buildHTML(noteList);
}

function toWhere() {
  if(window.location.hash === '#notes/create') {
    createNote()
  } else if(window.location.hash.slice(0, 7) === '#notes/') {
    displaySingleNote()
  } else {
    resetWebpage()
    startingWebpage()
  }
}

function createNote() {
  document.getElementById('createFormDiv').innerHTML = "";
  document.getElementById('preview').innerHTML = ADDNOTE;
  createEventListener();
}

function displaySingleNote() {
  noteID = getNoteIDFromURL()
  let noteView = new SingleNoteView(noteList.getNoteByID(noteID));
  document.getElementById('preview').innerHTML = noteView.buildHTML();
  document.getElementById('createFormDiv').innerHTML = RETURNHOME;
}

function createEventListener() {
  document.getElementById('createNoteSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    noteList.addNote(document.getElementById('createNoteText').value);
    window.location.hash = '';
  }, false);
}

function getNoteIDFromURL() {
  return window.location.hash.split('/')[1]
}

(function(exports) {
  function addNotes() {
    noteList.addNote("'Ruby sucks' - Mace");
    noteList.addNote("'Ruby is cool' - Ben");
  }

  function startingWebpage() {
    document.getElementById('createFormDiv').innerHTML = CREATEFORM;
    updateNotesList()
  };

  function resetWebpage() {
    document.getElementById('preview').innerHTML = '';
  }

  addNotes();
  startingWebpage();

  exports.startingWebpage = startingWebpage;
  exports.addNotes = addNotes;
  exports.resetWebpage = resetWebpage;
})(this);


window.addEventListener('hashchange', toWhere, false);

document.getElementById('createFormSubmit').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.hash = '#notes/create'
}, false);
