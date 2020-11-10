let noteListView = new NoteListView();
let notes = new Notes();
notes.addNote("'Ruby sucks' - Mace");
noteListHTML = noteListView.buildHTML(notes);

let appDiv = document.getElementById('app')

appDiv.innerHTML = noteListHTML;
