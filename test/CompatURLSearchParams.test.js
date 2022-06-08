const assert = require('assert');
const CompatSearchParams = require('../src/CompatURLSearchParams');

const csp = new CompatSearchParams();
const nsp = new URLSearchParams();
assert.strictEqual(csp.get('a'), null)
assert.strictEqual(nsp.get('a'), null)

csp.append('a', '1');
csp.append('a', '2');

nsp.append('a', '1');
nsp.append('a', '2');

assert.deepStrictEqual(csp.get('a'), nsp.get('a'));
assert.deepStrictEqual(csp.getAll('a'), nsp.getAll('a'));

csp.set('a', '1');
nsp.set('a', '1');
assert.deepStrictEqual(csp.getAll('a'), ['1']);
assert.deepStrictEqual(nsp.getAll('a'), ['1']);

csp.append('b', '3');
nsp.append('b', '3');
assert.strictEqual(csp.has('b'), true);
assert.strictEqual(nsp.has('b'), true);

csp.delete('b');
nsp.delete('b');

assert.strictEqual(csp.has('b'), false);
assert.strictEqual(nsp.has('b'), false);

assert.strictEqual(csp.toString(), 'a=1')
assert.strictEqual(nsp.toString(), 'a=1')

