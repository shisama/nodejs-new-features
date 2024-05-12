const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([6, 7, 8, 9]);
const c = new Set([5, 6, 7, 8, 9]);

console.log(a.isDisjointFrom(b));
// true
console.log(a.isDisjointFrom(c));
// false
