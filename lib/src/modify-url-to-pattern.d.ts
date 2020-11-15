/**
 * Parse url return url in regex pattern to be able to read value from
 * e.g api/:id/:parameter -> api/:(?<id>\w+)
 * https://javascript.info/regexp-groups#named-groups
 * @param {String} url
 * @returns {String} e.g api/:(?<id>\w+)
 */
declare function modifyUrlToRegexPattern(url: string): string;
export default modifyUrlToRegexPattern;
