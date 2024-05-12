const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([5, 6, 7, 8, 9]);

const c = a.union(b);
console.log(c);
// Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
