function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const result = generator().map((i) => i * 2);
console.log(result.next());
// { value: 2, done: false }
console.log(result.next());
// { value: 4, done: false }
console.log(result.next());
// { value: 6, done: false }
console.log(result.next());
// { value: undefined, done: true }
