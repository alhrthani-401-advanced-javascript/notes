'use strict'

const NoteSchema = require("../models/notes-schema");


class Note {
    constructor() {
        this.data = [];
    }

    execute(action, payload) {
        switch (action) {
            case "add":
                this.add(payload);
                break;
            case "delete":
                this.delete(payload);
                break;
            case "list":
                this.list(payload);
                break;
            default:
                console.error("please provide an action --add or -a for adding");
        }
    }

    async add({ noteText, category }) {
        console.log("Your not has been added", noteText);
        const newNote = new NoteSchema({ noteText, category });
        await newNote.save();
    }

    // eslint-disable-next-line
    async delete(id) {
        const data = await NoteSchema.findByIdAndDelete(id);
        if (data) {
            console.log(`Deleted Note ${data._id}`); // eslint-disable-line
        } else {
            console.log(data);
        }
    }

    // eslint-disable-next-line
    async list(category) {
        const data = await NoteSchema.find(typeof(category) === "string" ? { category } : {});
        /* eslint-disable-next-line */
        data.map((data) => {
            console.log(` Note: ${data.noteText} 
            Category: ${data.category}
            ID: ${data._id} `);
        });
    }
}

module.exports = Note;