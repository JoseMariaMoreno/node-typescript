"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const app = new app_1.App('appId', 'App description');
app.init().then().catch(app.logError);
//# sourceMappingURL=index.js.map