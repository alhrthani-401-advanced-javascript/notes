'use strict';

function Note() {}
Note.all = [];

Note.prototype.execute = function(action, payload) {
    console.log('execute has been invoked');
    console.log('action: ', action);
    console.log('payload: ', payload);


    if (action == 'add') {
        console.log('note.all before creating new note: ', Note.all);
        const note = new Note;
        console.log('note.all after creating new note: ', Note.all);

        note.add(payload);
    }
}

Note.prototype.add = function(payload) {
    const noteOblect = { id: Note.all.length + 1, note: payload }
    console.log('note.all before pushing the note object: ', Note.all);

    Note.all.push(noteOblect);
    console.log('note.all after pushing the note object: ', Note.all);

    console.log('succesfully added the note:', noteOblect);
}




module.exports = Note;