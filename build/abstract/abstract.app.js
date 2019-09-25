"use strict";
/**
 * This is the entry point for the app
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helpers = require("../helpers/helpers");
const log4js_1 = require("log4js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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
        this.express = express();
        this.options = options || {};
        this.port = this.options.port || 3333;
        this._router = express.Router();
        // Logger
        this._logger = log4js_1.getLogger();
        this._logger.level = 'trace';
        this._logger.trace('App constructor');
    }
    /**
     * This method initialize routes and start server
     */
    init() {
        const self = this;
        return new Promise((resolve, reject) => {
            try {
                self.express.use(bodyParser.urlencoded({ extended: false }));
                self.express.use(bodyParser.json());
                // Route for root api
                self.getRouter().get('/', (req, res) => {
                    res.send(helpers.hello());
                });
                self.express.use('/api/1', self.getRouter());
                // Start server
                self.express.listen(self.port, () => {
                    resolve();
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    getRouter() {
        return this._router;
    }
    /**
     * This method open a database connection
     */
    initDatabase() {
        const self = this;
        return new Promise((resolve, reject) => {
            try {
                mongoose.connect(process.env.DB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true });
                self.logTrace('Database initialized');
                resolve();
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
    /**
     * This function creates a system trace level log
     * @param param One or more string, numbers, or object to be logged
     */
    logTrace(...param) {
        this.getLogger().trace(...param);
    }
    /**
     * This function creates a system debug level log
     * @param param One or more string, numbers, or object to be logged
     */
    logDebug(...param) {
        this.getLogger().debug(...param);
    }
    /**
     * This function creates a system info level log
     * @param param One or more string, numbers, or object to be logged
     */
    logInfo(...param) {
        this.getLogger().info(...param);
    }
    /**
     * This function creates a system warning level log
     * @param param One or more string, numbers, or object to be logged
     */
    logWarn(...param) {
        this.getLogger().warn(...param);
    }
    /**
     * This function creates a system error level log
     * @param param One or more string, numbers, or object to be logged
     */
    logError(...param) {
        this.getLogger().error(...param);
    }
}
exports.AbstractApp = AbstractApp;
//# sourceMappingURL=abstract.app.js.map