import { setTimeout as sleep } from "node:timers/promises";

async function* asyncIterable() {
  for (let i = 0; i < 10; i++) {
    await sleep(5000);
    yield i;
  }
}

const arr = [];
for await (const val of asyncIterable()) {
  arr.push(val);
}
console.log(arr);
