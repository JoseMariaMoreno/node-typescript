"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_app_1 = require("./abstract/abstract.app");
const auth_module_1 = require("./auth.module");
class App extends abstract_app_1.AbstractApp {
    constructor(id, description, options) {
        super(id, description, options);
        this.auth = new auth_module_1.Auth('auth', this);
        this.logInfo('App constructor');
    }
}
const app = new App('appId', 'App description');
app.init().then(() => app._logger.info(app.description, 'running in port', app.port)).catch(console.error);
//# sourceMappingURL=app.js.map