const url = require('@xesam/url');

class CompatURL {
    constructor(urlString, base) {
        if (base) {
            throw Error('not support base parameter');
        }
        this._href = urlString;
        this._comps = url(urlString);
    }

    get hash() {
    }

    get host() {
    }

    get hostname() {
    }

    get href() {
    }

    get origin() {
    }

    get password() {
    }

    get pathname() {
    }

    get port() {
    }

    get protocol() {
    }

    get search() {
    }

    get searchParams() {
    }

    get username() {
    }

    toString() {
    }
}

module.exports = CompatURL;