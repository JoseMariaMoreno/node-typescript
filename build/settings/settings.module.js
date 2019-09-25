"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_module_1 = require("../abstract/abstract.module");
const settings_model_1 = __importDefault(require("./settings.model"));
/**
 * Settings module
 * @param {string} path Path form RESTful API
 */
class SettingsModule extends abstract_module_1.AbstractModule {
    constructor(parent) {
        super('settings', parent);
        this._path = '/settings';
        this.createRoutes();
    }
    createRoutes() {
        const self = this;
        self.createRouter();
        // GET Path
        self.getRouter().get(this.getPath(), (req, res) => {
            self.getSettings(req).then((settings) => {
                res.send(settings);
            }).catch(error => self.sendError(req, res, error));
        });
        // POST Path
        this.getRouter().post(this.getPath(), (req, res) => {
            self.newSettings(req).then((settings) => {
                self.sendResponse(req, res, settings);
            }).catch(error => self.sendError(req, res, error));
        });
    }
    /**
     * Return account settings
     * @param req
     */
    getSettings(req) {
        const self = this;
        return new Promise((resolve, reject) => {
            settings_model_1.default.find().then(result => {
                resolve(result);
            });
        });
    }
    /**
     * Create a new account settings
     * @param {express.Request} req
     */
    newSettings(req) {
        const self = this;
        return new Promise((resolve, reject) => {
            settings_model_1.default.create(req.body).then(data => resolve(data)).catch(error => reject(error));
        });
    }
}
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=settings.module.js.map