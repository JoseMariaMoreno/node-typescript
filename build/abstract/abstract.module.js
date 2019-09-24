"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract module to be overrided for custom app functionalities
 */
class AbstractModule {
    /**
     *
     * @param {any} parent Parent module or main app
     */
    constructor(id, parent) {
        this.id = '';
        this.id = id;
        this._parent = parent;
        this._parent.getLogger().info(this.id, 'module constructor');
    }
    getParent() {
        return this._parent;
    }
    getLogger() {
        return this.getParent().getLogger();
    }
}
exports.AbstractModule = AbstractModule;
//# sourceMappingURL=abstract.module.js.map