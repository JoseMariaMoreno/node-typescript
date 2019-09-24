"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers = __importStar(require("./helpers"));
const chai_1 = require("chai");
describe('Helper functions', () => {
    it('should return hello world', () => {
        const result = helpers.hello();
        const mensaje = {
            "text": "Hello my friend!"
        };
        chai_1.expect(result).to.deep.equal(mensaje);
    });
    it('should return bye', () => {
        const result = helpers.bye();
        chai_1.expect(result).to.deep.equal({
            "important": false,
            "text": "¡Hasta luego Lucas!"
        });
    });
});
//# sourceMappingURL=helpers.test.js.map