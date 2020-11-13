"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queryString = require("qs");
/**
 * Parse url to get all route parameters identified by a colon and identifier
 * e.g api/:id/:parameter
 * @param {String} url
 * @returns {Object} e.g {id: 1, parameter: string}
 */
function parse(url) {
    var results = url.match(/\?(?<query>.*)/);
    if (!results) {
        return {};
    }
    var stripUrl = url.split('?')[1];
    var parsed = queryString.parse(stripUrl, { ignoreQueryPrefix: true });
    return parsed;
}
exports.default = parse;
