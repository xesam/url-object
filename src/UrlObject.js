const _URL = typeof URL === 'function' ? URL : (typeof webkitURL === "function" ? webkitURL : require('./CompatURL'));
const _URLSearchParams = typeof URLSearchParams === 'function' ? URL : require('./CompatSearchParams');

class UrlObject {
    constructor(urlString, base = '') {
        this._url = new _URL(urlString, base);
    }

    protocol(value) {
        return this._url.protocol;
    }

    username(value) {
        return this._url.username;
    }

    password(value) {
        return this._url.password;
    }

    host(value) {
        return this._url.host;
    }

    hostname(value) {
        return this._url.hostname;
    }

    port(value) {
        return this._url.port;
    }

    pathname(value) {
        return this._url.pathname;
    }

    search(value) {
        return this._url.search;
    }

    hash(value) {
        return this._url.hash;
    }

    toString() {
        return this._url.toString();
    }
}

module.exports = UrlObject;