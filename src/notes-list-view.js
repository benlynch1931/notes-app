

class NoteListView {

  static buildHTML(noteList) {
    let startUl = '<ul>';
    let endUl = '</ul>';
    if(noteList.listed.length > 0) {
      let noteArr = noteList.listed.map((note, i) => {
        return `<li><a id='note${i+1}' href='#notes/${i + 1}'>${note.text.slice(0,20)}</a></li>`;
      });
      let preview = noteArr.join('');
      return `${startUl}${preview}${endUl}`;
    } else {
      return "<h3>NO NOTES AVAILABLE</h3>"
    }

  }
}
