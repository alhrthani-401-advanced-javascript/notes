'use strict';

const minimist = require("minimist");

class Input {
    constructor() {
        this.action = null;
        this.payload = null;

        const args = minimist(process.argv.slice(2)) || [];
        if (!("a" in args) && !("add" in args)) {
            console.error("there is no content");
        } else {
            this.action = "add";
            this.payload = args.a || args.add;
        }
    }

    getAction() {
        return this.action;
    }

    getPayload() {
        return this.payload;
    }

    isValid() {
        return !!(this.action && this.payload);
    }
}

module.exports = Input;