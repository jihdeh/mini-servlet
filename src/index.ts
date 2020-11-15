/* eslint-disable prefer-rest-params */
import Methods from './methods';
import ServerConfig from './server';

/**
 * Expose `Server()`.
 */
function Server() {
  return {
    Servlets: Methods,
    Server: ServerConfig.init,
  };
}

export = (module.exports = Server);
