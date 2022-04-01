const _URL = typeof URL === 'function' ? URL : (typeof webkitURL === "function" ? webkitURL : null);
const _URLSearchParams = typeof URLSearchParams === 'function' ? URL : null;

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
    //
    // searchParams(value) {
    //     return this._url.searchParams;
    // }

    hash(value) {
        return this._url.hash;
    }
    //
    // origin(value) {
    //     return this._url.origin;
    // }
    //
    // href(value) {
    //     return this._url.href;
    // }

}

module.exports = UrlObject;