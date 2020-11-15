import * as http from 'http';

import serverConfig from './server';
import { configurePath } from './utils';

/**
 * Method definitions
 * Expose useable methods to client
 * Path configurations
 */
const Methods = Object.create({});


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
Methods.get = (path: string, ...fns: any[]) => {
  configurePath(path, fns, 'get', serverConfig.routeTable);
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
Methods.post = (path: string, ...fns: any[]) => {
  configurePath(path, fns, 'post', serverConfig.routeTable);
};


/**
 * Put configuration for PUT method request
 * @param {String} path request url path
 * @param  {...Function} fns these are middleware callback funtions
 * @public
 */
Methods.put = (path: string, ...fns: any[]) => {
  configurePath(path, fns, 'put', serverConfig.routeTable);
};


/**
 * Delete configuration for DELETE method request
 * @param {String} path request url path
 * @param  {...Function} fns these are middleware callback funtions
 * @public
 */
Methods.delete = (path: string, ...fns: any[]) => {
  configurePath(path, fns, 'delete', serverConfig.routeTable);
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

Methods.listen = (...params: any): http.Server => {
  const server = http.createServer(serverConfig.init);
  // eslint-disable-next-line prefer-spread
  const [port, callback] = params;
  return server.listen(port, callback);
};


export = (module.exports = Methods);
