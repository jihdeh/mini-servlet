"use strict";
var http = require("http");
var server_1 = require("./server");
var utils_1 = require("./utils");
/**
 * Application prototype.
 */
var app = {
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
    get: function (path) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        utils_1.configurePath(path, fns, 'get', server_1.default.routeTable);
    },
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
    post: function (path) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        utils_1.configurePath(path, fns, 'post', server_1.default.routeTable);
    },
    /**
     * Put configuration for PUT method request
     * @param {String} path request url path
     * @param  {...Function} fns these are middleware callback funtions
     * @public
     */
    put: function (path) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        utils_1.configurePath(path, fns, 'put', server_1.default.routeTable);
    },
    /**
     * Delete configuration for DELETE method request
     * @param {String} path request url path
     * @param  {...Function} fns these are middleware callback funtions
     * @public
     */
    delete: function (path) {
        var fns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fns[_i - 1] = arguments[_i];
        }
        utils_1.configurePath(path, fns, 'delete', server_1.default.routeTable);
    },
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
    listen: function listen() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var server = http.createServer(server_1.default.init);
        // eslint-disable-next-line prefer-spread
        var port = params[0], callback = params[1];
        return server.listen(port, callback);
    }
};
function Application() {
    return app;
}
module.exports = module.exports = Application;
