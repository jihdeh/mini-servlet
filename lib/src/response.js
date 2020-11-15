"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Response Module exports.
 * @public
 */
exports.default = (function (res) {
    /**
     * Get value for header `field`.
     *
     * @param {String} field
     * @return {string | number | string[] | undefined}
     * @public
     */
    res.get = function (field) {
        return this.getHeader(field);
    };
    /**
     * Send a response.
     *
     * Examples:
     *
     *     res.send('<p>some test</p>');
     *     res.send('just text');
     *     res.send({ some: 'json' });
     *
     * @param {string|number|boolean|object} body
     * @deprecated object
     * @public
     */
    res.send = function send(body) {
        if (typeof body === 'object') {
            console.warn('res.send deprecated for json response type, please use res.json instead');
            return this.end(JSON.stringify(body));
        }
        return this.end(body);
    };
    /**
     * Send JSON response.
     *
     * Examples:
     *
     *     res.json(null);
     *     res.json({ user: 'tj' });
     *
     * @param {string|number|boolean|object} obj
     * @public
     */
    res.json = function json(data) {
        if (!this.get('Content-Type')) {
            this.setHeader('Content-Type', 'application/json');
        }
        return this.end(JSON.stringify(data));
    };
    return res;
});
