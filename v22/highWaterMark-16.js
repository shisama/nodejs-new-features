import fs from "node:fs";
import path from "node:path";
import { getDefaultHighWaterMark, setDefaultHighWaterMark } from "node:stream";

setDefaultHighWaterMark(false, 1024 * 16); // 16KiB
console.log(`getDefaultHighWaterMark: ${getDefaultHighWaterMark()}`);

const ignoreDir = path.resolve(import.meta.dirname, "./ignore");

let counter = 0;
const reader = fs.createReadStream(path.join(ignoreDir, "1mb-dummy.dat"));
const writer = fs.createWriteStream(path.join(ignoreDir, "1mb-dummy-out.dat"));

console.log(`readableHighWaterMark: ${reader.readableHighWaterMark}`);
console.log(`writableHighWaterMark: ${writer.writableHighWaterMark}`);

console.time("timer");
reader.pipe(writer);
writer.on("drain", () => {
	counter++;
});
writer.on("finish", () => {
	console.log(`drain: ${counter}`);
	console.timeEnd("timer");
});
