const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([2, 4, 6, 8]);

const c = a.symmetricDifference(b);
console.log(c);
// Set(3) { 1, 3, 5 }
