"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_module_1 = require("./abstract/abstract.module");
/**
 * Authorization module
 * @param {string} path Path form RESTful API
 */
class AuthModule extends abstract_module_1.AbstractModule {
    constructor(parent) {
        super('auth', parent);
        this._path = '/auth';
        this.createRouter();
    }
}
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map