class CompatURLSearchParams {
    constructor(init) {
        if (init) {
            if (typeof init === 'string') {

            } else {
                console.error('不支持的 init 类型', init);
            }
        } else {
            this._params = Object.create({});
        }
    }

    append(name, value) {
        if (!(name in this._params)) {
            this._params[name] = [];
        }
        this._params[name].push(value);
    }

    delete() {
        if (name in this._params) {
            delete this._params[name]
        }
    }

    entries() {
        throw Error('no implement');
    }

    forEach(callback, thisArg) {
        throw Error('no implement');
    }

    get(name) {
    }

    getAll(name) {
    }

    has(name) {
    }

    keys() {
        throw Error('no implement');
    }

    set(name, value) {
    }

    sort() {
        throw Error('no implement');
    }

    toString() {
    }

    values() {
        throw Error('no implement');
    }
}

module.exports = CompatURLSearchParams;