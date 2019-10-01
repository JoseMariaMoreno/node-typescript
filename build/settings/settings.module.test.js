"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request-promise-native"));
const app_1 = require("../app");
describe('Settings tests', () => {
    it('Should get demo settings document', done => {
        const app = new app_1.App('testAppId', 'Test app');
        app.init().then(() => {
            request.get(app.getURL() + '/settings').then(result => {
                done();
            }).catch(error => done(error));
        }).catch(error => done(error));
    });
});
//# sourceMappingURL=settings.module.test.js.map