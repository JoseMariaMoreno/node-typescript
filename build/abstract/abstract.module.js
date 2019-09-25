"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
/**
 * Abstract module to be overrided for custom app functionalities
 * @type {AbstractApp} parent Parent App or Module
 */
class AbstractModule {
    /**
     * This class should be override for each module you can implement
     * @param {AbstractApp} parent Parent module or main app
     */
    constructor(id, parent) {
        this.id = '';
        this._path = '/';
        this.id = id;
        this._parent = parent;
        this._router = express.Router();
        this.logInfo('Module constructor');
    }
    /**
     * Returns the RESTful relative path
     */
    getPath() {
        return this._path;
    }
    /**
     * This method returns this module express router
     */
    getRouter() {
        return this._router;
    }
    /**
     * This method creates an Express Router and attach to parent router
     */
    createRouter() {
        this.getParent().getRouter().use(this.getRouter());
    }
    /**
     * This function returns the parent object (App or another module)
     */
    getParent() {
        return this._parent;
    }
    /**
     * This method returns the logger module
     */
    getLogger() {
        return this.getParent().getLogger();
    }
    /**
     * This function creates a system trace level log
     * @param param One or more string, numbers, or object to be logged
     */
    logTrace(...params) {
        this.getParent().logTrace(this.id + ':', ...params);
    }
    /**
     * This function creates a system debug level log
     * @param param One or more string, numbers, or object to be logged
     */
    logDebug(...params) {
        this.getParent().logDebug(this.id + ':', ...params);
    }
    /**
     * This function creates a system info level log
     * @param param One or more string, numbers, or object to be logged
     */
    logInfo(...params) {
        this.getParent().logInfo(this.id + ':', ...params);
    }
    /**
     * This function creates a system warning level log
     * @param param One or more string, numbers, or object to be logged
     */
    logWarn(...params) {
        this.getParent().logWarn(this.id + ':', ...params);
    }
    /**
     * This function creates a system error level log
     * @param param One or more string, numbers, or object to be logged
     */
    logError(...params) {
        this.getParent().logError(this.id + ':', ...params);
    }
    /**
     * This method send a 400 status error
     * @param req
     * @param res
     * @param {any} error
     */
    sendError(req, res, error) {
        res.status(400);
        res.send(error);
    }
    /**
     * This method send a 200 status and correct data
     * @param req
     * @param res
     * @param {any} data
     */
    sendResponse(req, res, data) {
        res.status(200);
        res.send(data);
    }
}
exports.AbstractModule = AbstractModule;
//# sourceMappingURL=abstract.module.js.map