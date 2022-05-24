const url = require('@xesam/url');

class CompatURL {
    constructor(urlString, base = '') {
        this._href = urlString;
        this._comps = url(urlString);
    }
}

module.exports = CompatURL;