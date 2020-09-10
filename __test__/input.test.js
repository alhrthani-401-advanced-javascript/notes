const minimist = require("minimist");
const Input = require("../lib/input");
require('@code-fellows/supergoose');

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');


jest.mock("minimist");

describe("Input Module", () => {

    it("Testing getAction() method", () => {
        minimist.mockImplementationOnce(() => ({ a: "Ahmad Alhrthani" }));
        const input = new Input();
        expect(input.getAction()).toEqual("add");
    });

    // eslint-disable-next-line
    it("Testing getPayload() method", () => {
        minimist.mockImplementationOnce(() => ({ a: "Ahmad Alhrthani" }));
        const input = new Input();
        expect(input.getPayload()).toEqual("Ahmad Alhrthani");
    });

    it("Testing getAction() method", () => {
        minimist.mockImplementationOnce(() => ({ a: "Ahmad Alhrthani" }));
        const input = new Input();
        expect(input.getAction()).toEqual("add");
    });

    it("Testing an isValid() method", () => {
        minimist.mockImplementationOnce(() => ({ a: "Ahmad Alhrthani" }));
        const input = new Input();
        expect(input.isValid()).toBeTruthy();
    });

    it("Testing not isValid() method", () => {
        minimist.mockImplementationOnce(() => ({ a: null }));
        const input = new Input();
        expect(input.isValid()).toBeFalsy();
    });

    it("Testing no input data", () => {
        const input = new Input();
        expect(console.error).toHaveBeenCalled();
    });

});