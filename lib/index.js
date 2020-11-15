"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/* eslint-disable prefer-rest-params */
var methods_1 = __importDefault(require("./methods"));
var server_1 = __importDefault(require("./server"));
/**
 * Expose `Server()`.
 */
function Server() {
    return {
        Servlets: methods_1.default,
        Server: server_1.default.init,
    };
}
module.exports = (module.exports = Server);
