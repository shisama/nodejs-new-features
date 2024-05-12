const a = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const b = new Set([2, 4, 6, 8]);
const c = new Set([0, 2, 4, 6, 8]);

console.log(a.isSupersetOf(b));
// true
console.log(a.isSupersetOf(c));
// false
