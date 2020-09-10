'use strict';
jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');
require('@code-fellows/supergoose');

const Note = require('../model/notes-collection.js');
const note = new Note();
describe('Note Model', () => {
    it('can create a new note item', () => {
        let obj = { text: 'test note number 1 ', category: 'category 1' };
        note.create(obj).then(record => {
            Object.keys(obj).forEach((key) => {
                expect(record[key]).toEqual(obj[key]);


            });
        });
    });

    it('can create a new food item', () => {
        let obj = { text: 'test note number 1 ', category: 'category 1' };
        note.create(obj).then(record => {
            console.log('record: ', record);
            // Object.keys(obj).forEach((key) => {
            //     expect(record[key]).toEqual(obj[key]);
            // });
        });
    });
})