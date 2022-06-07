const CompatURL = require('../src/CompatURL');

// console.log(new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto").toString());
// console.log(new URL('//en-US/docs', "https://developer.mozilla.org/fr-FR/toto").toString());
// console.log(new URL('https://admin:root@developer.mozilla.org:443/fr-FR/toto?name=xesam==&age=18#h_path?h_key=h_value'));
// console.log(new URL('https://admin:root@developer.mozilla.org:444/fr-FR/toto?name=xesam==&age=18#h_path?h_key=h_value'));

const u = new URL('https://admin:root@developer.mozilla.org:444/fr-FR/toto?name=xesam==&name=xpy&age=18#h_path?h_key=h_value');
console.log(u.searchParams)
console.log(u.searchParams.getAll('name'))
console.log(u.searchParams.toString())