const assert = require('assert');

const CompatSearchParams = require('../src/CompatURLSearchParams');

var paramsString1 = "http://example.com/search?query=%40&age&name=xpy";
var searchParams1 = new URLSearchParams(paramsString1);

console.log(searchParams1);
console.log(searchParams1.has("query")); // false
console.log(searchParams1.has("http://example.com/search?query")); // true