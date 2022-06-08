const assert = require('assert');
const CompatURL = require('../src/CompatURL');

const urlStr = 'https://admin:root@ahost:443/apath?k=v';

const cu = new CompatURL(urlStr);
cu.hash = 'ahash';
assert.strictEqual(cu.href, 'https://admin:root@ahost:443/apath?k=v#ahash');

cu.username = 'xesam';
assert.strictEqual(cu.href, 'https://xesam:root@ahost:443/apath?k=v#ahash');

cu.password = '18';
assert.strictEqual(cu.href, 'https://xesam:18@ahost:443/apath?k=v#ahash');

cu.searchParams.append('k', 'v2');
assert.strictEqual(cu.href, 'https://xesam:18@ahost:443/apath?k=v&k=v2#ahash');

cu.hash = '';
assert.strictEqual(cu.href, 'https://xesam:18@ahost:443/apath?k=v&k=v2');

cu.searchParams.delete('k');
assert.strictEqual(cu.href, 'https://xesam:18@ahost:443/apath');

cu.searchParams.set('k', 'v3');
assert.strictEqual(cu.href, 'https://xesam:18@ahost:443/apath?k=v3');

cu.pathname = 'new-path';
assert.strictEqual(cu.href, 'https://xesam:18@ahost:443/new-path?k=v3');

cu.hostname = 'new-host';
assert.strictEqual(cu.href, 'https://xesam:18@new-host:443/new-path?k=v3');