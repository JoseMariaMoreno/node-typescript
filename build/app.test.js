"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const abstract_app_1 = require("./abstract/abstract.app");
const app = new abstract_app_1.AbstractApp('test', 'Testbed');
describe('AbstractApp tests', () => {
    before(done => {
        done();
    });
    it('It should return a string', () => {
        const result = app.getName();
        chai_1.expect(result).to.be.string;
    });
});
//# sourceMappingURL=app.test.js.map