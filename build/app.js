"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_app_1 = require("./abstract/abstract.app");
const auth_module_1 = require("./auth.module");
const settings_module_1 = require("./settings/settings.module");
const dotenv = require("dotenv");
dotenv.config({ debug: true, path: __dirname + '/.env' });
class App extends abstract_app_1.AbstractApp {
    constructor(id, description, options) {
        super(id, description, options);
        this.auth = new auth_module_1.AuthModule(this);
        this.settings = new settings_module_1.SettingsModule(this);
        this.logInfo('App constructor', this.id);
    }
}
exports.App = App;
const app = new App('appId', 'App description');
app.init().then(() => {
    app.initDatabase().then( dbInitializationMessage => app.logInfo( dbInitializationMessage, app.description, 'running in port', app.port));
}).catch(app.logError);
//# sourceMappingURL=app.js.map