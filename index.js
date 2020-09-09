const Note = require('./lib/notes');
const Input = require('./lib/input');
const mongoose = require("mongoose");

require("dotenv").config();

const mongoURL = process.env.MONGOOSE_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const input = new Input();

if (input.isValid()) {
    console.log('input is valid')
    const action = input.getAction();
    console.log('action: ', action);
    const payload = input.getPayload();
    console.log('payload: ', payload);

    const inputNote = new Note();
    inputNote.execute(action, payload);
} else {
    console.log('input is Invalid')


}