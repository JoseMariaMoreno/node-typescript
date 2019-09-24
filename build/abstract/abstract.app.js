"use strict";
/**
 * This is the entry point for the app
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helpers = require("../helpers/helpers");
const log4js_1 = require("log4js");
/**
 * The Main Class
 * @type {string} id Unique id for the app
 * @type {string} description An app funcionality description
 */
class AbstractApp {
    /**
     * App constructor
     * @param {string} id Unique id for the app
     * @param {string} description An app funcionality description
     * @type {IAppOptions} options
     */
    constructor(id, description, options) {
        this.id = id;
        this.description = description;
        this.routes = express();
        this.options = options || {};
        this.port = this.options.port || 3333;
        // Logger
        this._logger = log4js_1.getLogger();
        this._logger.level = 'debug';
        this._logger.info('App constructor');
    }
    /**
     * This method initialize routes and start server
     */
    init() {
        const self = this;
        return new Promise((resolve, reject) => {
            try {
                // Route for root api
                self.routes.get('/', (req, res) => {
                    res.send(helpers.hello());
                });
                // Start server
                self.routes.listen(self.port, () => {
                    resolve();
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * This method returns the app name
     */
    getName() {
        return this.id + ' - ' + this.description;
    }
    /**
     * This method returns the logger module
     */
    getLogger() {
        return this._logger;
    }
    logInfo(...param) {
        this.getLogger().info(...param);
    }
}
exports.AbstractApp = AbstractApp;
//# sourceMappingURL=abstract.app.js.map