"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var http = __importStar(require("http"));
var server_1 = __importDefault(require("./server"));
var utils_1 = require("./utils");
/**
 * Method definitions
 * Expose useable methods to client
 * Path configurations
 */
var Methods = Object.create({});
/**
 * Get configuration for GET method request
 * example
 *
 * app.get('/', (req, res) => {}) - without additional middleware
 *
 * app.get('/',
 *  (req, res, next) => { next() },
 *  (req, res) => {res.send('')}
 * ) - with added middleware
 *
 * @param {String} path request url path
 * @param  {...Function} fns these are middleware callback funtions
 * @public
 */
Methods.get = function (path) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    utils_1.configurePath(path, fns, 'get', server_1.default.routeTable);
};
/**
 * Post configuration for POST method request
 * example
 *
 * app.post('/', (req, res) => {}) - without additional middleware
 *
 * app.post('/',
 *  (req, res, next) => { next() },
 *  (req, res) => {res.send('')}
 * ) - with added middleware
 *
 * @param {String} path request url path
 * @param  {...Function} fns these are middleware callback funtions
 * @public
 */
Methods.post = function (path) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    utils_1.configurePath(path, fns, 'post', server_1.default.routeTable);
};
/**
 * Put configuration for PUT method request
 * @param {String} path request url path
 * @param  {...Function} fns these are middleware callback funtions
 * @public
 */
Methods.put = function (path) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    utils_1.configurePath(path, fns, 'put', server_1.default.routeTable);
};
/**
 * Delete configuration for DELETE method request
 * @param {String} path request url path
 * @param  {...Function} fns these are middleware callback funtions
 * @public
 */
Methods.delete = function (path) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    utils_1.configurePath(path, fns, 'delete', server_1.default.routeTable);
};
/**
 * Listen for connections.
 *
 * A node `http.Server` is returned, with this
 * application (which is a `Function`) as its
 * callback. If you wish to create both an HTTP
 * and HTTPS server you may do so with the "http"
 * and "https" modules as shown here:
 *
 *    var http = require('http')
 *      , https = require('https')
 *      , server = require('server')
 *      , app = server();
 *
 *    http.createServer(app).listen(80);
 *
 * @return {http.Server}
 * @public
 */
Methods.listen = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var server = http.createServer(server_1.default.init);
    // eslint-disable-next-line prefer-spread
    var port = params[0], callback = params[1];
    return server.listen(port, callback);
};
module.exports = (module.exports = Methods);
