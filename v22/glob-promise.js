import { glob } from "node:fs/promises";

for await (const entry of glob("**/*.js")) {
	console.log(entry);
}
/**
node22/esm.js
node22/glob.js
node22/test.js
...
 */
