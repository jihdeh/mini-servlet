import * as queryString from 'qs';
/**
 * Parse url to get all route parameters identified by a colon and identifier
 * e.g api/:id/:parameter
 * @param {String} url
 * @returns {Object} e.g {id: 1, parameter: string}
 */
declare function parse(url: string): queryString.ParsedQs;
export default parse;
