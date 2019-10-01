"use strict";
/**
 * File with miscelanous functions used by all app modules
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This method return an hello message
 */
function hello() {
    return {
        "text": "Hello my friend!"
    };
}
exports.hello = hello;
/**
 * This method return a bye message
 */
function bye() {
    return {
        "text": "¡Hasta luego Lucas!",
        "important": false
    };
}
exports.bye = bye;
/**
 * This method return an standard error object
 */
function errorObject(message) {
    return {
        message
    };
}
exports.errorObject = errorObject;
//# sourceMappingURL=helpers.js.map