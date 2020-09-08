const Note = require('./lib/notes');
const Input = require('./lib/input');

const input = new Input();

if (input.isValid()) {
    const action = input.getAction();
    const payload = input.getPayload();

    const inputNote = new Note();

    inputNote.execute(action, payload);
}