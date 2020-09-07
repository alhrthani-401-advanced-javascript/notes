'use strict';

const minimist = require('minimist');

function Input() {
    this.action = null;
    this.payload = null;
    console.log('process.argv.slice(2)', process.argv.slice(2));

    // const args = minimist(process.argv.slice(2))
    const argsArr = process.argv.slice(2);
    // if (!('a' in args)) {
    //     throw new Error('Please enter an action -a or -add');
    // } else {  }
    if (argsArr[0] == '-add' || argsArr[0] == '-a') {
        this.action = 'add';
        let tempNote = argsArr[1];
        for (var i = 2; i < argsArr.length; i++) {
            tempNote = tempNote + ' ' + argsArr[i];
        }
        this.payload = tempNote;
    } else {
        throw new Error('Please enter an action -a or -add');
    }
}

Input.prototype.getAction = function() {
    return this.action;
}
Input.prototype.getPayload = function() {
    return this.payload;
}

module.exports = Input;