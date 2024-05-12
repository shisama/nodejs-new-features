import { setTimeout as sleep } from "node:timers/promises";

async function* asyncIterable() {
  for (let i = 0; i < 10; i++) {
    await sleep(5000);
    yield i;
  }
}

const arr = await Array.fromAsync(asyncIterable());
console.log(arr);
/**
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
*/
