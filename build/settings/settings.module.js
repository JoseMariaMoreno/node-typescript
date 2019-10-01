"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_module_1 = require("../abstract/abstract.module");
const settings_model_1 = __importDefault(require("./settings.model"));
const _ = __importStar(require("lodash"));
const helpers = __importStar(require("../helpers/helpers"));
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
        // GET
        self.getRouter().get(this.getPath(), (req, res) => {
            self.getSettings(req).then((settings) => {
                res.send(settings);
            }).catch(error => self.sendError(req, res, error));
        });
        // POST
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
            settings_model_1.default.find().then((settings) => {
                resolve(settings);
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
            var dataToInsert = _.get(req, 'body', null);
            if (dataToInsert) {
                settings_model_1.default.create(dataToInsert).then(data => resolve(data)).catch(error => reject(error));
            }
            else {
                reject(helpers.errorObject('no_data_to_insert'));
            }
        });
    }
}
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=settings.module.js.map