'use strict';

const minimist = require("minimist");

class Input {
    constructor() {
        this.action = null;
        this.payload = null;

        const args = minimist(process.argv.slice(2)) || [];
        console.log(args);
        if (("a" in args) || ("add" in args)) {
            this.action = "add";
            this.payload = { text: args.a || args.add, category: args.category };
        } else if ("delete" in args) {
            this.action = "delete";
            this.payload = args.delete;
        } else if ("list" in args) {
            this.action = "list";
            this.payload = args.list;
        } else {
            console.log("Invalid command");
        }

    }
    getAction() {
        return this.action;
    }
    getPayload() {
        return this.payload;
    }
    isValid() {
        return !!(this.action && this.payload && JSON.stringify(this.payload) !== "{}");
    }
}
module.exports = Input;