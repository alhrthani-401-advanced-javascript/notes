'use strict';

const minimist = require('minimist');

function Input() {
    this.action = null;
    this.payload = null;
    console.log('process.argv: ', process.argv);
    console.log('process.argv.slice(2): ', process.argv.slice(2));

    const args = minimist(process.argv.slice(2))
    console.log('args after minimist and slice: ', args);
    if (!('add' in args) && !('a' in args)) {
        throw new Error('Please enter an action -a or -add');
    } else {
        this.action = 'add';
        this.payload = args.a || args.add;
    }
}

Input.prototype.getAction = function() {
    return this.action;
}
Input.prototype.getPayload = function() {
    return this.payload;

}


module.exports = Input;