"use strict";
/**
 * Parse url return url in regex pattern to be able to read value from
 * e.g api/:id/:parameter -> api/:(?<id>\w+)
 * https://javascript.info/regexp-groups#named-groups
 * @param {String} url
 * @returns {String} e.g api/:(?<id>\w+)
 */
Object.defineProperty(exports, "__esModule", { value: true });
function modifyUrlToRegexPattern(url) {
    var modifiedPath = '';
    for (var i = 0; i < url.length; i++) {
        var urlChar = url[i];
        if (urlChar === ':') {
            var param = '';
            var breakIndexToStartFrom = i + 1;
            for (var j = breakIndexToStartFrom; j < url.length; j++) {
                breakIndexToStartFrom = j;
                /**
                 * check if url[j] char is part of the parameter string.
                 * e.g check if [i,d] exists in /:id else break out to next
                 */
                var hasParamChar = /\w/.test(url[j]);
                if (hasParamChar) {
                    param += url[j];
                    breakIndexToStartFrom++;
                }
                else {
                    //0 /api/:/:
                    break;
                }
            }
            modifiedPath += "(?<" + param + ">\\w+)";
            i = breakIndexToStartFrom - 1;
        }
        else {
            modifiedPath += urlChar;
        }
    }
    return modifiedPath;
}
exports.default = modifyUrlToRegexPattern;
