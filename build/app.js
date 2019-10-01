"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_app_1 = require("./abstract/abstract.app");
const auth_module_1 = require("./auth.module");
const settings_module_1 = require("./settings/settings.module");
const dotenv = require("dotenv");
const envFile = __dirname + '/.env';
console.log(':::: Getting enviroment vars from', envFile);
dotenv.config({ debug: true, path: envFile });
class App extends abstract_app_1.AbstractApp {
    constructor(id, description, options) {
        super(id, description, options);
        this.auth = new auth_module_1.AuthModule(this);
        this.settings = new settings_module_1.SettingsModule(this);
        this.logInfo('App constructor', this.id);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map