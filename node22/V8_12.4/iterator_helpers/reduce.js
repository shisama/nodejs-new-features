function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const result = generator().reduce((a, b) => a + b);
console.log(result);
// 6
