const u1 = new URL('https://www.xpy.com:443/a/b/c/d/?n1=xesam&n1=xesam2#important');
const u2 = new URL('https://www.xpy.com:443/a/b/c/d/?n2=xesam&n2=xesam2#important');

console.log(u1.searchParams);
console.log(u2.searchParams);
u1.searchParams = u2.searchParams;

console.log(u1)