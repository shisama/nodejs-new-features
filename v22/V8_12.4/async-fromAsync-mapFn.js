import { setTimeout as sleep } from "node:timers/promises";

async function* asyncIterable() {
  for (let i = 0; i < 10; i++) {
    await sleep(5000);
    yield i;
  }
}

const arr = await Array.fromAsync(asyncIterable(), (val) => val * 2);
console.log(arr);
/**
[
   0,  2,  4,  6,  8,
  10, 12, 14, 16, 18
]
 */
