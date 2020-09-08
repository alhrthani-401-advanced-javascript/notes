class Note {
    constructor() {
        this.data = [];
    }

    execute(action, payload) {
        switch (action) {
            case "add":
                this.add(payload);
                break;
            default:
                console.error("please provide an action --add or -a for adding");
        }
    }

    add(payload) {
        const object = { id: Math.floor(Math.random() * 100), note: payload };
        this.data.push(object);
        console.log("Your not has been added", object);
    }
}

module.exports = Note;