const Note = require("../lib/notes");
require('@code-fellows/supergoose');

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

// eslint-disable-next-line
describe("Note Module", () => {

    const validData = {
        action: "add",
        payload: "adnan",
    };

    it("Testing valid executeAdd() method", () => {
        const note = new Note();
        note.execute(validData.action, validData.payload);
        expect(console.log).toHaveBeenCalled();
    });

    const inValidData = {
        action: "non",
        payload: null,
    };

    it("Testing unvalid executeAdd() method", () => {
        const note = new Note();
        note.execute(inValidData.action);
        expect(console.error).toHaveBeenCalled();
    });

});