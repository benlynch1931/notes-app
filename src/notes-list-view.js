'use strict';

class NoteListView {

  buildHTML(noteList) {
    let startUl = '<ul>'
    let endUl = '</ul>'
    let noteArr = noteList.getNotes().map((note, i) => {
      return `<li><a class='note${i+1}'  href='#notes/${i + 1}''>${note.showNote().slice(0,20)}</a></li>`
    });
    let preview = noteArr.join('');
    return `${startUl}${preview}${endUl}`;
  }
}


// onClick='viewNote(${i + 1})'

// onClick='viewNoteForm(${i + 1})'
