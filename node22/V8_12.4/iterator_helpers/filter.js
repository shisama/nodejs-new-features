function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const result = generator().filter((i) => i % 2 !== 0);
console.log(result.next());
// { value: 1, done: false }
console.log(result.next());
// { value: 3, done: false }
console.log(result.next());
// { value: undefined, done: true }
