"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readBody = exports.processMiddleware = exports.configurePath = void 0;
/**
 * On app start, register routes to a hash table, including middlewares
 * @param {String} path api path
 * @param {Function} cb path callback
 * @param {String} method GET, POST, PUT, DELETE
 * @param {Function} middleware additional middlewares if any, identified by index,
 * @returns {Object} {path: String, method: String, method-middleware-{0}: null | Function }
 * @private
 */
var registerPath = function (path, callback, method, middleware) { return function (routeTable, middlewareIndex) {
    var _a;
    if (middlewareIndex === void 0) { middlewareIndex = 1; }
    if (!routeTable[path]) {
        routeTable[path] = {};
    }
    routeTable[path] = __assign(__assign({}, routeTable[path]), (_a = {}, _a[method] = callback, _a[method + "-middleware-" + middlewareIndex] = middleware, _a));
}; };
var configurePath = function (urlPath, middlewareCb, method, routeTable) {
    if (middlewareCb.length === 1) {
        registerPath(urlPath, middlewareCb[0], method)(routeTable);
    }
    else {
        for (var i = 0; i < middlewareCb.length; i++) {
            var nextIdx = 1; //used to register next middleware callbacks
            if (nextIdx > 0) {
                nextIdx = i;
            }
            registerPath(urlPath, middlewareCb[nextIdx], method, middlewareCb[i])(routeTable, i);
        }
    }
};
exports.configurePath = configurePath;
/**
 * Function helps to call middleware callbacks passed to application path
 * ex:
 *
 * app.get('/', () => {})
 * @param middlewares
 * @param req
 * @param res
 * @returns {Promise} Promise<boolean[] | Middleware[] | unknown[]>
 * @public
 */
var processMiddleware = function (middlewares, req, res) {
    if (!middlewares.length) {
        return new Promise(function (resolve) { return resolve([true]); });
    }
    return Promise.all(middlewares.map(function (middleware) {
        return new Promise(function (resolve, reject) {
            middleware(req, res, function (error) {
                if (error) {
                    reject(error);
                    res.statusCode = 500;
                    res.json(error);
                }
                resolve(true);
            });
        });
    }));
};
exports.processMiddleware = processMiddleware;
/**
 * Reads request data and combines chunks into human format
 * @param req
 * @returns request data
 * @throws {Error} on error
 */
var readBody = function (req) {
    return new Promise(function (resolve, reject) {
        var body = '';
        req.on('data', function (chunk) {
            body += '' + chunk;
        });
        req.on('end', function () {
            resolve(body);
        });
        req.on('error', function (err) {
            reject(err);
        });
    });
};
exports.readBody = readBody;
