"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../src/helpers");
const chai_1 = require("chai");
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Helper functions', () => {
    it('should return hello world', () => {
        const result = helpers_1.hello();
        chai_1.expect(result).to.equal('¡Hola amigo!');
    });
    it('should return hello world', () => {
        const result = helpers_1.bye();
        chai_1.expect(result).to.equal('¡Hasta luego!');
    });
});
//# sourceMappingURL=helpers.test.js.map