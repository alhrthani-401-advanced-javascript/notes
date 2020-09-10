'use strict'

// const NoteSchema = require("../model/notes-schema");
const Note = require('../model/notes-collection.js');
const note = new Note();

class NoteClass {
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
                console.log("please provide an action --add or -a for adding");
        }
    }

    async add(payload) {

        console.log("Your note has been added", payload);
        try {
            let noteItem = await note.create(payload);
            console.log("Note Saved in DB :::::> ", noteItem);
        } catch (error) {
            console.log('Error: ', error);

        }


    }

    // eslint-disable-next-line
    async delete(id) {
        const data = await note.delete(id);
        if (data) {
            console.log(`Deleted Note ${data._id}`); // eslint-disable-line
        } else {
            console.log(data);
        }
    }

    // eslint-disable-next-line
    async list(category) {
        // const data = await });
        // /* eslint-disable-next-line */
        // data.map((data) => {
        //     console.log(` Note: ${data.noteText} 
        //     Category: ${data.category}
        //     ID: ${data._id} `);
        // });
    }
}





module.exports = NoteClass;