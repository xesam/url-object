const url = require('@xesam/url');
const _URLSearchParams = require('./CompatURLSearchParams');

function valid(str) {
    return str !== '';
}

class CompatURL {
    constructor(urlString, base) {
        if (base) {
            throw Error('not support base parameter');
        }
        this._init(urlString);
    }

    _init(urlString) {
        this._comps = url(urlString);
        this._searchParams = new _URLSearchParams(this._comps['search']);
    }

    get hash() {
        return this._comps['hash'] || '';
    }

    set hash(value) {
        value = String(value);
        if (value === '') {
            this._comps['hash'] = '';
            return;
        }
        if (!value.startsWith('#')) {
            value = '#' + value
        }
        this._comps['hash'] = value;
    }

    get host() {
        if (valid(this.port)) {
            return this.hostname + ':' + this.port;
        } else {
            return this.hostname;
        }
    }

    set host(value) {
        this._comps['host'] = value;
    }

    get hostname() {
        return this._comps['hostname'] || '';
    }

    set hostname(value) {
        const [name, port] = value.split(':');
        this.hostname = name;
        this.port = port || '';
    }

    get href() {
        return this.toString();
    }

    set href(value) {
        this._init(value);
    }

    get origin() {
        throw Error('no implement');
    }

    set origin(value) {
        throw Error('no implement');
    }

    get password() {
        return this._comps['password'] || '';
    }

    set password(value) {
        this._comps['password'] = value;
    }

    get pathname() {
        return this._comps['pathname'] || '';
    }

    set pathname(value) {
        value = String(value);
        if (!value.startsWith('/')) {
            value = '/' + value
        }
        this._comps['pathname'] = value;
    }

    get port() {
        return this._comps['port'] || '';
    }

    set port(value) {
        this._comps['port'] = value;
    }

    get protocol() {
        return this._comps['protocol'] || '';
    }

    set protocol(value) {
        value = String(value);
        if (!value.endsWith(':')) {
            value = value + ":"
        }
        this._comps['protocol'] = value;
    }

    get search() {
        const searchStr = this._searchParams.toString();
        if (valid(searchStr)) {
            return '?' + searchStr;
        }
        return '';
    }

    set search(value) {
        this._searchParams = new _URLSearchParams(value);
    }

    get searchParams() {
        return this._searchParams;
    }

    set searchParams(value) {
        throw Error('no implement');
    }

    get username() {
        return this._comps['username'] || '';
    }

    set username(value) {
        this._comps['username'] = value;
    }

    toString() {
        let uStr = '';
        if (valid(this.protocol)) {
            uStr += this.protocol + '//'
        }
        const auth = this.username + ':' + this.password;
        if (auth !== ':') {
            uStr += auth + '@';
        }
        uStr += this.host;
        if (valid(this.pathname)) {
            uStr += this.pathname;
        }
        uStr += this.search;
        if (valid(this.hash)) {
            uStr += this.hash;
        }
        return uStr;
    }
}

module.exports = CompatURL;